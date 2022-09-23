import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // readonly URI: string = 'http://localhost:3000/products';
  readonly URI: string = 'http://localhost:8080/api/products';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<IProduct[]> {
    console.log(this.httpClient.get<IProduct[]>(this.URI).subscribe())
    return this.httpClient.get<IProduct[]>(this.URI);
  }

  findById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.URI + '/' + id);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.URI, product);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }
}
