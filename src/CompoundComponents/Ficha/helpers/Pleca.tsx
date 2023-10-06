import React from 'react';
import '../Styles/Pleca.scss';

const Pleca = ({ children, ...props }) => {
	return (
		<div
			{...props}
			className={`_GTL_Pleca ${props.className}`}
			style={{
				width: props.width,
				height: props.height,
				...props.style,
			}}
		>
			<div className="_GTL_Pleca__bg" />
			<div className="_GTL_Pleca__children" style={props.styleContent}>
				{children}
			</div>
		</div>
	);
};

export default Pleca;
