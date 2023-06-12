import React from 'react';
//types
import { textButtonProps } from './types/types';
// styles
import './styles/textButton.scss';

const TextButton = ({ children, modo, onClick, className, style }: textButtonProps) => {
	return (
		<button onClick={onClick} className={`ctn_TxtBtn ${modo} ${className}`} style={style}>
			{children}
		</button>
	);
};

export default TextButton;
