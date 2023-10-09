import React from 'react';

const Content = ({ children, ...props }: any) => {
	return (
		<div {...props} style={{ width: props.width, height: props.height, ...props.style }}>
			{children}
		</div>
	);
};

export default Content;
