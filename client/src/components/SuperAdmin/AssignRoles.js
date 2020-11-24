import React, { Component } from 'react';
import axios from 'axios';
import './AssignRoles.css';

class AssignRoles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allroles: [],
            loading: true
        }
    }

    async getUsersData() {
        const res = await axios.get('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/GetUserRoles')
        //console.log(res.data)
        this.setState({ loading: false, allroles: res.data })
        console.log(this.state.allroles);
    }

    handleSuperAdmin = (id, name) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UpdateUserRole/' + id;
        console.log(apiurl);
        axios.put(apiurl,
            {
                "userId": id,
                "roleID": 1
            }
            )
            .then(res => {
                if (res.status === 200) {
                    console.log('SuperAdmin rights granted to ID: ' + id+' , Username: '+name);
                    alert('SuperAdmin rights granted to ID: ' + id + ' , Username: ' + name);
                    //this.setState({});
                    window.location.reload();
                    //this.props.history.render('/nav/Project/Index'); 
                    //this.render();
                    //alert('deleted successfully');
                }
            }
            )
    }

    handleAdmin = (id, name) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UpdateUserRole/' + id;
        console.log(apiurl);
        axios.put(apiurl,
            {
                "userId": id,
                "roleID": 2
            }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log('Admin rights granted to ID: ' + id+', Username: '+name)
                    alert('Admin rights granted to ID: ' + id + ' , Username: ' + name);
                    //this.setState({});
                    window.location.reload();
                    //this.props.history.render('/nav/Project/Index'); 
                    //this.render();
                    //alert('deleted successfully');
                }
            }
            )
    }

    handleUser = (id, name) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UpdateUserRole/' + id;
        console.log(apiurl);
        axios.put(apiurl,
            {
                "userId": id,
                "roleID": 3
            }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log('User rights granted to ID: ' + id + ', Username: ' + name)
                    alert('User rights granted to ID: ' + id + ', Username: ' + name);
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
                                <th className="th-sm">Grant Privilege</th>
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
                                            <button disabled={item.assignToAdmin === 'SuperAdmin'} type="button" className="btn btn-success" style={{"margin-right":10}} onClick={() => this.handleSuperAdmin(item.userID,item.username)}>
                                                SuperAdmin
                                            </button>
                                            <button disabled={item.assignToAdmin === 'Admin'}  type="button" className="btn btn-primary" style={{ "margin-right": 10 }} onClick={() => this.handleAdmin(item.userID,item.username)}>
                                                Admin
                                            </button>
                                            <button disabled={item.assignToAdmin === 'User'}  type="button" className="btn btn-warning" onClick={() => this.handleUser(item.userID,item.username)}>
                                                User
                                            </button>
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

export default AssignRoles;