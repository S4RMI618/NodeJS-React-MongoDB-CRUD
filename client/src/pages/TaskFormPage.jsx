import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTask();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
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
