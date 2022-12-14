import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector((state) => state.users);
  const userLogged = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        id: "def id",
        username: "def usermane",
        password: "def pw",
        email: "def email",
      })
    );
    setTimeout(() => {
      console.log("login", userLogged);
    }, 1000);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <form className="px-2 py-4 bg-white border-2 shadow-xl">
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        {error && (
          <h4 className="mb-4 text-sm text-center text-white bg-red-600">
            Username or Password invalid!
          </h4>
        )}
        <div className="flex items-center mb-2">
          <label className="w-[80px] font-semibold text-sm">Email</label>
          <input
            className="px-2 border-2 focus:outline-blue-500"
            autoFocus
            placeholder="email@email.com"
          />
        </div>
        <div className="relative flex items-center mb-2">
          <label className="w-[80px] font-semibold text-sm">Password</label>
          <input
            className="pl-2 pr-8 border-2 focus:outline-blue-500"
            type={!showPassword ? "password" : "text"}
          />
          <a
            className="absolute text-xl right-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </a>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="flex-1 py-1 text-white bg-blue-600 hover:bg-blue-400"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
