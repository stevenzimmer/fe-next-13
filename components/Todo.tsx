
type Props = {
  todo: {
    content: string;
  }
}
export default function Todo({todo}: Props) {
  return (
    <div className="border-2 border-black rounded px-3 py-2 mb-2">
     <h3 className="text-xl font-bold">{todo.content}</h3>
    </div>
  )
}
