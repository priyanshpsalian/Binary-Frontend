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
        trending: "",
        gadgets: "",
        search: ""
    });

    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let numOfRes = 15;
        let result = await fetch(`https://newsapi.org/v2/everything?q=tech&pageSize=${numOfRes}&apiKey=${apikey}`);
        result = await result.json();
        setProducts(result.articles);
        console.log(result);
    };


    const clicked = async (e) => {
        console.log(e.target.innerHTML);
        setParam({...param, trending: e.target.innerHTML });
        // let temp = param.gadgets;

        let result = await fetch(`https://newsapi.org/v2/everything?q=${e.target.innerHTML}&pageSize=24&apiKey=${apikey}`);
        result = await result.json();
        // setParam({...user, gadgets : temp});
        if (result) {
            setProducts(result.articles);
            console.log(result);
        }
    }

    const clicked1 = async (e) => {
        console.log(e.target.innerHTML);
        setParam({...param, gadgets: e.target.innerHTML });

        let result = await fetch(`https://newsapi.org/v2/everything?q=${e.target.innerHTML}&pageSize=24&apiKey=${apikey}`);
        result = await result.json();
        if (result) {
            setProducts(result.articles);
            console.log(result);
        }
    }

    const search = (e) => {
        console.log(e.target.value);
        setParam({search: e.target.value});
    }

    const query = async () => {
        if(param.gadgets !== ""){
            let result = await fetch(`https://newsapi.org/v2/everything?q=${param.gadgets} AND ${param.search}&pageSize=24&apiKey=${apikey}`);
            result = await result.json();
            if (result) {
                setProducts(result.articles);
                console.log(result);
            }
        }else if(param.gadgets === ""){
            let result = await fetch(`https://newsapi.org/v2/everything?q=${param.search}&pageSize=24&apiKey=${apikey}`);
            result = await result.json();
            if (result) {
                setProducts(result.articles);
                console.log(result);
            }
        }
        else{
            let result = await fetch(`https://newsapi.org/v2/everything?q=${param.search} &pageSize=24&apiKey=${apikey}`);
            result = await result.json();
            if (result) {
                setProducts(result.articles);
                console.log(result);
            }
        }

    }

    return (
        <div className="m-5">

            <nav class="navbar navbar-expand-md navbar-light bg-light">

                <div class=" ml-5 mr-5 collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav bg-primary mr-5 ml-5 pt-1 pb-1 pr-3 pl-3">
                        <DropdownButton id="dropdown-basic-buttondropdown-variants-Primary" title={(param.trending)? param.trending : "Any location"}>
                            <Dropdown.Item onClick={clicked}>USA</Dropdown.Item>
                            <Dropdown.Item onClick={clicked}>India</Dropdown.Item>
                            <Dropdown.Item onClick={clicked}>China</Dropdown.Item>
                            <Dropdown.Item onClick={clicked}>Korea</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div class="navbar-nav bg-primary mr-5 pt-1 pb-1 pr-3 pl-3" >
                        <DropdownButton id="dropdown-basic-buttondropdown-variants-Primary" title={(param.gadgets)? param.gadgets : "Trending"}>
                            <Dropdown.Item onClick={clicked1}>Trending</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1}>Crypto currency</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1}>AI</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1} >Covid-19</Dropdown.Item>
                            <Dropdown.Item onClick={clicked1} >Privacy</Dropdown.Item>
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
                        <div class="card mt-4 cround" >
                            <img class="card-img-top" src={p.urlToImage} alt="Card image cap" />
                            <div class="card-body pt-3 pr-1 pb-1 pl-1">
                                <h5 href={p.url} class="card-title font-weight-bold">{p.title}</h5>
                                <p class="card-text ctext">{p.description}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )

};





export default EventSearch;