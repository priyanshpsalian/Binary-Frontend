import React from "react";
import Nav from "../Header/Navbar/navbarHome";
import HeaderTitle from "../Header/HeaderTitle/headertitleHome";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Nav />
        <HeaderTitle />

        <div className="">
          <h2 className="text-center font-weight-bold mt-5 mb-4">
            How Tech Meetup works{" "}
          </h2>
          <h6 className="text-center mb-4">
            Meet new people who share your interests through online and
            in-person events. It’s free to create an account.{" "}
          </h6>

          <div className="row d-flex justify-content-center">
            <div className="card col-md-3">
              <img
                className="card-img-top"
                src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=256"
                height="300px"
                alt="Card image cap"
              />
              <div className="card-body">
                <Link to="/communityIndex" className="font-weight-bold h5">
                  Join a group
                </Link>
                <p className="card-text">
                  Do what you love, meet others who love it, find your
                  community. The rest is history!
                </p>
              </div>
            </div>
            <div className="card col-md-3 ml-5 mr-5">
              <img
                className="card-img-top"
                src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=256"
                height="300px"
                alt="Card image cap"
              />
              <div className="card-body">
                <Link to="/eventSearch" className="font-weight-bold h5">
                  Find an event
                </Link>
                <p className="card-text">
                  Events are happening on just about any topic you can think of,
                  from online gaming and photography to yoga and hiking.
                </p>
              </div>
            </div>
            <div className="card col-md-3">
              <img
                className="card-img-top"
                src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256"
                height="300px"
                alt="Card image cap"
              />
              <div className="card-body">
                <Link to="/form-group" className="font-weight-bold h5">
                  Start a group
                </Link>
                <p className="card-text">
                  You don't have to be an expert to gather people together and
                  explore shared interests.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
