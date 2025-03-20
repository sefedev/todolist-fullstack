'use client'
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react'

const SearchBar = ({todoList, setTodoList}) => {
    const [todo, setTodo] = useState("");
    const handleChange = (e) => {
        setTodo(e.target.value);
      };
    
      const handleAddTodo = () => {
        if (todo.trim() !== "") {
          setTodoList([...todoList, todo]);
        }
        setTodo("");
      };
  return (
    
    <div className="flex max-w-2xl mx-auto w-full">
    <input
      type="text"
      className="border-gray-600 flex-1 border"
      onChange={handleChange}
      value={todo}
    />
    <button
      className="bg-blue-500 cursor-pointer hover:bg-blue-400  flex gap-1 text-white py-2 px-4"
      onClick={handleAddTodo}
    >
      <PlusIcon />
    </button>
  </div>
  )
}

export default SearchBar
