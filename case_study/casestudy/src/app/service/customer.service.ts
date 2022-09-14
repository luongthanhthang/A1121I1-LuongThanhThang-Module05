import {Injectable} from '@angular/core';
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

  getAllCustomer(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.URI);
  }

  findByIdCustomer(id: number): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.URI + '/' + id);
  }

  createCustomer(customer: ICustomer): Observable<void> {
    return this.httpClient.post<void>(this.URI, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  updateCustomer(id: number, customer: ICustomer): Observable<ICustomer> {
    return this.httpClient.put<ICustomer>(`${this.URI}/${id}`, customer);
  }

  searchCustomer(name: string, email: string, typeId: string): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.URI + '?name_like=' + name + '&email_like=' + email + '&type.id_like=' + typeId);
  }
}
