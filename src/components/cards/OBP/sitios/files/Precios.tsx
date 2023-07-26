import React from 'react';
import { Texts, Title } from '../../../../Atoms';

const Precios = () => {
	return (
		<div
			style={{
				display: 'flex',
				gap: '20px',
				justifyContent: 'space-between',
				width: '100%',
			}}
		>
			<div>
				<Texts modo="Dark">Costo</Texts>
				<Texts modo="Dark" style={{ fontSize: '20px' }}>
					$75,253.00
				</Texts>
			</div>
			<div>
				<Title modo="Dark">Precio</Title>
				<Title modo="Dark" style={{ fontSize: '30px' }}>
					$112,253.00
				</Title>
			</div>
		</div>
	);
};

export default Precios;
