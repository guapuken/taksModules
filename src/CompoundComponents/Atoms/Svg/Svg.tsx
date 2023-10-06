import React from 'react';

const Svg = ({ children, ...props }: any) => {
	return <span {...props}>{children}</span>;
};

export default Svg;
