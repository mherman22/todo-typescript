import React from 'react'
import SearchButton from './button'
import './styles.css'

interface SearchInputProps {
    type:string;
    placeholder:string;
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const Search = ({type, placeholder,todo, handleAdd,setTodo}:SearchInputProps,) => {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input type={type} value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder={placeholder} className='search__input'/>
        <SearchButton buttonType="submit">Go</SearchButton>
    </form>
  )
}
