import React, { Fragment } from 'react';
import ModalProjects from '.';
import { storiesOf } from '@storybook/react';
import Button from '../button/Button';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [projectName, setProjectName] = React.useState('Uber Eats-2536-Espectaculares-Noviembre');
	const [idProject, setIdProject] = React.useState('15');
	const [idTask, setIdTask] = React.useState('18');
	const [nameTask, setNameTask] = React.useState('Dummies');
	const [descriptionTask, setDescriptionTask] = React.useState(
		'campaña Uber Eats-2536-Espectaculares-Noviembre'
	);
	const [priority, setPriority] = React.useState('none');
	const [checked, setCheckedd] = React.useState(false);
	const [startDate, setStartDate] = React.useState('');
	const [endDate, setEndDate] = React.useState('');
	const [responsable, setResponsable] = React.useState({});
	const [revision, setRevision] = React.useState({ id: undefined, name: undefined });

	console.log(nameTask);
	const equipos = [
		{
			id: '1',
			title: 'Jorge Correa',
			// onClick: (e) => setResponsable(e.target.value),
			onClick: (e) => setRevision({ id: e.target.id, name: e.target.outerText }),
		},
		{
			id: '2',
			title: 'Kaori Soto',
		},
	];
	const equiposD = [
		{
			id: '1',
			title: 'Jorge Correa',
		},
		{
			id: '2',
			title: 'Kaori Soto',
		},
	];
	const revisionUs = [
		{
			id: '1',
			title: 'Jorge Correa',
			// onClick: (e) => setResponsable(e.target.value),
			onClick: (e) => setRevision({ id: e.target.id, name: e.target.outerText }),
		},
		{
			id: '2',
			title: 'Kaori Soto',
		},
	];
	const responsableUs = [
		{
			id: '1',
			title: 'Jorge Correa',
			// onClick: (e) => setResponsable(e.target.value),
			onClick: (e) => setResponsable({ id: e.target.id, name: e.target.outerText }),
		},
		{
			id: '2',
			title: 'Kaori Soto',
		},
	];
	return (
		<Fragment>
			{/* <Button modo="Light" onCl={() => setNameTask('hola')} /> */}
			<Button
				modo="Light"
				onCl={() => {
					setStartDate('2023-08-15 GMT-600 00:00:00');
					setEndDate('2023-08-16 GMT-600 00:00:00');
					setResponsable({ id: '1', title: 'Jorge Correa' });
					setPriority('alta');
					setNameTask('Hola que hace');
				}}
			/>
			<ModalProjects
				modo="Light"
				initialTeamValue={responsable}
				onCh_nameProject={(e: any) => {
					setProjectName(e.target.value);
				}}
				templateOptions={[
					{
						id: '1',
						title: 'Espectaculares',
						onClick: () => alert('Espectaculares'),
					},
				]}
				teamOptions={equiposD}
				projectNameValue={projectName}
				// button clicks
				onCl_addTask={() => alert('Tarea nueva')}
				onCl_newTemplate={() => alert('Crear plantilla')}
				onCl_confirm={() => setNameTask('hola')}
				onCl_abort={() => alert('Adios')}
				idProject={idProject}
				// por probar
				subtasks={[
					{
						minStartDate: '2023-02-02 00:00:00',
						maxStartDate: '2023-02-10 00:00:00',
						idTask: idTask,
						valueTask: nameTask,
						valueDescription: nameTask,
						onCh_nameTask: (e) => {
							setNameTask(e.target.value);
						},
						onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
						onCl_Priority: (e) => setPriority(e.target.id),
						prioridadInicial: priority,
						check: checked,
						onCh_checkbox: (e) => setCheckedd(!checked),
						startDateValue: startDate,
						onCh_tartDate: (e) => {
							setStartDate(e.target.value);
						},
						onCh_endDate: (e) => {
							setEndDate(e.target.value);
						},
						endDateValue: endDate,
						responsables: responsableUs,
						revision: revisionUs,
						equipos: equipos,
						valueResponsable: responsable.title,
						valueRevision: revision.name,
						onCl_newTemplate: () => alert('crear plantilla'),
						templateOptions: [
							{
								id: '1',
								title: 'Espectaculares',
							},
						],
						onClikEliminar: () => alert('Hola'),
						subtasks: [
							{
								idTask: '27',
								valueTask: nameTask,
								valueDescription: descriptionTask,
								onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
								onCl_Priority: (e) => setPriority(e.target.id),
								prioridadInicial: priority,
								check: checked,
								onCh_checkbox: (e) => setCheckedd(!checked),
								startDateValue: startDate,
								onCh_tartDate: (e) => setStartDate(e.target.value),
								endDateValue: endDate,
								onCh_endDate: (e) => setEndDate(e.target.value),
								responsables: responsableUs,
								revision: revisionUs,
								equipos: equipos,
								valueResponsable: responsable.name,
								valueRevision: revision.name,
								onCl_newTemplate: () => alert('crear plantilla'),
								templateOptions: [
									{
										id: '1',
										title: 'Espectaculares',
									},
								],
								subtasks: [
									{
										idTask: '252',
										valueTask: nameTask,
										valueDescription: descriptionTask,
										onCh_nameTask: (e) => setNameTask(e.target.value),
										onCh_descriptionTask: (e) =>
											setDescriptionTask(e.target.value),
										onCl_Priority: (e) => setPriority(e.target.id),
										prioridadInicial: priority,
										check: checked,
										onCh_checkbox: (e) => setCheckedd(!checked),
										startDateValue: startDate,
										onCh_tartDate: (e) => setStartDate(e.target.value),
										endDateValue: endDate,
										onCh_endDate: (e) => setEndDate(e.target.value),
										responsables: responsableUs,
										revision: revisionUs,
										equipos: equipos,
										valueResponsable: responsable.name,
										valueRevision: revision.name,
										onCl_newTemplate: () => alert('crear plantilla'),
										templateOptions: [
											{
												id: '1',
												title: 'Espectaculares',
											},
										],
									},
									{
										idTask: '215',
										valueTask: nameTask,
										valueDescription: descriptionTask,
										onCh_nameTask: (e) => setNameTask(e.target.value),
										onCh_descriptionTask: (e) =>
											setDescriptionTask(e.target.value),
										onCl_Priority: (e) => setPriority(e.target.id),
										prioridadInicial: priority,
										check: checked,
										onCh_checkbox: (e) => setCheckedd(!checked),
										startDateValue: startDate,
										onCh_tartDate: (e) => setStartDate(e.target.value),
										endDateValue: endDate,
										onCh_endDate: (e) => setEndDate(e.target.value),
										responsables: responsableUs,
										revision: revisionUs,
										equipos: equipos,
										valueResponsable: responsable.name,
										valueRevision: revision.name,
										onCl_newTemplate: () => alert('crear plantilla'),
										templateOptions: [
											{
												id: '1',
												title: 'Espectaculares',
											},
										],
									},
								],
							},
							{
								idTask: '275',
								valueTask: 'CDMX',
								valueDescription: descriptionTask,
								onCh_nameTask: (e) => setNameTask(e.target.value),
								onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
								onCl_Priority: (e) => setPriority(e.target.id),
								prioridadInicial: priority,
								check: checked,
								onCh_checkbox: (e) => setCheckedd(!checked),
								startDateValue: startDate,
								onCh_tartDate: (e) => setStartDate(e.target.value),
								endDateValue: endDate,
								onCh_endDate: (e) => setEndDate(e.target.value),
								responsables: responsableUs,
								revision: revisionUs,
								equipos: equipos,
								valueResponsable: responsable.name,
								valueRevision: revision.name,
								onCl_newTemplate: () => alert('crear plantilla'),
								templateOptions: [
									{
										id: '1',
										title: 'Espectaculares',
									},
								],
							},
						],
					},
					{
						idTask: '28',
						valueTask: 'CDMX',
						valueDescription: descriptionTask,
						onCh_nameTask: (e) => setNameTask(e.target.value),
						onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
						onCl_Priority: (e) => setPriority(e.target.id),
						prioridadInicial: priority,
						check: checked,
						onCh_checkbox: (e) => setCheckedd(!checked),
						startDateValue: startDate,
						onCh_tartDate: (e) => setStartDate(e.target.value),
						endDateValue: endDate,
						onCh_endDate: (e) => setEndDate(e.target.value),
						responsables: responsableUs,
						revision: revisionUs,
						equipos: equipos,
						valueResponsable: responsable.name,
						valueRevision: revision.name,
						onCl_newTemplate: () => alert('crear plantilla'),
						templateOptions: [
							{
								id: '1',
								title: 'Espectaculares',
							},
						],
					},
					{
						idTask: '29',
						valueTask: 'CDMX',
						valueDescription: descriptionTask,
						onCh_nameTask: (e) => setNameTask(e.target.value),
						onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
						onCl_Priority: (e) => setPriority(e.target.id),
						prioridadInicial: priority,
						check: checked,
						onCh_checkbox: (e) => setCheckedd(!checked),
						startDateValue: startDate,
						onCh_tartDate: (e) => setStartDate(e.target.value),
						endDateValue: endDate,
						onCh_endDate: (e) => setEndDate(e.target.value),
						responsables: responsableUs,
						revision: revisionUs,
						equipos: equipos,
						valueResponsable: responsable.name,
						valueRevision: revision.name,
						onCl_newTemplate: () => alert('crear plantilla'),
						templateOptions: [
							{
								id: '1',
								title: 'Espectaculares',
							},
						],
					},
				]}
			/>
		</Fragment>
	);
}
storiesOf('Pruebas funcionalidad/modal de proyectos', module).add('setData', () => (
	<DemoComponent />
));
