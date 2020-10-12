import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import "./Login.css";
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="box">
      <form onSubmit={handleSignUp}>
        <h1>Sign up</h1>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit" className="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
