import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  selectTodos,
  setDone,
  removeTodo
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        &.checked span {
          text-decoration: line-through;
          color: #555;
        }
        input {
          appearance: none;
          border: 2px solid #056674;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          cursor: pointer;
          margin-right: 5px;
          &:checked {
            background: #056674;
          }
          &:active, &:focus {
            outline: none;
          }
        }
        button {
          background: none;
          border: none;
          color: #ff4b5c;
          font-weight: 800;
          cursor: pointer;
          transition: 200ms ease;
          &:active, &:focus, &:hover {
            color: inherit;
            border: none;
            outline: none;
          }
        }
      }
    }
    .newTodo {
      button {
        background: #66bfbf;
        border: none;
        padding: 10px;
        color: #FFF;
        border-radius: 5px;
        cursor: pointer;
        transition: 200ms ease;
        &:active, &:focus, &:hover {
          color: inherit;
          border: none;
          outline: none;
        }
      }
      input {
        padding: 8px;
        box-sizing: border-box;
      }
    }
  }
`

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoItem, addTodoItem] = useState('New task');
  const mapTodos = todos.map((todo) => {
    return (
    <li key={todo.id} className={todo.done ? "checked" : ""}>
      <div>
        <input type="checkbox" defaultChecked={todo.done} onClick={() => dispatch(setDone(Number(todo.id)))}/>
        <span>{todo.content}</span>
      </div>
      <button onClick={() => dispatch(removeTodo(Number(todo.id)))}>x</button>
    </li>
    )
  });

  return (
    <Container>
      <ul>{mapTodos}</ul>
      <div className="newTodo">
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
