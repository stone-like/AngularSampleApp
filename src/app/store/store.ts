import { State as todoState } from '../todo/redux/todo.reducer';

export type AppStore = {
  todo: todoState;
};
