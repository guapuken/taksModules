import React, { useState } from 'react';
import { Texts, Title } from '../../../Atoms';
import { Button } from '../../../../components';

import './styles/styles.scss';
import { IconMoreOptions } from '../../../task/files';
import Details from './files/details';
import Comentarios from './files/Comentarios';
import Precios from './files/Precios';
import carrito from '../../../../img/carrito.svg';

const CardSitios = ({
	activo,
	imagen1,
	modo,
	onCarritoClick,
	claveimj,
	tipos,
	onClickEditar,
	onClickPdf,
	onClickEstado,
	estadoBtn,
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
	altura,
	comentarios,
	precioventa,
	costo,
	onClickPrev,
}: any) => {
	//TODO: crear interface para las propiedades que se recibirpan
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(1);

	function getActiveIndex(index: number) {
		switch (index) {
			case 1:
				return (
					<Details
						base={base}
						altura={altura}
						direccion={direccion}
						proveedor={proveedor}
						ubicacion={ubicacion}
						especiales={especiales}
						latitud={latitud}
						longitud={longitud}
						claveproveedor={claveproveedor}
						material={material}
						bloqueado={bloqueado}
						vista={vista}
						iluminacion={iluminacion}
					/>
				);
			case 3:
				return <Comentarios comentarios={comentarios} />;
			case 4:
				return <Precios precioventa={precioventa} costo={costo} />;
			default:
				break;
		}
	}

	const setOptionsSubmenus = [
		{
			title: 'Previsualizar',
			id: 'preview',
			onClick: onClickPrev,
		},
		{
			title: 'Editar',
			id: 'edit',
			onClick: onClickEditar,
		},
		{
			title: 'Descargar PDF',
			id: 'downloadPdf',
			onClick: onClickPdf,
			// submenus: [
			// 	{
			// 		id: 'ficha',
			// 		title: 'Ficha técnica',
			// 	},
			// 	{
			// 		id: 'detalle',
			// 		title: 'Detalle indoor',
			// 	},
			// ],
		},
		{
			title: estadoBtn ? 'Activar sitio' : 'Desactivar sitio',
			id: 'desactiveMedio',
			onClick: onClickEstado,
		},
	];

	return (
		<div className="cardSitios" status-card={isOpen ? 'open' : 'close'}>
			<div className={`cardSitios__image ${!activo && 'inactive'}`}>
				<div
					className="cardSitios__image-bg"
					style={{ backgroundImage: `url(${imagen1})` }}
					onClick={onClickPrev}
				></div>
				<div className="cardSitios__image-btn">
					<Button
						modo={modo}
						onCl={onCarritoClick}
						float
						rounded
						style={{}}
						icon={carrito}
						size="medium"
						id={claveimj}
						color="#343232"
					/>
				</div>
				<div className="cardSitios__image-info">
					<div className="cardSitios__image-info-background"></div>
					<div>
						<Title
							modo="Light"
							className="cardSitios__image-info-title"
							maxLines={1}
							labels={{ title: claveimj }}
						>
							{claveimj}
						</Title>
						<Texts maxLines={1} modo="Light" className="cardSitios__image-info-title">
							{tipos}
						</Texts>
					</div>
					{!isOpen && (
						<div style={{ zIndex: '1' }}>
							<IconMoreOptions modo="Dark" options={setOptionsSubmenus} />
						</div>
					)}
				</div>
			</div>
			<button className="cardSitios__button" onClick={() => setIsOpen(!isOpen)}>
				<span className="cardSitios__button-icon"> </span>
			</button>
			{isOpen && (
				<div className="cardSitios__detalles">
					<div className="cardSitios__detalles-header">
						<div className="cardSitios__detalles-header-nav">
							<Title
								modo="Dark"
								labels={{
									className: `cardSitios__detalles-header-nav-option ${
										activeIndex === 1 ? 'active' : ''
									}`,
									onClick: () => setActiveIndex(1),
								}}
							>
								Detalles
							</Title>
							{/* 							<Title
								modo="Dark"
								labels={{
									className: `cardSitios__detalles-header-nav-option ${
										activeIndex === 2 ? 'active' : ''
									}`,
									onClick: () => setActiveIndex(2),
								}}
							>
								Data
							</Title> */}
							<Title
								modo="Dark"
								labels={{
									className: `cardSitios__detalles-header-nav-option ${
										activeIndex === 3 ? 'active' : ''
									}`,
									onClick: () => setActiveIndex(3),
								}}
							>
								Comentarios
							</Title>
							<Title
								modo="Dark"
								labels={{
									className: `cardSitios__detalles-header-nav-option ${
										activeIndex === 4 ? 'active' : ''
									}`,
									onClick: () => setActiveIndex(4),
								}}
							>
								Precios
							</Title>
						</div>
						<div className="cardSitios__detalles-header-options">
							<IconMoreOptions modo="Dark" options={setOptionsSubmenus} />
						</div>
					</div>
					{getActiveIndex(activeIndex)}
				</div>
			)}
		</div>
	);
};

export default CardSitios;
