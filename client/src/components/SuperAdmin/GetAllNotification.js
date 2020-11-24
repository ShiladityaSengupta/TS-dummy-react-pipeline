import React, { Component } from 'react';
import axios from 'axios';
import './GetAllNotification.css';

class GetAllNotification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
            loading: true
        }
    }

    

    async getUsersData() {
        const res = await axios.get('http://ts-notification-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Notification/getAllNotifications')
        //console.log(res.data)
        this.setState({ loading: false, notifications: res.data })
        console.log(this.state.notifications);
    }

    handleDeactivate = (id) => {
        //alert(id);
        const apiurl = 'http://ts-notification-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Notification/deactivateNotification/' + id;
        console.log(apiurl);
        axios.put(apiurl,
            {
                "notificationsId": id,
                "status": "Deactivated"
            }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log('Notification ' +id+' deactivated')
                    alert('Notification ' + id + ' deactivated');
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
        let items = this.state.notifications
        return (
            <div id="page-wrapper">
                <div className="row">
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                            <th className="th-sm">Message</th>
                            <th className="th-sm">Created On (YYYY-MM-DD)</th>
                            <th className="th-sm">Status</th>
                            <th className="th-sm">From (YYYY-MM-DD)</th>
                            <th className="th-sm">To (YYYY-MM-DD)</th>                            
                            <th className="th-sm">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                items.map(item =>
                                    <tr key={item.notificationsId}>
                                        <td>{item.message}</td>
                                        <td>{ item.createdOn.toString().substring(0, item.createdOn.toString().indexOf('T')) }</td>
                                        <td>{item.status}</td>
                                        <td>
                                            {item.fromDate.toString().substring(0, item.fromDate.toString().indexOf('T'))}
                                        </td>
                                        <td>
                                            {item.toDate.toString().substring(0, item.toDate.toString().indexOf('T'))}
                                        </td>                                        
                                        <td>
                                            <button type="button" disabled={item.status === 'Deactivated'}  className="btn btn-danger btn-sm" onClick={() => this.handleDeactivate(item.notificationsId)}>Deactivate</button>
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

export default GetAllNotification;