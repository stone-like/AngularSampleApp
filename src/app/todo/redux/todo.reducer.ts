import { createReducer, on } from '@ngrx/store';
import { ToDoItem } from '../todoType';
import { toDoActionsUnion, set, add, del } from './todo.actions';
export type State = {
  todoList: ToDoItem[];
};
export const initialState: State = {
  todoList: []
};

export function reducer(state = initialState, action: toDoActionsUnion): State {
  switch (action.type) {
    case set.type: {
      return {
        ...state,
        todoList: action.payload
      };
    }
    case add.type: {
      const newList = state.todoList.concat(action.payload);

      return {
        ...state,
        todoList: newList
      };
    }

    case del.type: {
      const newList = state.todoList.filter(todo => {
        return todo.id !== action.payload;
      });

      return {
        ...state,
        todoList: newList
      };
    }
    default: {
      return state;
    }
  }
}
