import React from 'react';
import Header from './Header';
import Footer from './Footer';


const UpdateSigninComponent = (props) => {

	return (
			<div>
    			{/* Header */}
	    		<div className="container">
		              <div className="row">
		                      <Header />
		              </div>
		              <hr></hr>
	            {/* Input Form */}
		            <div className="row">
			            <form className="offset-md-3 col-md-6" autoComplete="off" onSubmit={props.onSubmit} >
			            	<h2> Update or delete an event </h2>
			            		{/* Form begins here */}
			            	  	<div className="form-group">
							    	<div className="form-group col-md-6">
							    		<label htmlFor="formID"> Reference ID </label>
							      		<input type="text" className="form-control form-control-lg" id="formID" name="reference_id" 
							      		value={props.reference_id} onChange={props.onChange} placeholder="Ref ID" />
							    	</div>
							    	<div className="form-group col-md-6">
							      		<label htmlFor="formEmail">Your e-mail address</label>
							      		<input type="email" className="form-control form-control-lg" id="formEmail" 
							      		name="email" value={props.email} onChange={props.onChange} placeholder="Email" />
							    	</div>
							  	</div>
							<button type="submit" className="btn btn-outline-success btn-lg mt-3">Submit</button>
						</form>
					</div>
	            </div>
	            <Footer />
			</div>
	)
}

export default UpdateSigninComponent;


			