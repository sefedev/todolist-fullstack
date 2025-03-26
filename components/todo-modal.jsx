'use clien'

import { PencilIcon, X } from "lucide-react";
import React, { useState } from "react";
import { handleUpdateTodo } from "../utils/helper";

const TodoModal = ({
  openModal,
  setOpenModal,
  todoList,
  setTodoList,
  editTodo,
  setEditTodo,
  editIndex,
  onTodoCreated
}) => {
  const [editError, setEditError] = useState(false);

  const onEditTodo = async() => {
    if (editTodo === "") return setEditError(true);

    try {
      const updatedTodo = await handleUpdateTodo(editIndex, {todo: editTodo})
      const newTodoList = todoList.map((todo) => {
        if (todo.id === editIndex) {
          return {...todo, ...updatedTodo};
        }
        return todo;
      });
      setTodoList(newTodoList);
      setOpenModal(false);
    } catch (error) {
      
    }
   
  };
  if (!openModal) return null;
  return (
    <div className="fixed inset-0 bg-gray-600/40 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded text-black max-w-2xl">
        <h2 className="text-center font-bold text-2xl">Edit Todo</h2>
        <input
          type="text"
          className="border-gray-600 flex-1 border"
          onChange={(e) => setEditTodo(e.target.value)}
          value={editTodo}
        />
        {editError && (
          <p className="text-red-500 text-xs font-extralight">
            Todo cannot be empty
          </p>
        )}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-black cursor-pointer hover:bg-gray-700 items-center  flex gap-2 text-white py-2 px-4 text-sm"
            onClick={onEditTodo}
          >
            <PencilIcon className="size-4" />
            <span>Edit</span>
          </button>
          <button
            className="bg-red-500 cursor-pointer hover:bg-red-400 items-center  flex gap-1 text-white py-2 px-4 text-sm"
            onClick={() => setOpenModal(false)}
          >
            <X className="size-4" />
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
