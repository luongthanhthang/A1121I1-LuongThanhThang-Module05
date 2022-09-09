import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../todo.service';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(
    private todoService: TodoService
  ) {
    this.todoService.getAllTodo().subscribe(data => this.todos = data);
  }

  ngOnInit() {
    this.todoService.getAllTodo().subscribe(data => this.todos = data);
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }


  // change() {
  //   const value = this.content.value;
  //   const todo: Todo = {
  //     id: _id++,
  //     content: value,
  //     complete: false
  //   };
  //   this.todos.push(todo);
  //   this.content.reset();
  // }

  change() {
    const value = this.content.value;
    this.todoService.create(value).subscribe((data) => {
      },
      () => {
      },
      () => {
        this.ngOnInit();
        this.content.reset();
      });
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe((data) => {
      },
      () => {
      },
      () => {
        this.ngOnInit();
      });
  }

  edit(id: number, todo: Todo) {
    this.todoService.update(id, todo).subscribe((data) => {
      },
      () => {
      },
      () => {
        this.ngOnInit();
      });
  }
}
