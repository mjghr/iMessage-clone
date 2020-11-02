import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Imessage from "./Imessage";
import Login from "./Login";
import { selectUser, login, logout } from "../provider/userSlice";
import { auth } from "../auth/firebase";
import "../stylesheets/App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            picture: authUser?.photoURL,
            email: authUser.email,
            displayName: authUser?.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {user ? (
        <Imessage />
      ) : (
        <Router>
          <Switch>
            <Route path="/reset-password" component={ForgotPassword} />
            <Route path="/signup" component={Signup} />
            <Route exact="/" component={Login} />
          </Switch>
        </Router>
      )}
    </div>
    // <Login />
  );
}

export default App;
