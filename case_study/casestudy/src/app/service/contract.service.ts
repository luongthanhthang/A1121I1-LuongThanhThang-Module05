import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IContract} from '../models/IContract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  readonly URI: string = 'http://localhost:3000/contacts';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllContract(): Observable<IContract[]> {
    return this.httpClient.get<IContract[]>(this.URI);
  }

  findByIdContract(id: number): Observable<IContract> {
    return this.httpClient.get(this.URI + '/' + id);
  }

  createContract(contract: IContract): Observable<void> {
    return this.httpClient.post<void>(this.URI, contract);
  }

  deleteContract(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  updateContract(id: number, contract: IContract): Observable<IContract> {
    this.httpClient.put<IContract>(`${this.URI}/${id}`, contract).subscribe();
    return this.httpClient.put<IContract>(`${this.URI}/${id}`, contract);
  }
}


