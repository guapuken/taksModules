import React from 'react';
import '../Styles/Image.scss';

const Image = ({ children, ...props }) => {
	return (
		<img
			src={children}
			style={{ width: props.width, height: props.height, ...props.style }}
			{...props}
			className={`_GTL_Image ${props.className}`}
		/>
	);
};

export default Image;
