import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {ICustomerType} from '../../models/ICustomerType';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: ICustomerType[] = [];

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAllCustomerType().subscribe((data) => {
      this.customerTypes = data;
    });

    this.customerForm = new FormGroup({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', Validators.required),
      // birthday: new FormControl('', [Validators.required, Validators.pattern('^(?:(?:31(/)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(/)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(/)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(/)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^090(\\d{7})|091(\\d{7})|\\(84\\)\\+90(\\d{7})|\\(84\\)\\+91(\\d{7})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required])
    });
  }

  createCustomer() {
    this.customerService.createCustomer(this.customerForm.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Thêm mới khách hàng thành công');
        this.router.navigateByUrl('customer/list');
      }
    );
  }
}
