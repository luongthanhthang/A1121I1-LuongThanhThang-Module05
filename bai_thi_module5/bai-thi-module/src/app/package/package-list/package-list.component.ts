import {Component, OnInit} from '@angular/core';
import {IPackage} from "../../models/IPackage";
import {IProduct} from "../../models/IProduct";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {PackageService} from "../../service/package.service";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  packages: IPackage[] = [];
  products: IProduct[] = [];
  packageTemp: IPackage = {
    product: {}
  };

  totalPageList: number[] = [];

  page: number = 0;
  size: number = 2;
  totalPages: number

  productIdSearch: string = '';
  endDateSearch: string = '';
  dateProduct1Search: string = '';
  dateProduct2Search: string = '';

  packageSearch: FormGroup;

  constructor(
    private productService: ProductService,
    private packageService: PackageService
  ) {
  }

  ngOnInit(): void {
    this.packageSearch = new FormGroup({
      productId: new FormControl(''),
      endDate: new FormControl('')
      , dateProduct1: new FormControl(''),
      dateProduct2: new FormControl('')
    });

    this.getAll();
  }

  getAll() {
    this.packageService.getAll(this.page, this.size).subscribe((data: any) => {
        this.packages = data.content;

        this.totalPageList = [];
        this.totalPages = data.totalPages;

        for (let i = 0; i < this.totalPages; i++) {
          this.totalPageList.push(i);
        }
      },
      () => {
        this.page--;
        this.getAll();
      });

    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
  }

  showInfo(packages: IPackage) {
    this.packageTemp = packages;
  }

  delete(id: number) {
    this.packageService.delete(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.getAll();
        alert('Xoá thành công');
      });
  }

  searchPackage() {
    if (this.page != 0) {
      this.page = 0;
    }

    this.productIdSearch = this.packageSearch.get('productId').value;
    this.endDateSearch = this.packageSearch.get('endDate').value;
    this.dateProduct1Search = this.packageSearch.get('dateProduct1').value;
    this.dateProduct2Search = this.packageSearch.get('dateProduct2').value;

    this.packageService.search(
      this.page,
      this.size,
      this.productIdSearch,
      this.endDateSearch,
      this.dateProduct1Search,
      this.dateProduct2Search
    ).subscribe(
      (data: any) => {
        this.packages = data.content;

        this.totalPageList = [];
        this.totalPages = data.totalPages;

        for (let i = 0; i < this.totalPages; i++) {
          this.totalPageList.push(i);
        }
      }
    );
  }

  searchPackagePagination() {
    this.packageService.search(
      this.page,
      this.size,
      this.productIdSearch,
      this.endDateSearch,
      this.dateProduct1Search,
      this.dateProduct2Search
    ).subscribe(
      (data: any) => {
        this.packages = data.content;

        this.totalPageList = [];
        this.totalPages = data.totalPages;

        for (let i = 0; i < this.totalPages; i++) {
          this.totalPageList.push(i);
        }
      },
      () => {
      }
    );
  }


  getPreviousPage() {
    this.page--;
    if (this.packageSearch.get('productId').value != "" || this.packageSearch.get('endDate').value != "") {
      this.searchPackagePagination();
    } else {
      this.getAll();
    }
  }

  getNextPage() {
    this.page++;
    if (this.packageSearch.get('productId').value != "" || this.packageSearch.get('endDate').value != "") {
      this.searchPackagePagination();
    } else {
      this.getAll();
    }
  }

  getNumberPage(pageNumber: number) {
    this.page = pageNumber;
    if (this.packageSearch.get('productId').value != "" || this.packageSearch.get('endDate').value != "") {
      this.searchPackagePagination();
    } else {
      this.getAll();
    }
  }
}
