import React from 'react';
import EventHorizontalCard from './EventHorizontalCard';

const EventHorizontalList = ({ events }) => {
	const EventArray = events.map((event, i) => {
		return <EventHorizontalCard key={events[i].id} id={events[i].id} eventName={events[i].eventname} startDate={events[i].startdate} 
		startTime={events[i].starttime} description={events[i].description} uploadedImageLink={events[i].uploadedimagelink}/>
	})

	return (
		<div>
			{ EventArray }
		</div>
		);
}

export default EventHorizontalList;