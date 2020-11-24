import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


class AllExpenseTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allexpense: [],
            loading: true,
            viewClick: false,
            expenseId: '',
            comment: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

     handleApprove = (id) => {
        
        const apiurl = 'http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/ExpenseApproval/' + id + '/';
        axios.put(apiurl, 
            {
                "expenseId": id,
                "purposeorReason": this.state.purposeorReason,
                "expenseStatus": 1,
                "fromDate": this.state.fromDate,
                "toDate": this.state.toDate,
                "voucherID": this.state.voucherID,
                "hotelBills": this.state.hotelBills,
                "travelBills": this.state.travelBills,
                "mealsBills": this.state.mealsBills,
                "landlineBills": this.state.landlineBills,
                "transportBills": this.state.transportBills,
                "mobileBills": this.state.mobileBills,
                "miscellaneous": this.state.miscellaneous,
                "totalAmount": this.state.totalAmount,
                "userID": this.state.userID,
                "createdOn": this.state.createdOn,
                "comment": this.state.comment,
                "projectID": this.state.projectID            
            
        })
        .then(res => {
            if (res.status === 200) {
            
                alert('Approved Successfully')
                window.location.reload();
            }
        })}

        handleReject = (id) => {
            const apiurl = 'http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/ExpenseApproval/' + id + '/';
            axios.put(apiurl, 
                {
                    "expenseId": id,
                    "purposeorReason": this.state.purposeorReason,
                    "expenseStatus": 2,
                    "fromDate": this.state.fromDate,
                    "toDate": this.state.toDate,
                    "voucherID": this.state.voucherID,
                    "hotelBills": this.state.hotelBills,
                    "travelBills": this.state.travelBills,
                    "mealsBills": this.state.mealsBills,
                    "landlineBills": this.state.landlineBills,
                    "transportBills": this.state.transportBills,
                    "mobileBills": this.state.mobileBills,
                    "miscellaneous": this.state.miscellaneous,
                    "totalAmount": this.state.totalAmount,
                    "userID": this.state.userID,
                    "createdOn": this.state.createdOn,
                    "comment": this.state.comment,
                    "projectID": this.state.projectID 
                  
                
            })
            .then(res => {
                if (res.status === 200) {
                
                alert('Rejected Successfully')
                window.location.reload();
                }
            })}
        

    async getExpenseData() {
        const res = await axios.get('http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/getAllExpenses')
        //console.log(res.data)
        this.setState({ loading: false, allexpense: res.data })
        console.log(this.state.allexpense);
    } 

    handleView = (id) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/getExpenseDetails/' + id;
        axios.get(apiurl)
            .then(res => {
                //console.log(res);
                console.log(res.data);
                this.setState({viewClick: true,
                expenseId: res.data[0].expenseId,
                comment: res.data[0].comment,
                createdOn: res.data[0].createdOn,
                expenseStatus: res.data[0].expenseStatus,
                fromDate: res.data[0].fromDate,
                hotelBills: res.data[0].hotelBills,
                landlineBills: res.data[0].landlineBills,
                mealsBills: res.data[0].mealsBills,
                miscellaneous: res.data[0].miscellaneous,
                mobileBills: res.data[0].mobileBills,
                projectID: res.data[0].projectID,
                purposeorReason: res.data[0].purposeorReason,
                toDate: res.data[0].toDate,
                totalAmount: res.data[0].totalAmount,
                transportBills: res.data[0].transportBills,
                travelBills: res.data[0].travelBills,
                userID: res.data[0].userID,
                voucherID: res.data[0].voucherID

            })
                
            }
            )

           // this.props.history.push('/Admin/ExpenseApprove')

            
    }

    componentDidMount() {
        this.getExpenseData()
        
    }

    render() {
        let items = this.state.allexpense
        if(this.state.viewClick === false){
        return (
           
            <div id="page-wrapper">
                <div className="row">
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm">Expense ID</th>
                                <th className="th-sm">Purpose / Reason</th>
                                <th className="th-sm">Total Amount</th>
                                <th className="th-sm">Expense Status</th>
                                <th className="th-sm">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                items.map(item =>
                                    <tr key={item.expenseId}>
                                        <td>{item.expenseId}</td>
                                        <td>{item.purposeorReason}</td>
                                        <td>{item.totalAmount}</td>
                                        <td>{item.expenseStatus}</td>

                                        <td>
                                            <button type="button" className="btn btn-info btn-sm" onClick={() => this.handleView(item.expenseId)}>View</button>
                                        </td>
                                    </tr>
                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    else{
        return(
            <div id="page-wrapper">
            <div className="row">

<h4 className="page-header">Details</h4>
<p>
    <a className="btn btn-default" href="/ShowAllExpense/Expense">Back to Main View</a>
</p>


<div className="panel panel-default">
    <div className="panel-heading">Expense Details</div>
    <div className="panel-body">
        <div className="row">
            <div className="col-md-3">
                <label for="ProjectName">ProjectName</label>
                <input className="form-control" id="ProjectName" name="ProjectName" readonly="readonly" type="text" value={this.state.expenseId} />
            </div>
            <div className="col-md-3">
                <input data-val="true" data-val-number="The field ExpenseID must be a number." data-val-required="The ExpenseID field is required." id="ExpenseID" name="ExpenseID" type="hidden" value={this.state.expenseId} />
                <label for="PurposeorReason">PurposeorReason</label>
                <textarea className="form-control" cols="20" id="PurposeorReason" name="PurposeorReason" readonly="readonly" rows="2" value={this.state.purposeorReason}>Demo</textarea>
            </div>
            <div className="col-md-3">
                <label for="FromDate">FromDate</label>
                <input className="form-control" id="FromDate" name="FromDate" readonly="readonly" type="text" value={this.state.fromDate} />
            </div>
            <div className="col-md-3">
                <label for="ToDate">ToDate</label>
                <input className="form-control" id="ToDate" name="ToDate" readonly="readonly" type="text" value={this.state.toDate} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label for="VoucherID">VoucherID</label>
                <input className="form-control" id="VoucherID" name="VoucherID" readonly="readonly" type="text" value={this.state.voucherID} />
            </div>
            <div className="col-md-3">
                <label for="HotelBills">HotelBills</label>
                <input className="form-control" data-val="true" data-val-number="The field HotelBills must be a number." id="HotelBills" name="HotelBills" readonly="readonly" type="text" value={this.state.hotelBills} />
            </div>
            <div className="col-md-3">
                <label for="TravelBills">TravelBills</label>
                <input className="form-control" data-val="true" data-val-number="The field TravelBills must be a number." id="TravelBills" name="TravelBills" readonly="readonly" type="text" value={this.state.travelBills} />
            </div>
            <div className="col-md-3">
                <label for="MealsBills">MealsBills</label>
                <input className="form-control" data-val="true" data-val-number="The field MealsBills must be a number." id="MealsBills" name="MealsBills" readonly="readonly" type="text" value={this.state.mealsBills} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label for="LandLineBills">LandLineBills</label>
                <input className="form-control" data-val="true" data-val-number="The field LandLineBills must be a number." id="LandLineBills" name="LandLineBills" readonly="readonly" type="text" value={this.state.landlineBills} />
            </div>
            <div className="col-md-3">
                <label for="TransportBills">TransportBills</label>
                <input className="form-control" data-val="true" data-val-number="The field TransportBills must be a number." id="TransportBills" name="TransportBills" readonly="readonly" type="text" value={this.state.transportBills} />
            </div>
            <div className="col-md-3">
                <label for="MobileBills">MobileBills</label>
                <input className="form-control" data-val="true" data-val-number="The field MobileBills must be a number." id="MobileBills" name="MobileBills" readonly="readonly" type="text" value={this.state.mobileBills} />
            </div>
            <div className="col-md-3">
                <label for="Miscellaneous">Miscellaneous</label>
                <input className="form-control" data-val="true" data-val-number="The field Miscellaneous must be a number." id="Miscellaneous" name="Miscellaneous" readonly="readonly" type="text" value={this.state.miscellaneous} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label for="TotalAmount">TotalAmount</label>
                <input className="form-control" data-val="true" data-val-number="The field TotalAmount must be a number." id="TotalAmount" name="TotalAmount" readonly="readonly" type="text" value={this.state.totalAmount} />
            </div>
            <div className="col-md-3">
                <label for="CreatedOn">CreatedOn</label>
                <input className="form-control" id="CreatedOn" name="CreatedOn" readonly="readonly" type="text" value={this.state.createdOn} />
            </div>
            <div className="col-md-3">
                <label for="ExpenseStatus">ExpenseStatus</label>
                <input className="form-control" id="ExpenseStatus" name="ExpenseStatus" readonly="readonly" type="text" value={this.state.expenseStatus} />
            </div>
            <div className="col-md-3">
                <label for="Download">Download</label>
           

                        <h5>
                            <a href="/ShowAllExpense/Download?id=1&amp;DocumentID=1">
                                <i className="fa fa-download fa-fw"></i>Single Document
                            </a>
                        </h5>
</div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label className="manadatory" for="Comment">Comment</label>
                <textarea onChange={this.handleChange} className="form-control" name="comment"></textarea>
            </div>
            <div className="col-md-6">
                <br />
                <input type="submit" onClick={() => this.handleApprove(this.state.expenseId)} value="Approve" className="btn btn-success" />
                <input type="submit" onClick={() => this.handleReject(this.state.expenseId)} value="Reject" className="btn btn-success" />
                <a className="btn btn-danger" href="/ShowAllExpense/Expense">Cancel</a>
            </div>
            <div className="col-md-3">

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

export default AllExpenseTable;