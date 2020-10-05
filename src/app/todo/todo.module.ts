import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistitemComponent } from './todolist/todolistitem/todolistitem.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent, TodolistComponent, TodolistitemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TodoRoutingModule,
    SharedModule
    // MatListModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatButtonModule,
    // MatDividerModule
  ],
  exports: [TodoComponent]
})
export class TodoModule {}
