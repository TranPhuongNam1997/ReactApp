import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <NavLink className="navbar-brand" to="/">Start Bootstrap</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/aboutus">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/pricing">Pricing</NavLink>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;