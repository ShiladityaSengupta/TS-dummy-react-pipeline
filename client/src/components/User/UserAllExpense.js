import React, { Component } from 'react';
import axios from 'axios';

class UserAllExpense extends Component {

    constructor(){
        super();
        this.state = {
            AllExpense: [],
            loading: true,
            viewClick: false,
            expense: [],
            projects: ["ABC Bearings Ltd", "Alok Industries Ltd", "Ambuja Cement Ltd", "Anil Bioplus Ltd (Anil Group Ahmedabad)", "Ansa Pack (Simplex Group)", "Aries Agro Ltd", "Arkema India Pvt Ltd", "ATC Tires Pvt Ltd (Yokohama Group)", "Atul Bioscience Ltd. (Lalbhai Group)", "Atul Ltd. (Lalbhai Group)"]
        }
    }

    handleDelete = (id) => {
       
        const apiurl = 'http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/deleteExpenseDetails/' + id;
        axios.delete(apiurl)
            .then(res => {
               
                this.setState({viewClick: false, individual: res.data})
                console.log(res.data);
                window.location.reload();

              
            }
            )
        
    }

    handleView = (id) => {
       
        const apiurl = 'http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/getExpenseDetails/' + id;
        axios.get(apiurl)
            .then(res => {
               
                this.setState({expense: res.data, viewClick: true})
                console.log(res.data);
              /*  alert('EXPENSE DETAILS' +
                '\nComment: ' + res.data[0].comment +
                '\nCreated On: ' + res.data[0].createdOn +
                '\nExpense Id: ' + res.data[0].expenseId +
                '\nExpense Status: ' + res.data[0].expenseStatus +
                '\nFrom Date: ' + res.data[0].fromDate +
                '\nHotel Bills: ' + res.data[0].hotelBills +
                '\nLandline Bills: ' + res.data[0].landlineBills +
                '\nMeals Bills: ' + res.data[0].mealsBills +
                '\nMiscellaneous: ' + res.data[0].miscellaneous +
                '\nMobile Bills: ' + res.data[0].mobileBills +
                '\nProject ID: ' + res.data[0].projectID +
                '\nProject Name:' + this.state.projects[res.data[0].projectID-1],
                '\nPurpose Or Reason: ' + res.data[0].purposeorReason +
                '\nTo Date: ' + res.data[0].toDate +
                '\nTotal Amount: ' + res.data[0].totalAmount +
                '\nTransport Bills: ' + res.data[0].transportBills +
                '\nTravel Bills: ' + res.data[0].travelBills +
                '\nUser ID: ' + res.data[0].userID +
                '\nVoucher ID: ' + res.data[0].voucherID)*/
              
            }
            ) 
        
    }

    async getExpenseData() {
        const res = await axios.get('http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/getAllExpenses')
        this.setState({ loading: false, AllExpense: res.data })
        console.log(this.state.AllExpense);
    }

    componentDidMount(){
        this.getExpenseData()
    }


render(){
    let items = this.state.AllExpense
    let ts = this.state.expense
    if(this.state.viewClick===true){ 
        let items = this.state.expense
        return(
        <div id="page-wrapper">
            <div className="row">

<h4 className="page-header">Expense Details</h4>

<div>
            <div id="myTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="myTable_length"></div></div><div className="col-sm-12 col-md-6"><div id="myTable_filter" className="dataTables_filter"></div></div></div><div className="row"><div className="col-sm-12"><table id="myTable" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer" width="100%" cellspacing="0" role="grid" aria-describedby="myTable_info" style={{"width": "100%"}}>
                <thead>
                    <tr role="row"><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "121px"}} aria-label="PurposeorReason: activate to sort column ascending">PurposeorReason</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "43px"}} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "66px"}} aria-label="FromDate: activate to sort column ascending">FromDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "47px"}} aria-label="ToDate: activate to sort column ascending">ToDate</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">Hotel Bill</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">Landline Bill</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">Meal Bill</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">Mobile Bill</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">Transport Bill</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">Travel Bill</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">Miscellaneous</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">VoucherID</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "33px"}} aria-label="Total: activate to sort column ascending">Total</th></tr>
                </thead>
        <tbody>{items.map( item => <tr key={item.expenseId} role="row" className="odd"><td>{item.purposeorReason}</td><td>{item.expenseStatus}</td><td>{item.fromDate.toString().substring(8,10)}-{item.fromDate.toString().substring(5,7)}-{item.fromDate.toString().substring(0,4)}</td>  

<td>{item.toDate.toString().substring(8,10)}-{item.toDate.toString().substring(5,7)}-{item.toDate.toString().substring(0,4)}</td><td>{item.hotelBills}</td><td>{item.landlineBills}</td><td>{item.mealsBills}</td><td>{item.mobileBills}</td><td>{item.transportBills}</td><td>{item.travelBills}</td><td>{item.miscellaneous}</td><td>{item.voucherID}</td><td>{item.totalAmount}</td></tr>)}</tbody></table><div id="myTable_processing" className="dataTables_processing card" style={{"display": "none"}}>Processing...</div></div></div><div className="row"><div className="col-sm-12 col-md-5"></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="myTable_paginate"></div></div></div></div>
        </div>
    </div>


            </div>
        

)
    }
    else{
    return(

<div id="page-wrapper">
            <div className="row">

<h4 className="page-header">All Expense</h4>

<div className="row">


    <div id="scrolly">
        <div>
            <div id="myTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="myTable_length"></div></div><div className="col-sm-12 col-md-6"><div id="myTable_filter" className="dataTables_filter"></div></div></div><div className="row"><div className="col-sm-12"><table id="myTable" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer" width="100%" cellspacing="0" role="grid" aria-describedby="myTable_info" style={{"width": "100%"}}>
                <thead>
                    <tr role="row"><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "121px"}} aria-label="PurposeorReason: activate to sort column ascending">PurposeorReason</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "43px"}} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "66px"}} aria-label="FromDate: activate to sort column ascending">FromDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "47px"}} aria-label="ToDate: activate to sort column ascending">ToDate</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "33px"}} aria-label="Total: activate to sort column ascending">Total</th><th className="sorting_disabled" rowspan="1" colspan="1" style={{"width": "57px"}} aria-label="View">View</th><th className="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1" style={{"width": "43px"}} aria-label="Delete: activate to sort column ascending">Delete</th></tr>
                </thead>
    <tbody>{items.map( item => <tr key={item.expenseId} role="row" className="odd"><td>{item.purposeorReason}</td><td>{item.expenseStatus}</td><td>{item.fromDate.toString().substring(8,10)}-{item.fromDate.toString().substring(5,7)}-{item.fromDate.toString().substring(0,4)}</td>  

<td>{item.toDate.toString().substring(8,10)}-{item.toDate.toString().substring(5,7)}-{item.toDate.toString().substring(0,4)}</td><td>{item.totalAmount}</td><td><button type="button" className="btn btn-info btn-sm" onClick={() => this.handleView(item.expenseId)}>View</button></td><td><button type="button" className="btn btn-info btn-sm" onClick={() => this.handleDelete(item.expenseId)}>Delete</button></td></tr>)}</tbody></table><div id="myTable_processing" className="dataTables_processing card" style={{"display": "none"}}>Processing...</div></div></div><div className="row"><div className="col-sm-12 col-md-5"></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="myTable_paginate"></div></div></div></div>
        </div>
    </div>
</div>

<div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">User Detail</h4>
            </div>
            <div className="modal-body" id="contentBody">

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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

export default UserAllExpense;