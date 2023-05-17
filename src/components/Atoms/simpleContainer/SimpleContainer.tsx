import React from 'react';
import { simpleContainerProps } from './types/types';

const SimpleContainer = ({ children, style, className }: simpleContainerProps) => {
	return (
		<div style={{ position: 'relative', ...style }} className={className}>
			{children}
		</div>
	);
};

export default SimpleContainer;
