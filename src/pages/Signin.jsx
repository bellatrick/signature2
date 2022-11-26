import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

export default function Signin() {
  const [userInput, setuserInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInput;
  const handleChange = (e) => {
    setuserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  return (
    <p className="bg-primary text-white h-screen">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <p className="text-center text-[40px] animate-topslide bg-clip-text text-transparent font-dancing bg-gradient-to-br from-secondary to-red-500">
            Signature
          </p>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
            Sign in to your account
          </h2>
        </div>
        <Link
          to="/register"
          className="my-2 group cursor-pointer mt-4 text-[17px] text-center text-white"
        >
          Don't have an account?{" "}
          <span className=" text-secondary group-hover:underline">Register</span>
        </Link>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-start text-sm font-medium text-gray-200"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <PasswordInput
                name="password"
                label={"Password"}
                value={password}
                onChange={handleChange}
              />

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p
                    href="#"
                    className="font-medium mb-1 cursr-pointer text-secondary hover:text-black"
                  >
                    Forgot your password?
                  </p>
                </div>
              </div>
              <Link to="/store">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </Link>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-secondary" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-700 rounded-md px-2 text-gray-100">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div>
                  <p className="inline-flex items-center w-full justify-center rounded-md border border-secondary cursor-pointer bg-white py-2 px-4 text-sm font-medium text-primary shadow-sm hover:translate-y-1 transition-all">
                    <span className="sr-only">Sign in with Google</span>
                    <img
                      src="/assets/google.jpg"
                      className="h-6 object-cover"
                      alt="google logo"
                    />
                    oogle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </p>
  );
}
