import React, { useEffect, useState } from 'react';
import { SimpleContainer, Title, ValidationComponent } from '../../../Atoms';
import Medio from './Medio';
import { medios, visualizacionMedios } from '../types/Types';
import CircularProgressBar from '../../../circularProgressBar/circularProgressBar';
import { Texts } from '../../../Atoms';
import sitios from '../../../../img/sitios.svg';
import urbanos from '../../../../img/urbanos.svg';
import indoors from '../../../../img/indoors.svg';
import vallas from '../../../../img/vallas.svg';

const CardMedios = ({
	selectedElement,
	modo,
	onClick,
	idValue,
	title,
	percentTask,
	statusTask,
	icon,
}: any) => {
	const [idSelected, setIdSelected] = useState(idValue);

	useEffect(() => {
		setIdSelected(idValue);
	}, [idValue]);
	return (
		<SimpleContainer
			className={`timelineProject__contenido-medios-titles ${
				selectedElement ? 'selected' : ''
			}`}
			style={{ cursor: 'pointer', marginBottom: '10px' }}
			labels={{
				id: idSelected,
			}}
			onClick={onClick}
		>
			<SimpleContainer
				style={{
					display: 'grid',
					placeItems: 'center',
					position: 'absolute',
					top: '10px',
					right: '10px',
					pointerEvents: 'none',
				}}
			>
				<Texts
					modo={modo}
					style={{
						position: 'absolute',
						fontSize: '12px',
						userSelect: 'none',
						pointerEvents: 'none',
					}}
				>
					{`${percentTask ?? 0}%`}
				</Texts>
				<CircularProgressBar
					percentTask={percentTask ?? 0}
					statusTask={statusTask === 'outOfTime' || statusTask === 3 ? 1 : statusTask}
					strokeColor={
						statusTask === 'outOfTime' || statusTask === 3 ? '#FC3D38' : undefined
					}
					size={50}
				/>
			</SimpleContainer>
			<img
				src={icon}
				alt=""
				style={{ height: '80px', pointerEvents: 'none', userSelect: 'none' }}
			/>
			<Title
				modo={modo}
				style={{ pointerEvents: 'none', userSelect: 'none', marginTop: '-20px' }}
			>
				{title}
			</Title>
		</SimpleContainer>
	);
};

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
}: visualizacionMedios) => {
	const [selectedElement, setSelectElement] = useState('');
	const [idSelect, setIdSelect] = useState('');

	const handleClick = (e: any) => {
		e.preventDefault();
		if (onCl_selectedMedios) onCl_selectedMedios(e);
	};

	console.log('idSelect: ', idSelect);
	return (
		<SimpleContainer style={{ width: '90%', margin: '0 auto' }}>
			<SimpleContainer style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
				<ValidationComponent validate={sitiosFijos}>
					<CardMedios // card de sitios
						modo={modo}
						onClick={(e: any) => {
							setSelectElement('1');
							setIdSelect('sitios');
							handleClick(e);
						}}
						percentTask={percentSitios}
						statusTask={statusSitios}
						selectedElement={selectedElement === '1'}
						idValue={'sitios'}
						title={'Sitios fijos'}
						icon={sitios}
					/>
				</ValidationComponent>
				<ValidationComponent validate={unidadesUrbanas}>
					<CardMedios // card de urbanos
						modo={modo}
						onClick={(e: any) => {
							setSelectElement('2');
							setIdSelect('urbanos');
							handleClick(e);
						}}
						percentTask={percentUrbanos}
						statusTask={statusUrbanos}
						selectedElement={selectedElement == '2'}
						idValue={'urbanos'}
						title={'Urbanos'}
						icon={urbanos}
					/>
				</ValidationComponent>
				<ValidationComponent validate={sitiosIndoors}>
					<CardMedios // card de indoors
						modo={modo}
						onClick={(e: any) => {
							setSelectElement('3');
							setIdSelect('indoors');
							handleClick(e);
						}}
						percentTask={percentIndoors}
						statusTask={statusIndoors}
						selectedElement={selectedElement == '3'}
						idValue={'indoors'}
						title={'Indoors'}
						icon={indoors}
					/>
				</ValidationComponent>
				<ValidationComponent validate={vallasMoviles}>
					<CardMedios // card de vallas móviles
						modo={modo}
						onClick={(e: any) => {
							setSelectElement('4');
							setIdSelect('vallas');
							handleClick(e);
						}}
						percentTask={percentVallas}
						statusTask={statusVallas}
						selectedElement={selectedElement == '4'}
						idValue={'vallas'}
						title={'Vallas móviles'}
						icon={vallas}
					/>
				</ValidationComponent>
			</SimpleContainer>
			<ValidationComponent validate={tasks}>
				<SimpleContainer className="timelineProject__contenido-medios-individual">
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
