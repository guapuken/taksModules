import React from 'react';
import { simpleContainerProps } from './types/types';

const SimpleContainer = ({
	children,
	style,
	className,
	id,
	onClick,
	draggable,
}: simpleContainerProps) => {
	return (
		<div
			style={{ position: 'relative', ...style }}
			className={className}
			id={id}
			onClick={onClick}
			draggable={draggable}
		>
			{children}
		</div>
	);
};

export default SimpleContainer;
