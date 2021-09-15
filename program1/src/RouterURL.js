import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";


import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing"
import Detail from "./Pages/Detail"

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/detail/:slug.:id" component={Detail} />
            </div>
        );
    }
}
export default RouterURL;
