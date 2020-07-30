import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import EventButton from '../Components/EventButton';
import EventHorizontalList from '../Components/EventHorizontalList';


class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventlist: [],
		}
	}

	componentDidMount() {
		fetch('https://cryptic-reaches-85854.herokuapp.com/events')
		.then(response => response.json())
		.then(events => this.setState({eventlist: events}))
	};

  	render() {
    return (
      	<div>
      		<div className="container">
	            <div className="row">
	                <Header />
	                <EventButton />
	            </div>
	            <hr></hr>

	            <div className="mb-4 pl-3">
	            	<h2> Events happening soon </h2>
	            </div>

	            <div>
		            <EventHorizontalList events={this.state.eventlist} /> 
		        </div>

            </div>

            <Footer />
      	</div>


    );
  }
}

export default Events;



						