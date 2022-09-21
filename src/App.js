import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header/header';
import PrivateComponent from './Components/PrivateComponent/privatecomponent';
import UserLogin from "./Components/UserLogin/login";
import UserSignUp from "./Components/UserSignUp/signup";
import AdminSignUp from './Components/AdminSignUp/signup';
import AdminLogin from './Components/AdminSignUp/login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/logout" element={<h1>logout</h1>}></Route>
            <Route path="/profile" element={<h1>profile</h1>}></Route>
          </Route>
          <Route path="/signup" element={<UserSignUp />}></Route>
          <Route path="/login" element={<UserLogin />}>

          </Route>
          <Route path="/adminSignup" element={<AdminSignUp/>}>
          </Route>
          <Route path="/adminLogin" element={<AdminLogin/>}></Route >
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
