import React, { Component } from 'react';

import NavbarSuperAdmin from './SuperAdmin/NavbarSuperAdmin';
import DashboardSA from './SuperAdmin/DashboardSA';

import NavbarAdmin from './Admin/NavbarAdmin';

import NavbarUser from './User/NavbarUser';

import '../config';

import axios from 'axios';
import './LoginForm.css';
//import moment from "moment";

class LoginFormOld extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loginSuccess: false,
            loginRole:'none',
            firstLoad: true,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogout = (e) => {
        this.setState({ loginSuccess: false, firstLoad: true })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //alert(moment().format("DD-MM-YYYY"));
        //const { username, password } = this.state;
        //alert(this.state.username);
        //alert(this.state.password);
        const apiUrl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/Login/' + this.state.username + '/' + this.state.password;
        //alert(apiUrl);
        global.config.i18n.welcome.en= "fd";
        alert(global.config.i18n.welcome.en)

        axios.get(apiUrl)
            .then(res => {
                //console.log(res);
                console.log(res.data);
                if (res.data.statusCode === 200) {
                    //alert('login success');
                    this.setState({ loginSuccess: true })
                }
                else {
                    //alert('incorrect username / password')
                    this.setState({ loginSuccess: false })
                    this.setState({ firstLoad: false })
                }
            })
    }


    render() {

        if (this.state.loginSuccess === true) {
            //alert(this.state.loginSuccess) 
            //return <Redirect to='/App' />
            return (
                <div>
                    <NavbarSuperAdmin />
                    <DashboardSA />
                </div>
                /*
                <div className='jumbotron'>
                    <h1>Page redirected on successful login</h1>
                    <br/>
                    <button type='button' className='btn btn-danger' onClick={this.handleLogout}>Logout</button>
                    
                </div>
                */
            )
        }

        else {

            return (
                //const {username, password} = this.state;
                <div style={{ backgroundColor:"#efefef" , height:"100vh", paddingTop:80}}>
                
                    <div style={{backgroundColor:"#f5f2d0", maxWidth:"22%",position:"relative", maxHeight:"100%",margin:"auto", border:"2px solid black", borderRadius:"8px",padding:"10px 10px 25px 10px"}}>
                    
                    <form onSubmit={this.handleSubmit}> 
                             
                            <center><h3>Timesheet Management {global.config.i18n.welcome.en}</h3></center>
                                                   
                                                       
                            <label className="center-block control-label manadatory" htmlFor="Username" style={{ marginTop: "20px", display: "block" }}>Username</label>
                            <input className="form-control col-lg-3 center-block" id="Username" maxLength={20} name="username" type="text" onChange={this.handleChange} required />

                            
                            <label className="center-block control-label manadatory" htmlFor="Password" style={{ marginTop: "30px", display:"block" }}>Password</label>
                            <input className="form-control" id="password" maxLength={20} name="password" type="password" onChange={this.handleChange} required/>
                            
                            <center>
                            <input id="submit" className="btn btn-success" value="Sign in" type="submit" style={{ marginTop: "20px"}}/>
                            <input id="reset" className="btn btn-danger" value="Clear" type="reset" style={{ marginTop: "20px", marginLeft:"10px" }}/>
                            </center>  
                        

                    </form>
                    {
                        this.state.firstLoad ?
                            <div></div>
                            :
                            <div className="alert alert-danger" role="alert" style={{ margin: 'auto',  padding: '10px', marginTop:10, textAlign:"center" }}>Incorrect username / password</div>
                    }
                    </div>
                    
                    </div>
                    

                
            )
        }

    }
}

export default LoginFormOld;
