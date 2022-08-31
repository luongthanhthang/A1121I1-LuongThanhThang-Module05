import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../../models/IStudent";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() studentDetail: IStudent;

  constructor() {
  }

  ngOnInit(): void {
  }


  changeMark(target: any) {
    this.studentDetail.mark = target.value;
  }

}
