import React, { useState ,useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //USE EFFECT
  useEffect(() => {
    console.log("hey");
  }, [todo]);
  //Functions
  const [inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the app starts up
  useEffect(() => {
    getLocalTodos();
  }, []);
  //USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

 //Functions
 const filterHandler = () => {
   switch (status) {
     case "completed":
       setFilteredTodos(todos.filter((todo) => todo.completed
       break;
     case "uncompleted":
       setFilteredTodos(todos.filter((todo) => todo.completed
       break;
    default:
      setFilteredTodos(todos);
      break;
   }
 };

 //Save to Local
 const saveLocalTodos = () => {
   localStorage.setItem("todos", JSON.stringify(todos));
 };
const get LocalTodos =() => {
   if(localStorage.getItems('todos') === null) {
   localStorage.setItem("todos", JSON stringify([]))
 } else {
   let todoLocal = JSON.parse(localStorage.getItem('todos'));
   console.log(todoLocal);
 }
};

  return(
    <div className="App">
     <header>
       <h1>Adrian's Todo List</h1></header> 
       {inputText}<br/> 
         <Form
         inputText={inputText}
         todos={todos}
         setTodos={setTodos}
         setInputText={setInputText}
         setStatus={setStatus}
         />
         <TodoList
         filteredTodos={filteredTodos}
         setTodos={setTodos}
         todos={todos}
         />
        <TodoList setTodos={setTodos} todos={todos}/>
      </div>
  );
}

export default App;
