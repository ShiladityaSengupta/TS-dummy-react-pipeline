import React, { Component } from 'react';

import axios from 'axios';

class AllTimesheet extends Component {
    constructor(){
        super();
        this.state = {
            allTimesheet: [],
            loading: true,
            timesheet: [],
            
            
                timesheetMasterId: '',
                fromDate: '',
                toDate: '',
                totalHours: '',
                userID: '',
                createdOn: '',
                comment: '',
                timesheetStatus: '',
                dates: []
              
        }
    }

    handleView = (id) => {
       
        const apiurl = 'http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/getTimesheetDetails/' + id;
        axios.get(apiurl)
            .then(res => {
               
                this.setState({timesheet: res.data, viewClick: false,
                    userID: res.data[0].userId,
                    fromDate: res.data[0].period,
                    toDate: res.data[6].period,
                    totalHours: res.data[0].totalHours,
                    comment: "string" ,
                    timesheetStatus: 0,
                    dates: [res.data[0].period, res.data[1].period, res.data[2].period, res.data[3].period, res.data[4].period, res.data[5].period, res.data[6].period],
                    timesheetMasterId: res.data[0].timesheetMasterId,
                    createdOn: res.data[0].createdOn
                })
                console.log(res)
                console.log(this.state.userID)
                console.log(` timesheetMasterId${this.state.timesheetMasterId},
                fromDate: ${this.state.fromDate},
                toDate: ${this.state.toDate},
                totalHours: ${this.state.totalHours},
                userID: ${this.state.userID},
                createdOn: ${this.state.createdOn},
                comment: ${this.state.comment},
                timesheetStatus: ${this.state.timesheetStatus} `);
                
                
              
            }
            )
        
    }

    handleApprove = (id) => {
        
        const data = {
            "timesheetMasterId": this.state.timesheetMasterId,
            "fromDate": this.state.fromDate,
            "toDate": this.state.toDate,
            "totalHours": this.state.totalHours ,
            "userID": this.state.userID,
            "createdOn": this.state.createdOn,
            "comment": "string",
            "timesheetStatus": 1 
                  
        
    }
       // const apiurl = 'appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/TimesheetApproval/' + id ;
       const apiurl = 'http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/TimesheetApproval/'+id; 
       axios.put(apiurl, data
            )
        .then(res => {
            console.log(data)
            if (res.status === 200) {
            
                alert('Approved Successfully')
                window.location.reload();
            }
        })}

        handleReject = (id) => {
            
            const data = {
                "timesheetMasterId": this.state.timesheetMasterId,
                "fromDate": this.state.fromDate,
                "toDate": this.state.toDate,
                "totalHours": this.state.totalHours ,
                "userID": this.state.userID,
                "createdOn": this.state.createdOn,
                "comment": "string",
                "timesheetStatus": 2 
                      
            
        }
           // const apiurl = 'appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/TimesheetApproval/' + id ;
           const apiurl = 'http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/TimesheetApproval/'+id; 
           axios.put(apiurl, data
                )
            .then(res => {
                console.log(data)
                if (res.status === 200) {
                
                    alert('Rejected Successfully')
                    window.location.reload();
                }
            })}
    
    async getTimesheetData() {
        axios.get('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/getAllTimesheetMaster')
        .then(res =>{
            this.setState({loading: false, allTimesheet: res.data,
                
            }
            )
            console.log(res)
        })
        
    }

    componentDidMount(){
        this.getTimesheetData()
    }

render(){
    let items = this.state.allTimesheet
    const { userID } = this.state
    const { dates } = this.state
    if(this.state.viewClick === false){
        let items = this.state.timesheet
        return(
            <div id="page-wrapper">
            <div className="row">
                

<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">View TimeSheet     </div><div className="panel-heading">UserID: {this.state.userID}</div>
            <div className="panel-body">
                <div id="myTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="myTable_length"></div></div></div><div className="row"><div className="col-sm-12"><table id="myTable" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer" width="100%" cellspacing="0" role="grid" aria-describedby="myTable_info" style={{"width": "100%"}}>
                    <thead>
                        <tr role="row"><th>Date</th><th>Day</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "66 px"}} aria-label="FromDate: activate to sort column ascending">FromDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "50 px"}} aria-label="ToDate: activate to sort column ascending">ToDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "73 px"}} aria-label="TotalHours: activate to sort column ascending">Hours</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "72 px"}} aria-label="CreatedOn">CreatedOn</th></tr>
                    </thead>
        <tbody>{ items.map( item => <tr key={item.timesheetMasterId} role="row" className="odd"><td>{item.period.toString().substring(8,10)}-{item.period.toString().substring(5,7)}-{item.period.toString().substring(0,4)}</td><td>{item.daysofWeek}</td><td>{this.state.fromDate.toString().substring(8,10)}-{this.state.fromDate.toString().substring(5,7)}-{this.state.fromDate.toString().substring(0,4)}</td>  

<td>{this.state.toDate.toString().substring(8,10)}-{this.state.toDate.toString().substring(5,7)}-{this.state.toDate.toString().substring(0,4)}</td><td>{item.hours}</td><td>{item.createdOn.toString().substring(8,10)}-{item.createdOn.toString().substring(5,7)}-{item.createdOn.toString().substring(0,4)}</td><td></td></tr>)}</tbody></table><div id="myTable_processing" className="dataTables_processing card" style={{"display": "none"}}>Processing...</div></div></div><div className="row"><div className="col-sm-12 col-md-5">
            <div className="dataTables_info" id="myTable_info" role="status" aria-live="polite"><div className="panel-heading">Total Hours: {this.state.totalHours}</div><div className="panel-heading"></div><button type="button" className="btn btn-info btn-sm" onClick={() => this.handleApprove(this.state.timesheetMasterId)}>Approve</button><button type="button" className="btn btn-info btn-sm" onClick={() => this.handleReject(this.state.timesheetMasterId)}>Reject</button></div>
            </div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="myTable_paginate"></div></div></div></div>
          
            
            </div>
        </div>
    </div>
</div>


    

            </div>

        </div>
        )
    }



    else{
    return(

<div id="page-wrapper">
            <div className="row">
                

<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">All TimeSheet</div>
            <div className="panel-body">
                <div id="myTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="myTable_length"></div></div><div className="col-sm-12 col-md-6"><div id="myTable_filter" className="dataTables_filter"></div></div></div><div className="row"><div className="col-sm-12"><table id="myTable" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer" width="100%" cellspacing="0" role="grid" aria-describedby="myTable_info" style={{"width": "100%"}}>
                    <thead>
                        <tr role="row"><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "68px"}} aria-label="Username: activate to sort column ascending">UserID</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "66 px"}} aria-label="FromDate: activate to sort column ascending">FromDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "50 px"}} aria-label="ToDate: activate to sort column ascending">ToDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "73 px"}} aria-label="TotalHours: activate to sort column ascending">TotalHours</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "43 px"}} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "72 px"}} aria-label="CreatedOn">CreatedOn</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57 px"}} aria-label="Details">Details</th></tr>
                    </thead>
        <tbody>{ items.map( item => <tr key={item.timesheetMasterId} role="row" className="odd"><td>{item.userID}</td><td>{item.fromDate.toString().substring(8,10)}-{item.fromDate.toString().substring(5,7)}-{item.fromDate.toString().substring(0,4)}</td><td>{item.toDate.toString().substring(8,10)}-{item.toDate.toString().substring(5,7)}-{item.toDate.toString().substring(0,4)}</td><td>{item.totalHours}</td><td>{item.timesheetStatus}</td><td>{item.createdOn.toString().substring(8,10)}-{item.createdOn.toString().substring(5,7)}-{item.createdOn.toString().substring(0,4)}</td><td><button type="button" className="btn btn-info btn-sm" onClick={() => this.handleView(item.timesheetMasterId)}>View</button></td></tr>)}</tbody></table><div id="myTable_processing" className="dataTables_processing card" style={{"display": "none"}}>Processing...</div></div></div><div className="row"><div className="col-sm-12 col-md-5"></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="myTable_paginate"></div></div></div></div>
            </div>
        </div>
    </div>
</div>


    

            </div>

        </div>
        )
        }
        }
    }

export default AllTimesheet;
