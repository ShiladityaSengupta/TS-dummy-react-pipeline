import React, { Component } from 'react';
import axios from 'axios';
import './Expense.css' ;
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 


class Expense extends Component {

     constructor(props){
        super(props)
        this.state = {
            FromDate: '',
            ToDate: '',
            x: 0,
            ExpenseData: []
        }
    }

/*    componentDidMount() {
        axios.get('url')
        .then(response => {
            console.log(response.data);
            this.setState({
                ExpenseData: response.data
            })
        })
    } */

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handlesubmit = (event) => {
        event.preventDefault();
        
        localStorage.setItem('x', 0)
        // name of the response in 'expense'
           // const { handle } = this.props.match.props.FromDate
           // const { handle } = [this.props.match.params.ToDate, this.props.match.params.FromDate] 
            axios.get(`http://ts-expense-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Expense/getExpenseExportReport/${this.state.FromDate}/${this.state.ToDate}`)
            .then(response => {
                console.log(response);
                this.setState({
                    ExpenseData: response.data
                    
                })
                localStorage.setItem('x', 1)
                console.log(this.ExpenseData)
            })

           return this.ExpenseData

    };
     
    handleSubmit(e) {
        this.props.onSubmit(this.state);
        
        
      //  alert("booking is done successfully");
       // this.props.history.push('/cargorouting');
      //  console.log("handleSubmit(e) is evoked")
    }

    
    
   
    
    render() {
         if(this.state.ExpenseData.length) {
        return (
            <div id="page-wrapper">
                <div className="row">
             
            <div>
               

            <table id="emp" className="table">   

<thead>  

    <tr>  

    <th>User Id</th>
        <th>Created On</th>
        <th>Expense Id</th>
        <th>Expense Status</th>
        <th>From Date</th>
        <th>To Date</th>
        <th>Hotel Bills</th>
        <th>Landline Bills</th>
        <th>Meals Bills</th> 
        <th>Miscellaneous</th>
        <th>Mobile Bills</th>
        <th>Project Id</th>
        <th>Purpose/Reason</th>
        
       
        <th>Transport Bills</th>
        <th>Travel Bills</th>
        <th>Total Amount</th>
        
        <th>Voucher Id</th>   

    </tr>  

</thead>  

<tbody>              { 

    this.state.ExpenseData.map((p, index) => {  

        return <tr key='index' >  

            

<td>{p.createdOn.toString().substring(8,10)}-{p.createdOn.toString().substring(5,7)}-{p.createdOn.toString().substring(0,4)}</td> 

            <td>{p.userID}</td>
           
            <td >{p.expenseId}</td>  

            <td >{p.expenseStatus}</td>  

            <td>{p.fromDate.toString().substring(8,10)}-{p.fromDate.toString().substring(5,7)}-{p.fromDate.toString().substring(0,4)}</td>  

            <td>{p.toDate.toString().substring(8,10)}-{p.toDate.toString().substring(5,7)}-{p.toDate.toString().substring(0,4)}</td>
            
            <td >{p.hotelBills}</td>  

            <td >{p.landlineBills}</td>  

            <td >{p.mealsBills}</td> 

            <td>{p.miscellaneous}</td> 

            <td>{p.mobileBills}</td>

            <td>{p.projectID}</td>

            <td>{p.purposeorReason}</td>

           

            

            <td>{p.transportBills}</td>

            <td>{p.travelBills}</td>

            <td>{p.totalAmount}</td>

            

            <td>{p.voucherID}</td>

            </tr> 

                })  

                }  

                </tbody>  
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
        <div> 
        <form onSubmit = {this.handlesubmit}>    
        <div style={{"margin-top":"10px"}}></div>
        <div className="panel panel-default">
            <div className="panel-heading">Expense Report</div>
            <div className="panel-body">
            <div className="row">
                <div className="col-md-3">
                    <label className="manadatory" for="FromDate">From Date (DD-MM-YYYY)</label>
                        <input className="form-control hasDatepicker" id="FromDate"    name="FromDate" onChange={this.handleChange} required/>
                        <span className="field-validation-valid text-danger" data-valmsg-for="FromDate" data-valmsg-replace="true"></span>
                    </div>
                    <div className="col-md-3">
                    <label className="manadatory" for="ToDate">To Date (DD-MM-YYYY)</label>
                        <input className="form-control hasDatepicker" name="ToDate" onChange={this.handleChange} required/>
                        <span className="field-validation-valid text-danger" data-valmsg-for="ToDate" data-valmsg-replace="true"></span>
                    </div>
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-3">
                    </div>

                    
                    
                <div style={{"margin-top":"10px"}}></div>
                <div className="row">
                    <div className="form-group">
                        <div className="col-md-offset-0 col-md-12">
                        <input type="submit" onClick={this.props.onSubmit} value="Submit" className="btn btn-info" style={{"margin-top":"10px","margin-left":"14px"}} />
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
      
    </form>
    

    </div>
    </div>
    </div>

        )
        }
      
        
    }
}




export default Expense;
/*
 <div id="page-wrapper">
                <div className="row">
             
            <div> 
            <form onSubmit = {this.handlesubmit}>    
            <div style={{"margin-top":"10px"}}></div>
           
                <div className="panel-heading">Expense Report</div>
                
                   
                        <div className="col-md-3">
                            <label className="manadatory" for="FromDate">Expense From Date</label>
                            <input className="form-control hasDatepicker" id="FromDate" name="FromDate" onChange={this.handleChange} />
                            <span className="field-validation-valid text-danger" data-valmsg-for="FromDate" data-valmsg-replace="true"></span>
                        </div>
                        <div className="col-md-3">
                            <label className="manadatory" for="ToDate">Expense To Date</label>
                            <input className="form-control hasDatepicker" name="ToDate" onChange={this.handleChange} />
                            <span className="field-validation-valid text-danger" data-valmsg-for="ToDate" data-valmsg-replace="true"></span>
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                        </div>
                    
                    
                    <div className="row">
                        <div className="form-group">
                            <div className="col-md-offset-0 col-md-12">
                            
                            <input type="submit" onClick={this.props.onSubmit} value="Submit" className="btn btn-info" />
                            

                                
                            </div>
                        </div>
                    </div>
          
        </form>
        

        </div>
        </div>
        </div>


        =====================================================================================


        

*/