import React from 'react'
import Nav from '../Header/Navbar/navbarHome';
import HeaderTitle from '../Header/HeaderTitle/headertitleHome';

function Home() {
  return (
    <>
        <div className="page-wrapper">
        <Nav/>
        <HeaderTitle/>
        <h1>HOME PAGE</h1>
        </div>
    </>
  )
}

export default Home