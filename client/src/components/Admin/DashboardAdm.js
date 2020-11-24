import React, { Component } from 'react';
import './DashboardAdm.css';
import axios from 'axios';

class DashboardAdm extends Component {

    constructor() {
        super();
        this.state = {
            
            TimeSheetSubmittedCount:'',
            TimeSheetApprovedCount: '',
            TimeSheetRejectedCount: '',
            ExpenseSubmittedCount:'',
            ExpenseApprovedCount: '',
            ExpenseRejectedCount: '',

        }

        axios.get('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/TimesheetSubmittedCount')
            .then(res => {
                this.setState({ TimeSheetSubmittedCount: res.data })
            })

        axios.get('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/TimesheetSubmittedApprovedCount')
            .then(res => {
                this.setState({ TimeSheetApprovedCount: res.data })
            })

        axios.get('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/TimesheetSubmittedRejectedCount')
            .then(res => {
                this.setState({ TimeSheetRejectedCount: res.data })
            })

        axios.get('http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/ExpenseSubmittedCount')
            .then(res => {
                this.setState({ ExpenseSubmittedCount: res.data })
            })
            
        axios.get('http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/ExpenseSubmittedApprovedCount')
            .then(res => {
                this.setState({ ExpenseApprovedCount: res.data })
            })
            
        axios.get('http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/ExpenseSubmittedRejectedCount')
            .then(res => {
                this.setState({ ExpenseRejectedCount: res.data })
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
                                                <i className="fa fa-clock-o fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">{this.state.TimeSheetSubmittedCount}</div>
                                                <div>TimeSheet Submitted<br />Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Admin/AllTimesheet">
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
                                                <i className="fa fa-clock-o fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">{this.state.TimeSheetApprovedCount}</div>
                                                <div>TimeSheet Approved<br />Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Admin/AllTimesheet">
                                        <div className="panel-footer">
                                            <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-red">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-clock-o fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">{this.state.TimeSheetRejectedCount}</div>
                                                <div>TimeSheet Rejected<br />Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Admin/AllTimesheet">
                                        <div className="panel-footer">
                                            <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-briefcase fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">{this.state.ExpenseSubmittedCount}</div>
                                                <div>Expense Submitted<br />Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Admin/AllExpenseTable">
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
                                                <i className="fa fa-briefcase fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                            <div className="huge">{this.state.ExpenseApprovedCount}</div>
                                                <div>Expense Approved<br />Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Admin/AllExpenseTable">
                                        <div className="panel-footer">
                                            <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-red">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-briefcase fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                            <div className="huge">{this.state.ExpenseRejectedCount}</div>
                                                <div>Expense Rejected<br/>Count!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/Admin/AllExpenseTable">
                                        <div className="panel-footer">
                                            <span className="pull-left">View Details</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>

                    {/*


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


                    */}

                    </div>
            </div>

        )
    }
}

export default DashboardAdm;