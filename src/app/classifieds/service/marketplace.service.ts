import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {



  constructor(private httpClient: HttpClient) { }

  // post a new vehicle listing
  addNewListing(listing: any): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>("http://127.0.0.1:8080/api/v1/classifieds/new-vehicle", listing);
  }

  // post a new motorbike listing
  addMotorbikeListing(listing: any): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/classifieds/new-motorbike`, listing);
  }

  // get all listings
  getAllListings(currentPage: number): Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`http://127.0.0.1:8080/api/v1/classifieds?pageNumber=${currentPage}`);
  }

  // listing by id
  getListing(listingId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/${listingId}`);
  }

  // get all user listings
  getUserListings(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>("http://127.0.0.1:8080/api/v1/classifieds/user-listings");
  }

  // delete listing
  deleteListing(listingId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/classifieds/${listingId}`);
  }

  // delete all listings
  deleteAllUserListings():Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/classifieds/delete-user-listings`);
  }
  
  // get vehicle listings
  vehiclesListing(currentPage: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/type/vehicle?pageNumber=${currentPage}`);
  }

  // get motorbike listings
  motorbikeListings(currentPage: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/type/motorbike?pageNumber=${currentPage}`);
  }

   // get bicycle listings
   bicycleListings(currentPage: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/type/bicycle?pageNumber=${currentPage}`);
  }

   // get boats listings
   boatsListings(currentPage: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/type/boat?pageNumber=${currentPage}`);
  }

   // get airplane listings
  airplaneListings(currentPage: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/type/airplane?pageNumber=${currentPage}`);
  }

   // get spare parts listings
   sparePartsListings(currentPage: number): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/type/spares?pageNumber=${currentPage}`);
  }

  // edit vehicle listing
  updateListing(listingId: string, listing: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/classifieds/update/${listingId}`, listing);
  }

  // edit motorbike listing
  updateMotorbikeListing(listingId: string, listing: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/classifieds/update-motorbike/${listingId}`, listing);
  }

  // search listings by name or location
  listingsByNameOrLocation(params: any): Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/search?`, {params});
  }

  
  getFile(listingId: number, fileId: number): Observable<any> {
    const fileUrl = `${environment.api}/${listingId}/files/${fileId}`;
    return this.httpClient.get(fileUrl, { responseType: 'blob' });
    // Use responseType 'blob' to handle file data
  }

  // search and filter vehicle listings
  searchVehicleListings(params: any, currentPage: number): Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/vehicles-search?pageNumber=${currentPage}`, {params});
  }

  // search and filter motorbike listings
   searchMotorbikeListings(params: any, currentPage: number): Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/motorbikes-search?pageNumber=${currentPage}`, {params});
  }

  // mark listing as sold or not
  markListingAsSold(listingId: string,  listingSold: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/classifieds/is-sold/${listingId}`, listingSold);
  }

  // get listing numbers
  getListingNumbers(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/classifieds/numbers`)
  }

}

