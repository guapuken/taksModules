import React from 'react';

const Footer = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};

export default Footer;
