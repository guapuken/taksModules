import React from 'react';

const Options = ({ children, ...props }) => {
	return <option {...props}>{children}</option>;
};

export default Options;
