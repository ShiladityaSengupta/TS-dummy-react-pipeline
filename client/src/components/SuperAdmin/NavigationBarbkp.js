import React, { Component } from 'react';
//import { Link, withRouter } from 'react-router-dom';
//import './NavigationBar.css'

class NavigationBar extends Component {
    render() {
        return(
            <div>
            <div id="wrapper">
        {/* <!-- Navigation --> */}
        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{"margin-bottom": 0}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/nav/SuperAdmin/Dashboard">TIME MANAGER</a>
            </div>
            {/* <!-- /.navbar-header --> */}
            <ul className="nav navbar-top-links navbar-right">
                <a className="btn btn-danger" href="/" style={{ 'margin-right': 10, 'margin-top':10 }} >Logout</a>
            </ul>
            {/* <!-- /.navbar-top-links --> */}
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="nav-item">
                            <a href="/nav/SuperAdmin/Dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/nav/Registration/Registration"><i className="fa fa-edit fa-fw"></i> Create User</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"href="/nav/SuperAdmin/CreateAdmin"><i className="fa fa-edit fa-fw"></i> Create Admin</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/nav/SuperAdmin/AssignRoles"><i className="fa fa-edit fa-fw"></i>AssignRoles</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"href="/nav/AllRoles/Roles"><i className="fa fa-table fa-fw"></i> All Roles</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"href="/nav/Project/Add"><i className="fa fa-edit fa-fw"></i> Add Project</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/nav/ResetPassword/Index"><i className="fa fa-gear fa-fw"></i> Reset Password</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/nav/TimeSheetMasterExport/Report"><i className="fa fa-table fa-fw"></i>Export All TimeSheets</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/nav/ExpenseMasterExport/Report"><i className="fa fa-table fa-fw"></i>Export All Expense</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/nav/AddNotification/Add"><i className="fa fa-bell fa-fw"></i>Push Notification</a>
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

export default NavigationBar;

