import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import PrivateComponent from "./Components/PrivateComponent/privatecomponent";
import UserLogin from "./Components/UserLogin/login";
import UserSignUp from "./Components/UserSignUp/signup";
import AdminSignUp from "./Components/AdminSignUp/signup";
import AdminLogin from "./Components/AdminSignUp/login";
import Profile from "./Components/Adda/Profile";
import Group from "./Components/Adda/Group";
import Event from "./Components/Adda/Event";
import PageNotFound from "./PageNotFound";
import TechUpdates from "./Components/TechUpdates/TechUpdates";
import EventSearch from "./Components/eventSearch/EventSearch";
import CommunitySearch from "./Components/eventSearch/EventSearch";

import FormGroup from "./Components/Form/FormGroup";
import FormEvent from "./Components/Form/FormEvent";

function App() {
	return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateComponent />}>
              <Route path="/logout" element={<h1>logout</h1>}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route path="/signup" element={<UserSignUp />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/communityIndex" element={<CommunitySearch />} />
            <Route path="/adminSignup" element={<AdminSignUp />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/techupdates" element={<TechUpdates />} />
            <Route path="/eventSearch" element={<EventSearch />} />
            <Route path="/adda-profile" element={<Profile />} />
            <Route path="/adda-group" element={<Group />} />
            <Route path="/adda-event" element={<Event />} />

            <Route path="/form-group" element={<FormGroup />} />
            <Route path="/form-event" element={<FormEvent />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      
      <footer class="site-footer">
        <img
          src="assets/images/shapes/footer-shape-1.png"
          class="site-footer__shape-1"
          alt=""
        />
        <img
          src="assets/images/shapes/footer-shape-2.png"
          class="site-footer__shape-2"
          alt=""
        />
        <img
          src="assets/images/shapes/footer-shape-3.png"
          class="site-footer__shape-3"
          alt=""
        />
        <div class="pt-2 mt-5 pb-3 site-footer__upper">
          <div class="container">
            <div class="row">
              <div class="mr-5 col-lg-4">
                <div class="footer-widget footer-widget__about">
                  <a class="footer-widget__logo" href="index.html">
                    <img
                      src="assets/images/logo-1-1.png"
                      width="105"
                      alt="Awesome Image"
                    />
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text the printing and setting
                    industry. Lorm Ipsum has been the industry's stanard dummy
                    text ever.{" "}
                  </p>
                  <p>
                    <a href="mailto:needhelp@zimed.com">
                      needhelp@binbeast.com
                    </a>{" "}
                    <br /> <a href="tel:666-888-0000">8655011052</a>
                  </p>
                </div>
              </div>
              <div class="ml-5 col-lg-4">
                <div class="footer-widget footer-widget__links">
                  <h3 class="footer-widget__title">Explore</h3>
                  <div class="footer-widget__links-wrap">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">All Features</a>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">Latest Blog</a>
                      </li>
                    </ul>
                    <ul class="ml-5 list-unstyled">
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__bottom">
          <div class="container">
            <div class="inner-container pt-3 pb-4">
              <div class="site-footer__social">
                <a class="fab fa-facebook-f" href="https://facebook.com"></a>
                <a class="fab fa-twitter" href="https://twitter.com"></a>
                <a class="fab fa-instagram" href="https://instagram.com"></a>
                <a class="fab fa-pinterest-p" href="https://pinterest.com"></a>
              </div>
              <p>© copyright 2022 by Binary Beast</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
