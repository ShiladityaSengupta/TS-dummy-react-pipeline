import React, { Component } from 'react';
import './CreateAdmin.css'
import axios from 'axios';
//import { Link, withRouter } from 'react-router-dom';

class CreateAdmin extends Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            Mobileno: '',
            EmailID: '',
            Gender: '',
            Birthdate: '',
            DateofJoining: '',
            Username: '',
            Password: '',
            ConfirmPassword: '',
            UserAdded: false
        }
    }

    handleSubmit = (e) => {
        //alert('hi');        
        e.preventDefault();
        if (this.state.Password !== this.state.ConfirmPassword) {
            alert('\'Password\' and \'Confirm Password\' do not match');
            window.location.reload();
        }
        axios.post('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/CreateUser/',
            {
                "name": this.state.Name,
                "mobileno": this.state.Mobileno,
                "emailID": this.state.EmailID,
                "username": this.state.Username,
                "password": this.state.Password,
                "confirmPassword": this.state.ConfirmPassword,
                "gender": this.state.Gender,
                "birthdate": this.state.Birthdate,
                "roleID": 2,
                "dateofJoining": this.state.DateofJoining
            }

        )
            .then(res => {
                //alert('hello');
                if (res.status === 201) {
                    console.log('User \'' + this.state.Username + '\' created successfully')
                    this.setState({ UserAdded: true })
                    console.log(this.state.UserAdded)
                }

            })
            .catch((error) => console.log(error.response.request._response));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <h4 className="page-header">Create Admin</h4>

                    <div className="panel panel-default">
                        <div className="panel-heading">All fields are mandatory</div>
                        <div className="panel-body">

                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" htmlFor="Name">Name</label>
                                        <input className="form-control" id="Name" maxLength="40" name="Name" type="text" onChange={this.handleChange} required />
                                        <span className="field-validation-valid text-danger"></span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" htmlFor="Mobileno">Mobile number</label>
                                        <input className="form-control" id="Mobileno" maxLength="10" name="Mobileno" type="number" onChange={this.handleChange} required />
                                        <span className="field-validation-valid text-danger"></span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" htmlFor="EmailID">Email address</label>
                                        <input className="form-control" id="EmailID" maxLength="50" name="EmailID" type="email" onChange={this.handleChange} required />
                                        <span className="field-validation-valid text-danger"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="clearfix"></div>
                                    <div className="col-lg-4" style={{ "marginTop": "20px" }}>


                                        <label className="control-label manadatory" for="Gender">Gender</label>

                                        {/*                                                                 
                                                                <input data-val="true" data-val-required="Gender Required" id="Gender" name="Gender" type="radio" value="M"/> <label for="">Male</label>
                                                                    <input id="Gender" name="Gender" type="radio" value="F"/> <label for="">Female</label>
                                                                        <br/>
                                                                            <span className="field-validation-valid text-danger" data-valmsg-for="Gender" data-valmsg-replace="true"></span>
                                                                             */}


                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="M" id="M" name="Gender" onChange={this.handleChange} required/>
            Male
          </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="F" id="F" name="Gender" onChange={this.handleChange} required/>
            Female
          </label>
                                        </div>


                                    </div>
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" for="Birthdate" style={{ "margin-top": "25px" }}>Date of Birth</label>
                                        <input className="form-control hasDatepicker" id="Birthdate" name="Birthdate" type="date" onChange={this.handleChange} required />
                                        <span className="field-validation-valid text-danger"></span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" for="DateofJoining" style={{ "margin-top": "25px" }}>Date of Joining</label>
                                        <input className="form-control hasDatepicker" id="DateofJoining" name="DateofJoining" type="date" onChange={this.handleChange} required />
                                        <span className="field-validation-valid text-danger"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" for="Username">Username</label>
                                        <input className="form-control valid" id="Username" maxLength="20" name="Username" type="text" onChange={this.handleChange} required />
                                        <span className="text-danger field-validation-valid"></span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" for="Password">Password</label>
                                        <input className="form-control valid" id="Password" maxLength="30" name="Password" type="password" onChange={this.handleChange} required />
                                        <span className="text-danger field-validation-valid"></span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="control-label manadatory" for="ConfirmPassword">Confirm Password</label>
                                        <input className="form-control" id="ConfirmPassword" name="ConfirmPassword" type="password" onChange={this.handleChange} required />
                                        <span className="field-validation-valid text-danger"></span>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-lg-4">
                                        <input type="submit" value="Create Admin" className="btn btn-success" style={{ 'margin-right': 10 }} />
                                        <a className="btn btn-danger" href="/SuperAdmin/CreateAdmin" style={{ 'margin-right': 10 }} >Clear</a>

                                        <a className="btn btn-info" href="/SuperAdmin/AllUsers/Admins">All Admins</a>

                                    </div>
                                </div>


                            </form>
                            {
                                this.state.UserAdded ?
                                    <div className="p-3 mb-2 bg-success text-white" style={{ margin: 'auto', width: '50%', padding: '10px', textAlign: "center", marginTop:10  }}>Admin '{this.state.Username}' created successfully</div>
                                    :
                                    <div></div>
                            }
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
export default CreateAdmin;
