import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Comer perro', completed: false },
  { text: 'Comprar cebolla', completed: false },
  { text: 'Darle un beso a Gloria', completed: true }
];

function App() {
  const [todos,setTodos]=React.useState(defaultTodos);
  const [searchValue,setSearchValue]=React.useState('');

  const completedTodos=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  let searchedTodos=[];

  if (!searchValue.length>=1) {
    searchedTodos=todos;      
  } else {
    searchedTodos=todos.filter(todo=>{
      const todoText=todo.text.toLocaleLowerCase();
      const searchText=searchValue.toLocaleLowerCase();
       return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
