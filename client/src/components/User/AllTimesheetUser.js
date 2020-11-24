import React, { Component } from 'react';

import axios from 'axios';

class AllTimeSheetUser extends Component {

    constructor(props){
        super(props)
        this.state = {
        timesheets: [],
        loading: true,
        viewClick: false,
        individual: [],
        projects: ["ABC Bearings Ltd", "Alok Industries Ltd", "Ambuja Cement Ltd", "Anil Bioplus Ltd (Anil Group Ahmedabad)", "Ansa Pack (Simplex Group)", "Aries Agro Ltd", "Arkema India Pvt Ltd", "ATC Tires Pvt Ltd (Yokohama Group)", "Atul Bioscience Ltd. (Lalbhai Group)", "Atul Ltd. (Lalbhai Group)"],
        projectId: '',
        hours: [],
        desc: '',
        dates: []
    }
}

    async getTimesheetData() {
        var id = localStorage.getItem('LoggedInUserId')
        
        const res = await axios.get('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/getTimesheetMaster/'+ id)
        //console.log(res.data)
        this.setState({ 
            loading: false,
            timesheets: res.data,
            
        
        })
        console.log(this.state.timesheets);
    }


    componentDidMount() {
        this.getTimesheetData()
    }

    handleView = (id) => {
       
        const apiurl = 'http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/getTimesheetDetails/' + id;
        axios.get(apiurl)
            .then(res => {
               
                this.setState({
                    viewClick: true,
                    individual: res.data,
                    projectId: res.data[0].projectId,
                    dates: [res.data[0].period, res.data[1].period, res.data[1].period, res.data[2].period, res.data[3].period, res.data[4].period, res.data[5].period, res.data[6].period],
                    hours: [res.data[0].hours, res.data[1].hours, res.data[2].hours, res.data[3].hours, res.data[4].hours, res.data[5].hours, res.data[6].hours, res.data[0].totalHours]
                })
                console.log(this.state.individual);
                console.log('this is true')
              
            }
            )

           


        
    }

    handleDelete = (id) => {
       
        const apiurl = 'http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/deleteTimesheetMaster/' + id;
        axios.delete(apiurl)
            .then(res => {
               
                this.setState({viewClick: false, individual: res.data})
                console.log(res.data);
                window.location.reload();

              
            }
            )
        
    }

    render(){
        let items = this.state.timesheets
        const {dates} = this.state
       
        if(this.state.viewClick===true){
            let items = this.state.individual
            return(
                <div id="page-wrapper">
            <div class="row">

              
                


<h2>Details</h2>


<p>
    <a href="/User/Dashboard">Back to Main View</a>
</p>
<table class="table">
    <tbody>
    <tr>
    
        <td><b>Project Name</b></td>
        
            <td><b>Sunday</b></td>
            <td><b>Monday</b></td>
            <td><b>Tuesday</b></td>
            <td><b>Wednesday</b></td>
            <td><b>Thursday</b></td>
            <td><b>Friday</b></td>
            <td><b>Saturday</b></td>
            <td><b>Total</b></td>
        
    </tr>
    <tr>
        <td></td>
            <td><b>{this.state.dates[0].toString().substring(8,10)}-{this.state.dates[0].toString().substring(5,7)}-{this.state.dates[0].toString().substring(0,4)}</b></td>
            <td><b>{this.state.dates[1].toString().substring(8,10)}-{this.state.dates[1].toString().substring(5,7)}-{this.state.dates[1].toString().substring(0,4)}</b></td>
            <td><b>{this.state.dates[2].toString().substring(8,10)}-{this.state.dates[2].toString().substring(5,7)}-{this.state.dates[2].toString().substring(0,4)}</b></td>
            <td><b>{this.state.dates[3].toString().substring(8,10)}-{this.state.dates[3].toString().substring(5,7)}-{this.state.dates[3].toString().substring(0,4)}</b></td>
            <td><b>{this.state.dates[4].toString().substring(8,10)}-{this.state.dates[4].toString().substring(5,7)}-{this.state.dates[4].toString().substring(0,4)}</b></td>
            <td><b>{this.state.dates[5].toString().substring(8,10)}-{this.state.dates[5].toString().substring(5,7)}-{this.state.dates[5].toString().substring(0,4)}</b></td>
            <td><b>{this.state.dates[6].toString().substring(8,10)}-{this.state.dates[6].toString().substring(5,7)}-{this.state.dates[6].toString().substring(0,4)}</b></td>
            
        <td></td>
        <td></td>
    </tr>


    
            
            <tr>
            <td><b>{this.state.projects[this.state.projectId-1]}</b></td>

                    <td><b>{this.state.hours[0]}</b></td>
                    <td><b>{this.state.hours[1]}</b></td>
                    <td><b>{this.state.hours[2]}</b></td>
                    <td><b>{this.state.hours[3]}</b></td>
                    <td><b>{this.state.hours[4]}</b></td>
                    <td><b>{this.state.hours[5]}</b></td>
                    <td><b>{this.state.hours[6]}</b></td>
                    <td><b>{this.state.hours[7]}</b></td>
                

</tr>
    

</tbody></table>

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
                        <tr role="row"><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="FromDate: activate to sort column ascending" style={{"width": "66px"}}>FromDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="ToDate: activate to sort column ascending" style={{"width": "47px"}}>ToDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="TotalHours: activate to sort column ascending" style={{"width": "73px"}}>TotalHours</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="CreatedOn: activate to sort column ascending" style={{"width": "72px"}}>CreatedOn</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{"width": "43px"}}>Status</th><th className="sorting_disabled" rowspan="1" colspan="1" aria-label="Details" style={{"width": "57px"}}>Details</th><th className="sorting_disabled" rowspan="1" colspan="1" aria-label="Delete" style={{"width": "60px"}}>Delete</th></tr>
                    </thead>
    <tbody>{items.map( item => <tr key={item.timesheetMasterId}><td>{item.fromDate.toString().substring(8,10)}-{item.fromDate.toString().substring(5,7)}-{item.fromDate.toString().substring(0,4)}</td>  

<td>{item.toDate.toString().substring(8,10)}-{item.toDate.toString().substring(5,7)}-{item.toDate.toString().substring(0,4)}</td><td>{item.totalHours}</td><td>{item.createdOn.toString().substring(8,10)}-{item.createdOn.toString().substring(5,7)}-{item.createdOn.toString().substring(0,4)}</td><td>{item.timesheetStatus}</td><td>
                                            <button type="button" className="btn btn-info btn-sm" onClick={() => this.handleView(item.timesheetMasterId)}>View</button>
                                        </td><td> <button type="button" className="btn btn-info btn-sm" onClick={() => this.handleDelete(item.timesheetMasterId)}>Delete</button></td></tr>)}</tbody></table><div id="myTable_processing" className="dataTables_processing card" style={{"display": "none"}}>Processing...</div></div></div><div className="row"><div className="col-sm-12 col-md-5"></div></div></div>
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

export default AllTimeSheetUser;

/* <style>
    table, th, td {
    {"border": "1px solid black"};
}
    </style> */