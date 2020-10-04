import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../todoType';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  todoList: ToDoItem[];
}
