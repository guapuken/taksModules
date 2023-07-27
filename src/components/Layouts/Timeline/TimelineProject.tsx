import React, { useState } from 'react';
// elementos auxiliares
import { SimpleContainer, TextBoldLight, Texts, Title, ValidationComponent } from '../../Atoms';
import { Button, Dropdown, Timeline } from '../../../components';
import { ButtonItem } from '../../../utils/asideUtils';
import VisualizacionMedios from './componentesPrincipales/VisualizacionMedios';
import NoContent from './componentesPrincipales/NoContent';
// types
import { timelineProjectProps } from './types/Types';

// archivos multimedia
import close from '../../../img/close.svg';
import logo from '../../../img/ByImjSimple.svg';
import share from '../../../img/share.svg';

//styles
import './styles/TimelineProject.scss';
import { onChangeType } from '../../../types';

const TimelineProject = ({
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
	onCh_dropdown,
	optionsDropdown,
	initialValueDropdown,
	onCl_close,
	onCh_dropdownRutas,
	optionsRutas,
	valuesRutas,
}: timelineProjectProps) => {
	const [medioSelected, setMedioSelected] = useState('');
	return (
		<SimpleContainer
			className="timelineProject"
			labels={{
				'theme-config': modo,
			}}
		>
			<SimpleContainer className="timelineProject__header">
				<img
					className="timelineProject__header-logo"
					src={logo}
					alt="OBP By IMJ"
					onClick={onCl_compartir}
				/>
				<ButtonItem id="1" img={close} onClick={onCl_close} />
			</SimpleContainer>
			<SimpleContainer className="timelineProject__contenido">
				<SimpleContainer className="timelineProject__contenido-timeline">
					<SimpleContainer style={{ width: '30vw', display: 'flex', gap: '10px' }}>
						<Title modo={modo}>{nombreProyecto}</Title>
					</SimpleContainer>
					{!tasks && <NoContent modo={modo} />}
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
									validate={medioSelected !== ''}
								>
									<TextBoldLight
										modo={modo}
										legend={'Línea de tiempo de  '}
										boldLegend={
											medioSelected === 'sitios'
												? 'Sitios fijos'
												: medioSelected === 'urbanos'
												? 'Urbanos'
												: medioSelected === 'indoors'
												? 'Sitios Indoor'
												: medioSelected === 'vallas'
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
									/>
								</ValidationComponent>
							</SimpleContainer>
							<ValidationComponent
								validate={medioSelected === 'sitios' || medioSelected === 'indoors'}
							>
								<Dropdown
									modo={modo}
									onCh={onCh_dropdown as onChangeType}
									options={optionsDropdown ?? []}
									initialValue={initialValueDropdown}
									style={{ marginBottom: '20px', zIndex: '2' }}
									placeHolder="Selecciona el tipo de medio"
								/>
							</ValidationComponent>
							<Timeline modo={modo} tasks={tasks as any} />
						</SimpleContainer>
					</ValidationComponent>
				</SimpleContainer>
				<SimpleContainer className="timelineProject__contenido-medios">
					<VisualizacionMedios
						tasks={medios ?? (null as any)}
						modo={modo}
						onCl_selectedMedios={(e: any) => {
							setMedioSelected(e?.target?.id);
							if (onCl_selectedMedios) onCl_selectedMedios(e);
						}}
						percentSitios={percentSitios}
						percentUrbanos={percentUrbanos}
						percentIndoors={percentIndoors}
						percentVallas={percentVallas}
						statusSitios={statusSitios}
						statusUrbanos={statusUrbanos}
						statusIndoors={statusIndoors}
						statusVallas={statusVallas}
						sitiosFijos={statusSitios || percentSitios ? true : false}
						unidadesUrbanas={statusUrbanos || percentUrbanos ? true : false}
						sitiosIndoors={statusIndoors || percentIndoors ? true : false}
						vallasMoviles={statusVallas || percentVallas ? true : false}
						onCh_dropdownRutas={onCh_dropdownRutas}
						optionsRutas={optionsRutas}
						valuesRutas={valuesRutas}
					/>
				</SimpleContainer>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default TimelineProject;
