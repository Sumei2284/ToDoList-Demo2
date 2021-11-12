import React, { useState, useEffect } from "react";
import './App.css';
//import Form to get the part of input item, submit button and status object
import Form from './components/Form';
//import todolist to get the part of todo list items
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState(""); // create a State variable named "inputText" and set the init value is "" 
  const [todos, setTodos] = useState([]); // create a State variable named "todos" and set the init value is a empty array to store all todo items.
  const [status, setStatus] = useState("all"); // create a State variable named "status" and set the init value is "all"
  const [filteredTodos, setfilteredTodos] = useState([]); // create a State variable named "filteredTodos" and set the init value is a empty array to store filtered todo items.

  //Use Effect
  useEffect(() => {
    filterHandler(); /* create and updeate components*/
  }, [todos,status]);/*this array store states and props which is the condition to activate the effect */
  
  /*
    Function: when user is typing new texts or changing the option (2 situations to run this function), 
    then set the components of filteredTodos based on the attribute of status 
  */
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

  /*
    In react, it will return a html object to render
    We can pass one label component once by <labelName />
    In label component, set "parameter name" = {State or useState variable}
  */
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