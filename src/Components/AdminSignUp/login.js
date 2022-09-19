import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  //   useEffect(() => {
  //     const auth = localStorage.getItem("user");
  //     if (auth) {
  //       navigate("/");
  //     }
  //   });
  const navigate = useNavigate();
  useEffect(() => {
    const adminAuth = localStorage.getItem("admin");
    if (adminAuth) {
      navigate("/");
    }
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const loginBtn = async () => {
    console.log(user);
    if (user.email && user.password) {
      let result = await fetch("http://localhost:5000/admin/AdminLogin", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      //   console.log(result, "pp");
      if (result.firstname) {
        console.log("kk");
        localStorage.setItem("admin", JSON.stringify(result));
        navigate("/");
      } else {
        alert("Please enter correct credentials");
      }
    }
  };
  return (
    <div className="register">
      <h1>Login Admin</h1>
      <input
        className="inputBox"
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      ></input>
      <input
        className="inputBox"
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <button className="appButton" onClick={loginBtn} type="button">
        Login
      </button>
    </div>
  );
};
export default AdminLogin;
