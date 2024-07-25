import { Component, Input, OnInit } from '@angular/core';
import { GarageInterface } from 'src/app/garage/interface/garage-interface';
import { ClubsService } from '../../service/clubs.service';

@Component({
  selector: 'app-club-garage',
  templateUrl: './club-garage.component.html',
  styleUrls: ['./club-garage.component.css']
})
export class ClubGarageComponent implements OnInit{
  currentPage: number = 0;
  garages: GarageInterface[] = [];
  @Input() clubId!: string;

  constructor(private clubsService: ClubsService){}

  ngOnInit(): void {
    this.clubsService.clubGarageItems(this.clubId, this.currentPage).subscribe(
      (data) => {
        this.garages = data.data.content;
      }
    )
  }

}
