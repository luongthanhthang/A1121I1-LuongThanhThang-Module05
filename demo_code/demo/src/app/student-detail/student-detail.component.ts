import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../../models/IStudent";
import {StudentService} from "../service/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  // @Input() studentDetail: IStudent;
  // listStudent: IStudent[] = [];
  detailStudent: IStudent;

  constructor(
    private studentService: StudentService,
    private activeRouter: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = parseInt(param.get('id'));
      this.detailStudent = this.studentService.findById(id);
    })
  }


  // changeMark(target: any) {
  //   this.studentDetail.mark = target.value;
  // }

}
