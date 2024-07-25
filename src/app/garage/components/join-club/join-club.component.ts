import { Component, OnInit } from '@angular/core';
import { ClubInterface } from 'src/app/clubs/interface/club.interface';
import { ClubsService } from 'src/app/clubs/service/clubs.service';
import { GarageService } from '../../service/garage.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-join-club',
  templateUrl: './join-club.component.html',
  styleUrls: ['./join-club.component.css']
})
export class JoinClubComponent implements OnInit {

  clubs: ClubInterface[] = [];
  isLoading: boolean = true;
  garageId: any;
  searchClubForm!: FormGroup

  constructor(
    private clubsService: ClubsService,
    private garageService: GarageService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // subscribe and get garage id from route
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const garageId = params.get("garageId");
      if (garageId) {
        this.garageId = garageId;
      }
    })
    this.fetchClubs();

    // instantiate form
    this.searchClubForm = this.formBuilder.group({
      query: ["", [Validators.required]]
    })
  }

  // fetch clubs
  fetchClubs(){
  this.clubsService.getclubs().subscribe(
    (data) => {
      console.log({ data });
      this.clubs = data.data;
      this.isLoading = false;
    },
    (error) => {
      console.log(error);
      this.isLoading = false;
    }
  )}

  joinClub(clubId: string) {
    this.garageService.joinClub(this.garageId, clubId).subscribe(
      (data) => {
         this.notificationService.showSnackbar(data.message, data.status)
      },
      (error) => {
         this.notificationService.showSnackbar(error.message, "ERROR")
      }
    )
  }

  searchClubs() {
    this.clubsService.searchclubs(this.searchClubForm.value.query).subscribe(
      (data) => {
        console.log({data});
        
        this.clubs = data.data;
     },
     (error) => {
        this.notificationService.showSnackbar(error.message, "ERROR")
     }
    )
  }

}
