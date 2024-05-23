import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import img from "../Images/img.jpg";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(""); // State to store user type
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Regular expression for password validation
    const re = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name.trim() || !email.trim() || !password.trim() || !userType.trim()) {
    //   toast.error("Please fill up all fields");
    //   return;
    // }

    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!validatePassword(password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one digit, one letter, and one special character";
    }

    if (Object.keys(errors).length === 0) {
      console.log("User type selected:", userType);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      navigate("/login");
      // Here you can submit the form or perform any other actions
    } else {
      setErrors(errors);
    }
    // if (Object.keys(errors).length === 0) {
    //   // Prepare data to send to the backend
    //   const formData = {
    //     name: name,
    //     email: email,
    //     password: password,
    //     userType: userType,
    //   };

    // Send POST request to the backend
    // axios
    //   .post("YOUR_BACKEND_API", formData)
    //   .then((response) => {
    //     console.log("Form data submitted successfully:", response.data);
    //     // Optionally, you can show a success message here using toast.success()
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting form data:", error);
    //     // Optionally, you can show an error message here using toast.error()
    //   });
    // } else {
    //   setErrors(errors);
    // }
  };

  return (
    <>
      <img className="w-1/2 float-right h-500" src={img} alt="signup" />
      <div className="formWrapper bg-purple mx-auto pt-5 pl-10 pr-10 pb-5 mt-5 rounded-lg">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name1"
                value="Please enter your name"
                className="text-white font-bold"
              />
            </div>
            <TextInput
              id="name1"
              type="name"
              placeholder="Thomas"
              required
              shadow
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email2"
                value="Please enter your email"
                className="text-white font-bold"
              />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@gmail.com"
              required
              shadow
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password2"
                value="Please enter your password"
                className="text-white font-bold"
              />
            </div>
            <TextInput
              id="password2"
              type="password"
              placeholder="Password"
              required
              shadow
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-white">{errors.password}</p>}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center mb-4">
              <input
                id="teacher-radio"
                type="radio"
                value="teacher"
                name="userType"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => setUserType("teacher")}
              />
              <label
                htmlFor="teacher-radio"
                className="ms-2 text-sm text-white font-bold"
              >
                Teacher
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="student-radio"
                type="radio"
                value="student"
                name="userType"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => setUserType("student")}
              />
              <label
                htmlFor="student-radio"
                className="ms-2 text-sm text-white font-bold"
              >
                Student
              </label>
            </div>
          </div>
          <div className="d-flex">
            <Button
              type="submit"
              className="w-150 mx-auto bg-white text-purple"
            >
              Sign Up
            </Button>
            <Link to="/login" className="text-md ml-8 font-bold text-white">
              Already Have an Account?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
