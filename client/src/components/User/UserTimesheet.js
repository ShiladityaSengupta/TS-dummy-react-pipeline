import React, { Component } from 'react';
import axios from 'axios';
import moment from "moment";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class UserTimesheet extends Component {

    constructor() {
        super();
        this.handleDayChange = this.handleDayChange.bind(this);


        this.state = {
            fromDate: '',
            toDate: '',
            sunday: '',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            total: '',
            MasterId: '',
            value: '',
            day: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            createdOn: this.getCurrentDate,
            selectedDay: undefined,
            isEmpty: true,
            isDisabled: false,
            dateMon: null, dateTue: null, dateWed: null, dateThu: null, dateFri: null, dateSat: null,
            
            
        }
    }

    getCurrentDate(separator = '') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        const input = dayPickerInput.getInput();
       
        
        this.setState({
          selectedDay,
          isEmpty: !input.value.trim(),
          isDisabled: modifiers.disabled === true,
         
        })
        var currentDateMon = new Date();
        var currentDateTue = new Date();
        var currentDateWed = new Date();
        var currentDateThu = new Date();
        var currentDateFri = new Date();
        var currentDateSat = new Date();
        currentDateMon.setDate(selectedDay.getDate() + 1);
        currentDateTue.setDate(selectedDay.getDate() + 2);
        currentDateWed.setDate(selectedDay.getDate() + 3);
        currentDateThu.setDate(selectedDay.getDate() + 4);
        currentDateFri.setDate(selectedDay.getDate() + 5);
        currentDateSat.setDate(selectedDay.getDate() + 6);
        
        this.setState({
            dateMon: currentDateMon, dateTue: currentDateTue, dateWed: currentDateWed, dateThu: currentDateThu, dateFri: currentDateFri, dateSat: currentDateSat
        })

       
        
      }

      

     

      

      
    handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted Successfully');

        const data1 = {


            "fromDate": this.state.selectedDay.toLocaleDateString(),
            "toDate": this.state.dateSat.toLocaleDateString(),
            "totalHours": this.state.total,
            "userID": localStorage.getItem('LoggedInUserId'),
            "createdOn": moment().format("YYYY-MM-DD"),
            "comment": "",
            "timesheetStatus": 0
        }



        const valHours = [this.state.sunday, this.state.monday, this.state.tuesday, this.state.wednesday, this.state.thursday, this.state.friday, this.state.saturday]
        
       
        console.log(`${this.state.d}`)



        axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetMaster', data1)
            .then(response => {
                console.log(data1)



                this.setState({ MasterId: response.data[0].timesheetMasterId })
                console.log(response.data)
                console.log(this.state.MasterId)
             //   alert(this.state.MasterId)



                if (response.status === 200) {
                   // console.log(`from date is ${this.state.fromDate}`)
                   // alert('hi')

                    axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetDetail', {

                        "daysofWeek": this.state.day[0],
                        "hours": valHours[0],
                        "period": this.state.selectedDay.toLocaleDateString(),
                        "projectId": this.state.value,
                        "userId": localStorage.getItem('LoggedInUserId'),
                        "createdOn": moment().format("YYYY-MM-DD"),
                        "timesheetMasterId": this.state.MasterId,
                        "totalHours": this.state.total

                    })
                        .then(res => {
                            console.log(res)

                            axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetDetail', {

                                "daysofWeek": this.state.day[1],
                                "hours": valHours[1],
                                "period": this.state.dateMon.toLocaleDateString(),
                                "projectId": this.state.value,
                                "userId": localStorage.getItem('LoggedInUserId'),
                                "createdOn": moment().format("YYYY-MM-DD"),
                                "timesheetMasterId": this.state.MasterId,
                                "totalHours": this.state.total

                            })
                                .then(res => {
                                    console.log(res)

                                    axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetDetail', {

                                        "daysofWeek": this.state.day[2],
                                        "hours": valHours[2],
                                        "period": this.state.dateTue.toLocaleDateString(),
                                        "projectId": this.state.value,
                                        "userId": localStorage.getItem('LoggedInUserId'),
                                        "createdOn": moment().format("YYYY-MM-DD"),
                                        "timesheetMasterId": this.state.MasterId,
                                        "totalHours": this.state.total

                                    })
                                        .then(res => {
                                            console.log(res)

                                            axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetDetail', {

                                                "daysofWeek": this.state.day[3],
                                                "hours": valHours[3],
                                                "period": this.state.dateWed.toLocaleDateString(),
                                                "projectId": this.state.value,
                                                "userId": localStorage.getItem('LoggedInUserId'),
                                                "createdOn": moment().format("YYYY-MM-DD"),
                                                "timesheetMasterId": this.state.MasterId,
                                                "totalHours": this.state.total

                                            })
                                                .then(res => {
                                                    console.log(res)

                                                    axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetDetail', {

                                                        "daysofWeek": this.state.day[4],
                                                        "hours": valHours[4],
                                                        "period": this.state.dateThu.toLocaleDateString(),
                                                        "projectId": this.state.value,
                                                        "userId": localStorage.getItem('LoggedInUserId'),
                                                        "createdOn": moment().format("YYYY-MM-DD"),
                                                        "timesheetMasterId": this.state.MasterId,
                                                        "totalHours": this.state.total

                                                    })
                                                        .then(res => {
                                                            console.log(res)

                                                            axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetDetail', {

                                                                "daysofWeek": this.state.day[5],
                                                                "hours": valHours[5],
                                                                "period": this.state.dateFri.toLocaleDateString(),
                                                                "projectId": this.state.value,
                                                                "userId": localStorage.getItem('LoggedInUserId'),
                                                                "createdOn": moment().format("YYYY-MM-DD"),
                                                                "timesheetMasterId": this.state.MasterId,
                                                                "totalHours": this.state.total

                                                            })
                                                                .then(res => {
                                                                    console.log(res)

                                                                    axios.post('http://ts-timesheet-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Timesheet/insertTimesheetDetail', {

                                                                        "daysofWeek": this.state.day[6],
                                                                        "hours": valHours[6],
                                                                        "period": this.state.dateSat.toLocaleDateString(),
                                                                        "projectId": this.state.value,
                                                                        "userId": localStorage.getItem('LoggedInUserId'),
                                                                        "createdOn": moment().format("YYYY-MM-DD"),
                                                                        "timesheetMasterId": this.state.MasterId,
                                                                        "totalHours": this.state.total

                                                                    })
                                                                        .then(res => {
                                                                            console.log(res)


                                                                        })
                                                                        .catch(err => {
                                                                            console.log(err)

                                                                        })


                                                                })
                                                                .catch(err => {
                                                                    console.log(err)

                                                                })


                                                        })
                                                        .catch(err => {
                                                            console.log(err)

                                                        })


                                                })
                                                .catch(err => {
                                                    console.log(err)

                                                })


                                        })
                                        .catch(err => {
                                            console.log(err)

                                        })


                                })
                                .catch(err => {
                                    console.log(err)

                                })


                        })
                        .catch(err => {
                            console.log(err)

                        })



                }

            }
            )

    }


    render() {
        const { selectedDay, isDisabled, isEmpty, dateMon, dateTue, dateWed, dateThu, dateFri, dateSat } = this.state
        
        return (
            <div id="page-wrapper">

                <h4 className="page-header">TimeSheet</h4>
                <div className="row">

                    <div style={{ "margin-top": "10px" }}></div>
                    <form onSubmit={this.handleSubmit}>

                        <div className="panel-body">
                            <div className="col-md-3">
                                <label className="manadatory" for="From_Date">From Date</label>
                                <div>
                               
    <DayPickerInput
          value={selectedDay}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay,
            disabledDays: {
              daysOfWeek: [1, 2, 3, 4, 5, 6],
            },
          }}
        />
        </div>
         <p>
          {isEmpty && 'Please type or pick a day'}
          {!isEmpty && !selectedDay && 'This day is invalid'}
          {selectedDay && isDisabled && 'This day is disabled'}
          
        </p>
                                
                               
                            </div>

                            <div className="col-md-3">
                            

                            </div>
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-3">
                                <div id="_panelmainbutton" >
                                    <input id="Submit" style={{"margin-left":"10 px"}} className="btn btn-promary" type="submit" value="Save Details" />
                                    <a className="btn btn-danger" href="/TimeSheet/Add">Cancel</a>
                                </div>
                            </div>
                        </div>


                        {
                        
                        this.state.selectedDay === undefined ? <div></div> :

                        <div id="_panelmain">

                            <div className="panel-body">

                                <div style={{ "margin": "10px" }}></div>
                                <div className="row">

                                    <div className="col-md-2">
                                        <label for="Project_Name">Project Name</label>
                                        <br /> 
                                    </div>
                                    <div className="col-md-1">
                                        <label id="label1">[Sunday]</label>
                                        <br />
          <label id="date1">{selectedDay &&
            !isDisabled &&
            `${selectedDay.toLocaleDateString()}`}</label>
                                        
                                    </div>
                                    
                                    <div className="col-md-1">
                                        <label id="label1">[Monday]</label>
                                        <br />
                                        <label id="date1">{selectedDay &&
            !isDisabled &&
            `${dateMon.toLocaleDateString()}`}</label>
                                       
                                    </div>
                                    
                                    <div className="col-md-1">
                                        <label id="label3">[Tuesday]</label>
                                        <br />
                                        <label id="date1">{selectedDay &&
            !isDisabled &&
            `${dateTue.toLocaleDateString()}`}</label>
                                    </div>
                                    <div className="col-md-1">
                                        <label id="label4">[Wednesday]</label>
                                        <br />
                                        <label id="date1">{selectedDay &&
            !isDisabled &&
            `${dateWed.toLocaleDateString()}`}</label>
                                    </div>
                                    <div className="col-md-1">
                                        <label id="label5">[Thursday]</label>
                                        <br />
                                        <label id="date1">{selectedDay &&
            !isDisabled &&
            `${dateThu.toLocaleDateString()}`}</label>
                                    </div>
                                    <div className="col-md-1">
                                        <label id="label6">[Friday]</label>
                                        <br />
                                        <label id="date1">{selectedDay &&
            !isDisabled &&
            `${dateFri.toLocaleDateString()}`}</label>
                                    </div>
                                    <div className="col-md-1">
                                        <label id="label7">[Saturday]</label>
                                        <br />
                                        <label id="date1">{selectedDay &&
            !isDisabled &&
            `${dateSat.toLocaleDateString()}`}</label>
                                    </div>
                                    <div className="col-md-1">
                                        <label for="Total">Total</label>
                                        <br />
                                        <label for="Hours">Hours</label>
                                    </div>
                                    <div className="col-md-2">
                                        <label for="Description">Description</label>
                                    </div>
                                </div>
                                <div style={{ "margin": "10px" }}></div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <select className="form-control" name="value" onChange={this.handleChange} value={this.state.value}><option value="">----Select----</option><option value="1">ABC Bearings Ltd</option><option value="2">Alok Industries Ltd</option><option value="3">Ambuja Cement Ltd</option><option value="4">Anil Bioplus Ltd (Anil Group Ahmedabad)</option><option value="5">Ansa Pack    (Simplex Group)</option><option value="6">Aries Agro Ltd</option><option value="7">Arkema India Pvt Ltd</option><option value="8">ATC Tires Pvt Ltd  (Yokohama Group)</option><option value="9">Atul Bioscience Ltd. (Lalbhai Group)</option><option value="10">Atul Ltd.   (Lalbhai Group)</option></select>
                                        <span className="field-validation-valid text-danger" data-valmsg-for="ProjectID1" data-valmsg-replace="true"></span>
                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} name="sunday" type="text" />

                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} id="text2_p1" name="monday" type="text" />

                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} id="text3_p1" name="tuesday" type="text" />

                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} id="text4_p1" name="wednesday" type="text" />

                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} id="text5_p1" name="thursday" type="text" />

                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} name="friday" type="text" />

                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} name="saturday" type="text" />

                                    </div>
                                    <div className="col-md-1">
                                        <input className="form-control" onChange={this.handleChange} name="total" type="text" />
                                    </div>
                                    <div className="col-md-2">
                                        <textarea className="form-control" onChange={this.handleChange} name="description"></textarea>
                                    </div>


                                </div>
                            </div>


                        </div>
    }

                    </form>


                </div>

            </div>
        )
    }
}

export default UserTimesheet;