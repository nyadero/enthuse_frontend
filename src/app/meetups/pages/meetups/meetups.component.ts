import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../../service/meetups.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit{
  meetups: any[] = [];

  constructor(
    private meetupsService: MeetupsService
  ){}


  ngOnInit(): void {
   this.meetupsService.allMeetups().subscribe(
    (data)=>{
      this.meetups = data.data;
    }
   )
  }

}
