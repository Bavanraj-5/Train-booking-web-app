/* page for the credit card payments */
import React, {Component} from 'react';
import axios from 'axios';

export default class Credit extends Component{
    constructor(props){
        super(props);

        this.onName = this.onName.bind(this);
        this.onAmount = this.onAmount.bind(this);
        this.onEmail = this.onEmail.bind(this);
        this.onCreditNo = this.onCreditNo.bind(this);
        this.onCvc = this.onCvc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            Name: '',
            Amount: '',
            Email: '',
            CreditNo: '',
            Cvc: '',
        }
    }

    /* These methods can set states according to the html user inputs*/
    onName(e){
        this.setState({
            Name: e.target.value
        });
    }

    onAmount(e){
        this.setState({
            Amount: e.target.value
        });
    }

    onEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onCreditNo(e){
        this.setState({
            CreditNo: e.target.value
        });
    }

    onCvc(e){
        this.setState({
            Cvc: e.target.value
        });
    }

    /* Method which runs when clicking submit button */
    onSubmit(e){
        /*to prevent default onSubmit event*/
        e.preventDefault();

        console.log(`Name:: ${this.state.Name}`);
        console.log(`Amount:: ${this.state.Amount}`);
        console.log(`CreditNo:: ${this.state.CreditNo}`);
        console.log(`Cvc:: ${this.state.Cvc}`);

        const newModel = {
            Name: this.state.Name,
            Amount: this.state.Amount,
            Email: this.state.Email,
            CreditNo: this.state.CreditNo,
            Cvc: this.state.Cvc,
        }

        /* sending credit card payment details using post request*/
        axios.post('http://localhost:3001/payemnts/add', newModel)
            .then(res => console.log(res.data));

        this.setState({
            Name: '',
            Amount: '',
            Email: '',
            CreditNo: '',
            Cvc: '',
        });
        alert("Submitted");
    }

    render(){
        return(
            <div>

                <form onSubmit={this.onSubmit} className="form-horizontal">
                    <div>
                        <h3> Credit Card Payment </h3>

                        <div className="form-group">
                            <label>Customer Name </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Name} type="text" onChange={this.onName}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Amount </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Amount} type="text" onChange={this.onAmount}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Email} type="email" onChange={this.onEmail}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Credit Card Number </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.CreditNo} type="text" onChange={this.onCreditNo}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>CVC Number </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Cvc} type="password" onChange={this.onCvc}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-6">
                                <input className="btn btn-danger" type="submit" value="Submit"/>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}