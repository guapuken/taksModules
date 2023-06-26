import React from 'react';
import { SimpleContainer } from '../../../Atoms';
import image from '../../../../img/reloj.svg';

const NoContent = ({ modo }: any) => {
	return (
		<SimpleContainer style={{ maxHeight: '70vh', overflow: 'hidden' }}>
			<p
				style={{
					background: '#52525290',
					padding: '10px 20px',
					maxWidth: '90%',
					margin: '0 auto',
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)',
					borderRadius: '20px',
					color: '#fff',
					fontWeight: 'bold',
				}}
			>
				Aquí se mostrará la línea del tiempo de cada tipo de medio
			</p>
			<img style={{ width: '100%' }} src={image} alt="" />
		</SimpleContainer>
	);
};
export default NoContent;
