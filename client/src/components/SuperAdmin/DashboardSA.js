import React, { Component } from 'react';
import './DashboardSA.css';
import axios from 'axios';

class DashboardSA extends Component {

    constructor() {
        super();
        this.state = {
            ProjectCount: '',
            UserCount: '',
            AdminCount:''
        }

        axios.get('http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/ProjectCount')
            .then(res => {
                this.setState({ ProjectCount: res.data[0].projectCount })
            })

        axios.get('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UserCount')
            .then(res => {
                this.setState({ UserCount: res.data })
            })

        axios.get('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/AdminCount')
            .then(res => {
                this.setState({ AdminCount: res.data })
            })

    }


    render() {       

        return (
                <div id="page-wrapper">
                    <div className="row">


                <h4 className="page-header">Dashboard</h4>


                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-comments fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">{this.state.UserCount}</div>
                                                <div>User Count</div>
                                            </div>
                                        </div>
                                    </div>
                                <a href="/SuperAdmin/AllUsers/Users">
                                        <div className="panel-footer">
                                            <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-green">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-tasks fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">{this.state.AdminCount}</div>
                                                <div>Admins Count</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/SuperAdmin/AllUsers/Admins">
                                        <div className="panel-footer">
                                            <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-yellow">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-shopping-cart fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">{this.state.ProjectCount}</div>
                                                <div>Total Projects Count</div>
                                            </div>
                                        </div>
                                    </div>
                                <a href="/SuperAdmin/Project/Index">
                                        <div className="panel-footer">
                                            <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
               
        )
    }
}

export default DashboardSA;