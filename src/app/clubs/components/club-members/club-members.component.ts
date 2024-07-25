import { Component, Input, OnInit } from '@angular/core';
import { ClubsService } from '../../service/clubs.service';

@Component({
  selector: 'app-club-members',
  templateUrl: './club-members.component.html',
  styleUrls: ['./club-members.component.css']
})
export class ClubMembersComponent implements OnInit{
  @Input() clubId!: string;
  members: any[] = [];
  currentPage: number= 0;

constructor(private clubsService: ClubsService){}

ngOnInit(): void {
  this.clubsService.clubMembers(this.clubId, this.currentPage).subscribe(
    (data) => {
      console.log({data});
      this.members = data.data.content;
    },
    (error) => {
      
    }
  )
}
}
