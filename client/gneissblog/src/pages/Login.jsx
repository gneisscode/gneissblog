import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Context } from "../context/Context";
import Footer from "../components/Footer";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/admin/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login__container">
      <div className="login">
        <img src="/assets/gneisscode.png" alt="" />
        <span className="loginTitle">Administrator Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="login__input">
            <label>Username:</label>
            <input
              className="loginInput"
              type="text"
              placeholder="Enter your username..."
              ref={userRef}
            />
          </div>

          <div className="login__input">
            <label>Password:</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter your password..."
              ref={passwordRef}
            />
          </div>
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
