import React from 'react';
import './Footer.scss';

const Footer = ({ children, ...props }) => {
	return (
		<div {...props} className={`Compound_Modal__Footer ${props?.className}`}>
			{children}
		</div>
	);
};

export default Footer;
