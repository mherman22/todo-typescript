import React, { useEffect, useRef, useState } from 'react'
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
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [editMode])
    

    const handleDone = (id: number) => {
        setTodos(todos.map(t => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(t => (t.id !== id)));
    }

    const handleEdit = (e:React.FormEvent,id: number) => {
        e.preventDefault();
        setTodos(todos.map((t) => (t.id === id ? {...t,todo:editTodo}:t)));
        setEditMode(false);
    }

    return (
        <form className='todo__tile' onSubmit={(e) => handleEdit(e, todo.id)}>

            {
                editMode ? (
                    <input ref={inputRef} type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="edit--todo" />
                ) : (

                    todo.isDone ? (
                        <s className="todo__tile--text">{todo.todo}</s>
                    ) : (
                        <span className="todo__tile--text">{todo.todo}</span>
                    )

                )
            }

            <div className="tile--icons">
                <span className="icon"><AiFillEdit onClick={() => {
                    if (!editMode && !todo.isDone) {
                        setEditMode(!editMode);
                    }
                }
                } /></span>
                <span className="icon"><AiFillDelete onClick={() => handleDelete(todo.id)} /></span>
                <span className="icon"><MdDone onClick={() => handleDone(todo.id)} /></span>
            </div>
        </form>
    )
}
