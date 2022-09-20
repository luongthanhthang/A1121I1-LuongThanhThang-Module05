import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../models/ICustomer';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ICustomerType} from '../../models/ICustomerType';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  customerTypes: ICustomerType[] = [];
  customerTemp: ICustomer = {
    type: {}
  };
  page = 1;
  customerSearch: FormGroup;
  totalLength: number;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService
  ) {
  }

  ngOnInit(): void {
    this.customerSearch = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      typeId: new FormControl('')
    });
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
      this.totalLength = data.length;
    });


    this.customerTypeService.getAllCustomerType().subscribe((data) => {
      this.customerTypes = data;
    });
  }

  showInfo(customer: ICustomer) {
    console.log(customer);
    this.customerTemp = customer;
    console.log(this.customerTemp);
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

  searchCustomer() {
    console.log(this.customerSearch.value);
    this.customerService.searchCustomer(
      this.customerSearch.get('name').value,
      this.customerSearch.get('email').value,
      this.customerSearch.get('typeId').value
    ).subscribe(
      (data) => {
        this.customers = data;
        this.totalLength = data.length;
        this.page = 1;
      }
    );
  }
}
