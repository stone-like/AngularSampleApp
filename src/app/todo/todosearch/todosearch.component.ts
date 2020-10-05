import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, mergeMap } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import { ToDoItem } from '../todoType';
@Component({
  selector: 'app-todosearch',
  templateUrl: './todosearch.component.html',
  styleUrls: ['./todosearch.component.scss']
})
export class TodosearchComponent implements OnInit {
  constructor(private toDoService: TodoService) {}

  public searchQuery$ = new Subject<string>();
  public searchResult: ToDoItem[];
  ngOnInit(): void {
    this.searchQuery$
      .pipe(
        filter(queryString => queryString.length > 2),
        debounceTime(500),

        mergeMap(queryString => {
          return this.toDoService.searchToDo(queryString);
        })
      )
      .subscribe(todoList => {
        this.searchResult = todoList;
        console.log(todoList);
      });
  }
  ngOnDestory() {
    if (this.searchQuery$) {
      this.searchQuery$.unsubscribe();
    }
  }
}
