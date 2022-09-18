import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = async () => {
    // console.log("ll");
    const {
      firstname,
      lastname,
      email,
      age,
      phone,
      gender,
      password,
      reEnterPassword,
    } = user;

    if (
      firstname &&
      lastname &&
      email &&
      age &&
      gender &&
      phone &&
      password &&
      password === reEnterPassword
    ) {
      // console.log("ll");
      let result = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      console.log(result, "result");
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      // <Redirect to="/" />;
    } else {
      alert("invalid");
    }
  };
  return (
    <div className="register">
      {/* {console.log(user)} */}
      <h1>Register</h1>
      <input
        className="inputBox"
        name="firstname"
        type="text"
        value={user.firstname}
        onChange={handleChange}
        placeholder="Enter First Name"
      />
      <input
        className="inputBox"
        name="lastname"
        type="text"
        value={user.lastname}
        onChange={handleChange}
        placeholder="Enter Last Name"
      />
      <input
        className="inputBox"
        name="email"
        type="text"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        name="gender"
        type="gender"
        value={user.gender}
        onChange={handleChange}
        placeholder="Enter gender"
      />
      <input
        className="inputBox"
        name="age"
        type="number"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter Age"
      />
      <input
        className="inputBox"
        name="phone"
        type="number"
        value={user.phone}
        onChange={handleChange}
        placeholder="Enter Phone"
      />
      <input
        className="inputBox"
        name="password"
        type="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <input
        className="inputBox"
        name="reEnterPassword"
        type="password"
        value={user.reEnterPassword}
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <button className="appButton" onClick={register} type="button">
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
