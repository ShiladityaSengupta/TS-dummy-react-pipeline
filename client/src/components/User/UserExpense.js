import React, { Component } from 'react';
import axios from 'axios';
import moment from "moment";

class UserExpense extends Component {

    constructor(){
        super();

      //"fromDate": "2020-10-22T11:29:34.405Z",
      //"toDate": "2020-10-22T11:29:34.406Z",

       this.state = {
        "expenseId": '',
        "purposeorReason": '',
        "expenseStatus": '',
        "fromDate": '',
        "toDate": '',
        "voucherID": '',
        "hotelBills": '',
        "travelBills": '',
        "mealsBills": '',
        "landlineBills": '',
        "transportBills": '',
        "mobileBills": '',
        "miscellaneous": '',
        "totalAmount": '',
        "userID": localStorage.getItem('LoggedInUserId'),
        "createdOn": '',
        "comment": '',
        "projectID": '',
        value: '',
        createdOn: this.getCurrentDate
      }
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
            "expenseId": 0,
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
    <div className="panel panel-default">
        <div className="panel-heading">Expense Details</div>
        <div className="panel-body">
            <div className="row">

                <div className="col-md-3">
                    <label className="manadatory" for="ProjectID">Project</label>
                    <select className="form-control" data-val="true" data-val-number="The field Project must be a number." data-val-required="Choose Project"  name="value" onChange={this.handleChange} value={this.state.value}><option value="">----Select----</option><option value="1">ABC Bearings Ltd</option><option value="2">Alok Industries Ltd</option><option value="3">Ambuja Cement Ltd</option><option value="4">Anil Bioplus Ltd (Anil Group Ahmedabad)</option><option value="5">Ansa Pack    (Simplex Group)</option><option value="6">Aries Agro Ltd</option><option value="7">Arkema India Pvt Ltd</option><option value="8">ATC Tires Pvt Ltd  (Yokohama Group)</option><option value="9">Atul Bioscience Ltd. (Lalbhai Group)</option><option value="10">Atul Ltd.   (Lalbhai Group)</option></select>
                   
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="PurposeorReason">Purpose / Reason</label>
                    <textarea onChange={this.handleChange} className="form-control" cols="20" name="purposeorReason" value={this.state.purposeorReason}></textarea>
                    
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="FromDate">Expense From Date</label>
                    <input onChange={this.handleChange} className="form-control hasDatepicker" name="fromDate" type="text" value={this.state.fromDate} />
                   
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="ToDate">Expense To Date</label>
                    <input onChange={this.handleChange} className="form-control hasDatepicker" data-val="true" data-val-date="The field Expense To Date must be a date." data-val-required="Please Choose To Date"  name="toDate" type="text" value={this.state.toDate} />
                   
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
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Hotel must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$"  name="hotelBills" type="text" value={this.state.hotelBills} />
                   
                </div>
                <div className="col-md-3">
                    <label for="MealsBills">Meals</label>
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Meals must be a number." type="text" name="mealsbills" value={this.state.mealsBills} />
                   
                </div>
                <div className="col-md-3">
                    <label for="LandLineBills">Land Line bills</label>
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Land Line bills must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="landLineBills" type="text" value={this.state.landLineBills} />
                   
                </div>
                <div className="col-md-3">
                    <label for="MobileBills">Mobile bills</label>
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Mobile bills must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="mobileBills" type="text" value={this.state.mobileBills} />
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label for="TransportBills">Transport expense</label>
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Transport expense must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="transportBills" type="text" value={this.state.transportBills} />
                   
                </div>
                <div className="col-md-3">
                    <label for="TravelBills">Travel</label>
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Travel must be a number." data-val-regex="Enter Only Numbers" data-val-regex-pattern="^\d+$" name="travelBills" type="text" value={this.state.travelBills} />
                   
                </div>
                <div className="col-md-3">
                    <label for="Miscellaneous">Miscellaneous expense</label>
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Miscellaneous expense must be a number." name="miscellaneous" type="text" value={this.state.miscellaneous} />
                    
                </div>
                <div className="col-md-3">
                    <label for="TotalAmount">Total Amount</label>
                    <input onChange={this.handleChange} className="form-control" data-val="true" data-val-number="The field Total Amount must be a number." name="totalAmount" type="text" value={this.state.totalAmount} />
                   
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label for="VoucherID">Expense ID / Voucher ID</label>
                    <input onChange={this.handleChange} className="form-control" name="voucherId" type="text" value={this.state.voucherId} />
                    
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="Zip_Attachments">Zip Attachments</label>
                    <input type="file" className="form-control" name="file" id="file" />
                   
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="Single_Attachment">Single Attachment</label>
                    <input type="file" className="form-control" name="Singlefile" id="Singlefile" />
                    
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
                <input type="submit" onClick={this.props.onSubmit} value="submit" className="btn btn-success" />

                
            </div>
        </div>
    </div>
</form>





            </div>
        </div>

)
}

}

export default UserExpense;

