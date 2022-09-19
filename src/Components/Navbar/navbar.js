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
      <div>
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>

          {auth ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link onClick={logout} to="/signup">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign Up User</Link>
              </li>
              <li>
                <Link to="/login">Login User</Link>
              </li>
              
            </>
          )}
          {adminAuth ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link onClick={logout} to="/signup">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
             
              <li>
                <Link to="/adminSignup">Sign Up Admin</Link>
              </li>
              <li>
                <Link to="/adminLogin">Login Admin</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    );
}
export default Nav;