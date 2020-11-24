import React, { Component } from 'react';

import NavbarSuperAdmin from './SuperAdmin/NavbarSuperAdmin';
import DashboardSA from './SuperAdmin/DashboardSA';

import NavbarAdmin from './Admin/NavbarAdmin';
import DashboardAdm from './Admin/DashboardAdm';

import NavbarUser from './User/NavbarUser';
import DashboardUser from './User/DashboardUser';

//import captcha from './assets/images/captcha.jpg';
import captchabackground from './assets/images/captchabackground.jpg';

import axios from 'axios';
import './LoginForm.css';

//import moment from "moment";

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {

            username: '',
            password: '',
            loginSuccess: false,
            loginRole: 'none',
            firstLoad: true,

            roleID:'',

            CaptchaCode:'',
            CaptchaInputText:'',
                        
        };

        localStorage.setItem("LoggedInUserId", "");
        localStorage.setItem("LoggedInUsername", "");
        localStorage.setItem("LoggedInPassword", "");
        localStorage.setItem("LoggedInRoleID", "");
        
    }

    componentDidMount(){
        axios.get('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/GetCaptcha')
            .then(
                res => {
                    //alert(res.data);
                    this.setState({CaptchaCode:res.data});
                }
            )
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogout = (e) => {
        this.setState({ loginSuccess: false, firstLoad: true })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //alert(this.state.CaptchaInputText.toUpperCase())
        //alert(this.state.CaptchaCode.toUpperCase())

        //localStorage.setItem("greeting","hi");

        if (this.state.CaptchaInputText.toUpperCase()!==this.state.CaptchaCode.toUpperCase())
        {
            alert("Enter Captcha code correctly");
            window.location.reload();
        }
        //alert(this.state.username);
        //alert(this.state.password);
        //alert(this.state.CaptchaInputText);

        //alert(moment().format("DD-MM-YYYY"));
        //const { username, password } = this.state;
        //alert(this.state.username);
        //alert(this.state.password);
        const apiUrl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/Login/' + this.state.username + '/' + this.state.password;
        //alert(apiUrl);

        axios.get(apiUrl)
            .then(
                res => {
                if(res.status===200)
                {
                //console.log(res);
                //alert(res.status);
                //alert(res.data[0].userId);
                //console.log(res.data);
                //alert('login success');

                localStorage.setItem("LoggedInUserId", res.data[0].userId);
                localStorage.setItem("LoggedInUsername", res.data[0].username);
                localStorage.setItem("LoggedInPassword", res.data[0].password);
                localStorage.setItem("LoggedInRoleID", res.data[0].roleID);

                this.setState({ loginSuccess: true, roleID: res.data[0].roleID})                
            }
        
            })
            .catch(err=>{

                localStorage.setItem("LoggedInUserId", "");
                localStorage.setItem("LoggedInUsername", "");
                localStorage.setItem("LoggedInPassword", "");
                localStorage.setItem("LoggedInRoleID", "");

                this.setState({ loginSuccess: false })
                this.setState({ firstLoad: false })
            })
    }

    render() {

        if (this.state.loginSuccess === true) {
            //alert(this.state.loginSuccess) 
            //return <Redirect to='/App' />
            if(this.state.roleID===1)
            {
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
            
            else if(this.state.roleID===2)
            {
            return (
                <div>
                    <NavbarAdmin />
                    <DashboardAdm />
                </div>
            )
            }
            
            else if(this.state.roleID===3)
            {
            return (
                <div>
                    <NavbarUser />
                    <DashboardUser />
                </div>
            )
            }

            else
            {
                return(
                    <div className='jumbotron'>
                        <h1>Page redirected on successful login but no role found</h1>
                        <br />
                        <button type='button' className='btn btn-danger' onClick={this.handleLogout}>Logout</button>
                    </div>
                )
            }
        }

        else {

            return (

                <div style={{backgroundColor:"white", height:"100vh"}}>                   

                    <div className="container body-content">
                          
                        <form onSubmit={this.handleSubmit}>
                            
                        <div className="login-panel" style={{ padding: "auto", margin: "auto", marginTop:"5vw" }}>

                            <div className="form-group">
                                <div className="col-md-12 col-xs-12">
                                    <h3>Login</h3>
                                </div>
                            </div>
                            <br /><br /><br />

                            <div className="form-group">
                                <div className="col-md-12 col-xs-12">
                                    <label for="Username">Username</label>
                                    <input className="form-control" id="username"name="username" type="text" onChange={this.handleChange} required/>
                                    <span className="field-validation-valid text-danger" data-valmsg-for="Username"></span>
                                </div>
                            </div>
                            <br /><br /><br />

                            <div className="form-group">
                                <div className="col-md-12 col-xs-12">
                                    <label for="Password">Password</label>
                                    <input className="form-control" id="password" name="password" type="password" onChange={this.handleChange} required/>
                                    <span className="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                                </div>
                            </div>
                            <br /><br /><br />

                            <div className="form-group">
                                <div className="col-md-12 col-xs-12">
                                    <div id="captcha" className="captcha">
                                        
                                        <br/>
                                        {/*<img id="CaptchaImage" src={captcha} alt="captcha load error"/>*/}
                                            <div style={{ backgroundImage: `url(${captchabackground})`, color: "blue", fontSize: "40px", opacity: 0.8, width: "150px", padding: "14px", marginBottom:"2px", fontFamily:"Syne Mono, monospace", display: "inline-block"}}>
                                            <center>
                                                {this.state.CaptchaCode.toUpperCase()}
                                            </center>
                                        </div>

                                        <div style={{display:"inline-block", margin:"10px"}}>
                                        <label for="Captcha">Captcha</label>
                                        <br/>
                                        <a href="/">
                                           Refresh
                                        </a>                                        
                                        <br/>
                                        Enter the text you see above
                                        </div>
                                        <br />
                                        <input id="CaptchaInputText" name="CaptchaInputText" autocomplete="off" autocorrect="off" type="text" onChange={this.handleChange} required/>
                                        <br/>
                                        <span className="field-validation-valid" data-valmsg-for="CaptchaInputText" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="col-md-offset-0 col-md-10">
                                    <input id="Submit1" className="btn btn-success" type="submit" value="Sign in To Account"/>
                                </div>
                            </div>

                        </div>

                        </form>                        
                        <hr/>
                        <footer>
                            <p>
                                {
                                    this.state.firstLoad ?
                                        <div></div>
                                        :
                                        <div className="alert alert-danger" role="alert" style={{ margin: 'auto', padding: '20px', marginTop: 10, textAlign: "center", width:"fit-Content" }}>
                                            <i className="fa fa-user-circle" style={{fontSize:"20px"}}> Incorrect username / password</i>
                                        </div>
                                }
                            </p>
                        </footer>
                    </div>

                </div>
            )
        } 
    }
}

export default LoginForm;
