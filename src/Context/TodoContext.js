import { createContext, useState } from "react";

export const TodoContext = createContext();

const initialState = [
  { id: Date.now(), name: "I am a sample completed task", completed: true },
  { id: Date.now(), name: "I am not completed", completed: false },
];

export default function TodoProvider({ children }) {
  const [tasks, setTasks] = useState(initialState);
  const [filter, setFilter] = useState("all");
  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
