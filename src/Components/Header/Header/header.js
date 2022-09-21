import React from "react";
import Nav from "../Navbar/navbar";
import HeaderTitle from "../HeaderTitle/headertitle";
import './style.css';
import './bootstrap.min.css';
const header=()=>{
    return(
        <>
        <div class="page-wrapper">
        <Nav/>
        <HeaderTitle/>
        </div>
        </>
    )
}
export default header;