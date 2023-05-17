import React, { Fragment } from 'react';
import './styles/title.scss';
import { titleProps } from './types/types';

const Title = ({ children, modo, className, style, maxLines }: titleProps) => {
	return (
		<Fragment>
			<p
				className={`ctn_Ttls ${modo} ${className}`}
				style={{
					// start showing ellipsis when 3rd line is reached
					WebkitLineClamp: maxLines,
					...style,
				}}
			>
				{children}
			</p>
		</Fragment>
	);
};

export default Title;
