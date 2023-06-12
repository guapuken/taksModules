import React, { Fragment } from 'react';
import { textsProps } from './types/types';
// styles
import './styles/texts.scss';

const Texts = ({ children, modo, className, style, maxLines, onClick }: textsProps) => {
	return (
		<Fragment>
			<p
				className={`ctn_Txts ${modo} ${className}`}
				onClick={onClick}
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

export default Texts;
