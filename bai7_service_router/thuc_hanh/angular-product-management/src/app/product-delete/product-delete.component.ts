import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productDelete: Product = {};

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = parseInt(param.get('id'));
      this.productDelete = this.productService.findById(id);
    });
  }

  close() {
    this.router.navigateByUrl('/product/list');
  }

  delete() {
    this.productService.delete(this.productDelete.id);
    this.router.navigateByUrl('/product/list');
    alert('Xoá thành công ' + this.productDelete.name);
  }
}
