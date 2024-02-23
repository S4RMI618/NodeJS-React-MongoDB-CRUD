import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTask();

  return (
    <div className="min-h-[25vh] mt-5 bg-zinc-700 max-w-lg w-full p-5 rounded-md">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl text-zinc-100 font-semibold mb-2">
          {task.title}
        </h1>
        <div className="flex gap-x-1">
          <Link to={`/tasks/${task._id}}`} className="flex items-center justify-center hover:bg-indigo-600 p-2 rounded-lg hover:animate-bounce">
            <EditIcon fontSize="10px" />
          </Link>
          <button
            className="flex items-center justify-center hover:bg-indigo-600 p-2 rounded-lg hover:animate-bounce"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            <DeleteForeverIcon fontSize="10px" />
          </button>
        </div>
      </header>
      <p className="block w-full font-medium">{task.description}</p>
      <p className="block w-full font-light">
        {new Date(task.date).toLocaleDateString()}
      </p>
    </div>
  );
}

export default TaskCard;
