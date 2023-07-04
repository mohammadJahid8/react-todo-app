import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: Date.now(), name: "I am a sample task", completed: false },
  ]);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
