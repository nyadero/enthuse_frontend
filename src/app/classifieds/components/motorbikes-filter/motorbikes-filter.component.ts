import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { motorbikeManufacturersEnum } from '../../enums/motorbike-manufacturers.enum';
import { FilterService } from 'src/app/shared/service/filter.service';

@Component({
  selector: 'app-motorbikes-filter',
  templateUrl: './motorbikes-filter.component.html',
  styleUrls: ['./motorbikes-filter.component.css']
})
export class MotorbikesFilterComponent implements OnInit {
  scrollPosition: number = 0;
  transmission_types = null;
  listing_owners = null;
  fueltypes = null;
  @Output() emitUpdatedQueries = new EventEmitter<any>();
  filters: any;
   queryParams: any = {}
motorbikeManufacturers = Object.values(motorbikeManufacturersEnum);
motorbikeCategories=null;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private filterService: FilterService,
      private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.filters = this.filterService.getFilters();
      this.queryParams = this.activatedRoute.snapshot.queryParams;
    console.log({queryParams: this.queryParams}); 
  }

    updateFilter(key: string, value: any) {
       this.filterService.setFilters(key, value)
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {...this.activatedRoute.snapshot.queryParams, [key]: value},
        queryParamsHandling: 'merge',
        replaceUrl: true // replace current url without adding a new entry to history
      }). then(r => true);
  }

  emitQueryParams(key: string, value: any) {
    const filter = { key, value };
    console.log({filter});
    this.emitUpdatedQueries.emit(filter);
  }


  clearFilters() {
    this.filterService.clearFilters()
  }

   
}


