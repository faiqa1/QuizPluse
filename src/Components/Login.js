//
import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import img from "../Images/img.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      // Prepare data to send to the backend
      const formData = {
        email: email,
        password: password,
      };

      // Send POST request to fetch data from the backend
      axios
        .post("YOUR_BACKEND_API", formData)
        .then((response) => {
          console.log("Login successful:", response.data);
          // Optionally, you can redirect the user to another page or store authentication token in localStorage
        })
        .catch((error) => {
          console.error("Error logging in:", error);
          if (error.response.status === 401) {
            setLoginError("Incorrect email or password");
          } else {
            setLoginError("An error occurred. Please try again later.");
          }
        });
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <img className="w-1/2 float-right h-500" src={img} alt="login" />
      <div className="logInFromWrapper bg-purple mx-auto pt-5 pl-10 pr-10 pb-5 mt-5 rounded-lg">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mt-10 mb-3">
            <div className="mb-2 block ">
              <Label
                htmlFor="email1"
                value="Please enter your email"
                className="text-white font-bold"
              />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-white">{errors.email}</p>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                value="Please enter your password"
                className="text-white font-bold"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-white">{errors.password}</p>}
          </div>
          {loginError && <p className="text-white">{loginError}</p>}
          <Button
            type="submit"
            className="w-150 mx-auto bg-white text-purple mt-5"
          >
            <span className="text-purple font-bold text-18">Login</span>
          </Button>
          <Link to="/signup" className="text-md ml-25 font-bold text-white">
            Create an account
          </Link>
          <Link to="/signup" className="text-md ml-25 font-bold text-white">
            Forget Password
          </Link>
        </form>
      </div>
    </>
  );
}
