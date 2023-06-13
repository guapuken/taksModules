import React, { Fragment } from 'react';
import ModalProjects from '../Projects/modalProjects';
import { storiesOf } from '@storybook/react';
import { equipos } from '../../data/exampleData';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [projectName, setProjectName] = React.useState(
		'Dummies - Uber Eats-2536-Espectaculares-Noviembre'
	);
	const [idProject, setIdProject] = React.useState('15');
	const [idTask, setIdTask] = React.useState('18');
	const [nameTask, setNameTask] = React.useState('Dummies');
	const [descriptionTask, setDescriptionTask] = React.useState(
		'Dummies Uber Eats-2536-Espectaculares-Noviembre'
	);
	const [priority, setPriority] = React.useState('none');
	const [checked, setChecked] = React.useState(false);
	const [startDate, setStartDate] = React.useState('');
	const [endDate, setEndDate] = React.useState('');
	const [responsable, setResponsable] = React.useState({});
	const [revision, setRevision] = React.useState({ id: undefined, name: undefined });

	console.log({
		checked: checked,
	});
	return (
		<ModalProjects
			onCh_asignTeam={(e) => console.log(e)}
			onCl_close={{} as any}
			modo="Dark"
			initialTeamValue={{
				id: '-22',
				title: 'Creative',
			}}
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
			teamOptions={equipos}
			projectNameValue={projectName}
			// button clicks
			onCl_addTask={() => alert('Tarea nueva')}
			onCl_newTemplate={() => alert('Crear plantilla')}
			onCl_confirm={() => setNameTask('hola')}
			onCl_abort={() => alert('Adios')}
			idProject={idProject}
			subtasks={[
				{
					onCh_startDate: () => {},
					minStartDate: '2023-02-02 00:00:00',
					maxStartDate: '2023-02-10 00:00:00',
					idTask: '1',
					valueDificultad: {
						id: '3',
						title: 'Normal',
					},
					dependence: {
						id: '2',
						taskName: 'Dummies',
					},
					dependenciesOptions: [{ id: '2', title: 'Dummies' }],
					reasignForbidden: true,
					valueTask: 'CDMX - Uber Eats-2536-Espectaculares-Noviembre',
					valueDescription: '',
					onCh_nameTask: (e) => {
						setNameTask(e.target.value);
					},
					onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
					onCl_Priority: (e) => setPriority(e.target.id),
					prioridadInicial: priority,
					check: checked,
					onCh_checkbox: () => setChecked(!checked),
					startDateValue: '2023-02-10 00:00:00',
					endDateValue: '2023-02-11 00:00:00',
					onCh_tartDate: (e) => {
						setStartDate(e.target.value);
					},
					onCh_endDate: (e) => {
						setEndDate(e.target.value);
					},
					responsables: responsable,
					revision: revision,
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
							responsables: responsable,
							revision: revision,
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
									onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
									onCl_Priority: (e) => setPriority(e.target.id),
									prioridadInicial: priority,
									check: checked,
									onCh_checkbox: (e) => setCheckedd(!checked),
									startDateValue: startDate,
									onCh_tartDate: (e) => setStartDate(e.target.value),
									endDateValue: endDate,
									onCh_endDate: (e) => setEndDate(e.target.value),
									responsables: responsable,
									revision: revision,
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
									onCh_descriptionTask: (e) => setDescriptionTask(e.target.value),
									onCl_Priority: (e) => setPriority(e.target.id),
									prioridadInicial: priority,
									check: checked,
									onCh_checkbox: (e) => setCheckedd(!checked),
									startDateValue: startDate,
									onCh_tartDate: (e) => setStartDate(e.target.value),
									endDateValue: endDate,
									onCh_endDate: (e) => setEndDate(e.target.value),
									responsables: responsable,
									revision: revision,
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
							responsables: responsable,
							revision: revision,
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
					responsables: responsable,
					revision: revision,
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
					responsables: responsable,
					revision: revision,
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
	);
}
storiesOf('Modales/Creación/Proyectos/Ejemplos/Uber Eats', module).add('Uber Eats', () => (
	<DemoComponent />
));
