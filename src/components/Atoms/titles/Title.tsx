import React, { Fragment } from 'react';
import './styles/title.scss';
import { titleProps } from './types/types';

const Title = ({ children, modo, className, style, maxLines, title }: titleProps) => {
	return (
		<p
			className={`ctn_Ttls ${modo} ${className}`}
			style={{
				WebkitLineClamp: maxLines,
				...style,
			}}
			title={title}
		>
			{children}
		</p>
	);
};

export default Title;
