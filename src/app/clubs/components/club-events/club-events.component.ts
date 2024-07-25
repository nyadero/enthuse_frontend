import { Component, Input, OnInit } from '@angular/core';
import { ClubsService } from '../../service/clubs.service';

@Component({
  selector: 'app-club-events',
  templateUrl: './club-events.component.html',
  styleUrls: ['./club-events.component.css']
})
export class ClubEventsComponent implements OnInit{
  events: any[] = [];
  currentPage: number = 0;
  @Input() clubId!: string;

  constructor(private clubsService: ClubsService){}

  ngOnInit(): void {
    this.clubsService.clubEvents(this.clubId, this.currentPage).subscribe(
      (data) => {
        console.log({data});
        this.events = data.data.content
      }
    )
  }

}
