import React, { Fragment } from 'react';
import { SimpleContainer, Texts, Title, ValidationComponent } from '../../Atoms';
import { CircularProgressBar, Dropdown, Timeline } from '../../../components';
import { ButtonItem } from '../../../utils/asideUtils';
import close from '../../../img/close.svg';
import logo from '../../../img/ByImjSimple.svg';
import { tasks } from './data/dataExample';
import './styles/TimelineProject.scss';
import { timelineProjectProps } from './types/Types';

const Medio = ({ projectName, percentTask, statusTask, modo, onCl_medio }) => (
	<SimpleContainer className="CtnMedio_TimelineProject" onClick={onCl_medio}>
		<SimpleContainer style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
			<CircularProgressBar percentTask={percentTask} statusTask={statusTask} />
			<Texts modo={modo}>{`${percentTask}%`}</Texts>
		</SimpleContainer>
		<Texts modo={modo}>{projectName}</Texts>
	</SimpleContainer>
);
const TimelineProject = ({
	fijos,
	vallas,
	indoors,
	urbanos,
	modo,
	onCh_dropdown,
	opcionesDropdown,
	valorInicialDropdown,
}: timelineProjectProps) => {
	return (
		<SimpleContainer className="ctnGeneral_TimelineProject">
			<SimpleContainer className="header_TimelineProject">
				<img src={logo} alt="" style={{ height: '10vh' }} />
				<ButtonItem id="1" img={close} />
			</SimpleContainer>
			<Title modo="Light" className="projectName_TimelineProject">
				2536-Uber_Eats-Noviembre
			</Title>
			<SimpleContainer
				className="CtnContenido_TimelineProject"
				style={{ maxHeight: '80vh', overflow: 'auto' }}
			>
				<SimpleContainer style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
					<Dropdown
						modo={modo}
						onCh={onCh_dropdown}
						options={opcionesDropdown ?? []}
						placeHolder="Selecciona los medios"
						initialValue={valorInicialDropdown}
						style={{ marginBottom: '10px' }}
					/>
					<Timeline modo="Light" tasks={tasks as any} />
				</SimpleContainer>
				<SimpleContainer className="CtnMediosGenerales_TimelineProject">
					<ValidationComponent validate={fijos}>
						<SimpleContainer
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Title style={{ marginBottom: '15px' }} modo="Light">
								Sitios fijos
							</Title>
							<SimpleContainer className="CtnMedios_TimelineProject">
								{fijos?.map((fijo) => (
									<Medio
										modo={modo}
										percentTask={fijo.porcentajeMedio}
										projectName={fijo.nombreMedio}
										statusTask={fijo.statusMedio}
										onCl_medio={fijo.onCl_medio}
									/>
								))}
							</SimpleContainer>
						</SimpleContainer>
					</ValidationComponent>
					<ValidationComponent validate={urbanos}>
						<SimpleContainer
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Title style={{ margin: '15px 0' }} modo="Light">
								Urbanos
							</Title>
							<SimpleContainer className="CtnMedios_TimelineProject">
								{urbanos?.map((urbano) => (
									<Medio
										modo={modo}
										percentTask={urbano.porcentajeRuta}
										projectName={urbano.nombreRuta}
										statusTask={urbano.statusRuta}
										onCl_medio={urbano.onCl_medio}
									/>
								))}
							</SimpleContainer>
						</SimpleContainer>
					</ValidationComponent>
					<ValidationComponent validate={indoors}>
						<SimpleContainer
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Title style={{ margin: '15px 0' }} modo="Light">
								Indoors
							</Title>
							<SimpleContainer className="CtnMedios_TimelineProject">
								{indoors?.map((indoor) => (
									<Medio
										modo={modo}
										percentTask={indoor.porcentajeMedio}
										projectName={indoor.nombreMedio}
										statusTask={indoor.statusMedio}
										onCl_medio={indoor.onCl_medio}
									/>
								))}
							</SimpleContainer>
						</SimpleContainer>
					</ValidationComponent>
					<ValidationComponent validate={vallas}>
						<SimpleContainer
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Title style={{ margin: '15px 0' }} modo="Light">
								Vallas móviles
							</Title>
							<SimpleContainer className="CtnMedios_TimelineProject">
								{vallas?.map((valla) => (
									<Medio
										modo={modo}
										percentTask={valla.porcentajeValla}
										projectName={valla.nombreValla}
										statusTask={valla.statusValla}
										onCl_medio={valla.onCl_medio}
									/>
								))}
							</SimpleContainer>
						</SimpleContainer>
					</ValidationComponent>
				</SimpleContainer>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default TimelineProject;
