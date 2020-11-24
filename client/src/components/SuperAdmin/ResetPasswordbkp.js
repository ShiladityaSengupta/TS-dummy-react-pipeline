import React, { Component }  from 'react';
import axios from 'axios';
import './ResetPassword.css';
//import Modal from 'react-modal';
//import ModalButton from './modal-button';
//import Popup from './Popup';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allroles: [],
            loading: true,
            formnewpassword:'',
            formconfirmpassword:''
        }
       
    }

    

    async getUsersData() {
        const res = await axios.get('http://ts-user-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/GetUserRoles')
        //console.log(res.data)
        this.setState({ loading: false, allroles: res.data})
        console.log(this.state.allroles);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleResetPassword = (id, username) => {
        //alert(id);
        //alert('hi');
        //alert(this.state.formconfirmpassword);
        if(this.state.formnewpassword!==this.state.formconfirmpassword)
        {
            alert('\'New Password\' and \'Confirm Password\' do not match. Enter correctly.')
            window.location.reload();
        }

        const apiurl = 'http://ts-user-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/ResetPassword/' + id;
        console.log(apiurl);
        axios.put(apiurl,
            {
                "userId": id,
                "password": this.state.formnewpassword,
                "confirmPassword": this.state.formconfirmpassword
            }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log('Password updated for ' + username)
                    alert('Password updated for ' + username);
                    //this.setState({});
                    window.location.reload();
                    //this.props.history.render('/nav/Project/Index'); 
                    //this.render();
                    //alert('deleted successfully');
                }
            }
            )
    }

    

    componentDidMount() {
        this.getUsersData()
    }

    render() {
        let items = this.state.allroles
        return (
            <div id="page-wrapper">
                <div className="row">
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm">User ID</th>
                                <th className="th-sm">UserName</th>
                                <th className="th-sm">Role</th>
                                <th className="th-sm">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                items.map(item =>
                                    <tr key={item.userID}>
                                        <td>{item.userID}</td>
                                        <td>{item.username}</td>
                                        <td>{item.assignToAdmin}</td>
                                        <td>

                                        <Popup trigger={<button className="btn btn-warning">Reset Password</button>}>
                                                <div className="w3-container w3-red">
                                                    <div>
                                                        <form>
                                                        <label style={{ "margin-right": 10 }}>UserName:
                                                            <input id="formusername" type="text" autocomplete="off" value={item.username} disabled style={{ "backgroundColor": "yellow", "border": "1px solid black", "border-radius": "3px", "width": "106%", "padding-left":"5px" }}/>
                                                        </label>
                                                        <label style={{ "margin-right": 10 }}>New Password:
                                                            <input id="formnewpassword" name="formnewpassword" type="text" autocomplete="off" onChange={this.handleChange} style={{ "backgroundColor": "yellow", "border": "1px solid black", "border-radius": "3px", "width": "106%", "padding-left": "5px" }}/>
                                                        </label>
                                                        <label style={{ "margin-right": 10 }}>Confirm Password:
                                                            <input id="formconfirmpassword" name="formconfirmpassword" type="text" autocomplete="off" onChange={this.handleChange} style={{ "backgroundColor": "yellow", "border": "1px solid black", "border-radius": "3px", "width": "106%", "padding-left": "5px" }}/>
                                                        </label>
                                                        <br/>
                                                        
                                                        <button type="button" className="btn btn-danger" style={{"margin-right":5}} onClick={() => this.handleResetPassword(item.userID, item.username)}>
                                                            Update
                                                        </button>
                                                            <button type="button" className="btn btn-info" onClick={event => window.location.href = '/nav/ResetPassword/Index'}>
                                                            Cancel
                                                        </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Popup>

                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ResetPassword;