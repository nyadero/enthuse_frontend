import { Component, OnInit } from '@angular/core';
import { CustomHttpResponse } from '../../interface/httpResponse';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit{
  httpResponse!: CustomHttpResponse;
  forums: Array<any> = [];
   constructor(){}

  ngOnInit(): void {
  
  }
}
