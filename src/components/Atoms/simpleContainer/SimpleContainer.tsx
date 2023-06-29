import React from 'react';
import { simpleContainerProps } from './types/types';

const SimpleContainer = ({
	children,
	style,
	className,
	id,
	onClick,
	draggable,
	labels = {},
}: simpleContainerProps) => {
	return (
		<div
			style={{ position: 'relative', ...style }}
			className={className}
			id={id}
			onClick={onClick}
			draggable={draggable}
			{...labels}
		>
			{children}
		</div>
	);
};

export default SimpleContainer;
