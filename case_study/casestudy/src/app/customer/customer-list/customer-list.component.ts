import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../models/ICustomer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  customerTemp: ICustomer = {};
  page = 1;

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    });
  }

  showInfo(customer: ICustomer) {
    this.customerTemp = customer;
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Xoá thành công');
        this.getAll();
      });
  }
}
