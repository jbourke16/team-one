import React from "react";
import "./AuthForm.css";
import { useState } from "react";
import { signUp } from "../../services/users.js";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";

const SignUp = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        userName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button className="submit-btn" type="submit">
          Sign Up
        </button>
      );
    }
  };
  const { userName, email, password, passwordConfirmation } = form;

  return (
    <div className="sign-up-page">
      <Nav user={props.user} />
      <div className="sign-up-container">
        <div className="form-container">
          <h3 className="sign-up-header">Sign Up</h3>
          <form className="sign-up" onSubmit={onSignUp}>
            <div className="sign-up-component">
              <label className="sign-up-label">Username: </label>
              <input
                className="sign-up-input"
                type="text"
                name="userName"
                required
                value={userName}
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="sign-up-component">
              <label className="sign-up-label">Email Address: </label>
              <input
                className="sign-up-input"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="sign-up-component">
              <label className="sign-up-label">Password: </label>
              <input
                className="sign-up-input"
                required
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="sign-up-pwdconf">
              <label className="sign-up-label">Password Confirmation: </label>
              <input
                className="sign-up-input"
                required
                type="password"
                name="passwordConfirmation"
                value={passwordConfirmation}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            {renderError()}
          </form>
        </div>
        <Link className="link-sign-in" to={"/sign-in"}>
          Already a member? Sign in here!
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
