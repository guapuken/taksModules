import React from 'react';
import { Header, Content, Footer } from './Helpers';

const BasicStructure = ({ children, ...props }) => {
	return (
		<div {...props} style={{ width: props.width, height: props.height, ...props.style }}>
			{children}
		</div>
	);
};

BasicStructure.Header = Header;
BasicStructure.Content = Content;
BasicStructure.Footer = Footer;

export default BasicStructure;
