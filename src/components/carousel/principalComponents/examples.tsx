import React from 'react';
import { Title } from '../../Atoms';

const Examples = ({ property }: any) => {
	return (
		<div key={property.id} className="carrusel__slider-wrapper-card-errorNC">
			<Title modo="Light">
				Precio:
				<span style={{ fontWeight: 'lighter', marginLeft: '5px' }}>
					{`$${property.price}.00`}
				</span>
			</Title>
		</div>
	);
};

export default Examples;
