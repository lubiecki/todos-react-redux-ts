import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TodosState {
  todosList: [{ id: number, content: string, done: boolean}],
  actualIndex: number;
}

const initialState: TodosState = {
  todosList: [{ id: 0, content: "test1", done: false}],
  actualIndex: 0
}


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      let valueToPush :{id: number, content: string, done: boolean} = { id: state.actualIndex + 1, content: action.payload, done: false};
      state.todosList.push(valueToPush);
      state.actualIndex = state.actualIndex + 1;
    },
    setDone: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      let todoToDone = state.todosList.findIndex(x => x.id === action.payload);
      state.todosList[todoToDone].done = !state.todosList[todoToDone].done
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      let todoToRemove = state.todosList.findIndex(x => x.id === action.payload);
      state.todosList.splice(todoToRemove,1);
    },
  },
});

export const { addTodo, setDone, removeTodo } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.todo.value)`
export const selectTodos = (state: RootState) => state.TodosState.todosList;

export default todosSlice.reducer;
