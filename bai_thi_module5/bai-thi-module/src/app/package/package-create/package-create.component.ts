import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IProduct} from "../../models/IProduct";
import {ProductService} from "../../service/product.service";
import {PackageService} from "../../service/package.service";
import {Router} from "@angular/router";
import {identityRevealedValidator} from "../custom-validate.validator";
import {formatDate} from "@angular/common";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.css']
})
export class PackageCreateComponent implements OnInit {
  packageForm: FormGroup;
  products: IProduct[] = [];
  // date1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');

  constructor(
    private productService: ProductService,
    private packageService: PackageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });

    this.packageForm = new FormGroup({
      idPackage: new FormControl(null, [Validators.required, Validators.pattern('LH-\\d{4}')]),
      product: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      dateProduct: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    }, identityRevealedValidator);

    // +++ test validate backend++++
    // this.packageForm = new FormGroup({
    //   idPackage: new FormControl(),
    //   product: new FormControl(),
    //   quantity: new FormControl(),
    //   dateProduct: new FormControl(),
    //   startDate: new FormControl(),
    //   endDate: new FormControl(),
    // });
  }

  createPackage() {
    this.packageService.create(this.packageForm.value).subscribe(
      () => {
      },
      (data: any) => {
      },
      () => {
        alert('Thêm mới thành công');
        this.router.navigateByUrl('');
      }
    );
  }

}
