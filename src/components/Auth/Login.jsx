import React, { useState } from "react";
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is ", email);
    console.log("password is ", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 rounded-2xl border-emerald-200">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center"
        >
          <input
            required
            className="border-2 border-emerald-600 text-xl rounded-full px-4 py-5"
            name="emailid"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            required
            className="border-2 border-emerald-600 text-xl rounded-full px-4 py-5 mt-4"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="border-2 border-emerald-600 text-xl rounded-full px-4 py-5 mt-5 w-full bg-emerald-600">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
