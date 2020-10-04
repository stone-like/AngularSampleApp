import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { TodoService } from './todo.service';
import { ToDoItem } from './todoType';
import { AppStore } from '../store/store';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todoList = this.store.pipe(select(state => state.todo.todoList)); //きちんとasyncパイプで解決しよう
  public todoForm: FormGroup;
  constructor(
    protected formBuilder: FormBuilder,
    protected toDoService: TodoService,
    protected store: Store<AppStore>
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.fetchAllToDo();
  }

  fetchAllToDo(): void {
    this.toDoService.fetchAllToDo();
  }

  createForm(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['']
    });
  }

  saveTodoItem(): void {
    const item: ToDoItem = {
      title: this.todoForm.get('title').value,
      content: this.todoForm.get('content').value
    };

    //DBに保存
    this.toDoService.createToDo(item);

    this.clearForm();
  }

  clearForm(): void {
    this.todoForm.reset();
  }
}
