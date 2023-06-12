import NewTodoForm from "@/components/NewTodoForm";
import TodoList from "@/components/TodoList";

export default async function ToDos() {
 
  return (
    <div>
      <h1 className="text-2xl font-bold mb-12" >ToDos</h1>
      <div className="flex ">
        <div className="lg:w-1/2">
          <h2 className="mb-3">Add new todo</h2>
          <NewTodoForm />
        </div>
        <div className="lg:w-1/2">
          <h2 className="mb-3">List of Todos</h2>
          <TodoList />
        </div>
      </div>
     
    </div>
  )
}
