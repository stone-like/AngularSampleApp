import { createAction, union } from '@ngrx/store';
import { ToDoItem } from '../todoType';

export const set = createAction('[TODO] set', (payload: ToDoItem[]) => ({
  payload
}));

export const add = createAction('[TODO} add', (payload: ToDoItem) => ({
  payload
}));

export const del = createAction('[TODO] delete', (payload: number) => ({
  payload
}));

const actions = union({
  set,
  add,
  del
});

export type toDoActionsUnion = typeof actions;
