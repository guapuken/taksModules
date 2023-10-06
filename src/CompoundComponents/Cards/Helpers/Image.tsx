import React from 'react';
import '../Styles/Image.scss';

const Image = ({ children, ...props }) => {
	return (
		<div
			className={`_GTL_imageCards ${props.className}`}
			{...props}
			style={{ backgroundImage: `url(${children})`, ...props.style }}
		/>
	);
};

export default Image;
