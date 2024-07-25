import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { CustomHttpResponse } from '../shared/interface/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) {}

  getFile(url: string): Observable<Blob> {
    return this.httpClient.get(url, { responseType: 'blob' });
  }

  // listing files
  getListingFiles(listingId: string): Observable<CustomHttpResponse>{
     return this.httpClient.get<CustomHttpResponse>(`${environment.api}/files/listing/${listingId}`);
  } 
}
