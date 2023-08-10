import React from 'react';
import { Texts } from '../../../../Atoms';
import { Iluminacion, Vista, Bloqueo } from '../../../../../img/icons';

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
	modo,
}: any) => {
	return (
		<>
			<div className="cardSitios__detalles-contenido">
				<div className="cardSitios__detalles-contenido-columns">
					<Texts modo={modo} maxLines={2} labels={{ title: direccion }}>
						<span>Dirección: </span>
						{direccion ?? 'Dirección indefinida'}
					</Texts>
					<Texts modo={modo} maxLines={1} labels={{ title: proveedor }}>
						<span>Proveedor: </span>
						{proveedor ?? 'Indefinido'}
					</Texts>
					<Texts modo={modo} maxLines={1} labels={{ title: ubicacion }}>
						<span>Plaza: </span>
						{ubicacion ?? 'Ubicación indefinida'}
					</Texts>
				</div>
				<div className="cardSitios__detalles-contenido-columns">
					<Texts modo={modo} maxLines={2} labels={{ title: latitud }}>
						<span>Latitud: </span>
						{latitud ?? 'No definida'}
					</Texts>
					<Texts modo={modo} maxLines={2} labels={{ title: longitud }}>
						<span>Longitud: </span>
						{longitud ?? 'No definida'}
					</Texts>
					<Texts modo={modo} maxLines={1} labels={{ title: claveproveedor }}>
						<span>Clave proveedor: </span>
						{claveproveedor ?? 'No definida'}
					</Texts>
					<Texts modo={modo} maxLines={2} labels={{ title: material }}>
						<span>Material: </span>
						{material ?? 'Material no definido'}
					</Texts>
				</div>
			</div>
			<div className="cardSitios__detalles-iconos">
				<div className="cardSitios__detalles-iconos-medidasImplementaciones">
					<Texts
						modo={modo}
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
					<div className="cardSitios__detalles-iconos-medidasImplementaciones-medidas">
						<Texts modo={modo ?? 'Light'}>{`${altura ?? '0'}m ↕`}</Texts>
						<Texts modo={modo ?? 'Light'}>{`${base ?? '0'}m ↔`}</Texts>
					</div>
				</div>
				<div style={{ display: 'flex', gap: '15px' }}>
					<div title={`Vista ${vista ?? 'indefinida'}`}>
						<Vista fill={modo === 'Dark' ? '#f1e323' : '#0095c6'} vista={vista} />
					</div>
					{/* TODO: se agregará cuando este disponibles los bloqueos en tiempo real
					 <div title={bloqueado ? 'Sitio bloqueado' : 'Sitio sin bloqueo'}>
						<Bloqueo
							fill={modo === 'Dark' ? '#f1e323' : '#0095c6'}
							blocked={bloqueado}
						/>
					</div> */}
					<div title={iluminacion ? 'Sitio con iluminación' : 'Sitio sin iluminación'}>
						<Iluminacion
							fill={modo === 'Dark' ? '#f1e323' : '#0095c6'}
							withIlumination={iluminacion}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
