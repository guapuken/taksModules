import React from 'react';
import { simpleContainerProps } from './types/types';

const SimpleContainer = ({ children, style, className, id }: simpleContainerProps) => {
	return (
		<div style={{ position: 'relative', ...style }} className={className} id={id}>
			{children}
		</div>
	);
};

export default SimpleContainer;
