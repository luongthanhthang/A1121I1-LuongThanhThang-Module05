import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPackage} from "../models/IPackage";
import {IProduct} from "../models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  // readonly URI: string = 'http://localhost:3000/packages';
  readonly URI: string = 'http://localhost:8080/api/packages';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(page: number, size: number): Observable<IPackage[]> {
    return this.httpClient.get<IPackage[]>(this.URI + '/' + page + '/' + size);
  }

  findById(id: number): Observable<IPackage> {
    return this.httpClient.get<IPackage>(this.URI + '/' + id);
  }

  create(packages: IPackage): Observable<void> {
    return this.httpClient.post<void>(this.URI, packages);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  // search(name: string, endDate: string, dateProduct1: string, dateProduct2: string): Observable<IPackage[]> {
  //   if (dateProduct1 == '' || dateProduct2 == '') {
  //     return this.httpClient.get<IPackage[]>(this.URI + '?product.id_like=' + name + '&endDate_like=' + endDate);
  //   }
  //   return this.httpClient.get<IPackage[]>(this.URI + '?product.id_like=' + name + '&endDate_like=' + endDate + '&dateProduct_gte=' + dateProduct1 + '&dateProduct_lte=' + dateProduct2);
  // }

  search(page: number, size: number, name: string, endDate: string, productDate1: string, productDate2: string): Observable<IPackage[]> {
    if (productDate1 == '' || productDate2 == '') {
      return this.httpClient.get<IPackage[]>(this.URI + '/' + page + '/' + size
        + '?product_id=' + name + '&endDate=' + endDate);
    }
    return this.httpClient.get<IPackage[]>(this.URI + '/' + page + '/' + size
      + '?product_id=' + name + '&endDate=' + endDate
      + '&dateProduct1=' + productDate1 + '&dateProduct2=' + productDate2);
  }

  updatePackage(id: number, aPackage: IPackage): Observable<void> {
    return this.httpClient.put<void>(this.URI + "/" + id, aPackage);
  }


}
