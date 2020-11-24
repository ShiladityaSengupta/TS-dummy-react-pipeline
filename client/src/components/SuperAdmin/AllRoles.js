import React, { Component } from 'react';
import axios from 'axios';
import './AllRoles.css';

class AllRoles extends Component {
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
                            </tr>
                        </thead>

                        <tbody>

                            {
                                items.map(item =>
                                    <tr key={item.userID}>
                                        <td>{item.userID}</td>
                                        <td>{item.username}</td>
                                        <td>{item.assignToAdmin}</td>
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

export default AllRoles;