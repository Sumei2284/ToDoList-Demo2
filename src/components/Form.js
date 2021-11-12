import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //Function: get the value entered in the input component
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  /*
    Function: when click the submit button, excute 3 things below:
    1. prevent it to reload web page when the event happens
    2. get input text and set some init values as attributes in an array
    3. clear the inpur text
  */
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, //展開運算子
      { text: inputText, completed: false, id: Math.random() * 1000 } //設定屬性的初始值
    ]);
    setInputText("");
  };
  //Function: get whatthe user select the option (all, in progress or completed)
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input 
        value={inputText}
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
      />
      <button 
        onClick={submitTodoHandler} 
        className="todo-button" 
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select 
          onChange={statusHandler} 
          name="todos" 
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="in progress">In Progress</option>
        </select>
      </div>
    </form>
  );
};

export default Form;