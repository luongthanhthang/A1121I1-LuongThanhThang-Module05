import {Injectable} from '@angular/core';
import {IStudent} from "../../models/IStudent";
import {StudentDao} from "../model-dao/StudentDao";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  createStudent(student: IStudent) {
    StudentDao.students.unshift(student);
  }

  findById(id: number) {
    return StudentDao.students.find((stud) => stud.id == id);
  }

  getAllStudent() {
    return StudentDao.students;
  }
}
