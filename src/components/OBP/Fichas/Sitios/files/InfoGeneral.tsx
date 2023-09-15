import React from 'react';
import { Texts, Title } from '../../../../Atoms';
import { Modo } from '../../../../../types';

interface InfoGeneralProps {
	data: {
		modo: Modo;
		especiales?: boolean;
		latitud?: number;
		longitud?: number;
		direccion?: string;
		acabados?: string;
		material?: string;
		comentarios?: string;
	};
}
const InfoGeneral = (props: InfoGeneralProps) => {
	const { modo, especiales, latitud, longitud, direccion, acabados, material, comentarios } = {
		...props.data,
	};
	return (
		<div className="OBP_fichaSitios__header-info-general">
			<div className="OBP_fichaSitios__header-info-general-coordenadas">
				<Title
					modo={modo}
					className="OBP_fichaSitios__header-info-general-coordenadas-individual"
				>
					Latitud: <span>{latitud ?? 'no definida'}</span>
				</Title>
				<Title
					modo={modo}
					className="OBP_fichaSitios__header-info-general-coordenadas-individual"
				>
					Longitud: <span>{longitud ?? 'no definida'}</span>
				</Title>
			</div>
			<div className="OBP_fichaSitios__header-info-general-detalles">
				<Title modo={modo} maxLines={2}>
					Dirección: <span>{direccion ?? 'Dirección extraviada 😢'}</span>
				</Title>
				<Title modo={modo} maxLines={2}>
					Acabados: <span>{acabados ?? 'Sin acabados registrados 🙃'}</span>
				</Title>
				<Title modo={modo} maxLines={2}>
					Material: <span>{material ?? 'No existe un material registrado 😒'}</span>
				</Title>
				<Title
					modo={modo}
					maxLines={5}
					className="OBP_fichaSitios__header-info-general-detalles-comentarios"
				>
					Comentarios: <span>{comentarios ?? 'Sin comentarios 😎'}</span>
				</Title>
				<Texts
					modo={modo}
					className={`OBP_fichaSitios__header-info-general-detalles-implementaciones${
						especiales ? 'Permitidas' : 'NoPermitidas'
					}`}
				>
					{`${especiales ? 'Permite' : 'No permite'} implementaciones especiales`}
				</Texts>
			</div>
		</div>
	);
};

export default InfoGeneral;
