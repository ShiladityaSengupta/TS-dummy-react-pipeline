import React, { Component } from 'react';

class ExpenseReport extends Component {
    render(){
        return(
            <div id="page-wrapper">
            <div className="row">
 
<form>    <div style={{"margin-top":"10px"}}></div>
    <div className="panel panel-default">
        <div className="panel-heading">Expense Report</div>
        <div className="panel-body">
            <div className="row">
                <div className="col-md-3">
                    <label className="manadatory" for="FromDate">Expense From Date</label>
                    <input className="form-control hasDatepicker" data-val="true" data-val-date="The field Expense From Date must be a date." data-val-required="Please Choose From Date" id="FromDate" name="FromDate" type="text" value="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="FromDate" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="ToDate">Expense To Date</label>
                    <input className="form-control hasDatepicker" data-val="true" data-val-date="The field Expense To Date must be a date." data-val-required="Please Choose To Date" id="ToDate" name="ToDate" type="text" value="" disabled="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="ToDate" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                </div>
            </div>
            <div style={{"margin-top":"10px"}}></div>
            <div className="row">
                <div className="form-group">
                    <div className="col-md-offset-0 col-md-12">
                        <input type="submit" value="Export to Excel" className="btn btn-info" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>




            </div>

        </div>


        )
    }
}

export default ExpenseReport; 