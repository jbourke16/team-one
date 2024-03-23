import React from "react";
import "./AuthForm.css";
import { useState } from "react";
import { signIn } from "../../services/users.js";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";

function SignIn(props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/games");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
      return <button className='submit-btn' type="submit">Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
    <div className="sign-up-page">
      <Nav user={props.user} />
      <div className="sign-up-container">
      <div className="form-container">
        <h3 className="sign-up-header">Sign In</h3>
        <form className="sign-up" onSubmit={onSignIn}>
          <div className="sign-up-component">
          <label className="sign-up-label">Email: </label>
          <input
          className="sign-up-input"
            required
            type="text"
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
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          </div>
          {renderError()}
        </form>
      </div>
      <Link
        className="link-sign-in"
        to={"/sign-up"}
      >
        If you aren't a member, sign-up here!
      </Link>
    </div>
    </div>
  );
}

export default SignIn;
