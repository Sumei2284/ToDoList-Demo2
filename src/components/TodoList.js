import React from "react";
//import components from todo.js
import Todo from "./Todo";

/*
  Create a todolist item which contains 5 components below: 
  key: the private key for list object, and usually use id as the key. 
  Actually in Todo.js, we do not need to do anything on key.
  todo: the 
  setTodos:
  todos:
  text:
*/
const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
    <div className="todo-container">
      <ul className="todo-list">
          {filteredTodos.map(todo => (
            <Todo 
                setTodos={setTodos} 
                todos={todos} 
                key={todo.id} 
                text={todo.text} 
                todo={todo}
            />
          ))}
      </ul>
    </div>
    )
}

export default TodoList;