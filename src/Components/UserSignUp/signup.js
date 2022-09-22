import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Navbar/navbarHome";
import "../Header/style.css";
import "../Header/bootstrap.min.css";
import "./signup.css"


const UserSignUp = () => {
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
    interests: "",
    occupation: "",
    comunity: "",
    location: "",

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
      let result = await fetch("http://localhost:5000/user/UserRegister", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      // console.log(result, "result");
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      // <Redirect to="/" />;
    } else {
      alert("invalid");
    }
  };
  return (
    <>
      {/*<div className="register">
     <h1>Register User</h1>
    <input
      className="inputBox"
      name="firstname"
      type="text"
      value={user.firstname}
      onChange={handleChange}
      placeholder="Enter First Name"
    />

    
    <button className="appButton" onClick={register} type="button">
      Sign Up
    </button> */}

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
          <div className="suForm row ml-5">
            <div className="col-md-10 mx-auto">
              <div className="apply-wrapper mt-5">
                <h3>Fill the details to register</h3>

                <form action="/register" method="post" className="apply_form bg_dark_9 p-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_first_name">Enter First Name</label>
                        <input type="text" name="firstname" id="firstname" required className="form-control"
                          placeholder="First Name" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_last_name">Enter Last Name</label>
                        <input type="text" className="form-control" name="lastname" id="lastname" required
                          placeholder="Last Name" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_phone_number">Phone Number</label>
                        <input type="text" name="phone" id="phone" required className="form-control"
                          placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Email Address</label>
                        <input type="text" className="form-control" name="email" id="email" required
                          placeholder="Email Address" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">Gender</label>
                        <input type="text" name="gender" id="gender" required className="form-control"
                          placeholder="Gender" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Age</label>
                        <input type="text" className="form-control" name="age" id="age" required
                          placeholder="Age" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">Interests</label>
                        <input type="text" name="intersets" id="intersets" required className="form-control"
                          placeholder="Interests" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Occupation</label>
                        <input type="text" className="form-control" name="occupation" id="occupation" required
                          placeholder="Occupation" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">Committee</label>
                        <input type="text" name="committee" id="committee" required className="form-control"
                          placeholder="Committee" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Address</label>
                        <input type="text" className="form-control" name="location" id="location" required
                          placeholder="Address" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">City</label>
                        <input type="text" name="city" id="city" required className="form-control"
                          placeholder="City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">State</label>
                        <input type="text" className="form-control" name="state" id="state" required
                          placeholder="State" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">Country</label>
                        <input type="text" name="country" id="country" required className="form-control"
                          placeholder="Country" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Description</label>
                        <input type="text" className="form-control" name="description" id="description" required
                          placeholder="Description" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_city">Password</label>
                        <input type="password" name="password" id="password" required
                          className="form-control" placeholder="Password" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_last_name">Confirm Password</label>
                        <input type="password" name="confirmpassword" id="confirmpassword" required
                          className="form-control" placeholder="Confirm Password" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group mt-2 mb-4 mx-auto text-center">
                      <label for="img">Upload Image</label>
                      <input type="file" name="Userimg" id="Userimg" required
                        className="form-control" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mx-auto text-center">
                      <button type="submit" className="pri-btn mt-3">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>

    </>
  );
};
export default UserSignUp;
