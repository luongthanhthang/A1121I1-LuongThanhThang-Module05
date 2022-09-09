import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../models/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly URI: string = 'http://localhost:3000/customers';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.URI);
  }

  findById(id: number): Observable<ICustomer> {
    return this.httpClient.get(this.URI + '/' + id);
  }

  create(customer: ICustomer): Observable<void> {
    return this.httpClient.post<void>(this.URI, customer);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  update(id: number, customer: ICustomer): Observable<ICustomer> {
    this.httpClient.put<ICustomer>(`${this.URI}/${id}`, customer).subscribe();
    return this.httpClient.put<ICustomer>(`${this.URI}/${id}`, customer);
  }
}
