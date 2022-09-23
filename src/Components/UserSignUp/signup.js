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
    hobby: "",
    address: "",
    city:"",
    state:"",
    country:"",
    description:"",
    img:""
  });
  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = async (inp) => {
     console.log(user, 'helo');
    const {
      firstname,
      lastname,
      email,
      age,
      phone,
      gender,
      password,
      reEnterPassword,    
      interests,
      occupation,
      hobby,
      address,
      city,
      state,
      country,
      description,
      img
    } = user;


      // console.log("ll");
      let result = await fetch("http://localhost:5000/user/UserRegister", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      let stat = await result.status;
      // console.log(typeof(stat));
      if(stat === 201){
      result = await result.json();
      console.log(result, "result");
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
      // <Redirect to="/" />;
    
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
          className="page-header d-flex justify-content-center"
          // style="background-image: url(assets/images/background/inner-banner-bg.png);"
          style={{
            // backgroundImage: `url(process.env.PUBLIC_URL + '${bg})`,
            paddingTop: '150px',
            backgroundImage: `url(banner-bg-1-1.png)`,
          }}
        >
          <div className="suForm row">
            <div className="col-md-12 mx-auto">
              <div className="apply-wrapper mt-5">
                <h3 className="text-center text-white">Registration form</h3>

                <div  className="apply_form bg_dark_9 p-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_first_name">Enter First Name</label>
                        <input type="text" value={user.firstname} onChange={handleChange} name="firstname" id="firstname" required className="form-control"
                          placeholder="First Name" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_last_name">Enter Last Name</label>
                        <input type="text" value={user.lastname} onChange={handleChange} className="form-control" name="lastname" id="lastname" required
                          placeholder="Last Name" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_phone_number">Phone Number</label>
                        <input type="text" value={user.phone} onChange={handleChange} name="phone" id="phone" required className="form-control"
                          placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Email Address</label>
                        <input type="text" value={user.email} onChange={handleChange}  className="form-control" name="email" id="email" required
                          placeholder="Email Address" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">Gender</label>
                        <input type="text" value={user.gender} onChange={handleChange}  name="gender" id="gender" required className="form-control"
                          placeholder="Gender" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Age</label>
                        <input type="text" value={user.age} onChange={handleChange}  className="form-control" name="age" id="age" required
                          placeholder="Age" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">Interests</label>
                        <input type="text" value={user.interests} onChange={handleChange}  name="interests" id="intersets" className="form-control"
                          placeholder="Interests" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Occupation</label>
                        <input type="text" value={user.occupation} onChange={handleChange}  className="form-control" name="occupation" id="occupation"
                          placeholder="Occupation" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">hobby</label>
                        <input type="text" value={user.hobby} onChange={handleChange}  name="hobby" id="committee" className="form-control"
                          placeholder="hobby" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Address</label>
                        <input type="text" value={user.address} onChange={handleChange}  className="form-control" name="address" id="location"
                          placeholder="Address" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">City</label>
                        <input type="text" value={user.city} onChange={handleChange}  name="city" id="city" className="form-control"
                          placeholder="City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">State</label>
                        <input type="text" value={user.state} onChange={handleChange}  className="form-control" name="state" id="state"
                          placeholder="State" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_gender">Country</label>
                        <input type="text" value={user.country} onChange={handleChange}  name="country" id="country" className="form-control"
                          placeholder="Country" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_email">Description</label>
                        <input type="text" value={user.description} onChange={handleChange}  className="form-control" name="description" id="description"
                          placeholder="Description" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="user_city">Password</label>
                        <input type="password" value={user.password} onChange={handleChange}  name="password" id="password" required
                          className="form-control" placeholder="Password" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="confirm">Confirm Password</label>
                        <input type="password" value={user.reEnterPassword} onChange={handleChange}  name="reEnterPassword" id="confirm" required
                          className="form-control" placeholder="Confirm Password" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-12 mt-2 mb-4 mx-auto text-center">
                      <label for="img">Upload Image</label>
                      <input type="text" value={user.img} onChange={handleChange}  name="img" id="img"
                        className="form-control" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mx-auto text-center">
                      <button onClick={register} className="btn btn-primary btn-lg col-md-12 mt-3">Register</button>``
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </>
  );
};
export default UserSignUp;
