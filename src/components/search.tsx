import React, { useRef } from 'react'
import Button from './button'
import './styles.css'

interface SearchInputProps {
    type:string;
    placeholder:string;
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const Search = ({type, placeholder,todo,handleAdd,setTodo}:SearchInputProps,) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }}>
        <input ref={inputRef} type={type} value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder={placeholder} className='search__input'/>
        <Button buttonType="submit">Go</Button>
    </form>
  )
}
