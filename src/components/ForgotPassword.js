import React, { useRef, useState } from "react";
import "../stylesheets/forgotPassword.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import { resetPassword } from "../auth/SignInMethods";
import { Alert } from "@material-ui/lab";

function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your Email Inbox for further instructions.");
    } catch (error) {
      setError("Incorrect email address.");
    }

    setLoading(false);
  };

  return (
    <div className="forgotPassword">
      <div className="forgotPassword__contents">
        <h1>Reset Password</h1>
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}
        <form method="post" onSubmit={handleSubmit}>
          <div className="forgotPassword__txt">
            <input type="text" required ref={emailRef} />
            <span></span>
            <label>
              {" "}
              <MailOutlineIcon className="label__icon" />
              Email
            </label>
          </div>

          <button
            disabled={loading}
            href="#"
            className="forgotPassword__btn"
            type="submit"
          >
            Reset Password
          </button>
          <div className="forgotPassword__link">
            <Link className="forgotPassword__login" to="/">
              Login
            </Link>
            <Link className="forgotPassword__signup" to="/">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
