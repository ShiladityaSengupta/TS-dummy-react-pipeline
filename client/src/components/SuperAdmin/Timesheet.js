import React, { Component } from 'react';
import './Timesheet.css';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 

class Timesheet extends Component {

    constructor(props){
        super(props)
        this.state = {
            FromDate: '',
            ToDate: '',
            x: 0,
            TimesheetData: []
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        
        localStorage.setItem('x', 0)
        // name of the response in 'expense'
           // const { handle } = this.props.match.props.FromDate
           // const { handle } = [this.props.match.params.ToDate, this.props.match.params.FromDate] 
            axios.get('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/getAllTimesheetMaster')
            .then(response => {
                console.log(response);
                this.setState({
                    TimesheetData: response.data
                    
                    
                })
                localStorage.setItem('x', 1)
                console.log(this.TimesheetData)
            })

           return this.TimesheetData

    };
     
    handleSubmit(e) {
        this.props.onSubmit(this.state);
        
        
      //  alert("booking is done successfully");
       // this.props.history.push('/cargorouting');
      //  console.log("handleSubmit(e) is evoked")
    }


    render() {
        let items = this.state.TimesheetData
    if(this.state.TimesheetData.length) {
            return (
                <div id="page-wrapper">
                    <div className="row">
                 
                <div>
                   
    
                <table id="emp" className="table">   
    
                <thead>
                        <tr role="row"><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "68px"}} aria-label="Username: activate to sort column ascending">UserID</th><th>Timesheet ID</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "66 px"}} aria-label="FromDate: activate to sort column ascending">FromDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "50 px"}} aria-label="ToDate: activate to sort column ascending">ToDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "73 px"}} aria-label="TotalHours: activate to sort column ascending">TotalHours</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "43 px"}} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "72 px"}} aria-label="CreatedOn">CreatedOn</th></tr>
                    </thead>
    
                    <tbody>{ items.map( item => <tr key={item.timesheetMasterId} role="row" className="odd"><td>{item.userID}</td><td>{item.timesheetMasterId}</td><td>{item.fromDate.toString().substring(8,10)}-{item.fromDate.toString().substring(5,7)}-{item.fromDate.toString().substring(0,4)}</td><td>{item.toDate.toString().substring(8,10)}-{item.toDate.toString().substring(5,7)}-{item.toDate.toString().substring(0,4)}</td><td>{item.totalHours}</td><td>{item.timesheetStatus}</td><td>{item.createdOn.toString().substring(8,10)}-{item.createdOn.toString().substring(5,7)}-{item.createdOn.toString().substring(0,4)}</td></tr>)}</tbody>
                    <ReactHTMLTableToExcel  
    
    className="btn btn-info"  
    
    table="emp"  
    
    filename="ReportExcel"
    
    value="Export to Excel"
    
    sheet="Sheet"  
    
    buttonText="Export excel" /> 
    
                    </table>
                    </div>
                    </div>
                    </div>
                )
            
        }
        else {
        return (

            <div id="page-wrapper">
            <div className="row">

<form onSubmit = {this.handlesubmit}>   
<div style={{"margin-top":"10px"}}></div>
<div className="panel panel-default">
<div className="panel-heading">TimeSheet Report</div>
<div className="panel-body">
    <div className="row">
        <div className="col-md-3">
        <label className="manadatory" for="FromDate">From Date (DD-MM-YYYY)</label>
            <input className="form-control hasDatepicker" name="FromDate" onChange={this.handleChange} required/>
            <span className="field-validation-valid text-danger"></span>
        </div>
        <div className="col-md-3">
        <label className="manadatory" for="ToDate">To Date (DD-MM-YYYY)</label>
            <input className="form-control hasDatepicker" name="ToDate" onChange={this.handleChange} required/>
            <span className="field-validation-valid text-danger" ></span>
        </div>
        <div className="col-md-3">
        </div>
    </div>
    <div style={{"margin-top":"10px"}}></div>
    <div className="row">
        <div className="form-group">
            <div className="col-md-offset-0 col-md-12">
                <input type="submit" onClick={this.props.onSubmit} value="Submit" className="btn btn-info" />
            </div>
        </div>
    </div>
</div>
</div>
</form>

   

</div>

</div>
        







)
        }
}
}

export default Timesheet;