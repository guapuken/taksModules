import React from 'react';
import { Texts } from '../../../../Atoms';
import vistaNatural from '../../../../../img/vistaNatural.svg';
import vistaCruzada from '../../../../../img/vistaCruzada.svg';
import bloqueo from '../../../../../img/bloqueado.svg';
import sinBloqueo from '../../../../../img/desbloqueado.svg';
import iluminacionIcon from '../../../../../img/iluminacion.svg';
import sinIluminacion from '../../../../../img/sinIluminacion.svg';

const Details = ({
	altura,
	base,
	proveedor,
	ubicacion,
	especiales,
	claveproveedor,
	bloqueado,
	area,
	piso,
	nivelIndoor,
	siglas,
	disponible,
}: any) => {
	return (
		<>
			<div className="cardSitios__detalles-contenido">
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Texts modo="Dark" maxLines={1} labels={{ title: proveedor }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Proveedor: </span>
						{proveedor ?? 'Indefinido'}
					</Texts>
					<Texts modo="Dark" maxLines={1} labels={{ title: claveproveedor }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>
							Clave proveedor:{' '}
						</span>
						{claveproveedor ?? 'No definida'}
					</Texts>
					<Texts modo="Dark" maxLines={1} labels={{ title: area }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Área: </span>
						{area ?? 'Área indefinida'}
					</Texts>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<p
						style={{
							fontSize: '18px',
							boxShadow: 'inset 0 0 0 3px #f1e323',
							padding: '10px 15px',
							color: '#f1e323',
							borderRadius: '10px 0 10px 0',
						}}
					>
						{disponible ? 'Disponible' : 'No disponible'}
					</p>
				</div>
			</div>
			<div className="cardSitios__detalles-iconos">
				<div>
					<Texts
						modo="Dark"
						className={especiales ? 'implementaciones' : 'NoPermite'}
						maxLines={1}
						labels={{ title: `${piso ? 'Se' : 'No se'} encuentra a nivel de piso` }}
					>
						{`${piso ? 'Se' : 'No se'} encuentra a nivel de piso`}
					</Texts>
					<div style={{ display: 'flex', gap: '15px' }}>
						<Texts modo="Dark" style={{ color: '#f1e323' }}>
							{`${altura ?? '0'}m ↕`}
						</Texts>
						<Texts modo="Dark" style={{ color: '#f1e323' }}>
							{`${base ?? '0'}m ↔`}
						</Texts>
					</div>
				</div>
				<div style={{ display: 'flex', gap: '15px' }}>
					<img
						src={bloqueado ? bloqueo : sinBloqueo}
						alt="bloqueado"
						title={bloqueado ? 'Sitio bloqueado' : 'Sitio sin bloqueo'}
						style={{ height: '40px' }}
					/>
					<h2 style={{ fontSize: '35px', color: '#8d8989' }} title={nivelIndoor}>
						{siglas}
					</h2>
				</div>
			</div>
		</>
	);
};

export default Details;
