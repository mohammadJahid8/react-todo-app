import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import Todo from "./Todo";

export default function TodoList() {
  const { tasks } = useContext(TodoContext);
  console.log("tasks", tasks);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {tasks?.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  );
}
