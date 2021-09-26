import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import { CreateTodoButton } from "./CreateTodoButton";

// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Comer perro', completed: false },
  { text: 'Comprar cebolla', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {/* <TodoList>*/}
        {/* {todos.map(todo => (
          <TodoItem />
        ))} */}
      {/*</TodoList> */}
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
