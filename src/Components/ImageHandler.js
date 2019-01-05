import React from 'react';
import {Image, CloudinaryContext} from 'cloudinary-react';

const ImageHandler = (props) => {
	const imageLink = props.uploadedImageLink ? 
		<CloudinaryContext cloudName="afnanimages">
			<Image className={props.className} publicId={props.uploadedImageLink} alt={props.eventName} crop="scale" />
		</CloudinaryContext>
		: 
		<CloudinaryContext cloudName="afnanimages">
			<Image className={props.className} publicId="noimagefound" alt={props.eventName} width={props.width} crop="scale" />
		</CloudinaryContext>
		;

	return (
		<div>
			{ imageLink }
		</div>
		);
}

export default ImageHandler;