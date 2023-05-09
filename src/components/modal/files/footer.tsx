import React from 'react';
import { footer } from '../types';

const FooterStr = (props: footer) => {
	const { styleFooter, Footer } = props;
	return (
		<div className="footer" style={styleFooter}>
			{Footer}
		</div>
	);
};

export default FooterStr;
