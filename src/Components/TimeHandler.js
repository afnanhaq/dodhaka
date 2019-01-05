import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeHandler = (props) => {
	return (
		<div>
			<DatePicker 
			    selected={props.selected}
			    onChange={props.onChange}
			    id={props.id}
			    className="ml-2"
			    showTimeSelect
			    showTimeSelectOnly
			    timeIntervals={30}
			    dateFormat="h:mm aa"
			    timeCaption="Time"
		        placeholderText="Select a time"
		        />
		</div>
		);
}

export default TimeHandler;