import React from 'react';

const Aside = ({ children, ...props }) => (
	<div
		{...props}
		style={{
			width: props?.width ?? '25%',
			height: props?.height ?? '100%',
			...props?.style,
		}}
	>
		{children}
	</div>
);

export default Aside;
