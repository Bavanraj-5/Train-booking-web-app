/* user can see and edit the booking details*/
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Model = props => (
    <table>
    <tr>
        <td>Date</td>
        <td>Destination</td>
        <td>Seats</td>
        <td>Employee</td>
        <td>Payment</td>
    </tr>
    <tr>
        /*displaying the fetched values*/
        <td>{props.model.Date}</td>
        <td>{props.model.Destination}</td>
        <td>{props.model.Seats}</td>
        <td>{props.model.Employee}</td>
        <td>{props.model.Payment}</td>
        <td>
            /*updating using json id*/
            <Link to={"/bookTrain}/"+props.model._id}>Make Changes</Link>
        </td>
    </tr>

    </table>
)

export default class Details extends Component{
    constructor(props){
        super(props);
        this.state = {models: []};
    }

    //this method fetch customer reservation data from database.
    componentDidMount() {
        axios.get('http://localhost:3001/models/')
            .then(response => {
                this.setState({models: response.data});
            })
    }

    detail(){
        return this.state.models.map(function (currentModel, x) {
            return <Model model={currentModel} key={x} />;
        });
    }

    render() {
        return(
            <div>
                <h2>Booking Details</h2>
                <table>
                    <tbody>
                    {this.detail()}
                    </tbody>
                </table>
            </div>
        )
    }
}