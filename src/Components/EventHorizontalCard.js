import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import EllipsisText from 'react-ellipsis-text';
import Moment from 'react-moment';
import ImageHandler from './ImageHandler';

const EventHorizontalCard = (props) => {
	return (
			<div>
			<Link to={`/events/${props.id}`} className="nounderline">
				<div className="container">
					<div className="card border-success rounded">
				        <div className="row no-gutters">
				            <div className="col-md-3 d-flex align-items-stretch">
				                <ImageHandler className="img-fluid" 
				                uploadedImageLink={props.uploadedImageLink} eventName={props.eventName} />
				            </div>
				            <div className="col-md-9">
				                <div className="card-body px-3 pt-1">
				                    <h3 className="card-title">{props.eventName}</h3>
				                    <h6 className="card-subtitle mb-2 text-muted">
				                    		<Moment format="Do MMM YYYY ">
											{props.startDate}
											</Moment> 
											at 
											<Moment format=" h:mm A">
											{props.startTime}
											</Moment>
									</h6>
				                    <EllipsisText className="card-text" text={props.description} length={120} />
				                </div>
				            </div>
				        </div>
		  			</div>
		  		</div>
	  		</Link>
	  			<br />
	  		</div>
		);
}

export default EventHorizontalCard;