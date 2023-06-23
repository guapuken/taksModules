import React from 'react';
// elementos auxiliares
import { SimpleContainer, TextBoldLight, Texts, Title, ValidationComponent } from '../../Atoms';
import { Button, Dropdown, Timeline } from '../../../components';
import { ButtonItem } from '../../../utils/asideUtils';
import VisualizacionMedios from './componentesPrincipales/VisualizacionMedios';
// types
import { timelineProjectProps } from './types/Types';
import { onChangeType } from '../../../types';
// archivos multimedia
import close from '../../../img/close.svg';
import logo from '../../../img/ByImjSimple.svg';
import image from '../../../img/reloj.svg';
import share from '../../../img/share.svg';

//styles
import './styles/TimelineProject.scss';
const NoContent = ({ modo }: any) => {
	return (
		<SimpleContainer style={{ maxHeight: '70vh', overflow: 'hidden' }}>
			<p
				style={{
					background: '#52525290',
					padding: '10px 20px',
					maxWidth: '90%',
					margin: '0 auto',
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)',
					borderRadius: '20px',
					color: '#fff',
					fontWeight: 'bold',
				}}
			>
				Aquí se mostrará la línea del tiempo de cada tipo de medio
			</p>
			<img style={{ width: '100%' }} src={image} alt="" />
		</SimpleContainer>
	);
};

const TimelineProject = ({
	fijos,
	vallas,
	indoors,
	urbanos,
	modo,
	tasks,
	nombreProyecto,
	onCl_compartir,
	onCl_selectedMedios,
	medios,
	percentSitios,
	percentUrbanos,
	percentIndoors,
	percentVallas,
	statusSitios,
	statusUrbanos,
	statusIndoors,
	statusVallas,
	haveSitios,
	haveUrbanos,
	haveIndoors,
	haveVallas,
}: timelineProjectProps) => {
	return (
		<SimpleContainer className="timelineProject">
			<SimpleContainer className="timelineProject__header">
				<img
					className="timelineProject__header-logo"
					src={logo}
					alt="OBP By IMJ"
					onClick={onCl_compartir}
				/>
				<ButtonItem id="1" img={close} />
			</SimpleContainer>
			<SimpleContainer className="timelineProject__contenido">
				<SimpleContainer className="timelineProject__contenido-timeline">
					<SimpleContainer style={{ width: '30vw', display: 'flex', gap: '10px' }}>
						<Title modo={modo}>{nombreProyecto}</Title>
					</SimpleContainer>
					<ValidationComponent validate={!tasks}>
						<NoContent modo={modo} />
					</ValidationComponent>
					<ValidationComponent validate={tasks}>
						<SimpleContainer style={{ marginTop: '20px' }}>
							<SimpleContainer
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginBottom: '20px',
								}}
							>
								<ValidationComponent // aquí se valida si se encuentra seleccionadas las tareas
									validate={fijos || indoors || vallas || urbanos}
								>
									<TextBoldLight
										modo={modo}
										legend={'Línea de tiempo de  '}
										boldLegend={
											fijos
												? 'Sitios fijos'
												: urbanos
												? 'Urbanos'
												: indoors
												? 'Sitios Indoor'
												: vallas
												? 'Vallas fijas'
												: ''
										}
										positionBold="end"
									/>
									<Button
										modo={modo}
										onCl={onCl_compartir}
										float
										icon={share}
										rounded
										border
										style={
											{
												// position: 'absolute',
												// top: '0',
												// right: '20px',
												// zIndex: '1',
											}
										}
									/>
								</ValidationComponent>
							</SimpleContainer>
							<Timeline modo={modo} tasks={tasks as any} />
						</SimpleContainer>
					</ValidationComponent>
				</SimpleContainer>
				<SimpleContainer className="timelineProject__contenido-medios">
					<VisualizacionMedios
						tasks={medios ?? (null as any)}
						modo={modo}
						onCl_selectedMedios={onCl_selectedMedios}
						percentSitios={percentSitios}
						percentUrbanos={percentUrbanos}
						percentIndoors={percentIndoors}
						percentVallas={percentVallas}
						statusSitios={statusSitios}
						statusUrbanos={statusUrbanos}
						statusIndoors={statusIndoors}
						statusVallas={statusVallas}
						sitiosFijos={haveSitios}
						unidadesUrbanas={haveUrbanos}
						sitiosIndoors={haveIndoors}
						vallasMoviles={haveVallas}
					/>
				</SimpleContainer>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default TimelineProject;
