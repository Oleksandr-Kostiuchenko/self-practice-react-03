import style from "./Form.module.css";
import { useState, useEffect, useId } from "react";

const Form = ({ onLogin }) => {
  const loginInputId = useId();
  const passwordInputId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formEl = event.target;
    const [login, password] = formEl.elements;

    onLogin({
      login: login.value,
      password: password.value,
    });

    formEl.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginInputId}>Login</label>
        <input type="text" name="login" id={loginInputId} required />

        <label htmlFor={passwordInputId}>Password</label>
        <input type="password" name="password" id={passwordInputId} required />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Form;
