import React, { useState } from 'react';
// elementos auxiliares
import {  TextBoldLight, Texts, Title, ValidationComponent } from '../../Atoms';
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
		<div
			className="timelineProject"
			theme-config= {modo}
		>
			<div className="timelineProject__header">
				<img
					className="timelineProject__header-logo"
					src={logo}
					alt="OBP By IMJ"
					onClick={onCl_compartir}
				/>
				<ButtonItem id="1" img={close} onClick={onCl_close} />
			</div>
			<div className="timelineProject__contenido">
				<div className="timelineProject__contenido-timeline">
					<div className="timelineProject__contenido-timeline-title" >
						<Title modo={modo}>{nombreProyecto}</Title>
					</div>
					{!tasks && 
						<NoContent modo={modo} />
					}
					{tasks && 
						<div style={{ marginTop: '20px' }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginBottom: '20px',
								}}
							>
								{medioSelected !== '' &&
									<>
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
									</>
								}
							</div>
							{(medioSelected === 'sitios' || medioSelected === 'indoors') && 
								<Dropdown
									modo={modo}
									onCh={onCh_dropdown as onChangeType}
									options={optionsDropdown ?? []}
									initialValue={initialValueDropdown}
									style={{ marginBottom: '20px', zIndex: '2' }}
									placeHolder="Selecciona el tipo de medio"
								/>
							}
							<Timeline modo={modo} tasks={tasks as any} />
						</div>
					}
				</div>
				<div className="timelineProject__contenido-medios">
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
				</div>
			</div>
		</div>
	);
};

export default TimelineProject;
