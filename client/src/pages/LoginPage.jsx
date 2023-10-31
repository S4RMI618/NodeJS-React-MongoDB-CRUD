import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, error: signInError } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  return (
    <main className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-700 max-w-md w-full p-10 rounded-sm">
        {signInError.map((err, i) => (
          <div className="bg-red-500 text-white text-center mb-2" key={i}>
            {err}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full bg-indigo-900 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full bg-indigo-900 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            type="submit"
            className="w-auto h-full bg-indigo-900/90 py-1 px-4 rounded-full mt-4 text-white"
          >
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have an account?
          <Link to="/register" className="text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
