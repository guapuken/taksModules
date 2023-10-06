import React from 'react';

const Legend = ({ children, fontSize, ...props }: any) => {
	return (
		<span {...props} style={{ fontSize: fontSize, ...props.style }}>
			{children}
		</span>
	);
};

export default Legend;
