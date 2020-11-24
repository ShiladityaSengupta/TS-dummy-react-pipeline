import { getAllByAltText } from '@testing-library/react';
import React, { Component } from 'react';
//import { Link, withRouter } from 'react-router-dom';
//import './NavbarSuperAdmin.css'

class NavbarSuperAdmin extends Component {

    constructor() {
        super();
        this.state = {
        }
        
    }

    render() {
        return (
            <div>
                <div id="wrapper">
                    {/* <!-- Navigation --> */}
                    <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ "margin-bottom": 0 }}>
                        <div className="navbar-header" >
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/SuperAdmin/Dashboard" >TIME MANAGER</a>
                        </div>
                        {/* <!-- /.navbar-header --> */}
                        <ul className="nav navbar-top-links navbar-right">
                            Hi, {localStorage.getItem("LoggedInUsername")} (SuperAdmin)
                            <a className="btn btn-danger" href="/" style={{marginLeft:10, marginRight: 10, marginTop: 10, marginBottom:10 }} >Logout</a>
                        </ul>
                        {/* <!-- /.navbar-top-links --> */}
                        <div className="navbar-full sidebar" role="navigation">

                            <div className="sidebar-nav navbar-collapse">
                                <ul className="nav" id="side-menu">
                                    <li className="nav-item">
                                        <a href="/SuperAdmin/Dashboard"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/Registration"><i className="fa fa-edit fa-fw"></i> Create User</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/CreateAdmin"><i className="fa fa-edit fa-fw"></i> Create Admin</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/AssignRoles"><i className="fa fa-edit fa-fw"></i> Assign Roles</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/AllRoles/Roles"><i className="fa fa-table fa-fw"></i> All Roles</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/Project/Add"><i className="fa fa-edit fa-fw"></i> Add Project</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/ResetPassword/Index"><i className="fa fa-gear fa-fw"></i> Reset Password</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/TimeSheetMasterExport/Report"><i className="fa fa-table fa-fw"></i> Export All TimeSheets</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/ExpenseMasterExport/Report"><i className="fa fa-table fa-fw"></i> Export All Expense</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SuperAdmin/AddNotification/Add"><i className="fa fa-bell fa-fw"></i> Push Notification</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- /.sidebar-collapse --> */}
                        </div>
                        {/* <!-- /.navbar-static-side --> */}
                    </nav>




                </div></div>

        )
    }
}

export default NavbarSuperAdmin;

