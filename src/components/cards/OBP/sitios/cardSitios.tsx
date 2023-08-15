import React, { useState } from 'react';
import { Texts, Title } from '../../../Atoms';
import { Button } from '../../../../components';

import './styles/styles.scss';
import { IconMoreOptions } from '../../../task/files';
import { Precios, Data, Comentarios, Details } from './files';
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
	addedToCar,
	income_a_users,
	income_b_users,
	income_c_users,
	income_d_users,
	income_e_users,
	a13_17_users,
	a18_25_users,
	a26_40_users,
	a41_55_users,
	a55_users,
	female_users,
	male_users,
	frequency,
	reach,
	total_hits,
	total_users,
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
						modo="Light"
					/>
				);
			case 2:
				return (
					<Data
						income_a_users={income_a_users ?? 0}
						income_b_users={income_b_users ?? 0}
						income_c_users={income_c_users ?? 0}
						income_d_users={income_d_users ?? 0}
						income_e_users={income_e_users ?? 0}
						a13_17_users={a13_17_users ?? 0}
						a18_25_users={a18_25_users ?? 0}
						a26_40_users={a26_40_users ?? 0}
						a41_55_users={a41_55_users ?? 0}
						a55_users={a55_users ?? 0}
						female_users={female_users ?? 0}
						male_users={male_users ?? 0}
						frequency={frequency ?? 0}
						reach={reach ?? 0}
						total_hits={total_hits ?? 0}
						total_users={total_users ?? 0}
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
		},
		{
			title: estadoBtn ? 'Activar sitio' : 'Desactivar sitio',
			id: 'desactiveMedio',
			onClick: onClickEstado,
		},
	];

	return (
		<div className="cardSitios" status-card={isOpen ? 'open' : 'close'} theme-config={modo}>
			<div className={`cardSitios__image`}>
				{!activo && (
					<div className="cardSitios__image-inactive">
						<div className="cardSitios__image-inactive-desactivationMotive">
							<h2>Inactivo</h2>
							<Texts modo={'' as any}>Por finalización de contrato</Texts>
						</div>
					</div>
				)}
				<div
					className="cardSitios__image-bg"
					style={{ backgroundImage: `url(${imagen1})` }}
					onClick={onClickPrev}
				></div>
				<div className="cardSitios__image-btn">
					<Button
						modo={'Light'}
						onCl={onCarritoClick}
						float
						rounded
						style={{ boxShadow: 'inset 0 0 0 3px #fff' }}
						icon={carrito}
						size="medium"
						id={claveimj}
						color={addedToCar ? undefined : '#343232'}
						valueSuccess={addedToCar && '✔'}
						successColor={addedToCar}
						disabled={!activo}
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
										activeIndex === 2 ? 'active' : ''
									}`,
									onClick: () => setActiveIndex(2),
								}}
							>
								Data
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
