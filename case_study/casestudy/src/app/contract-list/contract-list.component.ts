import {Component, OnInit} from '@angular/core';
import {IContract} from '../models/IContract';
import {IContractDAO} from '../data/IContractDAO';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: IContract[] = IContractDAO.contacts;
  page = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}
