import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { UserInterface } from 'src/app/shared/interface/user';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
     private router: Router,
      private userService:UserService, 
      private title: Title
    ){}

  selectedTab!: string;
  userName!:string;
  user!: UserInterface;

  ngOnInit(): void {
    // this.title.setTitle(this.user.name);
    const snapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    this.selectedTab = snapshot.queryParams["tab"] || "profile";

     this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params["tab"] || "profile";
    });

     this.activatedRoute.paramMap.subscribe((paramsMap) => {
      let userId = paramsMap.get("id");
      if (userId) {
          this.fetchUser(userId);
      }
    });

    }

  changeTab(tab: string) {
    this.selectedTab = tab;
      this.router.navigate(["/app/profile", this.userName], {
      relativeTo: this.activatedRoute,
      queryParams: { tab: tab },
      queryParamsHandling: "merge"
    })
  }

  fetchUser(userId: string){
    this.userService.fetchProfile(userId).subscribe(
      (data) => {
        this.user = data.data;
        console.log({data}); 
        this.title.setTitle(this.user.name);
      }, 
      (error) => {
        console.log(error);
      }
    )
  }

}
