import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function Footer() {
  const { filter, setFilter } = useContext(TodoContext);

  const handleFilterTasks = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>0 left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleFilterTasks("all")}
          className={`cursor-pointer ${filter === "all" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleFilterTasks("pending")}
          className={`cursor-pointer ${filter === "pending" && "font-bold"}`}
        >
          Pending
        </li>
        <li>|</li>
        <li
          onClick={() => handleFilterTasks("completed")}
          className={`cursor-pointer ${filter === "completed" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
