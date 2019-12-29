/*The main page where user inputs train booking details*/
import React, {Component} from 'react';
import axios from 'axios';


export default class BookTrain extends Component{
    constructor(props){
        super(props);

        this.onDate = this.onDate.bind(this);
        this.onDestination = this.onDestination.bind(this);
        this.onSeats = this.onSeats.bind(this);
        this.onEmployee = this.onEmployee.bind(this);
        this.onPayment = this.onPayment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            Date: '',
            Destination: '',
            Seats: '',
            Employee: '',
            Payment: '',
        }
    }

    /* These methods can set states according to the html user inputs*/
    onDate(e){
        this.setState({
            Date: e.target.value
        });
    }

    onDestination(e){
        this.setState({
            Destination: e.target.value
        });
    }

    onSeats(e){
        this.setState({
            Seats: e.target.value
        });
    }

    onEmployee(e){
        this.setState({
            Employee: e.target.value
        });
    }

    onPayment(e){
        this.setState({
            Payment: e.target.value
        });
    }
    //

    /* Method which runs when clicking submit button */
    onSubmit(e){
        /*to prevent default onSubmit event*/
        e.preventDefault();

        const newModel = {
            Date: this.state.Date,
            Destination: this.state.Destination,
            Seats: this.state.Seats,
            Employee: this.state.Employee,
            Payment: this.state.Payment,
        }

        console.log(`Date:: ${this.state.Date}`);
        console.log(`Destination:: ${this.state.Destination}`);
        console.log(`Seats:: ${this.state.Seats}`);
        console.log(`Employee:: ${this.state.Employee}`);
        console.log(`Payment:: ${this.state.Payment}`);

        /* sending post request to backend*/
        axios.post('http://localhost:3001/models/add', newModel)
            .then(res => console.log(res.data));

        /* clearing the states after submit*/
        this.setState({
            Date: '',
            Destination: '',
            Seats: '',
            Employee: '',
            Payment: '',
        });
        alert("Submitted");
    }

    render(){
        return(
            <div>

                <form onSubmit={this.onSubmit} className="form-horizontal">
                    <h3> Welcome </h3>

                    <div className="form-group">
                        <label>Date: </label>
                        <div className="col-sm-6">
                            <input className="form-control" type="date" value={this.state.Date} onChange={this.onDate} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Destination: </label>
                        <div className="col-sm-6">
                            <input className="form-control" type="text" value={this.state.Destination} onChange={this.onDestination} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Seats: </label>
                        <div className="col-sm-6">
                            <input className="form-control" type="number" value={this.state.Seats} onChange={this.onSeats} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Government Employee: </label>&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="radio" id="EmpYes" value="Yes" name="EmployeeType" checked={this.state.Employee==='Yes'} onChange={this.onEmployee} />
                        <label>Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="radio" id="EmpNo" value="No" name="EmployeeType" checked={this.state.Employee==='No'} onChange={this.onEmployee} />
                        <label>No</label>
                    </div>

                    <div className="form-group">
                        <label>Payment Type: </label>&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="radio" id="Mobile" value="Mobile" name="PaymentType" checked={this.state.Payment==='Mobile'} onChange={this.onPayment} />
                        <label>Mobile Payment</label>&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="radio" id="CC" value="CC" name="PaymentType" checked={this.state.Payment==='CC'} onChange={this.onPayment} />
                        <label>Credit Card</label>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-6">
                            <input className="btn btn-danger" type="submit" value="Submit" />
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}