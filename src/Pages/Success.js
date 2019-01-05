import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Success = (props) => {
		return (
			<div>
	      		<div className="container">
		            <div className="row">
		                      <Header />
		        	</div>
		        <hr />
		        	<div className="row">
		        		<h1 className="pt-3">
		        		Event successfully added to DoDhaka!
		        		<br />
		        		<small className="text-muted">Now here's how you can update or delete your event in the future: </small>
		        		</h1>
		        		<span className="border border-success p-5 mt-2">
		        			<p className="lead">
 								1. Note down the following reference code on your laptop or phone or notepad (VERY IMPORTANT): 
 								<strong className="text-danger"> {props.reference_id} </strong> 
							</p>
							<p className="lead">
								2. Visit dodhaka.com/update and enter the reference code and your e-mail address ({props.email})
							</p>
							<p className="lead">
								Without the reference code, you will not be able to update or delete your event.
								If you need further help, contact us at dodhaka@gmail.com. 
							</p>
		        		</span>
		        	</div>
		        	<Link to="/" className="nounderline">
			        	<button className="btn btn-success mt-3">
			        			Return back home
			        	</button>
			        </Link>
		        </div>
		        <Footer />
		    </div>
		);
}

export default Success;