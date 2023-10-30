import React from 'react';
import './Contenido.scss';

const Contenido = ({ children, ...props }) => {
	return (
		<div {...props} className={`Compound_Modal__Contenido ${props?.className}`}>
			{children}
		</div>
	);
};
export default Contenido;
