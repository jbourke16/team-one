import React from 'react'
import './AuthForm.css'
import { useState } from 'react';
import { signUp } from "../../services/users.js";
import { useNavigate } from 'react-router-dom';


const SignUp = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",

  })

  const handleChange = (event) => 
  setForm({
    ...form,
    [event.target.name]: event.target.value,

  })
  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate("/")
    } catch (error) {
      console.error(error)
      setForm({
        userName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",

      })
      
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : ""
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
          </button>
      )
    }else {
      return <button type='submit'>Sign Up</button>
    }
  }
  const { userName, email, password, passwordConfirmation } = form

return (
    <div className='form-container'>
      <h3>Sign Up</h3>
      <form onSubmit={onSignUp}>
        <label>username</label>
        <input 
        type="text"
        name="userName"
        required
        value={userName}
        placeholder='Enter username'
        onChange={handleChange}
        />
        <label>email address</label>
        <input  
        required
        type='email'
        name='email'
        value={email}
        placeholder='Enter email'
        onChange={handleChange}
        />
        <label>password</label>
        <input 
        required
        type='password'
        name='password'
        value={password}
        placeholder='Password'
        onChange={handleChange}
        /> 
        <label>password confirmation</label>
        <input 
        required
        type='password'
        name='passwordConfirmation'
        value={passwordConfirmation}
        placeholder='confirm password'
        onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  )

}
export default SignUp