import React, {useCallback, useRef, useState} from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {TodoProvider} from "./components/TodoContext";

const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
`;

const App = () => {
  /*const [todos, setTodos] = useState([
      {
          id: 1,
          text: "할 일 1",
          checked: true,
      },
      {
          id: 2,
          text: "할 일 2",
          checked: true,
      },
      {
          id: 3,
          text: "할 일 3",
          checked: false,
      },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
      (text) => {
          const todo = {
              id: nextId.current,
              text,
              checked: false,
          };
          setTodos(todos.concat(todo));
          nextId.current += 1;
      },
      [todos],
  );

  const onRemove = useCallback(
      (id) => {
          setTodos(todos.filter((todo) => todo.id !== id));
      },
      [todos],
  );

  const onToggle = useCallback(
      (id) => {
          setTodos(
              todos.map(
                  (todo) =>
                      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
              ),
          );
      },
      [todos],
  );*/

  return (
    // <>
        <TodoProvider>
          <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    // </>
  );
}

export default App;
