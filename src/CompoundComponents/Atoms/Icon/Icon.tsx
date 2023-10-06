import React from 'react';

const Icon = ({ children, height, width, size, ...props }: any) => {
	return (
		<img
			src={children}
			{...props}
			style={{ height: size || height, width: size || width, ...props.style }}
		/>
	);
};

export default Icon;
