'use client'

import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/tasks")
    setTasks(response.data);
  }
  useEffect(() => {
    fetchData();
  }, [tasks]);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">TODO List App</h1>
        <AddTask tasks={tasks}/>
      </div>
      <TodoList tasks={tasks}/>
    </main>
  );
}
