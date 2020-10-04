import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { ToDoItem } from '../../todoType';

@Component({
  selector: 'todolistitem',
  templateUrl: './todolistitem.component.html',
  styleUrls: ['./todolistitem.component.scss']
})
export class TodolistitemComponent implements OnInit {
  constructor(protected toDoService: TodoService) {}

  ngOnInit(): void {
    console.log('init', this.item.id);
  }

  @Input()
  item: ToDoItem;

  //このdeleteItemをtodoListItemにつくって@outputをしてもいいのかもしれないけど、それだとDBのdeleteとlistのdeleteが違うmethodで起きてしまうので相当筋悪そう、NgRxかBehaiviorSubjectでComponent間共通化にした方がよさそう
  deleteItem(id: number): void {
    this.toDoService.deleteToDo(id);
  }
}
