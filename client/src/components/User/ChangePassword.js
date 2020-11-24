import React, { Component } from 'react';
import axios from 'axios';

class ChangePassword extends Component {

    constructor() {
        super();
        this.state = {
            userId: localStorage.getItem("LoggedInUserId"),
            username: localStorage.getItem("LoggedInUsername"),
            loggedPassword: localStorage.getItem("LoggedInPassword"),

            OldPassword:'',
            NewPassword:'',            
        }
    }

        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }

        handleChangePassword = (e) => {
        e.preventDefault();
        //alert(id);
        //alert('hi');
        //alert(this.state.formconfirmpassword);
        if (this.state.OldPassword.length === 0 || this.state.NewPassword.length === 0) {
            alert('Password cannot be null')
            window.location.reload();
        }
        if (this.state.OldPassword !== this.state.loggedPassword) {
            alert('Old password does not match. Enter correctly.')
            window.location.reload();
        }

        const apiurl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/ResetPassword/' + this.state.userId;
        console.log(apiurl);
        axios.put(apiurl,
            {
                "userId": this.state.userId,
                "password": this.state.NewPassword,
                "confirmPassword": this.state.NewPassword
            }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log('Password updated for ' + this.state.username)
                    alert('Password updated for ' + this.state.username);
                    //this.setState({});
                    //window.location.reload();
                    //this.props.history.render('/nav/Project/Index'); 
                    //this.render();
                    //alert('deleted successfully');
                }
            }
            )
    }

    render() {
        return(
    
    <div id="page-wrapper">
    <div className="row">
            <div className="col-lg-6" style={{marginTop:30}}>
                <div className="panel panel-default">
                <div className="panel-heading">Change Password</div>
                    <div className="panel-body">

                        <form onSubmit={this.handleChangePassword}>
                            
                            <div className="form-group">

                                <label>Old Password</label>

                                <input className="form-control" name="OldPassword" id="OldPassword" type="password" onChange={this.handleChange} required/>

                            </div>

                            <div className="form-group">

                                <label>New Password</label>

                                <input className="form-control" name="NewPassword" id="NewPassword" type="password" onChange={this.handleChange} required/>

                            </div>

                            <div className="form-group">

                                <input type="submit" value="Update Password" className="btn btn-default"/>
                            
                            </div>

                        </form>

                    </div>
                    </div>
                </div>
            </div>
        </div>
                           
        )
    }
}
export default ChangePassword;