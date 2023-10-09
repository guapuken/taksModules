import React from 'react';

const Footer = ({ children, ...props }) => {
	return (
		<div {...props} style={{ width: props.width, height: props.height, ...props.style }}>
			{children}
		</div>
	);
};

export default Footer;
