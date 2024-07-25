import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

   constructor(private httpClient: HttpClient) { }

  // add a new business page
  addBusinessPage(business: any): Observable<CustomHttpResponse> {
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/business`, business);
  }

  // get all business pages
  allBusinessPages(): Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/business`);
  }

  // get business page by id
  businessPage(businessId: string): Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/business/${businessId}`);
  }

  // update business page
  updateBusinessPage(businessId: string, business: any): Observable<CustomHttpResponse> {
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/business/${businessId}`, business);
  }

  // update business coverpic
  updateBusinessCoverpic(businessId: string, coverpic: any): Observable<CustomHttpResponse> {
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/business/upload-coverpic/${businessId}`, coverpic);
  }

  // update business logo
  updateBusinessLogo(businessId: string, logo: any): Observable<CustomHttpResponse> {
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/business/upload-logo/${businessId}`, logo);
  }

  // get loggedin user pages
  userBusinessPages(): Observable<CustomHttpResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/business/user-business`);
  }

  // all posts by a business
  businessPosts(businessId: string): Observable<CustomHttpResponse>{
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/posts/business-posts/${businessId}`);
  }

  // all business classifieds
  businessClassifieds(businessId:string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/marketplace/classifieds/${businessId}`);
  }

  // delete business page
  deleteBusinessPage(businessId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/business/delete-business/${businessId}`);
  }

  // add business service
  addBusinessService(businessId: string, service: any): Observable<CustomHttpResponse>{
    return this.httpClient.post<CustomHttpResponse>(`${environment.api}/business/add-service/${businessId}`, service);
  }

  // edit business service
  editBusinessService(businessId: string, serviceId: string, service: any): Observable<CustomHttpResponse>{
    return this.httpClient.put<CustomHttpResponse>(`${environment.api}/business/edit-service/${businessId}/${serviceId}`, service);
  }

  // delete business service
  deleteBusinessService(businessId: string, serviceId: string): Observable<CustomHttpResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/business/delete-service/${businessId}/${serviceId}`);
  }

  // get all managers and admins
  getBusinessAdministrators(businessId: string): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/business/admins/${businessId}`);
  }

  // search users to make managers
  searchUsers(params:any): Observable<CustomHttpResponse>{
    return this.httpClient.get<CustomHttpResponse>(`${environment.api}/business/search-users`, {params});
  }

  // add Manager
  addManager(businessId: string, userId: string): Observable<CustomHttpResponse>{
     return this.httpClient.post<CustomHttpResponse>(`${environment.api}/business/add-admin/${businessId}/${userId}`, null);
  }

  // remove admin
  removeManager(userId: string): Observable<CustomHttpResponse>{
     return this.httpClient.delete<CustomHttpResponse>(`${environment.api}/business/remove-admin/${userId}`);
  }

}
