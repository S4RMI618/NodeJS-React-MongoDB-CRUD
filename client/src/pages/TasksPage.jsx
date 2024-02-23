import React, { useEffect } from "react";
import { useTask } from "../context/TaskContext";

function TasksPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks || tasks.length <= 0) {
    return <h1 className="text-4xl text-white">There aren't tasks to show.</h1>;
  }
  

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h1 className="w-full p-6 text-5xl text-center text-white bg-zinc-600">My tasks</h1>
      <div className="flex flex-col md:grid md:grid-cols-3 grid-cols-2 gap-4 md:p-8 p-2">
      {tasks ? (
        tasks.map((task) => (
          <div className="min-h-[25vh] mt-5 bg-zinc-700 max-w-lg w-full p-5 rounded-md" key={task._id}>
            <h1 className="w-full block text-2xl mb-2">{task.title}</h1>
            <p className="w-full block">{task.description}</p>
          </div>
        ))
      ) : (
        <h1 className="text-white">Loading...</h1>
      )}
      </div>
    </div>
  );
}

export default TasksPage;
