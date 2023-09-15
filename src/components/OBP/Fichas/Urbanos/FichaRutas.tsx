import React from 'react';
import { Texts, Title } from '../../../Atoms';
import { Button } from '../../../../components';
import BigData from '../Sitios/files/BigData';
import { CloseIcon } from '../../../dropdown/files';
import carritoIcon from '../../../../img/carrito.svg';

// estilos
import './styles/stls_F_urbanos.scss';
import { onClickType } from '../../../../types';

const FichaRutas = (props: any) => {
	const { image, modo, tiposExhibicion, inicio, destino, ruta, eco, derrotero, icono } = props;

	/**
	 * Función que se encarga de generar los elementos de los tipos de exhibición
	 * @returns tipos de exhibición con su botón de carrito independiente para que se le agregue la funcionalidad correspondiente
	 */
	interface getTiposExhibicionProps {
		onCl_carrito?: onClickType;
		onCl_text?: onClickType;
		title: string;
	}
	function getTiposExhibicion() {
		return tiposExhibicion?.map((tipo: getTiposExhibicionProps) => (
			<div>
				<Button
					modo={modo}
					onCl={tipo.onCl_carrito ?? (() => {})}
					color="#f1e323"
					icon={carritoIcon}
					float
				/>
				<Texts modo={modo} labels={{ onClick: tipo.onCl_text ?? (() => {}) }}>
					{tipo.title}
				</Texts>
			</div>
		));
	}

	return (
		<div className="OBP_F_Urbanos">
			<div className="OBP_F_Urbanos__header">
				<div className="OBP_F_Urbanos__header-image">
					<div className="OBP_F_Urbanos__header-image-children">{image}</div>
					<div className="OBP_F_Urbanos__header-image-pleca">
						<Texts modo="Dark" maxLines={2}>
							<span>Inicio:</span>
							{inicio ?? 'Lugar de inicio indefinido'}
						</Texts>
						<Texts modo="Dark" maxLines={2}>
							<span>Destino:</span>
							{destino ?? 'Lugar de destino indefinido'}
						</Texts>
					</div>
				</div>
				<div className="OBP_F_Urbanos__header-tipos">
					<div className="OBP_F_Urbanos__header-tipos-title">
						<div>
							<Title modo={modo}>{`Ruta: ${ruta}` ?? 'Ruta sin nombre 🤔'}</Title>
							<Texts modo={modo}>{`Eco: ${eco}` ?? 'Sin Número de eco 😶'}</Texts>
						</div>
						<div className="OBP_F_Urbanos__header-tipos-title-icon">
							<CloseIcon />
						</div>
					</div>
					<div className="OBP_F_Urbanos__header-tipos-individuales">
						{getTiposExhibicion()}
					</div>
				</div>
			</div>
			<div className="OBP_F_Urbanos__data">
				<BigData data={props} userRoutes />
				<Texts className="OBP_F_Urbanos__data-derrotero" modo="Dark" maxLines={6}>
					<span>Derrotero:</span>
					{derrotero ?? 'Por ahora no tenemos registro 😥'}
				</Texts>
			</div>
		</div>
	);
};

export default FichaRutas;
