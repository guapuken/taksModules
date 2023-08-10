import React from 'react';
import { Texts, Title } from '../../../../Atoms';

const Precios = ({ costo, precioventa }: any) => {
	return (
		<div
			style={{
				display: 'flex',
				gap: '20px',
				justifyContent: 'space-between',
				width: '100%',
				alignItems: 'flex-end',
				height: '100%',
				paddingBottom: '15px',
			}}
		>
			<div>
				<Texts modo="Dark">Costo</Texts>
				<Texts modo="Dark" style={{ fontSize: '30px' }}>
					{costo}
				</Texts>
			</div>
			<div>
				<Title modo="Dark">Precio</Title>
				<Title modo="Dark" style={{ fontSize: '30px' }}>
					{precioventa}
				</Title>
			</div>
		</div>
	);
};

export default Precios;
