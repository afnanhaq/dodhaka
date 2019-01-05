import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import EventForm from './Pages/EventForm';
import Events from './Pages/Events';
import EventPage from './Pages/EventPage';
import Success from './Pages/Success';
import UpdateSignin from './Pages/UpdateSignin';
import UpdateForm from './Pages/UpdateForm';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/success" component={Success} />
			<Route exact path="/postevent" component={EventForm} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/events/:id" component={EventPage} />
			<Route exact path="/update" component={UpdateSignin} />
			<Route exact path="/updateform" component={UpdateForm} />
		</Switch>
	</BrowserRouter>, document.getElementById('root'));
