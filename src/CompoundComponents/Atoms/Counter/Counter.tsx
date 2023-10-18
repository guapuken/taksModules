import React from 'react';
import './Styles/Counter.scss';

const Counter = ({ children, ...props }: any) => {
	return (
		<span
			className={`_GTL_counter ${props.className}`}
			style={{ background: 'inherit' ?? 'var(--bg)' }}
			{...props}
		>
			{children}
		</span>
	);
};

export default Counter;
