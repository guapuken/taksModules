import React from 'react';
import Legend from '../Legend/Legend';

const Measures = ({ ...props }: any) => {
	return (
		<div
			{...props}
			style={{
				display: 'flex',
				gap: '15px',
				width: '100%',
				height: '100%',
				alignItems: 'center',
				...props.style,
			}}
		>
			<Legend className="titleFont detailFont">{`↕  ${props.height}m`}</Legend>
			<Legend className="titleFont detailFont">{`↔  ${props.width}m`}</Legend>
		</div>
	);
};

export default Measures;
