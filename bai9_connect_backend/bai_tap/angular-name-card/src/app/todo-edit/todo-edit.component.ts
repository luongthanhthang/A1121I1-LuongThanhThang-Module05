import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoEdit: Todo = {};
  contentEdit = new FormControl();
  idEdit: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.idEdit = parseInt(param.get('id'));
      this.todoService.findById(this.idEdit).subscribe(
        (data) => {
          this.todoEdit = data;
        });
    });
  }

  edit() {
    const value = this.contentEdit.value;
    const todo: Todo = {
      id: this.idEdit,
      content: value,
      complete: false
    };
    this.todoService.update(todo.id, todo);
    this.router.navigateByUrl('');
  }
}
