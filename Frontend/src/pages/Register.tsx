import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons
import Swal from "sweetalert2"; // Import SweetAlert2

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // State for showing/hiding passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      // Use SweetAlert2 to show success message
      Swal.fire({
        title: "Registration Success!",
        text: "You have successfully registered.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#8B5DFF",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      // Use SweetAlert2 to show error message
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#8B5DFF",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
      className="flex flex-col gap-6 bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto mt-10 transform transition-transform duration-300 hover:scale-105"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Create an Account
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <label className="flex-1 text-gray-700 text-sm font-semibold">
          First Name
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 font-normal transition-colors focus:outline-none focus:border-blue-500"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="flex-1 text-gray-700 text-sm font-semibold">
          Last Name
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 font-normal transition-colors focus:outline-none focus:border-blue-500"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>

      <label className="text-gray-700 text-sm font-semibold">
        Email
        <input
          type="email"
          className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 font-normal transition-colors focus:outline-none focus:border-blue-500"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-semibold">
        Password
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 font-normal transition-colors focus:outline-none focus:border-blue-500"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <span
            onClick={() => setShowPassword(!showPassword)} // Toggle the visibility
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-semibold">
        Confirm Password
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 font-normal transition-colors focus:outline-none focus:border-blue-500"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) return "This field is required";
                if (watch("password") !== val)
                  return "Your passwords do not match";
              },
            })}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle the visibility
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold text-lg hover:bg-blue-500 transition-colors"
      >
        Create Account
      </button>
    </form>
  );
};

export default Register;
