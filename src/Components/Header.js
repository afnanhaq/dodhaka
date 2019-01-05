import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<div className="offset-md-4 col-md-4">
			<div className="center">
				<Link to="/" className="nounderline"><h1 className='text-success nounderline display-2'>DoDhaka</h1></Link>
			</div>
		</div>
		);
}

export default Header;