import React, { Fragment } from 'react';
import './styles/title.scss';
import { titleProps } from './types/types';

const Title = ({ children, modo, className, style, maxLines, title, labels }: titleProps) => {
	return (
		<p
			className={`title ${className}`}
			theme-config={modo}
			style={{
				WebkitLineClamp: maxLines,
				...style,
			}}
			title={title}
			{...labels}
		>
			{children}
		</p>
	);
};

export default Title;
