import './App.css';
import { Header } from './components/Header';
import { Todo } from './components/model/todo';
import { Search } from './components/search';
import React,{ useEffect, useState } from 'react';
import { TodoList } from './components/todolist';

const App = () => {

  const [todos, setTodos] = useState<Todo[]>(()=> {
    const saved = localStorage.getItem("todos")
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState<string>("");
    // useEffect to run once the component mounts
    useEffect(() => {
      // localstorage only support storing strings as keys and values
      // - therfore we cannot store arrays and objects without converting the object
      // into a string first. JSON.stringify will convert the object into a JSON string
      // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
      localStorage.setItem("todos", JSON.stringify(todos));
      // add the todos as a dependancy because we want to update the
      // localstorage anytime the todos state changes
    }, [todos]);



  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setTodo("");
    }
  }
  console.log(todos);

  return (
    <div className='App'>
        <Header title='this is my title'>ToDo App</Header>
        <Search type='input' placeholder='Create a New Todo Item' todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
