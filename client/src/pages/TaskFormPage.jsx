import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id.replace(/[{}]/g, ""));
        console.log(task);
        setValue("title", task.title) +
          setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id.replace(/[{}]/g, ""), data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });

  return (
    <main className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-700 max-w-md w-full p-5 rounded-sm ">
        <form onSubmit={onSubmit} className="flex flex-col p-5 gap-2">
          <input
            type="text"
            className="p-3 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
          <textarea
            rows="3"
            className="p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Description"
            {...register("description")}
          ></textarea>
          <button className="mt-4 p-3 rounded-lg text-slate-100 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}

export default TaskFormPage;
