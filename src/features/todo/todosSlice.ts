import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TodosState {
  todosList: [{ content: string, done: boolean}]
}

const initialState: TodosState = {
  todosList: [{ content: "test1", done: false}]
}


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      let valueToPush :{content: string, done: boolean} = { content: action.payload, done: false};
      state.todosList.push(valueToPush);
    },
  },
});

export const { addTodo } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.todo.value)`
export const selectTodos = (state: RootState) => state.TodosState.todosList;

export default todosSlice.reducer;
