import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from 'src/app/shared/interface/user';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  profiles: UserInterface[] = [];
  isLoading: boolean = true;

  constructor(private userService:UserService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
     this.activatedRoute.queryParams.subscribe(params => {
      if ((!params['tab'] || params['tab'] === 'profiles') && !params['query']) {
        this.userService.allUsers().subscribe(
      (data) => {
        this.profiles = data.data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
      }
      if (params['tab'] === 'profiles' && params['query']) {
        this.userService.searchUsers(params['query']).subscribe(
          (data) => {
            console.log({data});
            this.profiles = data.data;
          }
        )
      }
    });
   
  }

}
