import React, { Component } from 'react';
import axios from 'axios';
import './AllProjectsTable.css';
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
//import Modal from 'react-modal';

class AllProjectsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            loading: true,
            deleted: false,
            showPopup: false
        }
    }    


    handleDelete = (id, name) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/deleteProject/'+ id;
        console.log(apiurl);
        axios.delete(apiurl)
            .then(res => {
                if (res.status === 200) {
                    console.log('Deleted Project ID: '+id+', Project Name: '+name)
                    alert('Deleted Project ID: ' + id + ', Project Name: ' + name)
                    this.setState({});
                    window.location.reload();
                    //this.props.history.render('/nav/Project/Index'); 
                    //this.render();
                    //alert('deleted successfully');
                }
            }
            )
    }


    async getProjectsData() {
        const res = await axios.get('http://ts-project-service-taskeen-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Project/getAllProjects')
        //console.log(res.data)
        this.setState({ loading: false, projects: res.data })
        console.log(this.state.projects);
    }


    componentDidMount() {
        this.getProjectsData()
    }

    render() {
        let items= this.state.projects
        return (
            <div id="page-wrapper">
                <div className="row">
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                        <th className="th-sm">Project ID</th>
                        <th className="th-sm">Project Name</th>
                        <th className="th-sm">Nature of Industry</th>
                        <th className="th-sm">Project Code</th>
                        <th className="th-sm">Actions</th>
                        </tr>
                        </thead>

                        <tbody>

                        {
                            items.map(item  =>
                                <tr key={item.projectId}>
                                <td>{item.projectId}</td>
                                <td>{item.projectName}</td>
                                <td>{item.natureofIndustry}</td>
                                <td>{item.projectCode}</td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDelete(item.projectId, item.projectName)}>Delete</button>
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
}

export default AllProjectsTable;