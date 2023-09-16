import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res)
  })

  return (
    <main className=" max-w-[480px] m-auto h-full w-full flex flex-col justify-center items-center bg-zinc-700 p-10 rounded-sm">
      <form
        onSubmit={onSubmit}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
          className="w-full bg-indigo-900 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="w-full bg-indigo-900 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="w-full bg-indigo-900 text-white px-4 py-2 rounded-md my-2"
        />
        <button
          type="submit"
          className="w-auto h-full bg-indigo-900/90 py-1 px-4 rounded-full mt-4"
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
