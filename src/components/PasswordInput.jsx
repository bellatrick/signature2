import React, { useState } from "react";

const PasswordInput = (props) => {
  const [showPassword, setshowPassword] = useState(true);
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <div>
      <div>
        <label
          htmlFor="password"
          className="block text-start relative font-body mb-[5px] text-[14px] text-textGray"
        >
          {props.label}
        </label>
        <div className="mt-1 relative">
          <input
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required={false}
            className="relative text-primary appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary1 focus:border-primary1 sm:text-sm"
          />
          {!showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-4 top-2 cursor-pointer text-gray-400"
              fill="none"
              data-testid="svg"
              viewBox="0 0 24 24"
              stroke="grey"
              onClick={togglePassword}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-4 top-2 text-gray-400 cursor-pointer"
              fill="none"
              data-testid="svg"
              viewBox="0 0 24 24"
              stroke="grey"
              onClick={togglePassword}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
