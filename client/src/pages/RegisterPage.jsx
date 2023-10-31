import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, error: registerError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <main className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-700 max-w-md w-full p-10 rounded-sm">
        {registerError.map((err, i) => (
          <div className="bg-red-500 my-4" key={i}>
            {err}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
            className="w-full bg-indigo-900 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}

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
            className="w-auto h-full bg-indigo-900/90 py-1 px-4 rounded-full mt-4"
          >
            Register
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Already have an account?
          <Link to="/login" className="text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
