import React, {Compoonent} from 'react';

class TimesheetExport extends React.Component{
    render(){
        return(
            <div id="page-wrapper">
            <div className="row">
                
                


<form>    <div style={{"margin-top":"10px"}}></div>
    <div className="panel panel-default">
        <div className="panel-heading">TimeSheet Report</div>
        <div className="panel-body">
            <div className="row">
                <div className="col-md-3">
                    <label className="manadatory" for="FromDate">TimeSheet From Date</label>
                    <input className="form-control hasDatepicker" data-val="true" data-val-date="The field TimeSheet From Date must be a date." data-val-required="Please Choose From Date" id="FromDate" name="FromDate" type="text" value="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="FromDate" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="ToDate">TimeSheet To Date</label>
                    <input className="form-control hasDatepicker" data-val="true" data-val-date="The field TimeSheet To Date must be a date." data-val-required="Please Choose To Date" id="ToDate" name="ToDate" type="text" value="" disabled="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="ToDate" data-valmsg-replace="true"></span>
                </div>
                <div className="col-md-3">
                    <label className="manadatory" for="RegistrationID">Employee Name</label>
                    <select className="form-control" data-val="true" data-val-number="The field Employee Name must be a number." data-val-required="Please Select Employee Name" id="RegistrationID" name="RegistrationID"><option value="">----Select----</option><option value="5">Anuj Sondekar</option><option value="6">Firoz Shaikh</option><option value="7">Mahesh Kakad</option><option value="8">Tejal Rajgor</option><option value="9">Pratik Patil</option><option value="10">Kinjal Parikh</option><option value="11">Leshu Samanta</option><option value="12">Vaishnavi Iyer</option><option value="13">Manjiri Sawant</option><option value="14">Sukanya Iyer</option><option value="47">Sai</option></select>
                    <span className="field-validation-valid text-danger" data-valmsg-for="RegistrationID" data-valmsg-replace="true"></span>
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

export default TimesheetExport; 
