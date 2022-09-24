import React from 'react'
import '../style.css';
import '../bootstrap.min.css';
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
      // <header className="main-nav__header-one ">
      //   <nav className="header-navigation stricky">
      //     <div className="container">
      //       <div className="main-nav__logo-box">
      //         <a href="index.html" className="main-nav__logo">
      //           <img
      //             src="assets/images/logo-1-1.png"
      //             width="105"
      //             alt="Awesome Image"
      //           />
      //         </a>
      //         <a href="#" className="side-menu__toggler">
      //           <i className="fa fa-bars"></i>
      //         </a>
      //       </div>
      //       <div className="main-nav__main-navigation">
      //         <ul className="one-page-scroll-menu main-nav__navigation-box">
      //           <li className="current scrollToLink">
      //             <Link to="/">Home</Link>
      //           </li>
      //           <li className="scrollToLink">
      //             <Link href="#features">Features</Link>
      //           </li>
      //           <li className="scrollToLink">
      //             <Link href="#pricing">Pricing</Link>
      //           </li>
      //           <li className="scrollToLink">
      //             <Link href="#app-shots">App Screens</Link>
      //           </li>
      //           <li className="scrollToLink">
      //             <Link href="#testimonials">Testimonials</Link>
      //           </li>
      //           <li className="dropdown scrollToLink">
      //             <Link href="#blog">Login</Link>
      //             <ul>
      //               <li>
      //                 <Link href="login.html">Login Page</Link>
      //               </li>
      //               <li>
      //                 <Link href="register.html">Register</Link>
      //               </li>
      //             </ul>
      //           </li>
      //           <li className="dropdown scrollToLink">
      //             <Link href="#blog">Admin</Link>
      //             <ul>
      //               <li>
      //                 <Link href="login.html">Login Page</Link>
      //               </li>
      //               <li>
      //                 <Link href="register.html">Register</Link>
      //               </li>
      //             </ul>
      //           </li>
      //           {/* <li className="scrollToLink">
      //             <Link href="#contact">Contact</Link>
      //           </li> */}
      //         </ul>
      //       </div>
      //       <div className="main-nav__right">
      //         <a
      //           href="#contact"
      //           data-target="#contact"
      //           className="thm-btn header__btn scroll-to-target"
      //         >
      //           Start Trial
      //         </a>
      //       </div>
      //     </div>
      //   </nav>
      // </header>
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
                {auth ? (
                  <>
                    <li className="current scrollToLink">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="scrollToLink">
                      <Link to="/adda-profile">Profile</Link>
                    </li>
                    <li className="scrollToLink">
                      <Link to="/techupdates">Tech Updates</Link>
                    </li>
                    <li className="scrollToLink">
                      <Link to="/eventSearch">Events</Link>
                    </li>
                    <li className="scrollToLink">
                      <Link to="/communityIndex">Communities</Link>
                    </li>
                    <li className="scrollToLink">
                      <Link onClick={logout} to="/signup">
                         Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="scrollToLink">
                      <Link to="/signup">Sign Up User</Link>
                    </li>
                    <li className="scrollToLink">
                      <Link to="/login">Login User</Link>
                    </li>
                  </>
                )}
                {/* <li className="scrollToLink">
                  <Link href="#contact">Contact</Link>
                </li> */}
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