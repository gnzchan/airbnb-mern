import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import {
  registerSchema,
  RegisterSchema,
} from "../constants/schema/registerSchema";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    try {
      await axios.post("/register", data);

      alert("Registration Successful. Proceed to login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.firstName?.message}
            </p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.lastName?.message}
            </p>
          )}

          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.email?.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.password?.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.confirmPassword?.message}
            </p>
          )}

          <button className="primary">Register</button>
        </form>
        <div className="text-center py-4">
          <span className="text-neutral-500">
            Already have an account?&nbsp;
          </span>
          <Link className="underline" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
