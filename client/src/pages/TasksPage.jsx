import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks) {
    return <h1 className="text-4xl text-white">There aren't tasks to show.</h1>;
  }
  

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-4 md:p-8 p-2">
      {tasks ? (
        tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))
      ) : (
        <h1 className="text-white">Loading...</h1>
      )}
      </div>
    </div>
  );
}

export default TasksPage;
