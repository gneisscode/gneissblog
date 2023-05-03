import React from 'react'
import './dashboard.css'
import { useContext } from "react";
import { Context } from "../context/Context";
import Clock from '../components/Clock';
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Dashboard = () => {
     const { user, dispatch } = useContext(Context);
     const handleLogout = () => {
       dispatch({ type: "LOGOUT" });
     };
  return (
    <div className="admin__wrapper">
      <button onClick={handleLogout}>
        LOGOUT&nbsp;&nbsp;
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
      <img src="assets/gneisscode.png" alt="" />

      <div className="header">
        <div className="welcome__text">
          Welcome Back, {user.username} &#128105;&#8205;&#128187;
        </div>
        <Clock />
      </div>
      <div className="container">
        <div className="box__wrapper">
          <Link className='link' to= "/gneissblog/admin/write">
            <div className="box"> &#10024; New Post</div>
          </Link>

          <div className="box">&#128199; Previous Posts</div>
        </div>
        <div className="box__wrapper">
          <div className="box">&#128231; Mailing List</div>
          <div className="box">&#x2699;&#xFE0F; Settings</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard