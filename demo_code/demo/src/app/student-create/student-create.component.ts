import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IStudent} from "../../models/IStudent";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: IStudent;
  @Output() studentCreate = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  createStudent(id: string, name: string, mark: string, avatar: string, address: string) {
    this.student = {
      id: parseInt(id),
      name: name,
      mark: parseInt(mark),
      avatar: avatar,
      address: address
    }
    this.studentCreate.emit(this.student);
  }
}
