import React, { Component } from 'react';
import UpdateSigninComponent from '../Components/UpdateSigninComponent';
import "react-datepicker/dist/react-datepicker.css";
import UpdateFormComponent from '../Components/UpdateFormComponent';
import { Redirect } from 'react-router';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'

class UpdateSignin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reference_id: '',
			email: '',
			fireRedirect: false,
			checked: false,
			id: '',
			eventName: '',
    		startDate: null,
    		endDate: null,
    		startTime: null,
    		endTime: null,
    		address: '',
    		description: ''
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
	this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
	this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDeleteAlert = this.handleDeleteAlert.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	        [name]: value
	    });
	}

	handleStartDate(startDate) {
    	this.setState({
     		startDate: startDate 
    	})
  	}

  	handleCheck() {
    	this.setState({
      		checked: !this.state.checked
    	})
  	}

 	 handleEndDate(endDate) {
   		this.setState({
      		endDate: endDate 
    	});
  	}

  	handleStartTime(startTime) {
    	this.setState({
    		startTime: startTime
    	});
  	}

  	handleEndTime(endTime) {
    	this.setState({
    		endTime: endTime 
    	});
  	}

	handleLoginSubmit(event) {
      	fetch('http://localhost:3003/updatesignin', {
      	method: 'post',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
      		reference_id: this.state.reference_id,
	    	email: this.state.email,
      	})
      })
      	.then(res => res.json())
      	.then(data =>  {
      		if (data.id) {
      			this.setState({
		      		fireRedirect: true,
		      		id: data.id,
		      		eventName: data.eventname,
		      		startDate: new Date(data.startdate),
		    		endDate: data.enddate ? new Date(data.enddate) :  null,
		    		startTime: new Date(data.starttime),
		    		endTime: data.endtime? new Date(data.endtime) :  null,
			    	address: data.address,
			    	description: data.description,
	        	})
      		}
      	})
      	.catch(err => alert("Wrong email or reference ID"))
      	event.preventDefault();
  	}

  	handleUpdateSubmit(event) {
  		fetch('http://localhost:3003/updateevent', {
      	method: 'put',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
      		id: this.state.id,
      		eventName: this.state.eventName,
    		startDate: moment(this.state.startDate).add(1, 'days'),
    		endDate: moment(this.state.endDate).add(1, 'days'),
    		startTime: moment(this.state.startTime).add(6, 'hours'),
    		endTime: moment(this.state.endTime).add(6, 'hours'),
    		address: this.state.address,
    		description: this.state.description
      	})
      })
      	.then(response => response.json())
      	.then(id => {
      		id ? this.setState({ fireRedirect: "success" }) : alert("something went wrong")
      	})
      	.catch(err => alert("was unable to update event"))
      	event.preventDefault();
  	}


  	handleDeleteAlert() {
  	confirmAlert({
	      title: 'Confirm to delete',
	      message: 'Are you sure you want to delete this event?',
	      buttons: [
	        {
	          label: 'Yes',
	          onClick: () => this.handleDelete()
	        },
	        {
	          label: 'No',
	          onClick: () => alert('Okay, continue updating event')
	        }
	      ]
    	})
  	}

  	handleDelete() {
  		const { id } = this.state;
  		fetch(`http://localhost:3003/deleteevent/${id}`, {
  			method: 'delete'
  		})
  		.then(response => response.json())
  		.then(response => this.setState({ fireRedirect: "success" }))
  		.catch(err => alert(err))
  	}

	render() {
		if (this.state.fireRedirect === false) {
			return (
				<UpdateSigninComponent
				onSubmit={this.handleLoginSubmit} 
				reference_id={this.state.reference_id} 
				onChange={this.handleChange}
				email={this.state.email} />
			)
		} else {
			return ( 
			<div>
			<UpdateFormComponent 
			checked={this.state.checked} endDate={this.state.endDate} handleEndDate={this.handleEndDate} handleCheck={this.handleCheck}
			handleUpdateSubmit={this.handleUpdateSubmit} handleChange={this.handleChange}
			eventName={this.state.eventName}
			startDate={this.state.startDate} handleStartDate={this.handleStartDate}
			startTime={this.state.startTime} handleStartTime={this.handleStartTime}
			endTime={this.state.endTime} handleEndTime={this.handleEndTime}
			address ={this.state.address}
			description={this.state.description}
			handleDeleteAlert={this.handleDeleteAlert}
			/> 
			{this.state.fireRedirect === "success" && (
          		<Redirect to={'/success'}/>
        	)}
        	</div>
			)			
		}	
	}

}

export default UpdateSignin;