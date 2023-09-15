import React from 'react';
import { Modo } from '../../../../../types';
import { Texts, Title } from '../../../../Atoms';

interface InfoGeneralProps {
	data: {
		modo: Modo;
		direccion?: string;
		tiendasAncla?: string;
	};
}
const InfoGeneral = (props: InfoGeneralProps) => {
	const { modo, direccion, tiendasAncla } = { ...props.data };
	return (
		<div className="OBP_fichaIndoors_header-info-general">
			<Texts modo={modo} maxLines={2}>
				<span style={{ fontWeight: 'bold', marginRight: '5px' }}>Direccion:</span>
				{direccion ?? 'Dirección extraviada 😢'}
			</Texts>
			<Texts modo={modo} maxLines={4}>
				<span style={{ fontWeight: 'bold', marginRight: '5px' }}>TiendasAncla:</span>
				{tiendasAncla ?? 'Sin tiendas Acla 🫥'}
			</Texts>
		</div>
	);
};
export default InfoGeneral;
