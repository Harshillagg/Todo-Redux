import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearUpdates, updateTodo } from "../features/todo/Todoslice";

function AddTodo() {

  const updates = useSelector((state) => state.updates)
  const [isTodoUpdatable, setIsTodoUpdatable] = useState(false)
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const UpdateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: updates[0].id, text: input }));
    setInput("");
    setIsTodoUpdatable(false);
    dispatch(clearUpdates());
  }

  useEffect(() => {
    if(updates && updates.length > 0){
      setInput(updates[0].text)
      setIsTodoUpdatable(true)
    }
  },[updates])

  return (
    <form className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={(e) => {
          if (isTodoUpdatable) {
              UpdateHandler(e);
          } else addTodoHandler(e);
        }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
