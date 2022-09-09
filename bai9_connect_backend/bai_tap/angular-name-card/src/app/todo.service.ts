import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly URI: string = 'http://localhost:3000/todos';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.URI);
  }

  create(contentTemp: string): Observable<void> {
    const todo: Todo = {
      content: contentTemp,
      complete: false
    };
    return this.httpClient.post<void>(this.URI, todo);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    this.httpClient.put<Todo>(`${this.URI}/${id}`, todo).subscribe();
    return this.httpClient.put<Todo>(`${this.URI}/${id}`, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get(this.URI + '/' + id);
  }
}
