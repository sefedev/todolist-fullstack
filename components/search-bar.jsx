"use client";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { handleCreateTodo } from "../utils/helper";
import loadingManager from "../state/loading";

const SearchBar = ({onTodoCreated}) => {
  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = async () => {
    if (todoText.trim() === "") return
    loadingManager.setLoading(true)
    try {
    const newTodo =  await handleCreateTodo(todoText);
    onTodoCreated(newTodo)
      setTodoText("");
    } catch (error) {
      console.error("Error Creating todo", error);
    } finally {
      loadingManager.setLoading(false)

    }
  };

  return (
    <div className="flex max-w-2xl mx-auto w-full">
      <input
        type="text"
        className="border-gray-600 flex-1 border"
        onChange={handleChange}
        value={todoText}
      />
      <button
        className="bg-blue-500 cursor-pointer hover:bg-blue-400  flex gap-1 text-white py-2 px-4"
        onClick={handleAddTodo}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default SearchBar;
