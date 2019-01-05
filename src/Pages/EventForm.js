import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TimeHandler from '../Components/TimeHandler';
import Success from './Success';
import moment from 'moment';

class EventForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	email: '',
    	eventName: '',
    	startDate: null,
    	endDate: null,
    	startTime: null,
    	endTime: null,
    	address: '',
    	description: '',
    	checked: false,
    	fireRedirect: false,
    	uploadedImageLink: '',
    	reference_id: ''
    };
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
    this.handleImageLink = this.handleImageLink.bind(this);
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
      startDate: startDate,
    });
  }

  handleEndDate(endDate) {
    this.setState({
      endDate: endDate,
    });
  }

  handleStartTime(startTime) {
    this.setState({
    	startTime: startTime,
    });
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleEndTime(endTime) {
    this.setState({
      endTime: endTime
    });
  }

  handleImageLink(imageLink) {
  	this.setState({ 
  		uploadedImageLink: imageLink,
  	});
  }

  uploadWidget() {
        window.cloudinary.openUploadWidget({ cloudName: 'afnanimages', uploadPreset: 'pcw9gktc', 
        	multiple: false, cropping: true, croppingAspectRatio: '2', maxFiles: '1', 
        	showCompletedButton: true, resource_type: 'image', theme: 'minimal'},
            (error, result) => {
                if (result.event === "success") {
                	this.handleImageLink(result.info.public_id);
                	alert("Finish the form to complete submitting your event and upload event banner")
                }
            });
    }

  handleSubmit (event) {
      fetch('http://localhost:3003/postevent', {
      	method: 'post',
      	headers: {'Content-Type': 'application/json'},
      	body: JSON.stringify({
      		name: this.state.name,
	    	email: this.state.email,
	    	eventName: this.state.eventName,
	    	startDate: moment(this.state.startDate).add(1, 'days'),
    		endDate: moment(this.state.endDate).add(1, 'days'),
    		startTime: moment(this.state.startTime).add(6, 'hours'),
    		endTime: moment(this.state.endTime).add(6, 'hours'),
	    	address: this.state.address,
	    	description: this.state.description,
	    	uploadedImageLink: this.state.uploadedImageLink
      	})
      })
      .then(res => res.json())
      .then(reference_id =>  this.setState({ reference_id }))
      .then(worked => {
      	this.state.reference_id ? this.setState({ fireRedirect: true }) : this.setState({ fireRedirect:  "noID"})
      })
      .catch(err => alert(err))
      event.preventDefault();
  }

  
  render() {

  	const content = this.state.checked 
      ? <div> 
      		<label htmlFor="endDate" className="ml-3">Ending Date: </label>
			<DatePicker 
				id="endDate"
				className="ml-2"
				selected={this.state.endDate}
				onChange={this.handleEndDate}
				dateFormat="dd/MM/yyyy"
				placeholderText="Select a date"
			/> 
		</div>
      : null;

    const imageUploadSuccess = this.state.uploadedImageLink 
    ? 	<div> 
      		<p className="text-muted mt-2"> Event banner ready for upload &#10004; </p>
		</div>
	: null;

if (this.state.fireRedirect === false) {
	return (
    	<div>
    		{/* Header */}
    		<div className="container">
              <div className="row">
                      <Header />
              </div>
              <hr />
            </div>

        	{/* Input Form */}
            <div className="row">
	            <form className="offset-md-3 col-md-6" autoComplete="off" onSubmit={this.handleSubmit} >
	            	<h2> Post an Event </h2>
	            		{/* Form begins here */}
	            	  	<div className="form-row">
					    	<div className="form-group col-md-6">
					    		<label htmlFor="formName">Your name </label>
					      		<input type="text" className="form-control" id="formName" name="name" 
					      		value={this.state.name} onChange={this.handleChange} placeholder="Name" />
					    	</div>
					    	<div className="form-group col-md-6">
					      		<label htmlFor="formEmail">Your e-mail address</label>
					      		<input type="email" className="form-control" id="formEmail" 
					      		name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
					    	</div>
					  	</div>
					  	<div className="form-group">
					    	<label htmlFor="formEventName">Name of event</label>
					    	<input type="text" className="form-control form-control-lg" id="formEventName"
					    	name="eventName" value={this.state.eventName} onChange={this.handleChange} placeholder="Event name" />
					  	</div>
					  	<div className="form-row">
					    	<label htmlFor="startDate">Starting Date: </label>
					    	<DatePicker 
					    	id="startDate"
					    	className="ml-2"
					    	name="startDate"
					    	selected={this.state.startDate}
				        	onChange={this.handleStartDate}
				        	dateFormat="dd/MM/yyyy"
				        	placeholderText="Select a date"
				        	/>
				        	{/* Go up and look at const content to understand what is written below */}
				        	{ content }
				        </div>
				        	{/* Checkbox for {comment} */}
				        <div className="form-row mt-2">
				        	<div>
						        <label htmlFor="checkboxEndDate">Event longer than 1 day?</label>
						        <input id="checkboxEndDate" className="ml-1"
						        type="checkbox" 
						        checked={ this.state.checked } 
						        onChange={ this.handleCheck } />
						    </div>
					  	</div>
					  	<div className="form-row mt-2">
						    <label htmlFor="startTime">Starting Time: </label>
						    <TimeHandler selected={this.state.startTime} onChange={this.handleStartTime} id="startTime" />
					        <label htmlFor="endTime" className="ml-3">Ending Time: </label>
						    <TimeHandler selected={this.state.endTime} onChange={this.handleEndTime} id="endTime" />
					  	</div>
						<div className="form-group">
						    <label htmlFor="formAddress">Address</label>
						    <input type="text" className="form-control" id="formAddress" 
						    name="address" value={this.state.address} onChange={this.handleChange} placeholder="Location address" />
						</div>
						<div className="form-group">
						    <label htmlFor="formDescription">Description</label>
						    <small className="text-muted"> (Including registration details)</small>
						    <textarea className="form-control" id="formDescription" 
						    name="description" value={this.state.description} onChange={this.handleChange} rows="6"></textarea>
						</div>
	                	<div className="form-group"> 
	                		<div className="upload">
			                    <button type="button" onClick={this.uploadWidget} className="btn">
			                        Add event banner
			                    </button>
			                </div>
			                { imageUploadSuccess }
	                	</div>
					<button type="submit" className="btn btn-outline-success btn-lg mt-3">Submit</button>
	            </form>
	        </div>

	        <Footer />
    	</div>
  	 	);
	} else {
		return (
			<Success reference_id={this.state.reference_id} email={this.state.email} />
		);
	}
    
	}	
}

export default EventForm;