import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { loginSchema, LoginSchema } from "../constants/schema/loginSchema";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const [redirect, setRedirect] = useState(false);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      await axios.post("/login", data, { withCredentials: true });

      setRedirect(true);
    } catch (error) {
      alert("Login Failed");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
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

          <button className="primary">Login</button>
        </form>
        <div className="text-center py-4">
          <span className="text-neutral-500">
            Don't have an account yet?&nbsp;
          </span>
          <Link className="underline" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
