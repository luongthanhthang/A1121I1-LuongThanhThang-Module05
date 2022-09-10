import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomer} from '../../models/ICustomer';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormEdit: FormGroup;
  id: number;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = +(param.get('id'));
      this.customerService.findByIdCustomer(this.id).subscribe((customerEdit) => {
        this.customerFormEdit = new FormGroup({
          id: new FormControl(customerEdit.id, [Validators.required]),
          type: new FormControl(customerEdit.type, [Validators.required]),
          name: new FormControl(customerEdit.name, [Validators.required]),
          birthday: new FormControl(customerEdit.birthday, Validators.required),
          gender: new FormControl(customerEdit.gender, [Validators.required]),
          idCard: new FormControl(customerEdit.idCard, [Validators.required, Validators.pattern('^\\d{9}|\\d{12}$')]),
          phone: new FormControl(customerEdit.phone, [Validators.required, Validators.pattern('^090(\\d{7})|091(\\d{7})|\\(84\\)\\+90(\\d{7})|\\(84\\)\\+91(\\d{7})$')]),
          email: new FormControl(customerEdit.email, [Validators.required, Validators.email]),
          address: new FormControl(customerEdit.address, [Validators.required])
        });
      });
    });
  }

  editCustomer() {
    this.customerService.updateCustomer(this.id, this.customerFormEdit.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Sửa khách hàng thành công');
        this.router.navigateByUrl('customer/list');
      }
    );
  }
}
