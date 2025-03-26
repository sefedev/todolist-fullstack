'use server'

import { createTodo, updateTodo, deleteTodo, getTodos } from "../action/todos";
import { auth } from "../auth";

export async function handleCreateTodo(todo) {
  const session = await auth();

  try {
    if (!session) {
      throw new Error("User not authenticated");
    }
  
    const userId = session.user.id;
  
    const newTodos = await createTodo({todo, userId});
    return newTodos
  } catch (err){
    console.error(err)
    throw new Error("cannot create todo", err)
  }
  
}


export async function handleUpdateTodo(todoId, updatedData) {
  const session = await auth();

  try {
    if (!session) {
      throw new Error("User not authenticated");
    }

    // const todo = await getTodos(session.user.id)

    // if(todo.userId !== userId) throw new Error("Unathorized: You do not own this todo!")

    const updatedTodo = await updateTodo(todoId, updatedData);
    console.log(`Todo with ID ${todoId} successfully updated`, updatedTodo);
    return updatedTodo;
  } catch (err) {
    console.error(err);
    throw new Error("Cannot update todo", err);
  }
}

export async function handleDeleteTodo(todoId) {
  const session = await auth();

  try {
    if (!session) {
      throw new Error("User not authenticated");
    }

    
    // const todo = await getTodos(session.user.id)

    // if(todo.userId !== userId) throw new Error("Unathorized: You do not own this todo!")

    await deleteTodo(todoId);
    console.log(`Todo with ID ${todoId} successfully deleted`);
  } catch (err) {
    console.error(err);
    throw new Error("Cannot delete todo", err);
  }
}
