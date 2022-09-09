import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../models/ICustomer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  tempId: number;
  tempName: string;
  page = 1;

  constructor(
    private customerService: CustomerService
  ) {
    this.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(function(data) {
      this.customers = data;
      console.log(this.customers);
    });
  }

  showInfo(id: number, name: string) {
    this.tempId = id;
    this.tempName = name;
  }
}
