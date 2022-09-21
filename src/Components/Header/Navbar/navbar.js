import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Nav=()=>{
    const navigate =useNavigate();
    const auth =localStorage.getItem("user");
    const adminAuth = localStorage.getItem("admin");
    const logout=()=>{
      localStorage.clear();
        navigate("/signup");
    }
    return (
      // <div>
      //   <ul classNameName="nav-ul">
      //     <li>
      //       <Link to="/">Home</Link>
      //     </li>

      //     {auth ? (
      //       <>
      //         <li>
      //           <Link to="/profile">Profile</Link>
      //         </li>
      //         <li>
      //           <Link onClick={logout} to="/signup">
      //             Logout
      //           </Link>
      //         </li>
      //       </>
      //     ) : (
      //       <>
      //         <li>
      //           <Link to="/signup">Sign Up User</Link>
      //         </li>
      //         <li>
      //           <Link to="/login">Login User</Link>
      //         </li>

      //       </>
      //     )}
      //     {adminAuth ? (
      //       <>
      //         <li>
      //           <Link to="/profile">Profile</Link>
      //         </li>
      //         <li>
      //           <Link onClick={logout} to="/signup">
      //             Logout
      //           </Link>
      //         </li>
      //       </>
      //     ) : (
      //       <>

      //         <li>
      //           <Link to="/adminSignup">Sign Up Admin</Link>
      //         </li>
      //         <li>
      //           <Link to="/adminLogin">Login Admin</Link>
      //         </li>
      //       </>
      //     )}
      //   </ul>
      // </div>
      <header className="main-nav__header-one ">
        <nav className="header-navigation stricky">
          <div className="container">
            <div className="main-nav__logo-box">
              <a href="index.html" className="main-nav__logo">
                
                <img
                  src="assets/images/logo-1-1.png"
                  width="105"
                  alt="Awesome Image"
                />
              </a>
              <a href="#" className="side-menu__toggler">
                <i className="fa fa-bars"></i>
              </a>
            </div>
            <div className="main-nav__main-navigation">
              <ul className="one-page-scroll-menu main-nav__navigation-box">
                <li className="current scrollToLink">
                  <a href="#banner">Home</a>
                </li>
                <li className="scrollToLink">
                  <a href="#features">Features</a>
                </li>
                <li className="scrollToLink">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="scrollToLink">
                  <a href="#app-shots">App Screens</a>
                </li>
                <li className="scrollToLink">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="dropdown scrollToLink">
                  <a href="#blog">Login</a>
                  <ul>
                    <li>
                      <a href="login.html">Login Page</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                  </ul>
                </li>
                <li className="scrollToLink">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="main-nav__right">
              <a
                href="#contact"
                data-target="#contact"
                className="thm-btn header__btn scroll-to-target"
              >
                Start Trial
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
}
export default Nav;