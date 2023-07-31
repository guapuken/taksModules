import React from 'react';
import { Texts, Title } from '../../../../Atoms';
import Donut from './Donut';
import { formatearNumeroConComas } from '../../../../../utils/functions/functions';

const Data = ({
	income_a_users = 0,
	income_b_users = 0,
	income_c_users = 0,
	income_d_users = 0,
	income_e_users = 0,
	a13_17_users = 0,
	a18_25_users = 0,
	a26_40_users = 0,
	a41_55_users = 0,
	a55_users = 0,
	female_users = 0,
	male_users = 0,
	frequency = 0,
	reach = 0,
	total_hits = 0,
	total_users = 0,
}) => {
	const percents = {
		male: male_users > 0 ? Math.round((male_users * 100) / (male_users + female_users)) : '0',
		female:
			female_users > 0 ? Math.round((female_users * 100) / (male_users + female_users)) : '0',
	};
	return (
		<div className="cardSitios__detalles-contenidoData">
			<div className="cardSitios__detalles-contenidoData-nicho">
				<Donut
					colores={['#F8B03D', '#5FB464', '#3866AE', '#CA2284', '#8E1913']}
					porcentajes={[
						income_a_users,
						income_b_users,
						income_c_users,
						income_d_users,
						income_e_users,
					]}
					values={['A', 'B', 'C', 'D', 'E']}
				/>
				<Title modo="Dark" style={{ fontSize: '12px', textTransform: 'capitalize' }}>
					Nivel socieconómico
				</Title>
			</div>

			<div className="cardSitios__detalles-contenidoData-edad">
				<Donut
					colores={['#F8B03D', '#5FB464', '#3866AE', '#CA2284', '#8E1913']}
					porcentajes={[
						a13_17_users,
						a18_25_users,
						a26_40_users,
						a41_55_users,
						a55_users,
					]}
					values={['13-17', '18-25', '26-40', '41-55', '55 +']}
				/>
				<Title modo="Dark" style={{ fontSize: '12px', textTransform: 'capitalize' }}>
					Rango de edad
				</Title>
			</div>
			<div className="cardSitios__detalles-contenidoData-bigData">
				<div>
					<div className="cardSitios__detalles-contenidoData-bigData-genero">
						<div>
							<Texts modo="Dark">Mujeres</Texts>
						</div>
						<div>
							<Texts modo="Dark">Hombres</Texts>
						</div>
					</div>
					<div className="cardSitios__detalles-contenidoData-bigData-barras">
						<div
							className="cardSitios__detalles-contenidoData-bigData-barras-female"
							style={{ width: `${percents.female}%` }}
						></div>
						<Title modo="Dark">{`${percents.female}%`}</Title>
						<Title modo="Dark">{`${percents.male}%`}</Title>
					</div>
					<div className="cardSitios__detalles-contenidoData-bigData-totalesGenero">
						<Texts modo="Dark">{formatearNumeroConComas(female_users)}</Texts>
						<Texts modo="Dark">{formatearNumeroConComas(male_users)}</Texts>
					</div>
				</div>
				<div
					style={{
						textAlign: 'center',
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',
					}}
				>
					<div>
						<Title
							modo="Dark"
							style={{ fontSize: '25px', marginBottom: '0', paddingBottom: '0' }}
						>
							{frequency}
						</Title>
						<Texts modo="Dark" style={{ marginTop: '-5px', paddingTop: '0' }}>
							Frecuencia
						</Texts>
					</div>
					<div>
						<Title
							modo="Dark"
							style={{ fontSize: '25px', marginBottom: '0', paddingBottom: '0' }}
						>
							{reach}
						</Title>
						<Texts modo="Dark" style={{ marginTop: '-5px', paddingTop: '0' }}>
							Alcance
						</Texts>
					</div>
				</div>
				<div
					style={{
						textAlign: 'center',
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',
					}}
				>
					<div style={{ marginTop: '10px' }}>
						<Texts modo="Dark">{formatearNumeroConComas(total_hits)}</Texts>
						<Title modo="Dark" style={{ textTransform: 'capitalize' }}>
							Impactos
						</Title>
					</div>
					<div style={{ marginTop: '10px' }}>
						<Texts modo="Dark">{formatearNumeroConComas(total_users)}</Texts>
						<Title modo="Dark" style={{ textTransform: 'capitalize' }}>
							Usuarios
						</Title>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Data;
