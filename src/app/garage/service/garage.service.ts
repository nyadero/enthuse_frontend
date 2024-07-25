import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private httpClient: HttpClient) { }

  // add new garage vehicle
  newGarageVehicle(formData:any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/garage/new-garage-vehicle`, formData);
  }

  // add new garage motorbike
   newGarageMotorbike(formData:any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/garage/new-garage-motorbike`, formData);
  }

  // get garage by id
  getGarage(garageId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/garage/${garageId}`);
  }
  // update garage vehicle
  // update garage motorbike

  // get user garages
  getUserGarages(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/garage/user-garage`);
  }

  // get all garage
  getAllGarages(): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/garages`);
  }
   
  // garages by userId
  garagesByUserId(userId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/garage/user/${userId}`);
  }

  // delete garage
  deleteGarage(garageId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/garage/delete/${garageId}`);
  }

  // search garage
  searchGarage(query: string):  Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/garage/search?query=${query}`);
  }

  // join club
  joinClub(garageId: string, clubId: string): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/garage/join-club/${garageId}`, clubId);
  }

  // fetch user liked garges
  userLikedGarages(pageNumber: number):   Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/garage/user-liked?pageNumber=${pageNumber}`);
  }



}
