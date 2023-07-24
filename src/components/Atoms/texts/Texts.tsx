import React, { Fragment } from 'react';
import { textsProps } from './types/types';
// styles
import './styles/texts.scss';

const Texts = ({ children, modo, className, style, maxLines, onClick, labels }: textsProps) => {
	return (
		<Fragment>
			<p
				className={`textos ${className}`}
				theme-config={modo}
				onClick={onClick}
				style={{
					// start showing ellipsis when 3rd line is reached
					WebkitLineClamp: maxLines,
					...style,
				}}
				{...labels}
			>
				{children}
			</p>
		</Fragment>
	);
};

export default Texts;
