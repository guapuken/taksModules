import React, { Fragment } from 'react';
import './styles/title.scss';
import { titleProps } from './types/types';

const Title = ({ children, modo, className, style, maxLines, title, labels }: titleProps) => {
	return (
		<h5
			className={`titleComponent ${className}`}
			theme-config={modo}
			style={{
				WebkitLineClamp: maxLines,
				...style,
			}}
			title={title}
			{...labels}
		>
			{children}
		</h5>
	);
};

export default Title;
