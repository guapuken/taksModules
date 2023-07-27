import React, { useEffect, useState } from 'react';
import { SimpleContainer, Title, ValidationComponent } from '../../../Atoms';
import Medio from './Medio';
import CardMedios from './CardMedio';
import { medios, visualizacionMedios } from '../types/Types';
import { SitiosIcon } from '../../../../img/sitios';
import { UrbanosIcon } from '../../../../img/urbanosIcon';
import { VallaIcon } from '../../../../img/vallasIcon';
import { IndoorsIcon } from '../../../../img/indoorsIcon';
import Dropdown from '../../../dropdown/dropdown';

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
							<SitiosIcon
								fill={modo === 'Dark' ? '#d3d3d3' : '#2c2926'}
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
							<UrbanosIcon
								fill={modo === 'Dark' ? '#d3d3d3' : '#2c2926'}
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
							<IndoorsIcon
								fill={modo === 'Dark' ? '#d3d3d3' : '#2c2926'}
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
							<VallaIcon
								fill={modo === 'Dark' ? '#d3d3d3' : '#2c2926'}
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
