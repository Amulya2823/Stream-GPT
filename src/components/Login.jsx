import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const toggleSign = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
        className="absolute"
      />
      <form className=" w-3/12 absolute p-12 bg-black  my-36 m-auto right-0 left-0 rounded-xl bg-opacity-80">
        <h1 className="text-white text-4xl font-bold py-4 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="First Name"
          className="p-4 my-4 rounded-lg w-full bg-gray-500"
        />}
        {!isSignIn && <input
          type="text"
          placeholder="Second Name"
          className="p-4 my-4 rounded-lg w-full bg-gray-500"
        />}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 rounded-lg w-full bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-lg w-full bg-gray-500 "
        />
        <button className="p-3 my-3 rounded-lg font-medium text-xl text-white bg-red-700 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSign}
          
          className="text-white m-2 text-lg cursor-pointer hover:underline"
        >
          {isSignIn
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
