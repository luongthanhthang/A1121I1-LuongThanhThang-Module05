import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentDao} from "../model-dao/StudentDao";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  studentForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      mark: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    })
  }

  createStudent() {
    // StudentDao.createStudent(this.studentForm.value);
    // this.studentForm.reset();
    this.studentService.createStudent(this.studentForm.value);
    this.router.navigateByUrl("");
  }
}
