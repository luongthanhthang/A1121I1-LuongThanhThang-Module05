import {Component, OnInit} from '@angular/core';
import {IFacility} from '../../models/IFacility';
import {FacilityDAO} from '../../data/FacilityDAO';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  page = 1;
  facilities: IFacility[] = FacilityDAO.facilities;
  tempId: number;
  tempName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  showInfo(id: number, name: string) {
    this.tempId = id;
    this.tempName = name;
  }
}
