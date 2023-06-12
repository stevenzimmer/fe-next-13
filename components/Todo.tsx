"use client";

import { useState, useEffect } from "react";

import { deleteTodo, editTodo } from "@/utils/actions";
type Props = {
  todo: {
    content: string;
    id: number;
  },
}

export default function Todo({todo}: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const [content, setContent] = useState(todo.content);
  const handleEdit = (e) => {
    // console.log("edit");
    setIsEditing(!isEditing);

  }

  const handleDelete = (id: number) => {
    // e.preventDefault();
    deleteTodo(id);
    // console.log(e.target.value);
    console.log("delete");
  }

  const handleSave = (id:number, content:string) => {
    // console.log("save");
    editTodo(id, content);
    setIsEditing(!isEditing);
  }



  return (
    <div className="border-2 border-black rounded px-3 py-2 mb-2 flex items-center justify-between">
      {isEditing ? (
        <>
        <input
          type="text"
          className="border-2 border-black rounded px-3 py-2 mb-2 flex items-center justify-between text-black"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="w-8 h-8 text-black rounded-full bg-white flex items-center justify-center cursor-pointer" onClick={() => handleSave(todo.id, content)}>
          √
        </div>
        </>
      ) : (

       <h3 className="text-xl font-bold">{todo.content}</h3>
      )}
     <div>
        <button onClick={(e) => handleDelete(todo.id)} className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">Delete</button>

        <button onClick={(e) => handleEdit(todo.id)} className="ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">Edit</button>
     </div>
    </div>
  )
}
