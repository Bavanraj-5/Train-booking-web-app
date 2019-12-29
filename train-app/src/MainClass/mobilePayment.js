/* Page for the mobile payments*/
import React, {Component} from 'react';
import axios from 'axios';

export default class Mobile extends Component{
    constructor(props){
        super(props);

        this.onName = this.onName.bind(this);
        this.onAmount = this.onAmount.bind(this);
        this.onPhone = this.onPhone.bind(this);
        this.onPin = this.onPin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            Name: '',
            Amount: '',
            Phone: '',
            Pin: '',
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

    onPhone(e){
        this.setState({
            Phone: e.target.value
        });
    }

    onPin(e){
        this.setState({
            Pin: e.target.value
        });
    }

    /* Method which runs when clicking submit button */
    onSubmit(e){
        /*to prevent default onSubmit event*/
        e.preventDefault();

        const newModel = {
            Name: this.state.Name,
            Amount: this.state.Amount,
            Phone: this.state.Phone,
            Pin: this.state.Pin,
        }

        /* sending mobile payment details using post request*/
        axios.post('http://localhost:3001/payemnts/add', newModel)
            .then(res => console.log(res.data));

        console.log(`Name:: ${this.state.Name}`);
        console.log(`Amount:: ${this.state.Amount}`);
        console.log(`Phone:: ${this.state.Phone}`);
        console.log(`Pin:: ${this.state.Pin}`);

        this.setState({
            Name: '',
            Amount: '',
            Phone: '',
            Pin: '',
        });
        alert("Submitted");
    }

    render(){
        return(
            <div>

                <form onSubmit={this.onSubmit} className="form-horizontal">
                    <div>
                        <h3> Dialog Mobile Payment </h3>

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
                            <label>Dialog Phone Number </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Phone} type="text" onChange={this.onPhone}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Pin Number </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Pin} type="password" onChange={this.onPin}/>
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