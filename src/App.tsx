import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import InputList from "./components/InputList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);


  const data = ()=>{
      fetch('https://cs-cdn.deviceatlas.com/dacs.js').then((response)=>{
        console.log(response);
        
      }).catch((err)=>{
        console.log(err);

      })
  }

  useEffect(()=>{
    data()
  },[])
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  

  return (
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <InputList todos={todos} setTodos={setTodos}/>
        
      </div>
  );
};

export default App;