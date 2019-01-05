import React from 'react';
import EventCard from './EventCard';

const EventCardList = ({ events }) => {
	const EventArray = events.map((event, i) => {
		return <EventCard key={events[i].id} id={events[i].id} eventName={events[i].eventname} startDate={events[i].startdate} 
				description={events[i].description} uploadedImageLink={events[i].uploadedimagelink} />
	})

	return (
		<div className="mt-0 d-flex flex-wrap">
			{ EventArray }
		</div>
		);
}

export default EventCardList;