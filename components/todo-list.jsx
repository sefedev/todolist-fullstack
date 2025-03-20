'use client'
import React, { useState } from "react";
import SearchBar from "./search-bar";
import TodoModal from "./todo-modal";
import { PencilIcon, TrashIcon } from "lucide-react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [editIndex, setEditIndex] = useState(0);

  const handleTodoDelete = (index) => {
    const newTodo = todoList.filter((_, i) => i !== index);
    setTodoList(newTodo);
  };

  const handleEditTodo = (index) => {
    setOpenModal(true);
    const newEditTodo = todoList.filter((_, i) => i === index);
    setEditTodo(newEditTodo[0]);
    setEditIndex(index);
  };

  return (
    <>
      <SearchBar todoList={todoList} setTodoList={setTodoList} />
      <div className="p-4 mt-4 border border-gray-600 rounded max-w-2xl mx-auto">
        {todoList.length <= 0 ? (
          <p className="text-center text-gray-500/30 text-xs font-extralight ">
            No Todo Added at the moment
          </p>
        ) : (
          <ul>
            {todoList.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-300 text-gray-900 mb-1 rounded"
              >
                <span className="flex-1">{todo}</span>
                <div>
                  <button
                    className="bg-red-500 p-2 mr-2 hover:bg-red-300 cursor-pointer rounded-full"
                    onClick={() => handleTodoDelete(index)}
                  >
                    <TrashIcon className="text-white size-3" />
                  </button>
                  <button
                    className="bg-black hover:bg-gray-600 cursor-pointer p-2 rounded-full"
                    onClick={() => handleEditTodo(index)}
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
        editIndex={editIndex}
      />
    </>
  );
};

export default TodoList;
