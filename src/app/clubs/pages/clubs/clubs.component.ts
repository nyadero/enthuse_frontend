import { Component, OnInit } from '@angular/core';
import { ClubInterface } from '../../interface/club.interface';
import { ClubsService } from '../../service/clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: ClubInterface[] = [];
  isLoading : boolean = true;

  constructor(private clubsService: ClubsService){}
  
  ngOnInit(): void {
    this.clubsService.getclubs().subscribe(
      (data) => {
        console.log({data});
        this.clubs = data.data.content;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }

}
