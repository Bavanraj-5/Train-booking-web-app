import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import BookTrain from "./MainClass/bookTrain";
import Account from "./MainClass/account";
import Mobile from "./MainClass/mobilePayment";
import Credit from "./MainClass/creditPayment";
import Details from "./MainClass/viewDetails";

class App extends Component {
    render() {
        return (
            <Router>
            <div className="container" >
                <h1> Train Booking</h1>
                <nav>
                    <Link to="/bookTrain"> Train Booking </Link>&nbsp;&nbsp;
                    <Link to="/account"> Login </Link>&nbsp;&nbsp;
                    <Link to="/viewDetails"> Details </Link>
                </nav>
                <Route path="/bookTrain" exact component={BookTrain} />
                <Route path="/account" exact component={Account} />
                <Route path="/mobilePayment" exact component={Mobile} />
                <Route path="/creditPayment" exact component={Credit} />
                <Route path="/viewDetails" exact component={Details} />

            </div>
            </Router>
        );
    }
}

export default App;
