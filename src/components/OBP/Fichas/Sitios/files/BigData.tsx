import React from 'react';
import { Texts, Title } from '../../../../Atoms';
import './stylesBigData.scss';
import { percent } from '../../../../../utils/percent';
import { formatearNumeroConComas } from '../../../../../utils/functions/functions';
import { Modo } from '../../../../../types';

interface BigDataProps {
	data: {
		modo: Modo;
		female_users?: number;
		male_users?: number;
		frequency?: number;
		reach?: number;
		total_hits?: number;
		total_users?: number;
	};
}
const BigData = (props: BigDataProps) => {
	const { modo, female_users, male_users, frequency, reach, total_hits, total_users } =
		props.data;
	function getPercents(getPercent: number) {
		const value = percent((female_users ?? 1) + (male_users ?? 1), getPercent);
		return isNaN(value) ? 0 : value;
	}
	return (
		<div className="OBP_BigData">
			<Title modo={modo} className="OBP_BigData__title">
				Big Data
			</Title>
			<div className="OBP_BigData__contenedor">
				<div className="OBP_BigData__contenedor-genero">
					<Title modo={modo}>Mujeres</Title>
					<Title modo={modo}>Hombres</Title>
					<div className="OBP_BigData__contenedor-genero-percent">
						<span
							className="OBP_BigData__contenedor-genero-percent-female"
							style={{ width: `${getPercents(female_users ?? 0)}%` }}
						></span>
						<Title modo={modo}>{`${getPercents(female_users ?? 0)}%`}</Title>
						<Title modo={modo}>{`${getPercents(male_users ?? 0)}%`}</Title>
					</div>
					<Texts modo={modo}>
						{female_users ? formatearNumeroConComas(female_users) : 'Sin registros'}
					</Texts>
					<Texts modo={modo}>
						{male_users ? formatearNumeroConComas(male_users) : 'Sin registros'}
					</Texts>
				</div>
				<div className="OBP_BigData__contenedor-datos">
					<Texts modo={modo}>{formatearNumeroConComas(frequency ?? 0)}</Texts>
					<Title modo={modo}>Frecuencia</Title>
				</div>
				<div className="OBP_BigData__contenedor-datos">
					<Texts modo={modo}>{formatearNumeroConComas(total_hits ?? 0)}</Texts>
					<Title modo={modo}>Impactos totales</Title>
				</div>
				<div className="OBP_BigData__contenedor-datos">
					<Texts modo={modo}>{formatearNumeroConComas(total_users ?? 0)}</Texts>
					<Title modo={modo}>Usuarios totales</Title>
				</div>
				<div className="OBP_BigData__contenedor-datos">
					<Texts modo={modo}>{`${reach ?? 0}%`}</Texts>
					<Title modo={modo}>Alcance</Title>
				</div>
			</div>
		</div>
	);
};

export default BigData;
