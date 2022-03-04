import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hook/UseAuth";

const Login = () => {
  const { googlelogin } = UseAuth();

  console.log(googlelogin);
  const { register } = useForm();
  const handle_form = (e) => {
    e.preventDefault();
    console.log("hello world");
  };

  // login with google
  const loginGoogle = () => {
    googlelogin();
    console.log(googlelogin);
    console.log("google log in");
  };

  return (
    <div className="main_form">
      <div>
        <form className="login_form" onSubmit={handle_form}>
          <input {...register("Email")} placeholder="Email" />
          <input {...register("Pasword")} placeholder="Password" />
          <input type="submit" />
        </form>
        <button onClick={loginGoogle} className="google_login">
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Login;
