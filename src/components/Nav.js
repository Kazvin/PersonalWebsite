import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


export function NavBar() {
    return (

        <div className="container-fluid ">
            <nav className="navbar bg-light nav " role="navigation">
                <ul className="nav  mx-auto">
                    <li className="nav-link"><Link to="/"> Home </Link></li>
                    <li className="nav-link"><Link to="/projects"> Projects  </Link></li>
                    <li className="nav-link"><Link to="/contact"> Contact Me  </Link></li>
                    <li className="nav-link"><Link to="/resume"> Resume  </Link></li>
                </ul>
            </nav>
        </div>


    );
}