import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeHandler from '../Components/TimeHandler';
import UpdateFormComponent from  '../Components/UpdateFormComponent';

class UpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fireRedirect: false,
			checked: false,
			eventName: '',
    		startDate: null,
    		endDate: null,
    		startTime: null,
    		endTime: null,
    		address: '',
    		description: '',
		}
	this.handleChange = this.handleChange.bind(this);
	this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
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
     		event: { startDate: startDate }
    	})
  	}

 	 handleEndDate(endDate) {
   		this.setState({
      		event: { endDate: endDate }
    	});
  	}

  	handleStartTime(startTime) {
    	this.setState({
    		event: { startTime: startTime }
    	});
  	}

  	handleCheck() {
    	this.setState({
      		checked: !this.state.checked
    	})
  	}

  	handleEndTime(endTime) {
    	this.setState({
    		event: { endTime: endTime }
    	});
  	}

  	handleUpdateSubmit(event) {
  		console.log(this.state.event.startDate)
  	}

	render() {
		const content = this.state.checked 
      	? 	<div> 
	      		<label htmlFor="endDate" className="ml-3">Ending Date: </label>
				<DatePicker 
					id="endDate"
					className="ml-2"
					selected={this.state.event.endDate}
					onChange={this.handleEndDate}
					dateFormat="dd/MM/yyyy"
					placeholderText="Select a date"
				/> 
			</div>
      : null;

		return(
		<div>
			<UpdateFormComponent 
			checked={this.state.checked} endDate={this.state.event.endDate} handleEndDate={this.handleEndDate} handleCheck={this.handleCheck}
			handleUpdateSubmit={this.handleUpdateSubmit} handleChange={this.handleChange}
			eventName={this.state.event.eventName}
			startDate={this.state.event.startDate} handleStartDate={this.handleStartDate}
			startTime={this.state.event.startTime} handleStartTime={this.handleStartTime}
			endTime={this.state.event.endTime} handleEndTime={this.handleEndTime}
			address ={this.state.event.address}
			description={this.state.event.description}
			/> 
				
		</div>
		)
	}	

}

export default UpdateForm;

