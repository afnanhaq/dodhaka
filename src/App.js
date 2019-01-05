import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import EventButton from './Components/EventButton';
import EventCardList from './Components/EventCardList';
import Footer from './Components/Footer';
import { Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      eventlist: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3003/home')
    .then(response => response.json())
    .then(events => this.setState({eventlist: events}))
  }

  render() {
    return (
      <div>
            <div className="container">
              <div className="row">
                <Header />
                <EventButton />
              </div>
              <hr></hr>
            </div>

            <div className="container">
              <div className="row col-md-6">
                <h5 className="h3"> Find the best things happening in Dhaka </h5>
              </div>
              <div>
                <EventCardList events={this.state.eventlist} className="card-deck" />
              </div>
              <div className="row mt-5 mb-5">
                <div className="text-center col-md-4 offset-md-4">
                  <Link to="/events">
                    <button className="btn-lg btn-success btn text-center" type="button">
                      Find more events
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <Footer />
      </div>
    );
  }
}

export default App;

