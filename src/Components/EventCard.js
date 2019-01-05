import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import EllipsisText from 'react-ellipsis-text';
import Moment from 'react-moment';
import ImageHandler from './ImageHandler';

const EventCard = (props) => {
	return (
		<div className="col-md-4 mt-4">
			<Link to={`/events/${props.id}`} className="nounderline">
				<div className="card border-success">
				  <ImageHandler className="card-img-top" uploadedImageLink={props.uploadedImageLink} eventName={props.eventName} />
				  <div className="card-body pt-2">
				    <h4 className="card-title">{props.eventName}</h4>
				    <h6 className="card-subtitle mb-2 text-right text-muted">
				    <Moment format="Do MMM YYYY">
					{props.startDate}
					</Moment> 
				    </h6>
				    <EllipsisText className="card-text" text={props.description} length={50} />
				  </div>
				</div>
			</Link>
		</div>
		);
}

export default EventCard;


 		