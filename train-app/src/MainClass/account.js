/* page for user account creation*/
import React, {Component} from 'react';
import axios from 'axios';

export default class Account extends Component{
    constructor(props){
        super(props);

        this.onUserName = this.onUserName.bind(this);
        this.onEmail = this.onEmail.bind(this);
        this.onPassword = this.onPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            UserName: '',
            Email: '',
            Password: '',
        }
    }

    onUserName(e){
        this.setState({
            UserName: e.target.value
        });
    }

    onEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onPassword(e){
        this.setState({
            Password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Username:: ${this.state.UserName}`);
        console.log(`Email:: ${this.state.Email}`);
        console.log(`Password:: ${this.state.Password}`);

        this.setState({
            UserName: '',
            Email: '',
            Password: '',
        })
        alert("Submitted");
    }

    render(){
        return(
            <div>

                <form onSubmit={this.onSubmit} className="form-horizontal">
                    <div>
                        <h3> User Account </h3>
                        <div className="form-group">
                            <label>Customer Name </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.UserName} type="text" onChange={this.onUserName}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email Address </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Email} type="email" onChange={this.onEmail} placeholder="abcd@gmail.com"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Password </label>
                            <div className="col-sm-6">
                                <input className="form-control" value={this.state.Password} type="password" onChange={this.onPassword} placeholder="*******"/>
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