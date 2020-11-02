import React, { useRef, useState } from "react";
import "../stylesheets/loginForm.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { signup, login } from "../auth/SignInMethods";
import { Alert } from "@material-ui/lab";

function LoginForm({ type }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "signup") {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError("Passwords do not match.");
      }
    }

    try {
      setError("");
      setMessage("");
      setLoading(true);
      if (type === "signup") {
        await signup(emailRef.current.value, passwordRef.current.value);
        setMessage("Successfully Signed Up, opening the app...");
      } else {
        await login(emailRef.current.value, passwordRef.current.value);
        setMessage("opening the app...");
      }
    } catch (error) {
      if (type === "signup") {
        setError("failed to Sign up.");
      } else {
        setError("Incorrect Password and Email.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="loginForm">
      <h1>{type}</h1>
      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}

      <form method="post" onSubmit={handleSubmit}>
        <div className="loginForm__txt">
          <input type="text" required ref={emailRef} />
          <span></span>
          <label>
            {" "}
            <MailOutlineIcon className="label__icon" />
            Email
          </label>
        </div>
        <div className="loginForm__txt">
          <input type="password" required ref={passwordRef} />
          <span></span>
          <label>
            {" "}
            <LockIcon className="label__icon" /> Password
          </label>
        </div>
        {type === "signup" && (
          <div className="loginForm__txt">
            <input type="password" required ref={confirmPasswordRef} />
            <span></span>
            <label>
              {" "}
              <LockIcon className="label__icon" /> Confirm Password
            </label>
          </div>
        )}
        <div className="loginForm__pass">
          <Link className="pass__link" to="/reset-password">
            Forgot Password?
          </Link>
        </div>
        <button
          disabled={loading}
          href="#"
          className="loginForm__btn"
          type="submit"
        >
          {type}
        </button>
        <div className="loginForm__link">
          <span>
            {type === "signup" ? "Already have an account?" : "Not a Member?"}
          </span>{" "}
          {type === "signup" ? (
            <Link className="login__link__link" to="/">
              Login
            </Link>
          ) : (
            <Link className="login__link__link" to="/signup">
              Signup
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
