import React, { useState, useEffect } from "react";
import './App.css';
import Form from './components/Form.js';
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  //Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos,status]);
  //Functions
  //when typing new strings or changing the option (2 situations to run this function)
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'in progress':
          setfilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setfilteredTodos(todos);
          break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;