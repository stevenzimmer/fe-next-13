import { newTodo } from "@/utils/actions"
export default function NewTodoForm() {

  return (
    <form action={newTodo}>
      <input
        className="text-black px-3 py-2 mb-2 rounded border-2 border-black"
        type="text"
        placeholder="Title"
        name="content"
        required
      />
      <br />
      <button className="border-2 border-white rounded px-6 py-2" type="submit">Add new Todo</button>
    </form>
  )
}
