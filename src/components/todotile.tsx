import React from 'react'
import './styles.css'
import { Todo } from './model/todo';
import { MdDone } from 'react-icons/md';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface TodoTileProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoTile = ({ todo, todos, setTodos }: TodoTileProps) => {

    const handleDone = (id: number) => {
        setTodos(todos.map(t => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter(t => (t.id !== id)));
    }

    const handleEdit = (id:number) => {
        
    }

    return (
        <form className='todo__tile'>
            {
                todo.isDone ? (
                    <s className="todo__tile--text">{todo.todo}</s>
                ) : (
                    <span className="todo__tile--text">{todo.todo}</span>
                )
            }
            <div className="tile--icons">
                <span className="icon"><AiFillEdit onClick={() => handleEdit(todo.id)} /></span>
                <span className="icon"><AiFillDelete onClick={() => handleDelete(todo.id)} /></span>
                <span className="icon"><MdDone onClick={() => handleDone(todo.id)} /></span>
            </div>
        </form>
    )
}
