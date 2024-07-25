import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
constructor(
  private filterService: FilterService, 
  private router: Router,
   private activatedRoute: ActivatedRoute,
   private location: Location
  ) {}

updateSearchQuery(key: string, value: any) {
     this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {[key] : value},
      queryParamsHandling: 'merge',
      replaceUrl: true // replace current url without adding a new entry to history
    });
}
   
}
