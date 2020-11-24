import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';

import NavbarSuperAdmin from './components/SuperAdmin/NavbarSuperAdmin';
import DashboardSA from './components/SuperAdmin/DashboardSA'
import PushNotification from './components/SuperAdmin/PushNotification'
import GetAllNotification from './components/SuperAdmin/GetAllNotification';
import AddProject from './components/SuperAdmin/AddProject';
import AllProjectsTable from './components/SuperAdmin/AllProjectsTable';
import AllAdminsTable from './components/SuperAdmin/AllAdminsTable';
import AllUsersTable from './components/SuperAdmin/AllUsersTable';
import CreateUser from './components/SuperAdmin/CreateUser';
import CreateAdmin from './components/SuperAdmin/CreateAdmin';
import Expense from './components/SuperAdmin/Expense';
import Timesheet from './components/SuperAdmin/Timesheet';
import AllRoles from './components/SuperAdmin/AllRoles';
import AssignRoles from './components/SuperAdmin/AssignRoles';
import ResetPassword from './components/SuperAdmin/ResetPassword';

import NavbarAdmin from './components/Admin/NavbarAdmin';
import DashboardAdm from './components/Admin/DashboardAdm';
import AllExpenseCount from './components/Admin/AllExpenseCount';
import ExpenseApprove from './components/Admin/ExpenseApprove';
import AllExpenseTable from './components/Admin/AllExpenseTable';
import TimesheetExport from './components/Admin/TimesheetExport';
import ExpenseReport from './components/Admin/ExpenseReport';
import AllTimesheet from './components/Admin/AllTimesheet';

import NavbarUser from './components/User/NavbarUser';
import DashboardUser from './components/User/DashboardUser';
import ChangePassword from './components/User/ChangePassword';
import UserExpense from './components/User/UserExpense';
import UserTimesheet from './components/User/UserTimesheet';
import AllTimesheetUser from './components/User/AllTimesheetUser';
import ExpenseForUser from './components/User/ExpenseForUser';
import UserAllExpense from './components/User/UserAllExpense';


//import LoginFormOld from './components/LoginFormOld';

class  App extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  }

render(){
  return (
    <BrowserRouter>

    <Switch>
      <div className="App">
        <Route exact path="/" component={LoginForm} />

        <Route path="/SuperAdmin" component={NavbarSuperAdmin} />
        <Route path="/SuperAdmin/Dashboard" component={DashboardSA} />

        <Route exact path="/SuperAdmin/AddNotification/Add" component={PushNotification} />
        <Route exact path="/SuperAdmin/AllNotification" component={GetAllNotification} />        
        <Route exact path="/SuperAdmin/Project/Index" component={AllProjectsTable} />
        <Route exact path="/SuperAdmin/AllUsers/Admins" component={AllAdminsTable} />
        <Route exact path="/SuperAdmin/AllUsers/Users" component={AllUsersTable} />
        <Route exact path="/SuperAdmin/Project/Add" component={AddProject} />
		    <Route exact path="/SuperAdmin/Registration" component={CreateUser} />
        <Route exact path="/SuperAdmin/CreateAdmin" component={CreateAdmin} />
        <Route exact path="/SuperAdmin/ExpenseMasterExport/Report" component={Expense} />
        <Route exact path="/SuperAdmin/TimeSheetMasterExport/Report" component={Timesheet} />
        <Route exact path="/SuperAdmin/AllRoles/Roles" component={AllRoles} />
        <Route exact path="/SuperAdmin/AssignRoles" component={AssignRoles} />
        <Route exact path="/SuperAdmin/ResetPassword/Index" component={ResetPassword} />

        <Route path="/Admin" component={NavbarAdmin} />
        <Route path="/Admin/Dashboard" component={DashboardAdm} />
        <Route path="/Admin/AllExpenseCount" component={AllExpenseCount} />
        <Route path="/Admin/ExpenseApprove" component={ExpenseApprove} />
        <Route path="/Admin/AllExpenseTable" component={AllExpenseTable} />
        <Route path="/Admin/AllTeam" component={AllUsersTable} />
        <Route path="/Admin/TimesheetExport" component={Timesheet} />
        <Route path="/Admin/ExpenseReport" component={Expense} />
        <Route path="/Admin/AllTimesheet" component={AllTimesheet} />
        
        <Route path="/User" component={NavbarUser} />
        <Route path="/User/Dashboard" component={DashboardUser} />
        <Route path="/User/ChangePassword" component={ChangePassword} />
        <Route path="/User/UserExpense" component={UserExpense} />
        <Route path="/User/UserTimesheet" component={UserTimesheet} />
        <Route path="/User/AllTimesheet" component={AllTimesheetUser} />
        <Route path="/User/Expense" component={ExpenseForUser} />
        <Route path="/User/AllExpense" component={UserAllExpense} />


      </div>
    </Switch>
    </BrowserRouter>
  );
}
}

export default App;