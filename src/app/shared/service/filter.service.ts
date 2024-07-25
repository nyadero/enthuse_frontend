import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterStorageKey = "filters";
  private filters: { [key: string]: string } = {};


  constructor() { }


  setFilters(key:string, value: string) {
    console.log("setting filters in localstorage" + key, value);
    this.filters[key] = value;
    // store filters in local storage
    // localStorage.setItem(this.filterStorageKey, JSON.stringify(this.filters));
  }

  getFilters(){
    // retrieve filters from local storage
    // const storedFilters = localStorage.getItem(this.filterStorageKey);
    // if(storedFilters){
    //   this.filters = JSON.parse(storedFilters);
    // }
    return this.filters;
  }

  clearFilters(){
    this.filters = {};
    // clear local storage
    // localStorage.removeItem(this.filterStorageKey);
  }

  // delete filter
  deleteFilter(key: string){
    if(this.filters.hasOwnProperty(key)){
      delete this.filters[key];
    }
  }
}



// @Component({
//   selector: 'app-filter-component',
//   template: `
//     <div *ngFor="let filter of filters | keyvalue">
//       {{ filter.key }}: {{ filter.value }}
//       <button (click)="deleteFilter(filter.key)">Delete</button>
//     </div>
//     <button (click)="clearAllFilters()">Clear All</button>
//   `
// })
// export class FilterComponent {
//   filters: { [key: string]: string } = {};

//   constructor(private filterService: FilterService) {
//     this.filters = this.filterService.getFilters();
//   }

//   deleteFilter(key: string) {
//     this.filterService.deleteFilter(key);
//     this.filters = this.filterService.getFilters();
//   }

//   clearAllFilters() {
//     this.filterService.clearFilters();
//     this.filters = {};
//   }
// }



// @Injectable({
//   providedIn: 'root'
// })
// export class FilterService {
//   private filterStorageKey = "filters";
//   private filters: { [key: string]: string } = {};

//   constructor() { }

//   setFilters(key: string, value: string) {
//     console.log("setting filters in localstorage" + { key, value });
//     this.filters[key] = value;
//     this.updateLocalStorage();
//   }

//   getFilters() {
//     this.retrieveFromLocalStorage();
//     return this.filters;
//   }

//   clearFilters() {
//     this.filters = {};
//     this.updateLocalStorage();
//   }

//   deleteFilter(key: string) {
//     if (this.filters[key]) {
//       delete this.filters[key];
//       this.updateLocalStorage();
//     }
//   }

//   private updateLocalStorage() {
//     localStorage.setItem(this.filterStorageKey, JSON.stringify(this.filters));
//   }

//   private retrieveFromLocalStorage() {
//     const storedFilters = localStorage.getItem(this.filterStorageKey);
//     if (storedFilters) {
//       this.filters = JSON.parse(storedFilters);
//     }
//   }
// }

