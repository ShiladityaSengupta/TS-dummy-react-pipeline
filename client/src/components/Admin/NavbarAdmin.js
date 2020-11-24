import React, { Component } from 'react';
//import { Link, withRouter } from 'react-router-dom';
//import './NavbarAdmin.css'

class NavbarAdmin extends Component {
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
                            <a className="navbar-brand" href="/Admin/Dashboard" >TIME MANAGER</a>
                        </div>
                        {/* <!-- /.navbar-header --> */}
                        <ul className="nav navbar-top-links navbar-right">
                            Hi, {localStorage.getItem("LoggedInUsername")} (Admin)
                            <a className="btn btn-danger" href="/" style={{marginLeft:10, marginRight: 10, marginTop: 10, marginBottom:10 }} >Logout</a>
                        </ul>
                        {/* <!-- /.navbar-top-links --> */}
                        <div className="navbar-full sidebar" role="navigation">

                            <div className="sidebar-nav navbar-collapse">
                                <ul className="nav" id="side-menu">
                                    <li className="nav-item">
                                        <a href="/Admin/Dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Admin/AllTimesheet"><i className="fa fa-edit fa-fw"></i> All TimeSheet</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Admin/AllExpenseTable"><i className="fa fa-edit fa-fw"></i> All Expense</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Admin/AllTeam"><i className="fa fa-edit fa-fw"></i> Your Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Admin/TimesheetExport"><i className="fa fa-table fa-fw"></i> TimeSheet Export</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Admin/ExpenseReport"><i className="fa fa-edit fa-fw"></i> Expense Report</a>
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

export default NavbarAdmin;

