import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Moment from 'react-moment';
import ImageHandler from '../Components/ImageHandler';

class EventPage extends Component {
	constructor(props) {
		super()
		this.state = {
			event: {},
		}
	}

	componentDidMount() {
		const { id } = this.props.match.params
		fetch(`https://cryptic-reaches-85854.herokuapp.com/events/${id}`)
		.then(response => response.json())
		.then(eventdetails => this.setState({ event: eventdetails })
		)
	}

render() {
	const showEndDate = this.state.event.enddate 
				? 	<div> 
					to
						<Moment format=" Do MMM YYYY">
						{this.state.event.enddate} 
						</Moment>
					</div>
				: null;

    return (
      	<div>
      		<div className="container">
	            <div className="row">
	                      <Header />
	        	</div>
	        <hr />

	        	<div className="row">
	        		<div className="col-sm-8">
	        			<ImageHandler className="img-fluid" width="900" uploadedImageLink={this.state.event.uploadedimagelink} 
	        			eventName={this.state.event.eventname} />
	        		</div>
	        		<div className="col-sm-3">
		        		<div className="card h-100 border-success">
							<div className="card-body">
								<h4 className="card-title"><u>Details</u></h4>
							    <h5><strong>Address: {this.state.event.address}</strong></h5>
							    <h5> 
							    	Date:
									<Moment format=" Do MMM YYYY ">
								    {this.state.event.startdate} 
								    </Moment>
								    { showEndDate }
							    </h5>
							    <h5> 
							    	Time: 
							    	<Moment format=" h:mm A ">
							    	{this.state.event.starttime} 
							    	</Moment>
							    	to 
							    	<Moment format=" h:mm A">
							    	{this.state.event.endtime} 
							    	</Moment>
							    </h5>
							</div>
						</div>
					</div>
	        	</div>
	        	<div className="row mt-3">
	        		<div className="col-sm-9">
	        			<h1> {this.state.event.eventname} </h1>
	        			<p> {this.state.event.description} </p>
	        		</div>
	        	</div>
	       	</div>
	       	
	       	<Footer />
      	</div>
    );
  }
}

export default EventPage;