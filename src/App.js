import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Navbar/navbar';
import PrivateComponent from './Components/PrivateComponent/privatecomponent';
import Login from "./Components/Login/login";
import SignUp from "./Components/SignUp/signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/logout" element={<h1>logout</h1>}></Route>
            <Route path="/profile" element={<h1>profile</h1>}></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
