"use server"
import { revalidatePath } from "next/cache";
import prisma from "./prisma"


export const newTodo = async (formData:any ) => {
  // console.log({formData});
  const todo = await prisma.todo.create({
    data: {
      content: formData.get("content"),
    },
  });

  revalidatePath("/todos");

  console.log({todo});

}

export const deleteTodo = async (id: number) => {
  console.log("deleteTodo", id);
  const todo = await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/todos");

  console.log({todo});
}

export const editTodo = async (id: number, content: string) => {
  console.log("editTodo", content);
  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  revalidatePath("/todos");

  console.log({todo});
}