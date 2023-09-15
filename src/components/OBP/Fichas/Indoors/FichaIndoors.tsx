import React, { useEffect, useState } from 'react';
import logo from '../../../../img/ByImjSimpleDark.svg';
import carrito from '../../../../img/carrito.svg';
import { color } from '../../../../storyUtils';
import { Modo, onClickType } from '../../../../types';
import { Texts, Title } from '../../../Atoms';
import Button from '../../../button/Button';
import { CloseIcon } from '../../../dropdown/files';
import InfoGeneral from '../Indoors/files/infoGeneral';
import './styles/styles.scss';

interface FichaIndoorsProps {
	modo: Modo;
	onCl_addToCar: onClickType;
	image?: string;
	altura?: number;
	base?: number;
	nombreIndoor?: String;
	direccion?: string;
	tipoMedio?: string;
	descripcion?: string;
	addedToCar?: boolean;
	pleca?: string;
	afluencia?: number;
	tiendasAncla?: string;
	mapa?: string;
}
const FichaIndoors = (props: FichaIndoorsProps) => {
	const {
		image,
		mapa,
		altura,
		base,
		modo,
		onCl_addToCar,
		nombreIndoor,
		descripcion,
		addedToCar: agregado,
		pleca,
		afluencia,
		tiendasAncla,
	} = props;
	const [addedToCar, setAddedToCar] = useState(agregado);

	useEffect(() => {
		setAddedToCar(agregado);
	}, [agregado]);
	//color borde imagen
	// const styles = { boxShadow: 'inset 0 0 0 2px ' };
	return (
		//header principal
		<div className="OBP_fichaIndoors" theme-config={modo}>
			<div className="OBP_fichaIndoors_header">
				<div
					className="OBP_fichaIndoors_header-image"
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className="OBP_fichaIndoors_header-image-logo">
						<img src={logo} alt="" />
					</div>
					<div className="OBP_fichaIndoors_header-image-logo-pleca">
						<div className="OBP_fichaIndoors_header-image-logo-pleca-medida">
							<Texts modo="Dark">{`${altura ?? '0'}m ↕`}</Texts>
							<Texts modo="Dark">{`${base ?? '0'}m ↔`}</Texts>
						</div>
						<div className="OBP_fichaIndoors_header-image-logo-pleca-medida-afluencia">
							<Texts modo={'Dark'}>
								<span style={{ fontWeight: 'bold', marginRight: '5px' }}>
									Afluencia:
								</span>{' '}
								{afluencia ?? ''}
							</Texts>
						</div>
					</div>
				</div>
				<div className="OBP_fichaIndoors_header-info">
					<div className="OBP_fichaIndoors_header-info-tipo">
						<Title modo={modo}>{nombreIndoor}</Title>
						<CloseIcon />
					</div>
					<div className="OBP_fichaIndoors_header-info-titulo">
						<div>
							<Texts modo={modo}>IMJ-CDMX-ESP-435B</Texts>
							<Texts modo={modo}>Escaleras eléctricas</Texts>
						</div>
						<Button
							modo={modo}
							onCl={(e) => {
								if (onCl_addToCar) onCl_addToCar(e);
								56;
								setAddedToCar(!addedToCar);
							}}
							float
							icon={carrito}
							color="#f1e323"
							valueSuccess={addedToCar ? '✔' : ''}
							successColor={addedToCar}
						/>
					</div>
					<InfoGeneral data={props}></InfoGeneral>
				</div>
			</div>

			<div className="OBP_fichaIndoors_header-footer">
				<Texts modo={modo}>
					<span style={{ fontWeight: 'bold', marginRight: '5px' }}>Descripción:</span>{' '}
					{descripcion ?? 'Sin descripción 🤓'}
				</Texts>

				<div
					className="OBP_fichaIndoors_header-footer-mapa"
					style={{ backgroundImage: `url(${mapa})` }}
				>
					<div className="OBP_fichaIndoors_header-footer-mapa-fondo">
						<Texts modo={modo}>
							<span style={{ fontWeight: 'bold', marginRight: '5px' }}></span>{' '}
							{descripcion ?? 'No se encontro mapa de indoor ⚠️'}
						</Texts>
					</div>
					<div className="OBP_fichaIndoors_header-footer-mapa-fondo-circle">
						<Texts modo={modo}>
							<span style={{ fontWeight: 'bold', marginRight: '4px' }}></span>
							{descripcion ?? 'N1'}
						</Texts>
					</div>
				</div>
			</div>
		</div>
		//aqui termina header principal
	);
};

export default FichaIndoors;
