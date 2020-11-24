import React, { Component } from 'react';
import moment from "moment";

import axios from 'axios';

class ExpenseForUser extends Component {

    constructor(){
        super();

    this.state = {
        //expenseId: 0,
        purposeorReason: '',
        expenseStatus: 0,
        fromDate: '',
        toDate: '',
        voucherID: '',
        hotelBills: '',
        travelBills: '',
        mealsBills: '',
        landlineBills: '',
        transportBills: '',
        mobileBills: '',
        miscellaneous: '',
        totalAmount: '',
        userID: localStorage.getItem('LoggedInUserId'),
        createdOn: this.getCurrentDate,
        comment: 'string',
        projectID: '',
        value: 0
      }
      /*
      {
  "expenseId": 0,
  "purposeorReason": "string",
  "expenseStatus": 0,
  "fromDate": "2020-11-12T09:02:15.453Z",
  "toDate": "2020-11-12T09:02:15.453Z",
  "voucherID": "string",
  "hotelBills": 0,
  "travelBills": 0,
  "mealsBills": 0,
  "landlineBills": 0,
  "transportBills": 0,
  "mobileBills": 0,
  "miscellaneous": 0,
  "totalAmount": 0,
  "userID": 0,
  "createdOn": "2020-11-12T09:02:15.453Z",
  "comment": "string",
  "projectID": 0
}

      */
    }

    getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        
        
    }

   

    handlesubmit = (event) => {
        alert(`Submitted Successfully`);
        event.preventDefault();   
       
        const data = {
            "expenseId": this.state.expenseId,
            "purposeorReason": this.state.purposeorReason,
            "expenseStatus": this.state.expenseStatus,
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
            "userID": localStorage.getItem('LoggedInUserId'),
            "createdOn": moment().format("YYYY-MM-DD"),
            "comment": this.state.comment,
            "projectID": this.state.value
          }
        console.log(data)

        axios.post('http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/CreateExpense', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(error=>{
            console.log(error)
        });
    }

render(){
return(
<div id="page-wrapper">
            <div className="row">

<div style={{"margin-top":"10px"}}></div>
<form onSubmit = {this.handlesubmit}>
    <input type="hidden" />    <div className="panel panel-default">
        <div className="panel-heading">Expense Details</div>
        <div className="panel-body">
            <div className="row">

                <div className="col-md-3">
                    <label className="manadatory" for="ProjectID">Project</label>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    <select className="form-control" data-val="true" data-val-number="The field Project must be a number." data-val-required="Choose Project" id="ProjectID" name="value" onChange={this.handleChange} value={this.state.value}><option value="">----Select----</option><option value="1">ABC Bearings Ltd</option><option value="2">Alok Industries Ltd</option><option value="3">Ambuja Cement Ltd</option><option value="4">Anil Bioplus Ltd (Anil Group Ahmedabad)</option><option value="5">Ansa Pack (Simplex Group)</option><option value="6">Aries Agro Ltd</option><option value="7">Arkema India Pvt Ltd</option><option value="8">ATC Tires Pvt Ltd  (Yokohama Group)</option><option value="9">Atul Bioscience Ltd. (Lalbhai Group)</option><option value="10">Atul Ltd. (Lalbhai Group)</option></select>
                    <span className="field-validation-valid text-danger" data-valmsg-for="ProjectID" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="PurposeorReason">Purpose / Reason</label>
                    <textarea className="form-control" onChange={this.handleChange} cols="20" data-val="true" data-val-required="Please Enter Purpose/Reason" name="purposeorReason" value={this.state.purposeorReason}></textarea>
                    <span className="field-validation-valid text-danger" data-valmsg-for="PurposeorReason" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="FromDate">Expense From Date</label>
                    <input className="form-control hasDatepicker" onChange={this.handleChange} data-val="true" data-val-date="The field Expense From Date must be a date." data-val-required="Please Choose From Date" name="fromDate" type="text" value={this.state.fromDate} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="FromDate" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="ToDate">Expense To Date</label>
                    <input className="form-control hasDatepicker" onChange={this.handleChange} data-val="true" data-val-date="The field Expense To Date must be a date." data-val-required="Please Choose To Date" name="toDate" type="text" value={this.state.toDate} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="ToDate" data-valmsg-replace="true"></span>
                </div>
            </div>

        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">Type of Expense</div>
        <div className="panel-body">
            <div className="row">
                <div className="col-md-3">
                    <label for="HotelBills">Hotel</label>
                    <input className="form-control" data-val="true" onChange={this.handleChange} data-val-number="The field Hotel must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="hotelBills" type="text" value={this.state.hotelBills} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="HotelBills" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label for="MealsBills">Meals</label>
                    <input className="form-control" data-val="true" onChange={this.handleChange} data-val-number="The field Meals must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="mealsBills" type="text" value={this.state.mealsBills} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="MealsBills" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label for="LandLineBills">Land Line bills</label>
                    <input className="form-control" data-val="true" onChange={this.handleChange} data-val-number="The field Land Line bills must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="landlineBills" type="text" value={this.state.landlineBills} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="LandLineBills" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label for="MobileBills">Mobile bills</label>
                    <input className="form-control" data-val="true" onChange={this.handleChange} data-val-number="The field Mobile bills must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="mobileBills" type="text" value={this.state.mobileBills} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="MobileBills" data-valmsg-replace="true"></span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label for="TransportBills">Transport expense</label>
                    <input className="form-control" onChange={this.handleChange} data-val="true" data-val-number="The field Transport expense must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="transportBills" type="text" value={this.state.transportBills} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="TransportBills" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label for="TravelBills">Travel</label>
                    <input className="form-control" onChange={this.handleChange} data-val="true" data-val-number="The field Travel must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="travelBills" type="text" value={this.state.travelBills} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="TravelBills" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label for="Miscellaneous">Miscellaneous expense</label>
                    <input className="form-control" onChange={this.handleChange} data-val="true" data-val-number="The field Miscellaneous expense must be a number." name="miscellaneous" type="text" value={this.state.miscellaneous} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="Miscellaneous" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label for="TotalAmount">Total Amount</label>
                    <input className="form-control" onChange={this.handleChange} data-val="true" data-val-number="The field Total Amount must be a number." name="totalAmount" type="text" value={this.state.totalAmount} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="TotalAmount" data-valmsg-replace="true"></span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label for="VoucherID">Expense ID / Voucher ID</label>
                    <input className="form-control" onChange={this.handleChange} name="voucherID" type="text" value={this.state.voucherID} />
                    <span className="field-validation-valid text-danger" data-valmsg-for="VoucherID" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="Zip_Attachments">Zip Attachments</label>
                    <input type="file" onchange="ValidateFile(this);" className="form-control" name="file" id="file" />
                    <span id="val_file" className="text-danger"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="Single_Attachment">Single Attachment</label>
                    <input type="file" onchange="ValidateImagesOnly(this);" className="form-control" name="Singlefile" id="Singlefile" />
                    <span id="val_fileSingle" className="text-danger"></span>
                </div>


            </div>
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <label className="text-danger" for="">[Scan Copies of Hotel, Travel, Meals, Mobile, Transport, Miscellaneous Bills Zip Them and Upload Zip]</label>
                </div>
            </div>
        </div>
    </div>
    <div style={{"margin-top":"10px"}}></div>
    <div className="row">
        <div className="form-group">
            <div className="col-md-offset-0 col-md-12">
                <input type="submit" onClick={this.props.onSubmit} value="Save Details" className="btn btn-success" />

                <a className="btn btn-danger" href="/Expense/Add">Cancel</a>
            </div>
        </div>
    </div>
</form>





            </div>
        </div>

        )
        }
        }
export default ExpenseForUser;
