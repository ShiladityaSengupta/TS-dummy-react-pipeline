import React, { Component } from 'react';
import axios from 'axios';
import './AllUsersTable.css';

class AllUsersTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allusers: [],
            loading: true,
            users: [],
            
        }
    }

    async getUsersData() {
        const res = await axios.get('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UserDetails')
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
                this.setState({ viewClick: false, users: res.data })
                console.log(res.data);
                console.log(this.state.users)
              /*  alert('USER DETAILS:\n'                    
                    +'\nName: '+res.data.name
                    +'\nEmail: '+res.data.emailID
                    +'\nMobile No.: '+res.data.mobileno
                    +'\nUser ID: '+res.data.userId
                    +'\nUsername: '+res.data.username
                    +'\nDOB: '+res.data.birthdate.toString().substring(0, res.data.birthdate.toString().indexOf('T'))
                    + '\nDOJ: ' + res.data.dateofJoining.toString().substring(0, res.data.dateofJoining.toString().indexOf('T'))
                    ); */
            }
            )
    }


    componentDidMount() {
        this.getUsersData()
    }

    render() {
        let items = this.state.allusers
        if(this.state.viewClick === false){
            const { users } = this.state
           
            return(
                <div id="page-wrapper">
                <div className="row">
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm">User ID</th>
                                <th className="th-sm">Employee ID</th>
                                <th className="th-sm">Name</th>
                                <th className="th-sm">Email ID</th>
                                <th className="th-sm">Mobile No</th>
                                <th className="th-sm">Gender</th>
                                <th className="th-sm">DOB (YYYY-MM-DD)</th>
                                <th className="th-sm">Date of Joining</th>
                               
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            <td>{this.state.users.userId}</td>
                            <td>{this.state.users.employeeID}</td>
                            <td>{this.state.users.name}</td>
                            <td>{this.state.users.emailID}</td>
                            <td>{this.state.users.mobileno}</td>
                            <td>{this.state.users.gender}</td>
                            <td>{this.state.users.birthdate.toString().substring(0, this.state.users.birthdate.toString().indexOf('T'))}</td>
                            <td>{this.state.users.dateofJoining.toString().substring(0, this.state.users.dateofJoining.toString().indexOf('T'))}</td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
            )
        }

        else{
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
}

export default AllUsersTable;