import React from 'react';
import { Texts, Title } from '../../../../Atoms';
import { HalfDonut } from './Donut';
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
	modo,
}: any) => {
	const percents = {
		male: male_users > 0 ? Math.round((male_users * 100) / (male_users + female_users)) : '0',
		female:
			female_users > 0 ? Math.round((female_users * 100) / (male_users + female_users)) : '0',
	};
	return (
		<div className="cardSitios__detalles-contenidoData">
			<div className="cardSitios__detalles-contenidoData-nicho">
				<HalfDonut
					colores={['#F8B03D', '#5FB464', '#3866AE', '#CA2284', '#8E1913']}
					porcentajes={[
						income_a_users ?? 0,
						income_b_users ?? 0,
						income_c_users ?? 0,
						income_d_users ?? 0,
						income_e_users ?? 0,
					]}
					values={['A', 'B', 'C', 'D', 'E']}
				/>
				<Title modo={modo} style={{ fontSize: '12px', textTransform: 'capitalize' }}>
					Nivel socieconómico
				</Title>
			</div>

			<div className="cardSitios__detalles-contenidoData-edad">
				<HalfDonut
					colores={['#F8B03D', '#5FB464', '#3866AE', '#CA2284', '#8E1913']}
					porcentajes={[
						a13_17_users ?? 0,
						a18_25_users ?? 0,
						a26_40_users ?? 0,
						a41_55_users ?? 0,
						a55_users ?? 0,
					]}
					values={['13-17', '18-25', '26-40', '41-55', '55 +']}
				/>
				<Title modo={modo} style={{ fontSize: '12px', textTransform: 'capitalize' }}>
					Rango de edad
				</Title>
			</div>
			<div className="cardSitios__detalles-contenidoData-bigData">
				<div>
					<div className="cardSitios__detalles-contenidoData-bigData-genero">
						<div>
							<Texts modo={modo}>Mujeres</Texts>
						</div>
						<div>
							<Texts modo={modo}>Hombres</Texts>
						</div>
					</div>
					<div className="cardSitios__detalles-contenidoData-bigData-barras">
						<div
							className="cardSitios__detalles-contenidoData-bigData-barras-female"
							style={{ width: `${percents.female}%` }}
						></div>
						<Title modo={modo}>{`${percents.female}%`}</Title>
						<Title modo={modo}>{`${percents.male}%`}</Title>
					</div>
					<div className="cardSitios__detalles-contenidoData-bigData-totalesGenero">
						<Texts modo={modo}>{formatearNumeroConComas(female_users)}</Texts>
						<Texts modo={modo}>{formatearNumeroConComas(male_users)}</Texts>
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
							modo={modo}
							style={{ fontSize: '25px', marginBottom: '0', paddingBottom: '0' }}
						>
							{frequency}
						</Title>
						<Texts modo={modo} style={{ marginTop: '-5px', paddingTop: '0' }}>
							Frecuencia
						</Texts>
					</div>
					<div>
						<Title
							modo={modo}
							style={{ fontSize: '25px', marginBottom: '0', paddingBottom: '0' }}
						>
							{reach}
						</Title>
						<Texts modo={modo} style={{ marginTop: '-5px', paddingTop: '0' }}>
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
						<Texts modo={modo}>{formatearNumeroConComas(total_hits)}</Texts>
						<Title modo={modo} style={{ textTransform: 'capitalize' }}>
							Impactos
						</Title>
					</div>
					<div style={{ marginTop: '10px' }}>
						<Texts modo={modo}>{formatearNumeroConComas(total_users)}</Texts>
						<Title modo={modo} style={{ textTransform: 'capitalize' }}>
							Usuarios
						</Title>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Data;
