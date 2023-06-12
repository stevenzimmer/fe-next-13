import Todo from "./Todo";
import prisma from "@/utils/prisma";

const getTodos = async () => {

  return prisma.todo.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],

  });
}

export default async function TodoList() {
 
  const todos = await getTodos();

  return (
    <div>
      {todos.map((todo) => (  
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
