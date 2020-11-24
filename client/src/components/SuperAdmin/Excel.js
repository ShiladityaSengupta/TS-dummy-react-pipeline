import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import axios from 'axios';
import Expense from './Expense'
import { getInitialState } from './Expense';



class Excel extends Component {

    constructor(){
        super()
        this.state = {
            ExpenseData: this.props.ExpenseData
        }
    } 

 

    
    

    render() {
        return (
            <div>
               
                <table id="emp" className="table">   

<thead>  

    <tr>  

        <th>Comment</th>  
        <th>Created On</th>
        <th>Expense Id</th>
        <th>Expense Status</th>
        <th>From Date</th>
        <th>Hotel Bills</th>
        <th>Landline Bills</th>
        <th>Meals Bills</th> 
        <th>Miscellaneous</th>
        <th>Mobile Bills</th>
        <th>Project Id</th>
        <th>Purpose/Reason</th>
        <th>To Date</th>
        <th>Total Amount</th>
        <th>Transport Bills</th>
        <th>Travel Bills</th>
        <th>User Id</th>
        <th>Voucher Id</th>   

    </tr>  

</thead>  
                

<tbody>              { 

    this.state.ExpenseData.map((p, index) => {  
        

        return <tr key='index' >  

            <td>{p.comment}</td>  

            <td >{p.createdOn}</td>  

            <td >{p.expenseId}</td>  

            <td >{p.expenseStatus}</td>  

            <td >{p.fromDate}</td>  

            <td >{p.hotelBills}</td>  

            <td >{p.landlineBills}</td>  

            <td >{p.mealsBills}</td> 

            <td>{p.miscellaneous}</td> 

            <td>{p.mobileBills}</td>

            <td>{p.projectID}</td>

            <td>{p.purposeorReason}</td>

            <td>{p.toDate}</td>

            <td>{p.totalAmount}</td>

            <td>{p.transportBills}</td>

            <td>{p.travelBills}</td>

            <td>{p.userID}</td>

            <td>{p.voucherID}</td>

            </tr> 

                })  

                }  

                </tbody>  

                </table>

                <ReactHTMLTableToExcel  

                                className="btn btn-info"  

                                table="emp"  

                                filename="ReportExcel"
                                
                                value="Export to Excel"

                                sheet="Sheet"  

                                buttonText="Export excel" />  
                                  <Expense onSubmit={this.handleSubmit}></Expense>
            
           
                                

            </div>
        )
    }
}

export default Excel;