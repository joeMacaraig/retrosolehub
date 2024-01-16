import { React, useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="h-full w-full flex items-center justify-center p-5">
      <div className="w-[500px] h-[70vh] flex items-center justify-center flex-col my-20">
        <div className="w-full mb-5">
          <h1 className="text-4xl">
            Welcome to RetroSoleHub 👋🏽, <br></br> Sign in Admin.
          </h1>
          <p className="my-4">
            This page is for admin users of RetroSoleHub only.
          </p>
        </div>
        <form className="w-full" onSubmit={onSubmit}>
          {/* username */}
          <div className="mb-2">
            <label for="username" className="block mb-2">
              Email
            </label>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="username"
              className="border-2 border-black p-3 w-full"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          {/* password */}
          <div className="">
            <label for="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="border-2 border-black p-3 w-full"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-light p-4 text-center mt-10"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};