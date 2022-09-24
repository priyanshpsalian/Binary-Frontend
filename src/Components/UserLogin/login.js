import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Navbar/navbarHome";
import HeaderTitle from '../Header/HeaderTitle/headertitleHome';
import "../Header/style.css";
import "../Header/bootstrap.min.css";
import "../UserLogin/login.css"
const UserLogin = () => {
  //   useEffect(() => {
  //     const auth = localStorage.getItem("user");
  //     if (auth) {
  //       navigate("/");
  //     }
  //   });
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
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
      let result = await fetch("http://localhost:5000/user/UserLogin", {
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
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        alert("Please enter correct credentials");
      }
    }
  };
  return (
    <>
      <div className="page-wrapper">
        <Nav />
        {/* <HeaderTitle /> */}
        <section
          className="page-header"
          // style="background-image: url(assets/images/background/inner-banner-bg.png);"
          style={{
            // backgroundImage: `url(process.env.PUBLIC_URL + '${bg})`,
            backgroundImage: `url(banner-bg-1-1.png)`,
          }}
        >
          <div className="d-flex justify-content-between mt-5">
            <div className="ml-5 pl-5">
              <h2>Login Page</h2>
            </div>
            <div className="login-box mt-5 ">
              <h4>Login</h4>
              <form>
                <div className="user-box">
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                  <label>Username</label>
                </div>
                <div className="user-box">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                  <label>Password</label>
                </div>
                <a onClick={loginBtn} type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
          </div>
        </section>

        {/* <div className="register">
          <h1>Login</h1>
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
        </div> */}
      </div>
    </>
  );
};
export default UserLogin;
