import React, { Fragment } from 'react';
import './styles/title.scss';
import { titleProps } from './types/types';

const Title = ({ children, modo, className, style, maxLines }: titleProps) => {
	return (
		<p
			className={`ctn_Ttls ${modo} ${className}`}
			style={{
				WebkitLineClamp: maxLines,
				...style,
			}}
		>
			{children}
		</p>
	);
};

export default Title;
