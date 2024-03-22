import React, { useState } from "react";
import { useTodo } from "../context/ToDoContext";
const ToDoForm = () => {
  const [todo,setTodo]=useState("")
  const {addToDo} =useTodo();
  const add = (e)=>{
    e.preventDefault();
    if(!todo) return;
    addToDo({todo,completed:false})
    setTodo("")
  }
  return (
    <div>
      <form  className="flex" onSubmit={
        add
      }>
        <input
          type="text"
          placeholder="write your todo here"
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-gray-100  py-1.5 text-black" value={todo} onChange={(e)=>setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg bg-green-600 px-3 py-1 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
