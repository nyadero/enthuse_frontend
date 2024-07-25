import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarketplaceService } from '../../service/marketplace.service';
import { Listing } from '../../interface/listing';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  httpResponse!: CustomHttpResponse;
 
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  updateFilter(key: string, value: any) {
       this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {...this.activatedRoute.snapshot.queryParams, [key] : value},
      queryParamsHandling: 'merge',
      replaceUrl: true // replace current url without adding a new entry to history
    });
  }

}
