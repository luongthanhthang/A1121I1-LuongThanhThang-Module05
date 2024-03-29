import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {

  facilityFormEdit: FormGroup;
  id: number;

  constructor(
    private facilityService: FacilityService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = +(param.get('id'));
      this.facilityService.findByIdFacility(this.id).subscribe((facilityEdit) => {
        this.facilityFormEdit = new FormGroup({
          id: new FormControl(facilityEdit.id, [Validators.required]),
          name: new FormControl(facilityEdit.name, [Validators.required]),
          area: new FormControl(facilityEdit.area, [Validators.required, Validators.min(0)]),
          cost: new FormControl(facilityEdit.cost, [Validators.required, Validators.min(0)]),
          maxPeople: new FormControl(facilityEdit.maxPeople, [Validators.required, Validators.min(0)]),
          rentType: new FormControl(facilityEdit.rentType, [Validators.required]),
          serviceType: new FormControl(facilityEdit.serviceType, [Validators.required]),
          standardRoom: new FormControl(facilityEdit.standardRoom, [Validators.required]),
          description: new FormControl(facilityEdit.description, [Validators.required]),
          poolArea: new FormControl(facilityEdit.poolArea, [Validators.required, Validators.min(0)]),
          numberOfFloor: new FormControl(facilityEdit.numberOfFloor, [Validators.required, Validators.min(0)]),
          image: new FormControl(facilityEdit.image, [Validators.required])
        });
      });
    });
  }

  editFacility() {
    this.facilityService.updateFacility(this.id, this.facilityFormEdit.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Sửa dịch vụ thành công');
        this.router.navigateByUrl('facility/list');
      }
    );
  }

}
