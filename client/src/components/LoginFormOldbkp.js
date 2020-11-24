import React, { Component } from 'react';
import DashboardSA from './DashboardSA';
import NavigationBar from './NavigationBar';
import axios  from 'axios';
import './LoginForm.css';

class LoginFormOld extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loginSuccess : false,
            firstLoad: true,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogout = (e) => {
        this.setState({ loginSuccess:false, firstLoad:true })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //const { username, password } = this.state;
        //alert(this.state.username);
        //alert(this.state.password);
        const apiUrl = 'http://ts-user-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/Login/'+ this.state.username+ '/'+ this.state.password;
        //alert(apiUrl);
        
        axios.get(apiUrl)
            .then(res => {
                //console.log(res);
                console.log(res.data);
                if(res.data.statusCode===200)
                {
                    //alert('login success');
                    this.setState({loginSuccess: true})
                }
                else
                {
                    //alert('incorrect username / password')
                    this.setState({ loginSuccess: false })
                    this.setState({ firstLoad: false })
                }
            })
    }


    render(){

        if (this.state.loginSuccess===true){
            //alert(this.state.loginSuccess) 
            //return <Redirect to='/App' />
            return(
                <div>
                <NavigationBar />
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

    else{
    
            return(
        //const {username, password} = this.state;
            <div className="container body-content">
                <form onSubmit={this.handleSubmit}>
                    
                        <div className="form-group">
                            <div className="col-md-12 col-xs-12">
                                <h3>Login</h3>
                            </div>
                        </div>

                    <div className="container body-content">
                        
                        <div className="form-group">
                            <div className="col-md-12 col-xs-12">
                                <label htmlFor="Username">User</label>
                                <input className="form-control" id="Username" maxLength={20} name="username" type="text" onChange={this.handleChange} required/>
                                
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12 col-xs-12">
                                <label htmlFor="Password">Password</label>
                                <input className="form-control" id="password" maxLength={30} name="password" type="password" onChange={this.handleChange} required/>
                              
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-0 col-md-10">
                                <input id="Submit1" className="btn btn-success" type="submit" defaultValue="Sign in To Account" style={{'margin-top':20}}/>
                            </div>
                        </div>
                    </div>
                    
                </form>
                {
                    this.state.firstLoad ?
                            <div></div>
                    : 
                            <div className="alert alert-danger" role="alert" style={{ margin: 'auto', width: '50%', padding: '10px'}}>Incorrect username / password</div>
                }

            </div>
        )}

    }
}

export default LoginFormOld;
