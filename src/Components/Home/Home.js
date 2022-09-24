import React from "react";
import Nav from "../Header/Navbar/navbarHome";
import HeaderTitle from "../Header/HeaderTitle/headertitleHome";

function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Nav />
        <HeaderTitle />

        <div className="">
          <h2 className="text-center mt-5 mb-4">Meetup</h2>
          <div className="row">
            <div className="card col-md-4">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Join a meet</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
