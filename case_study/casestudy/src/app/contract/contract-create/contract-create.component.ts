import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';
import {ICustomer} from '../../models/ICustomer';
import {IFacility} from '../../models/IFacility';
import {identityRevealedValidator} from './custom-validate.validator';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  customers: ICustomer[] = [];
  facilities: IFacility[] = [];
  date1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');

  constructor(
    private contractService: ContractService,
    private customerService: CustomerService,
    private facilityService: FacilityService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    console.log(this.date1);

    this.customerService.getAllCustomer().subscribe((data) => {
      this.customers = data;
    });

    this.facilityService.getAllFacility().subscribe((data) => {
      this.facilities = data;
    });

    this.contractForm = new FormGroup({
      startDate: new FormControl(this.date1, [Validators.required]),
      endDate: new FormControl(this.date1, [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)]),
      totalMoney: new FormControl('', [Validators.required, Validators.min(0)]),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required])
    }, identityRevealedValidator);
  }

  createContract() {
    this.contractService.createContract(this.contractForm.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Thêm mới hợp đồng thành công');
        this.router.navigateByUrl('contract/list');
      }
    );

  }
}
