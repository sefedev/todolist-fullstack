"use server";

import { prisma } from "../lib/prisma";

export async function createTodo({ todo, userId }) {
  try {
    const _todo = await prisma.todo.create({
      data: { todo, userId },
    });
    console.log("todo succesfully created", _todo);
    return _todo;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot create todo", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getTodos(userId) {
  try {
    const allTodos = await prisma.todo.findMany({
      where: { userId },
    });
    return allTodos;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot get todo", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateTodo(todoId, updatedData) {
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: todoId },
      data: updatedData,
    });
    console.log("Todo successfully updated", updatedTodo);
    return updatedTodo;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot update todo", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteTodo(todoId) {
  try {
    const deletedTodo = await prisma.todo.delete({
      where: { id: todoId },
    });
    console.log("Todo successfully deleted", deletedTodo);
    return deletedTodo;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot delete todo", error);
  } finally {
    await prisma.$disconnect();
  }
}
