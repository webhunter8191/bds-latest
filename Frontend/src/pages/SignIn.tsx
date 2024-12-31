import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";


export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      Swal.fire({
        title: "Success!",
        text: "Sign in Successful!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor:"#8B5DFF"
      });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#8B5DFF",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="flex flex-col gap-5 p-8 bg-white rounded-lg shadow-lg w-full max-w-md transition duration-500 ease-in-out transform hover:scale-105"
        onSubmit={onSubmit}
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 animate__animated animate__fadeInDown">
          Welcome Back!
        </h2>
        <label className="text-gray-700 text-sm font-semibold">
          Email
          <input
            type="email"
            className="mt-1 border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold">
          Password
          <input
            type="password"
            className="mt-1 border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </span>
          )}
        </label>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600">
            Not registered?{" "}
            <Link
              className="underline text-blue-600 hover:text-blue-800 transition duration-300"
              to="/register"
            >
              Create an account here
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-6 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 text-lg shadow-md"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
