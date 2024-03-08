import React from 'react';

const SimpleText = ({ children, ...props }: any) => {
	return (
		<p
			{...props}
			style={{
				// start showing ellipsis when 3rd line is reached
				WebkitLineClamp: props.maxLines,
				display: '-webkit-box',
				WebkitBoxOrient: 'vertical',
				whiteSpace: 'pre-wrap',
				overflow: 'hidden',
				...props.style,
			}}
		>
			{children}
		</p>
	);
};

export default SimpleText;
