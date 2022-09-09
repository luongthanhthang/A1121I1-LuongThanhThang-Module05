import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFacility} from '../models/IFacility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  readonly URI: string = 'http://localhost:3000/facilities';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<IFacility[]> {
    return this.httpClient.get<IFacility[]>(this.URI);
  }

  findById(id: number): Observable<IFacility> {
    return this.httpClient.get(this.URI + '/' + id);
  }

  create(facility: IFacility): Observable<void> {
    return this.httpClient.post<void>(this.URI, facility);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  update(id: number, facility: IFacility): Observable<IFacility> {
    this.httpClient.put<IFacility>(`${this.URI}/${id}`, facility).subscribe();
    return this.httpClient.put<IFacility>(`${this.URI}/${id}`, facility);
  }
}
