import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  selectTodos,
} from './todosSlice';
// @ts-ignore
import styled from 'styled-components'

const Container = styled.div`
  & {
    ul {
      list-style: none;
      margin: 20px 0;
      padding: 0;
      li {
        position: relative;
        margin-left: 20px;
        padding: 0 0 10px 10px;
        input {
          border: 2px solid #056674;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
    button {
      background: #66bfbf;
      border: none;
      padding: 10px;
      color: #FFF;
      border-radius: 5px;
    }
    input {
      padding: 8px;
      box-sizing: border-box;
    }
  }
`

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoItem, addTodoItem] = useState('New task');
  const mapTodos = todos.map((todo) => {
    return (
    <li key={todo.content}>
      <input type="checkbox" checked={todo.done}/>{todo.content}
    </li>
    )
  });

  return (
    <Container>
      <ul>{mapTodos}</ul>
      <div>
        <input
          value={todoItem}
          onChange={e => addTodoItem(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(addTodo(String(todoItem)))
          }
        >
          Add Todo
        </button>
      </div>
    </Container>
  );
}
