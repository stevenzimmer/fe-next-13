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