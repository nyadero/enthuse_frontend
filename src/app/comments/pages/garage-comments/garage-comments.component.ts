import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-garage-comments',
  templateUrl: './garage-comments.component.html',
  styleUrls: ['./garage-comments.component.css']
})
export class GarageCommentsComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const garageId = params.get("garageId");
      if(garageId){
        this.garageId = garageId;
      }
    })
  }

  isLoading:boolean = true;
  garageId: any;
 
}
