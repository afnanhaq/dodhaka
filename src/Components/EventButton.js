import React from 'react';
import { Link } from "react-router-dom";

const EventButton = () => {
	return (
		<div className="offset-md-2 col-md-2 mt-5">
			<Link to="/postevent"><button type="button" className="btn btn-danger btn-lg">Post an event</button></Link>
		</div>
		);
}

export default EventButton;