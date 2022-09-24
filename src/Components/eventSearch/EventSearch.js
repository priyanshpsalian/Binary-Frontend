import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Navbar/navbarHome";
import "../Header/style.css";
import "../Header/bootstrap.min.css";
import "./EventSearch.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




// console.log("i am coponentdidmount");
// let res = await fetch(
// `https://newsapi.org/v2/everything?q=tech&apiKey=${apikey}`
// );
// let data = await res.json();

const EventSearch = () => {
    const apikey = "4960f3e852cb41c2a30fa08ee94fe9bb";

    const [products, setProducts] = useState([]);
    const [param, setParam] = useState({
        mode: "",
        city: "",
        search: ""
    });

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let numOfRes = 15;
        let result = await fetch(`http://localhost:5000/event/event`);
        result = await result.json();
        setProducts(result);
        console.log(result);
    };


    const clicked = async (e) => {
        // console.log(e.target.innerHTML);
        // console.log(e.target.value);

        // setParam({ ...param, mode: e.target.innerHTML });
        // // let temp = param.city;

        // let result = await fetch(`https://newsapi.org/v2/everything?q=${e.target.innerHTML}&pageSize=24&apiKey=${apikey}`);
        // result = await result.json();
        // // setParam({...user, city : temp});
        // if (result) {
        //     setProducts(result);
        //     console.log(result);
        // }
        
        let result = await fetch(`http://localhost:5000/event/event`);
        result = await result.json();
        setProducts(() => {
            const filtered = result.filter(function(elem){
                
                return elem.mode.toLowerCase() === e.target.innerHTML.toLowerCase() //bool
            })

            // console.log(filtered, "out");
            return filtered;
        })
    }

    const clicked1 = async (e) => {
        
    if(e.target.innerHTML.toLowerCase() !== "any location"){
        let result = await fetch(`http://localhost:5000/event/event`);
        result = await result.json();
        setProducts(() => {
            const filtered = result.filter(function(elem){
                
                return elem.city.toLowerCase() === e.target.innerHTML.toLowerCase() //bool
            })

            // console.log(filtered, "out");
            return filtered;
        })
    }else{
        setProducts((x) => (x));
    }       
    }

    const search = (e) => {
        // console.log(e.target.value);
        setParam({ search: e.target.value });

    }

    const query = async () => {
        setProducts((arr) => {
            const filtered = arr.filter(function(elem){
                
                return elem.tag.toLowerCase() === param.search.toLowerCase() //bool
            })

            // console.log(filtered, "out");
            return filtered;
        })

    }


    const sendEvent = async(e) =>{
        console.log(e.target.innerHTML);
        alert("Hello! I am an alert box!!");
        let result = await fetch(`http://localhost:5000/join/JoinEvent/${e.target.innerHTML}`, {
            method: "Post",
          });
          result = await result.json();
    };

    return (
        <div className="m-5">

            <nav class="navbar navbar-expand-md navbar-light bg-light">

                <div class=" ml-5 mr-5 collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav bg-primary mr-5 ml-5 pt-1 pb-1 pr-3 pl-3">
                        <DropdownButton id="dropdown-basic-buttondropdown-variants-Primary" title={(param.mode)? param.mode : "Any Type"}>
                            <Dropdown.Item onClick={clicked}>Any Type</Dropdown.Item>
                            <Dropdown.Item onClick={clicked}>Online</Dropdown.Item>
                            <Dropdown.Item onClick={clicked}>Offline</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="navbar-nav bg-primary mr-5 pt-1 pb-1 pr-3 pl-3" >
                        <DropdownButton id="dropdown-basic-buttondropdown-variants-Primary" title={(param.city)? param.city : "Any Location"}>
                            <Dropdown.Item onClick={clicked1}>Any Location</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1}>Mumbai</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1}>Ahmedabad</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1}>Pune</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1} >Bengaluru</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1} >Delhi</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            // value={param.search}
                            onChange={search}
                        />
                        <Button variant="outline-primary " onClick={query}>Search</Button>
                    </Form>

                </div>
            </nav>
            <div class="card-deck mt-5">
                <div class="product-grid">
                    {products.map((p, index) => (
                        <>
                            <div class="card mt-4 cround" >
                                <img class="card-img-top" src={p.imagepath} alt="Card image cap" />
                                <div class="card-body pt-3 pr-1 pb-1 pl-1">
                                    <h5 onClick={sendEvent} class="card-title font-weight-bold">{p.eventname}</h5>
                                    <p class="card-text ctext">{p.descrition}</p>
                                </div>
                                <div className="row mt-3 h6">
                                    <div className="col-md-6">
                                        <span className="font-weight-bold"> Speaker: </span>{p.speaker}
                                    </div>
                                    <div className="col-md-6">
                                    <span className="font-weight-bold">City: </span>{p.city}
                                    </div>
                                </div>
                                <div className="row mt-2 h6">
                                    <div className="col-md-6">
                                    <span className="font-weight-bold">Mode: </span>{p.mode}
                                    </div>
                                    <div className="col-md-6">
                                    <span className="font-weight-bold">Price: </span>{p.price}
                                    </div>
                                </div>
                                <div className="row mt-2 h6">
                                    <div className="col-md-6">
                                    <span className="font-weight-bold">Total seats: </span>{p.totalseats}
                                    </div>
                                    <div className="col-md-6">
                                    <span className="font-weight-bold">Seats remaining: </span>{p.emptyseats}
                                    </div>
                                </div>
                                <div class="card-footer mt-3">
                                    <div class="text-muted h6 font-weight-bold">Date : {p.date}</div>
                                </div>
                            

                            </div>
                        </>


                    ))}
                </div>

            </div>
        </div>
    )
};

export default EventSearch;