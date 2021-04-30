import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./MyComponents/Header";
import Todo from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  let onDelete = (todo) => {
    console.log("i'm onDelete ", todo);

    setTodo(
      todos.filter((e) => {
        return e !== todo;
      }));

    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("title and description is ", title, desc);
    let srno;
    if(todos.length===0){
      srno = 0;
    }
    else{
      srno = todos[todos.length - 1].srno + 1;
    }
    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    };

    setTodo([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  
  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
 localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <Header title="My to-do List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todo todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
