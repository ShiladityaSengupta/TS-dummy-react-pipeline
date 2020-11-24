import React, { Component } from 'react';
import axios from 'axios';


class AllExpenseFetch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allusers: [],
            loading: true
        }
    }

    async getUsersData() {
        const res = await axios.get('http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UserDetails')
        //console.log(res.data)
        this.setState({ loading: false, allusers: res.data })
        console.log(this.state.allusers);
    }

    handleView = (id) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'http://ts-user-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/User/UserDetails/' + id;
        axios.get(apiurl)
            .then(res => {
                //console.log(res);
                console.log(res.data);
                alert('USER DETAILS:\n'                    
                    +'\nName: '+res.data.name
                    +'\nEmail: '+res.data.emailID
                    +'\nMobile No.: '+res.data.mobileno
                    +'\nUser ID: '+res.data.userId
                    +'\nUsername: '+res.data.username
                    +'\nDOB: '+res.data.birthdate.toString().substring(0, res.data.birthdate.toString().indexOf('T'))
                    + '\nDOJ: ' + res.data.dateofJoining.toString().substring(0, res.data.dateofJoining.toString().indexOf('T'))
                    );
            }
            )
    }


    componentDidMount() {
        this.getUsersData()
    }
    
    render(){
        let items = this.state.allExpense
        return(
            <div id="page-wrapper">
            <div className="row">
 
<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">All Expense</div>
            <div className="panel-body">

                <div id="myTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="myTable_length"><label>Show <select name="myTable_length" aria-controls="myTable" className="form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="myTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="myTable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table id="myTable" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer" width="100%" cellspacing="0" role="grid" aria-describedby="myTable_info" style={{"width": "100%"}}>
                    <thead>
                        <tr role="row"><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width":"94px"}} >ProjectName</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "121px"}} >PurposeorReason</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "43px"}} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "66px"}} aria-label="FromDate: activate to sort column ascending">FromDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "47px"}}>ToDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "33px"}} aria-label="Total: activate to sort column ascending">Total</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="Details">Details</th></tr>
                    </thead>
                <tbody>{
                                items.map(item =>
                                    <tr key={item.userId}>
                                        <td>{item.userId}</td>
                                        <td>{item.name}</td>
                                        <td>{item.emailID}</td>
                                        <td>{item.mobileno}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            {item.birthdate.toString().substring(0, item.birthdate.toString().indexOf('T'))}
                                        </td>                                    

                                        <td>
                                            <button type="button" className="btn btn-info btn-sm" onClick={() => this.handleView(item.expenseId)}>View</button>
                                        </td>
                                    </tr>
                                )
                                }
                   </tbody></table><div id="myTable_processing" className="dataTables_processing card" style={{"display": "none"}}>Processing...</div></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="myTable_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="myTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="myTable_previous"><a href="#" aria-controls="myTable" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="myTable" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="myTable_next"><a href="#" aria-controls="myTable" data-dt-idx="2" tabindex="0" className="page-link">Next</a></li></ul></div></div></div></div>
            </div>
        </div>
    </div>
</div>





            </div>

        </div>


        )
    }
}

export default AllExpenseFetch;

