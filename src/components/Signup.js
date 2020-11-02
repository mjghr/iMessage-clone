import React, { useState } from "react";
import "../stylesheets/login.css";
import {
  googleSignIn,
  githubSignIn,
  facebookSignIn,
} from "../auth/SignInMethods";
import LoginForm from "./LoginForm";
// import { auth, provider } from "../firebase";
// import { login } from "../features/userSlice";

function Signup() {
  const [showL, setShowL] = useState("false");
  return (
    <div className="login">
      <div className="login__contents">
        <div className="login__left">
          <div className="login__logo">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Messenger_colored_svg-512.png"
              alt=""
            />
          </div>
          <h1>iMessage</h1>
          <div className="login__create">
            ©️ {new Date().getFullYear()}
            <a href="https://github.com/mjghr" target="_blank">
              MJGHR
            </a>
          </div>
        </div>

        <div className="login__right">
          <div className="login__form">
            <LoginForm type="signup" />
          </div>

          <div className="login_btn">
            <h1>Or Signup Using : </h1>
            <a href="#" className="btn btn--white " onClick={googleSignIn}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </a>
            <a href="#" className="btn btn--blue " onClick={facebookSignIn}>
              <img
                src="https://3.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlk/A_3ZXg7xO4YyGrKDhMpr6YRgrtOMn9tHwCLcBGAs/s1600/f_logo_RGB-Blue_1024.png"
                alt=""
              />
            </a>
            <a href="#" className="btn  btn--white" onClick={githubSignIn}>
              <img
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
