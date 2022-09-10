import {Component, OnInit} from '@angular/core';
import {IFacility} from '../../models/IFacility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  page = 1;
  facilities: IFacility[] = [];
  facilityDelete: IFacility = {};

  constructor(
    private facilityService: FacilityService
  ) {
  }

  ngOnInit(): void {
    this.facilityService.getAllFacility().subscribe((data) => {
      this.facilities = data;
    });
  }

  showInfo(facility: IFacility) {
    this.facilityDelete = facility;
  }

  delete(id: number) {
    this.facilityService.deleteFacility(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Xoá thành công');
        this.ngOnInit();
      });
  }
}
