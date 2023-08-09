import React, { useEffect, useState } from 'react';
//components
import { Texts, Title } from '../../../Atoms';
import { Button } from '../../../../components';
//multimedia files
import logo from '../../../../img/ByImjSimpleDark.svg';
import carrito from '../../../../img/carrito.svg';
import { Iluminacion, Vista } from '../../../../img/icons';
//auxiliar files
import InfoGeneral from './files/InfoGeneral';
import Graficas from './files/Graficas';
import BigData from './files/BigData';
//data
import { dataEdad, dataNse } from './data/datos';
//types
import { Modo, onClickType } from '../../../../types';
import './styles/styles.scss';
import { CloseIcon } from '../../../dropdown/files';

interface FichaSitiosProps {
	image?: string;
	altura?: number;
	base?: number;
	vista?: string;
	iluminacion?: boolean;
	modo: Modo;
	onCl_addToCar: onClickType;
	especiales?: boolean;
	nombreSitio?: string;
	tipoMedio?: string;
	income_a_users?: number;
	income_b_users?: number;
	income_c_users?: number;
	income_d_users?: number;
	income_e_users?: number;
	a13_17_users?: number;
	a18_25_users?: number;
	a26_40_users?: number;
	a41_55_users?: number;
	a55_users?: number;
	frequency?: number;
	reach?: number;
	total_hits?: number;
	total_users?: number;
	latitud?: number;
	longitud?: number;
	direccion?: string;
	acabados?: string;
	material?: string;
	comentarios?: string;
	female_users?: number;
	male_users?: number;
	addedToCar?: boolean;
}

const FichaSitios = (props: FichaSitiosProps) => {
	const {
		image,
		altura,
		base,
		vista = 'Natural',
		iluminacion,
		modo,
		onCl_addToCar,
		nombreSitio,
		tipoMedio,
		addedToCar: agregado,
	} = props;
	const [addedToCar, setAddedToCar] = useState(agregado);

	useEffect(() => {
		setAddedToCar(agregado);
	}, [agregado]);

	return (
		<div className="OBP_fichaSitios" theme-config={modo} vista-sitio={vista}>
			<div className="OBP_fichaSitios__header">
				<div
					className="OBP_fichaSitios__header-image"
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className="OBP_fichaSitios__header-image-logo">
						<img src={logo} alt="" />
					</div>
					<div className="OBP_fichaSitios__header-image-pleca">
						<div className="OBP_fichaSitios__header-image-pleca-medidas">
							<Texts modo="Dark">{`${altura ?? '0'}m ↕`}</Texts>
							<Texts modo="Dark">{`${base ?? '0'}m ↔`}</Texts>
						</div>
						<div className="OBP_fichaSitios__header-image-pleca-especificaciones">
							<div className="OBP_fichaSitios__header-image-pleca-especificaciones-vista">
								<div
									className={`OBP_fichaSitios__header-image-pleca-especificaciones-vista-iconVista`}
								>
									<Vista fill="#f1e323" vista={vista} />
								</div>
								<div className="OBP_fichaSitios__header-image-pleca-especificaciones-vista-bg">
									<Texts modo="Dark">{`Vista ${vista}`}</Texts>
								</div>
							</div>
							<div className="OBP_fichaSitios__header-image-pleca-especificaciones-vista">
								<div className="OBP_fichaSitios__header-image-pleca-especificaciones-vista-bg">
									<Texts modo="Dark">
										{iluminacion ? 'Con iluminación' : 'Sin iluminación'}
									</Texts>
								</div>
								<div className="OBP_fichaSitios__header-image-pleca-especificaciones-vista-icon">
									<Iluminacion fill="#f1e323" withIlumination={iluminacion} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="OBP_fichaSitios__header-info">
					<div className="OBP_fichaSitios__header-info-nombre">
						<div>
							<Title modo={modo}>{nombreSitio ?? 'Sitio sin nombre 🤔'}</Title>
							<Texts modo={modo}>{tipoMedio ?? 'Tipo de medio no definido 😶'}</Texts>
						</div>
						<div className="OBP_fichaSitios__header-info-nombre-closeButton">
							<CloseIcon />
						</div>
						<Button
							modo={modo}
							onCl={(e) => {
								if (onCl_addToCar) onCl_addToCar(e);
								setAddedToCar(!addedToCar);
							}}
							float
							icon={carrito}
							color="#f1e323"
							valueSuccess={addedToCar ? '✔' : ''}
							successColor={addedToCar}
							className="OBP_fichaSitios__header-info-nombre-button"
						/>
					</div>
					<InfoGeneral data={props} />
				</div>
			</div>
			<div className="OBP_fichaSitios__estadisticas">
				<div className="OBP_fichaSitios__estadisticas-graficas">
					<Graficas
						data={dataNse(props as any)}
						modo={modo}
						title="Nivel socieconómico"
					/>
				</div>
				<div className="OBP_fichaSitios__estadisticas-graficas">
					<Graficas data={dataEdad(props as any)} modo={modo} title="Rango de edad" />
				</div>
				<div className="OBP_fichaSitios__estadisticas-bigData">
					<BigData data={props} />
				</div>
			</div>
		</div>
	);
};

export default FichaSitios;
