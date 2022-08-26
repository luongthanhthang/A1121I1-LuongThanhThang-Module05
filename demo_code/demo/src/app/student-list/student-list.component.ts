import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../models/IStudent";
import {StudentDao} from "../model-dao/StudentDao";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  students: IStudent[] = StudentDao.students;
}
