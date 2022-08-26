import { Component, OnInit } from '@angular/core';
import {IStudent} from "../../models/IStudent";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  student: IStudent = {
    id: 1,
    address: 'đà nẵng',
    avatar: 'https://i.pinimg.com/236x/cf/c1/af/cfc1af3b5ab61b8da0065d0dace258cf.jpg',
    mark: 9,
    name: 'Thắng'
  }

  changeMark(target: any) {
    this.student.mark = target.value;
  }

}