import React from 'react'
import { Todo } from './model/todo';
import './styles.css';
import { TodoTile } from './todotile';

interface TodoListProps {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({todos, setTodos}:TodoListProps) => {
  return (
    <div className='todo__list'>
        {
            todos.map((todo) => (
                <TodoTile todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
            ))
        }
    </div>
  )
}
