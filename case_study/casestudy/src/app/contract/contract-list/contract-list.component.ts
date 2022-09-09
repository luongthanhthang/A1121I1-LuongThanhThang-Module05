import {Component, OnInit} from '@angular/core';
import {IContract} from '../../models/IContract';

import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: IContract[] = [];
  page = 1;

  constructor(
    private contractService: ContractService
  ) {
  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(function(data) {
      console.log(data);
      this.contracts = data;
    });
  }

}
