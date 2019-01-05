import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeHandler from './TimeHandler';


const UpdateFormComponent = (props) => {
	const content = props.checked 
      	? 	<div> 
	      		<label htmlFor="endDate" className="ml-3">Ending Date: </label>
				<DatePicker 
					id="endDate"
					className="ml-2"
					selected={props.endDate}
					onChange={props.handleEndDate}
					dateFormat="dd/MM/yyyy"
					placeholderText="Select a date"
				/> 
			</div>
      : null;

	return (
		<div>
				<div className="container">
	              <div className="row">
	                      <Header />
	              </div>
	              <hr />
	            </div>

	        	{/* Input Form */}
	            <div className="row mb-3">
		            <form className="offset-md-3 col-md-6" autoComplete="off" onSubmit={props.handleUpdateSubmit} >
		            	<h2> Update an Event </h2>
		            		{/* Form begins here */}
						  	<div className="form-group">
						    	<label htmlFor="formEventName">Name of event</label>
						    	<input type="text" className="form-control form-control-lg" id="formEventName"
						    	name="eventName" value={props.eventName} onChange={props.handleChange} placeholder="Event name"/>
						  	</div>
						  	<div className="form-row">
						    	<label htmlFor="startDate">Starting Date: </label>
						    	<DatePicker 
						    	id="startDate"
						    	className="ml-2"
						    	name="startDate"
						    	selected={props.startDate}
					        	onChange={props.handleStartDate}
					        	dateFormat="dd/MM/yyyy"
					        	placeholderText="Select a time"
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
							        checked={ props.checked } 
							        onChange={ props.handleCheck } />
							    </div>
						  	</div>
						  	<div className="form-row mt-2">
							    <label htmlFor="startTime">Starting Time: </label>
							    <TimeHandler selected={props.startTime} onChange={props.handleStartTime} id="startTime" />
						        <label htmlFor="endTime" className="ml-3">Ending Time: </label>
							    <TimeHandler selected={props.endTime} onChange={props.handleEndTime} id="endTime" />
						  	</div>
							<div className="form-group">
							    <label htmlFor="formAddress">Address</label>
							    <input type="text" className="form-control" id="formAddress" 
							    name="address" value={props.address} onChange={props.handleChange} placeholder="Location address" />
							</div>
							<div className="form-group">
							    <label htmlFor="formDescription">Description</label>
							    <small className="text-muted"> (Including registration details)</small>
							    <textarea className="form-control" id="formDescription" 
							    name="description" value={props.description} onChange={props.handleChange} rows="6"></textarea>
							</div>
						<button type="submit" className="btn btn-outline-success btn-lg mt-3">Update</button>
		            </form>
		        </div>
		        <hr className="mt-5"/>
		        <div className="row">
		        	<div className="offset-md-3 col-md-6">
		        		<h2>Delete event</h2>
		        		<button onClick={props.handleDeleteAlert} type="submit" className="btn btn-lg btn-danger">Delete</button>
		        	</div>
		        </div>
		        <Footer />
			</div>
	)
}

export default UpdateFormComponent;