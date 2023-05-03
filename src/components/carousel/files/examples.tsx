import React from 'react';

const Examples = ({ property }: any) => {
	return (
		<div key={property.id} className="noCtn">
			<p style={{ fontWeight: 'bold' }}>
				Precio:
				<span style={{ fontWeight: 'lighter', marginLeft: '5px' }}>
					{`$${property.price}.00`}
				</span>
			</p>
		</div>
	);
};

export default Examples;
