"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import TodoModal from "./todo-modal";
import { PencilIcon, TrashIcon } from "lucide-react";
import { handleDeleteTodo } from "../utils/helper";

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);
  const [openModal, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [editIndex, setEditIndex] = useState(0);

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  const handleTodoCreated = (newTodo) => {

    if(newTodo)setTodoList((prev) => [...prev, newTodo]);
  };

  const handleTodoDelete = async (index) => {
    try {
      await handleDeleteTodo(index);
      setTodoList((prev) => prev.filter((todo) => todo.id !== index));
    } catch (error) {
      console.error("Error Deleting todo", error);
    }
  };

  const handleEditTodo = (index) => {
    setOpenModal(true);
    const newEditTodo = todoList.filter((todo) => todo.id === index);
    setEditTodo(newEditTodo[0].todo);
    setEditIndex(index);
  };

  return (
    <>
      <SearchBar onTodoCreated={handleTodoCreated}/>
      <div className="p-4 mt-4 border border-gray-600 rounded max-w-2xl mx-auto">
        {todoList.length <= 0 ? (
          <p className="text-center text-gray-500/30 text-xs font-extralight ">
            No Todo Added at the moment
          </p>
        ) : (
          <ul>
            {todoList.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center p-4 bg-gray-200 text-gray-900 mb-1 rounded"
              >
                <span className="flex-1">{todo?.todo}</span>
                <div className="flex gap-2.5">
                  <button
                    className="bg-red-500 p-2 shadow-lg mr-2 hover:bg-red-300 cursor-pointer rounded-full"
                    onClick={() => handleTodoDelete(todo.id)}
                  >
                    <TrashIcon className="text-white size-3" />
                  </button>
                  <button
                    className="bg-black hover:bg-gray-600 cursor-pointer p-2 rounded-full"
                    onClick={() => handleEditTodo(todo.id)}
                  >
                    <PencilIcon className="text-white size-3" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <TodoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        todoList={todoList}
        setTodoList={setTodoList}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        onTodoCreated={handleTodoCreated}
        editIndex={editIndex}
      />
    </>
  );
};

export default TodoList;
