import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IProduct} from "../../models/IProduct";
import {ProductService} from "../../service/product.service";
import {PackageService} from "../../service/package.service";
import {ActivatedRoute, Router} from "@angular/router";
import {identityRevealedValidator} from "../custom-validate.validator";

@Component({
  selector: 'app-package-update',
  templateUrl: './package-update.component.html',
  styleUrls: ['./package-update.component.css']
})
export class PackageUpdateComponent implements OnInit {
  packageFormUpdate: FormGroup;
  products: IProduct[] = [];
  id: number = 0;

  constructor(
    private productService: ProductService,
    private packageService: PackageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });


    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = +(param.get('id'));
      this.packageService.findById(this.id).subscribe((packageEdit) => {
        this.packageFormUpdate = new FormGroup({
          id: new FormControl(packageEdit.id),
          idPackage: new FormControl(packageEdit.idPackage, [Validators.required, Validators.pattern('LH-\\d{4}')]),
          product: new FormControl(packageEdit.product, [Validators.required]),
          quantity: new FormControl(packageEdit.quantity, [Validators.required, Validators.min(1)]),
          dateProduct: new FormControl(packageEdit.dateProduct, [Validators.required]),
          startDate: new FormControl(packageEdit.startDate, [Validators.required]),
          endDate: new FormControl(packageEdit.endDate, [Validators.required]),
        }, identityRevealedValidator);
      });
    });

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

  compareFn(c1: IProduct, c2: IProduct): boolean {
    // return (c1 && c2) ? c1.id === c2.id : c1 === c2;
    return c1.id === c2.id && c2.name === c1.name;
  }

  updatePackage() {
    this.packageService.updatePackage(this.id, this.packageFormUpdate.value).subscribe(
      () => {
      },
      (data: any) => {
      },
      () => {
        alert('Sửa thành công');
        this.router.navigateByUrl('');
      }
    );
  }

}
