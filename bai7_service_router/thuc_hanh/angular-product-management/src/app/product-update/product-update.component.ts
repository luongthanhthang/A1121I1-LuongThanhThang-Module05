import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productUpdate: Product;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = parseInt(param.get('id'));
      this.productUpdate = this.productService.findById(id);
    });

    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
  }

  update() {
    const product = this.productForm.value;
    this.productService.update(product);
    this.router.navigateByUrl("/product/list");
    alert("Cập nhật thành công")
  }

}
