import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToDoItem } from './todoType';
import { map } from 'rxjs/operators';
import axios from 'Axios';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/store';
import * as ToDoActions from './redux/todo.actions';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient, protected store: Store<AppStore>) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: null
  };
  fetchAllToDo(): void {
    this.http
      .get<ToDoItem[]>(`/api/todo`)
      .pipe(
        map(data => {
          return data;
        })
      )
      .subscribe(todoList => {
        this.store.dispatch(ToDoActions.set(todoList));
        // this._todoList$.next(todoList);
      });
  }
  createToDo(todoItem: ToDoItem): void {
    this.http
      .post<ToDoItem>('/api/todo', {
        title: todoItem.title,
        content: todoItem.content
      })
      .pipe(
        map(data => {
          return data;
        })
      )
      .subscribe(todo => {
        // const currentToDoList = this._todoList$.getValue();
        // const newToDoList = currentToDoList.concat(todo);
        this.store.dispatch(ToDoActions.add(todo));

        // this._todoList$.next(newToDoList);
      });
  }
  deleteToDo(toDoId: number): void {
    this.http.delete(`/api/todo/${toDoId}`).subscribe(() => {
      // const currentToDoList = this._todoList$.getValue();
      // const newToDoList = currentToDoList.filter(todo => {
      //   return todo.id !== toDoId;
      // });
      this.store.dispatch(ToDoActions.del(toDoId));

      // this._todoList$.next(newToDoList);
    });
  }
}
