import React, { Component } from 'react';
import './ExpenseApprove.css'; 
import axios from 'axios';

class ExpenseApprove extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expense: console.log.data,
            loading: true
        }
    }
   

    render(){

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
                <input className="form-control" id="ProjectName" name="ProjectName" readonly="readonly" type="text" value={console.expenseId} />
            </div>
            <div className="col-md-3">
                <input data-val="true" data-val-number="The field ExpenseID must be a number." data-val-required="The ExpenseID field is required." id="ExpenseID" name="ExpenseID" type="hidden" value="1" />
                <label for="PurposeorReason">PurposeorReason</label>
                <textarea className="form-control" cols="20" id="PurposeorReason" name="PurposeorReason" readonly="readonly" rows="2">Demo</textarea>
            </div>
            <div className="col-md-3">
                <label for="FromDate">FromDate</label>
                <input className="form-control" id="FromDate" name="FromDate" readonly="readonly" type="text" value="1/5/2018" />
            </div>
            <div className="col-md-3">
                <label for="ToDate">ToDate</label>
                <input className="form-control" id="ToDate" name="ToDate" readonly="readonly" type="text" value="5/5/2018" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label for="VoucherID">VoucherID</label>
                <input className="form-control" id="VoucherID" name="VoucherID" readonly="readonly" type="text" value="" />
            </div>
            <div className="col-md-3">
                <label for="HotelBills">HotelBills</label>
                <input className="form-control" data-val="true" data-val-number="The field HotelBills must be a number." id="HotelBills" name="HotelBills" readonly="readonly" type="text" value="50000" />
            </div>
            <div className="col-md-3">
                <label for="TravelBills">TravelBills</label>
                <input className="form-control" data-val="true" data-val-number="The field TravelBills must be a number." id="TravelBills" name="TravelBills" readonly="readonly" type="text" value="0" />
            </div>
            <div className="col-md-3">
                <label for="MealsBills">MealsBills</label>
                <input className="form-control" data-val="true" data-val-number="The field MealsBills must be a number." id="MealsBills" name="MealsBills" readonly="readonly" type="text" value="8000" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label for="LandLineBills">LandLineBills</label>
                <input className="form-control" data-val="true" data-val-number="The field LandLineBills must be a number." id="LandLineBills" name="LandLineBills" readonly="readonly" type="text" value="0" />
            </div>
            <div className="col-md-3">
                <label for="TransportBills">TransportBills</label>
                <input className="form-control" data-val="true" data-val-number="The field TransportBills must be a number." id="TransportBills" name="TransportBills" readonly="readonly" type="text" value="0" />
            </div>
            <div className="col-md-3">
                <label for="MobileBills">MobileBills</label>
                <input className="form-control" data-val="true" data-val-number="The field MobileBills must be a number." id="MobileBills" name="MobileBills" readonly="readonly" type="text" value="0" />
            </div>
            <div className="col-md-3">
                <label for="Miscellaneous">Miscellaneous</label>
                <input className="form-control" data-val="true" data-val-number="The field Miscellaneous must be a number." id="Miscellaneous" name="Miscellaneous" readonly="readonly" type="text" value="0" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <label for="TotalAmount">TotalAmount</label>
                <input className="form-control" data-val="true" data-val-number="The field TotalAmount must be a number." id="TotalAmount" name="TotalAmount" readonly="readonly" type="text" value="58000" />
            </div>
            <div className="col-md-3">
                <label for="CreatedOn">CreatedOn</label>
                <input className="form-control" id="CreatedOn" name="CreatedOn" readonly="readonly" type="text" value="11/5/2018" />
            </div>
            <div className="col-md-3">
                <label for="ExpenseStatus">ExpenseStatus</label>
                <input className="form-control" id="ExpenseStatus" name="ExpenseStatus" readonly="readonly" type="text" value="Approved" />
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
                <textarea className="form-control" cols="20" id="Comment" maxlength="30" name="Comment" rows="2">Approved </textarea>
            </div>
            <div className="col-md-6">
                <br />
                <input type="submit" value="Approve" className="btn btn-success" />
                <input type="submit" value="Reject" className="btn btn-success" />
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

export default ExpenseApprove;