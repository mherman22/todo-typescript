import './App.css';
import { Header } from './components/Header';
import { Todo } from './components/model/todo';
import { Search } from './components/search';
import React,{ useState } from 'react';

const App = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

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
        <Search type='input' placeholder='Search a Task' todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
