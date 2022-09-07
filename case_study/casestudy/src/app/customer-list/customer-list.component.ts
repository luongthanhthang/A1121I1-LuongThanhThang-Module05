import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../models/ICustomer';
import {CustomerDAO} from '../data/CustomerDAO';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = CustomerDAO.customers;
  tempId: number;
  tempName: string;
  page = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  showInfo(id: number, name: string) {
    this.tempId = id;
    this.tempName = name;
  }

}
