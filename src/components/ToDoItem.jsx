import React, { useState } from "react";
import { useTodo } from "../context/ToDoContext";
const ToDoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateToDo, deleteToDo, toggleComplete } = useTodo();
  const editTodo = () => {
    
    updateToDo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <>
      <div
        className={`flex border border-black rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duaration-300 text-black bg-gray-100 w-full ${
          todo.completed ? "bg-[#445a30]" : "bg-[#ccbed7]"
        }}`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-white" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-white hover:bg-gray-100 shrink-0 border border-black"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black justify-center items-center bg-white hover:bg-gray-100 shrink-0"
          onClick={() => deleteToDo(todo.id)}
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default ToDoItem;
