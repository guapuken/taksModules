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
	direccion,
	proveedor,
	ubicacion,
	especiales,
	latitud,
	longitud,
	claveproveedor,
	material,
	bloqueado,
	vista,
	iluminacion,
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
					<Texts modo="Dark" maxLines={2} labels={{ title: direccion }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Dirección: </span>
						{direccion ?? 'Dirección indefinida'}
					</Texts>
					<Texts modo="Dark" maxLines={1} labels={{ title: proveedor }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Proveedor: </span>
						{proveedor ?? 'Indefinido'}
					</Texts>
					<Texts modo="Dark" maxLines={1} labels={{ title: ubicacion }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Plaza: </span>
						{ubicacion ?? 'Ubicación indefinida'}
					</Texts>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Texts modo="Dark" maxLines={2} labels={{ title: '' }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Latitud: </span>
						{latitud ?? 'No definida'}
					</Texts>
					<Texts modo="Dark" maxLines={2} labels={{ title: '' }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Longitud: </span>
						{longitud ?? 'No definida'}
					</Texts>
					<Texts modo="Dark" maxLines={1} labels={{ title: '' }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>
							Clave proveedor:{' '}
						</span>
						{claveproveedor ?? 'No definida'}
					</Texts>
					<Texts modo="Dark" maxLines={2} labels={{ title: '' }}>
						<span style={{ fontWeight: '700', userSelect: 'none' }}>Material: </span>
						{material ?? 'Material no definido'}
					</Texts>
				</div>
			</div>
			<div className="cardSitios__detalles-iconos">
				<div>
					<Texts
						modo="Dark"
						className={especiales ? 'implementaciones' : 'NoPermite'}
						maxLines={1}
						labels={{
							title: especiales
								? 'Permite implementaciones especiales'
								: 'No permite implementaciones especiales',
						}}
					>
						{especiales
							? 'Permite implementaciones especiales'
							: 'No permite implementaciones especiales'}
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
						src={vista === 'Natural' ? vistaNatural : vistaCruzada}
						alt="vista natural"
						title={`Vista ${vista ?? 'indefinida'}`}
						style={{ height: '40px' }}
					/>
					<img
						src={bloqueado ? bloqueo : sinBloqueo}
						alt="bloqueado"
						title={bloqueado ? 'Sitio bloqueado' : 'Sitio sin bloqueo'}
						style={{ height: '40px' }}
					/>
					<img
						src={iluminacion ? iluminacionIcon : sinIluminacion}
						alt="bloqueado"
						title={iluminacion ? 'Sitio con iluminación' : 'Sitio sin iluminación'}
						style={{ height: '40px' }}
					/>
				</div>
			</div>
		</>
	);
};

export default Details;
