import React, { useState } from 'react';
import { SimpleContainer, Title, ValidationComponent } from '../../../Atoms';
import Medio from './Medio';
import CardMedios from './CardMedio';
import { medios, visualizacionMedios } from '../types/Types';
import Dropdown from '../../../dropdown/dropdown';

// archivos multimedia
import VallaIcon from '../../../../img/icons/vallas_amarillo.svg';
import VallaIconDark from '../../../../img/icons/vallas_blanco.svg';
import SitiosIcon from '../../../../img/icons/sitios_amarillo.svg';
import SitiosIconDark from '../../../../img/icons/sitios_blanco.svg';
import UrbanosIcon from '../../../../img/icons/urbanos_amarillo.svg';
import UrbanosIconDark from '../../../../img/icons/urbanos_blanco.svg';
import IndoorsIcon from '../../../../img/icons/centroscomerciales_amarillo.svg';
import IndoorsIconDark from '../../../../img/icons/centroscomerciales_blanco.svg';

const VisualizacionMedios = ({
	tasks,
	modo,
	onCl_selectedMedios,
	percentSitios,
	percentUrbanos,
	percentIndoors,
	percentVallas,
	statusSitios,
	statusUrbanos,
	statusIndoors,
	statusVallas,
	sitiosFijos,
	unidadesUrbanas,
	sitiosIndoors,
	vallasMoviles,
	onCh_dropdownRutas,
	optionsRutas,
	valuesRutas,
}: visualizacionMedios) => {
	const [selectedElement, setSelectElement] = useState('');
	const [idSelect, setIdSelect] = useState('');

	const handleClick = (e: any, selectElement: string, idSelect: string) => {
		e.preventDefault();
		setSelectElement(selectElement);
		setIdSelect(idSelect);
		if (onCl_selectedMedios) onCl_selectedMedios(e);
	};

	return (
		<SimpleContainer style={{ width: '90%', margin: '0 auto' }}>
			<SimpleContainer style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
				<ValidationComponent validate={sitiosFijos}>
					<CardMedios // card de sitios
						modo={modo}
						onClick={(e: any) => {
							handleClick(e, '1', 'sitios');
						}}
						percentTask={percentSitios}
						statusTask={statusSitios}
						selectedElement={selectedElement === '1'}
						idValue={'sitios'}
						title={'Sitios fijos'}
						Icon={() => (
							<img
								src={SitiosIcon}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
						IconDark={() => (
							<img
								src={SitiosIconDark}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
					/>
				</ValidationComponent>
				<ValidationComponent validate={unidadesUrbanas}>
					<CardMedios // card de urbanos
						modo={modo}
						onClick={(e: any) => {
							handleClick(e, '2', 'urbanos');
						}}
						percentTask={percentUrbanos}
						statusTask={statusUrbanos}
						selectedElement={selectedElement == '2'}
						idValue={'urbanos'}
						title={'Urbanos'}
						Icon={() => (
							<img
								src={UrbanosIcon}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
						IconDark={() => (
							<img
								src={UrbanosIconDark}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
					/>
				</ValidationComponent>
				<ValidationComponent validate={sitiosIndoors}>
					<CardMedios // card de indoors
						modo={modo}
						onClick={(e: any) => {
							handleClick(e, '3', 'indoors');
						}}
						percentTask={percentIndoors}
						statusTask={statusIndoors}
						selectedElement={selectedElement == '3'}
						idValue={'indoors'}
						title={'Indoors'}
						Icon={() => (
							<img
								src={IndoorsIcon}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
						IconDark={() => (
							<img
								src={IndoorsIconDark}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
					/>
				</ValidationComponent>
				<ValidationComponent validate={vallasMoviles}>
					<CardMedios // card de vallas móviles
						modo={modo}
						onClick={(e: any) => {
							handleClick(e, '4', 'vallas');
						}}
						percentTask={percentVallas}
						statusTask={statusVallas}
						selectedElement={selectedElement == '4'}
						idValue={'vallas'}
						title={'Vallas móviles'}
						Icon={() => (
							<img
								src={VallaIcon}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
						IconDark={() => (
							<img
								src={VallaIconDark}
								className="timelineProject__contenido-medios-titles-icon"
							/>
						)}
					/>
				</ValidationComponent>
			</SimpleContainer>
			<ValidationComponent validate={tasks}>
				<SimpleContainer className="timelineProject__contenido-medios-individual">
					{selectedElement === '2' && (
						<div style={{ display: 'block', width: '100%' }}>
							<Title modo={modo}>Filtrar por plaza</Title>
							<Dropdown
								modo={modo}
								onCh={onCh_dropdownRutas}
								options={optionsRutas}
								isSearchable
								isMulti
								values={valuesRutas}
								placeHolder="Selecciona las plazas que deseas visualizar"
							/>
						</div>
					)}
					{tasks?.map((element: medios) => (
						<Medio
							modo={modo}
							porcentaje={element.porcentaje}
							nombre={element.nombre}
							status={element.status}
							onClick={element.onClick}
						/>
					))}
				</SimpleContainer>
			</ValidationComponent>
		</SimpleContainer>
	);
};

export default VisualizacionMedios;
