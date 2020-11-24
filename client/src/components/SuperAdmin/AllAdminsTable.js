import React, { Component } from 'react';
import axios from 'axios';
import './AllAdminsTable.css';

class AllAdminsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allusers: [],
            loading: true
        }
    }

    async getUsersData() {
        const res = await axios.get('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/GetAllAdmins')
        //console.log(res.data)
        this.setState({ loading: false, allusers: res.data })
        console.log(this.state.allusers);
    }


    handleView = (id) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UserDetails/' + id;
        axios.get(apiurl)
            .then(res => {
                //console.log(res);
                console.log(res.data);
                alert('ADMIN DETAILS:\n'
                    + '\nName: ' + res.data.name
                    + '\nEmail: ' + res.data.emailID
                    + '\nMobile No.: ' + res.data.mobileno
                    + '\nUser ID: ' + res.data.userId
                    + '\nUsername: ' + res.data.username
                    + '\nDOB: ' + res.data.birthdate.toString().substring(0, res.data.birthdate.toString().indexOf('T'))
                    + '\nDOJ: ' + res.data.dateofJoining.toString().substring(0, res.data.dateofJoining.toString().indexOf('T'))
                );
            }
            )
    }


    componentDidMount() {
        this.getUsersData()
    }

    render() {
        let items = this.state.allusers
        return (
            <div id="page-wrapper">
                <div className="row">
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm">User ID</th>
                                <th className="th-sm">Name</th>
                                <th className="th-sm">Email ID</th>
                                <th className="th-sm">Mobile No</th>
                                <th className="th-sm">Gender</th>
                                <th className="th-sm">DOB (YYYY-MM-DD)</th>
                                <th className="th-sm">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                items.map(item =>
                                    <tr key={item.userId}>
                                        <td>{item.userId}</td>
                                        <td>{item.name}</td>
                                        <td>{item.emailID}</td>
                                        <td>{item.mobileno}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            {item.birthdate.toString().substring(0, item.birthdate.toString().indexOf('T'))}
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info btn-sm" onClick={() => this.handleView(item.userId)}>View</button>
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

export default AllAdminsTable;