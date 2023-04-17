import React from 'react';
import ModalProjects from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [projectName, setProjectName] = React.useState('Uber Eats-2536-Espectaculares-Noviembre');
	const [nameTask, setNameTask] = React.useState('Dummies');
	const [descriptionTask, setDescriptionTask] = React.useState(
		'campaña Uber Eats-2536-Espectaculares-Noviembre'
	);
	const [priority, setPriority] = React.useState('none');
	const [checked, setCheckedd] = React.useState(false);
	const [startDate, setStartDate] = React.useState();
	const [endDate, setEndDate] = React.useState();
	const [responsable, setResponsable] = React.useState({ id: undefined, name: undefined });
	const [revision, setRevision] = React.useState({ id: undefined, name: undefined });

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
			onClick: (e) => console.log(e),
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
			onClick: (e) => console.log(e),
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
			onClick: (e) => console.log(e),
		},
	];
	// consoles para revisar que sse generen de manera correcta los setteos
	console.clear();
	console.log('nombre proyecto: ', projectName);
	console.log('nombre tarea: ', nameTask);
	console.log('descripción: ', descriptionTask);
	console.log('prioridad: ', priority);
	console.log('startDate: ', startDate);
	console.log('endDate: ', endDate);
	console.log('responsable: ', responsable);
	console.log('revision: ', revision);
	return (
		<ModalProjects
			modo="Light"
			onChangeName={(e: any) => {
				setProjectName(e.target.value);
			}}
			templateOptions={[
				{
					id: '1',
					title: 'Espectaculares',
					onClick: () => alert('Espectaculares'),
				},
			]}
			projectNameValue={projectName}
			// button clicks
			onClickAddTask={() => alert('Tarea nueva')}
			onClickCreateTemplate={() => alert('Crear plantilla')}
			onClickCreate={() => alert('Hola')}
			onClickAbort={() => alert('Adios')}
			// por probar
			subtasks={[
				{
					idTask: '25',
					valueTask: nameTask,
					valueDescription: descriptionTask,
					onChangeNameTask: (e) => setNameTask(e.target.value),
					onChangeDescriptionTask: (e) => setDescriptionTask(e.target.value),
					onClickPrioridad: (e) => setPriority(e.target.id),
					prioridadInicial: priority,
					check: checked,
					onChangeCheckbox: (e) => setCheckedd(!checked),
					startDateValue: startDate,
					onChangeStartDate: (e) => setStartDate(e.target.value),
					endDateValue: endDate,
					onChangeEndDate: (e) => setEndDate(e.target.value),
					responsables: responsableUs,
					revision: revisionUs,
					equipos: equipos,
					valueResponsable: responsable.name,
					valueRevision: revision.name,
					onClickCreateTemplate: () => alert('crear plantilla'),
					templateOptions: [
						{
							id: '1',
							title: 'Espectaculares',
						},
					],
					subtasks: [
						{
							idTask: '27',
							valueTask: 'CDMX',
							valueDescription: descriptionTask,
							onChangeNameTask: (e) => setNameTask(e.target.value),
							onChangeDescriptionTask: (e) => setDescriptionTask(e.target.value),
							onClickPrioridad: (e) => setPriority(e.target.id),
							prioridadInicial: priority,
							check: checked,
							onChangeCheckbox: (e) => setCheckedd(!checked),
							startDateValue: startDate,
							onChangeStartDate: (e) => setStartDate(e.target.value),
							endDateValue: endDate,
							onChangeEndDate: (e) => setEndDate(e.target.value),
							responsables: responsableUs,
							revision: revisionUs,
							equipos: equipos,
							valueResponsable: responsable.name,
							valueRevision: revision.name,
							onClickCreateTemplate: () => alert('crear plantilla'),
							templateOptions: [
								{
									id: '1',
									title: 'Espectaculares',
								},
							],
							subtasks: [
								{
									idTask: '27',
									valueTask: 'CDMX',
									valueDescription: descriptionTask,
									onChangeNameTask: (e) => setNameTask(e.target.value),
									onChangeDescriptionTask: (e) =>
										setDescriptionTask(e.target.value),
									onClickPrioridad: (e) => setPriority(e.target.id),
									prioridadInicial: priority,
									check: checked,
									onChangeCheckbox: (e) => setCheckedd(!checked),
									startDateValue: startDate,
									onChangeStartDate: (e) => setStartDate(e.target.value),
									endDateValue: endDate,
									onChangeEndDate: (e) => setEndDate(e.target.value),
									responsables: responsableUs,
									revision: revisionUs,
									equipos: equipos,
									valueResponsable: responsable.name,
									valueRevision: revision.name,
									onClickCreateTemplate: () => alert('crear plantilla'),
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
							idTask: '27',
							valueTask: 'CDMX',
							valueDescription: descriptionTask,
							onChangeNameTask: (e) => setNameTask(e.target.value),
							onChangeDescriptionTask: (e) => setDescriptionTask(e.target.value),
							onClickPrioridad: (e) => setPriority(e.target.id),
							prioridadInicial: priority,
							check: checked,
							onChangeCheckbox: (e) => setCheckedd(!checked),
							startDateValue: startDate,
							onChangeStartDate: (e) => setStartDate(e.target.value),
							endDateValue: endDate,
							onChangeEndDate: (e) => setEndDate(e.target.value),
							responsables: responsableUs,
							revision: revisionUs,
							equipos: equipos,
							valueResponsable: responsable.name,
							valueRevision: revision.name,
							onClickCreateTemplate: () => alert('crear plantilla'),
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
					onChangeNameTask: (e) => setNameTask(e.target.value),
					onChangeDescriptionTask: (e) => setDescriptionTask(e.target.value),
					onClickPrioridad: (e) => setPriority(e.target.id),
					prioridadInicial: priority,
					check: checked,
					onChangeCheckbox: (e) => setCheckedd(!checked),
					startDateValue: startDate,
					onChangeStartDate: (e) => setStartDate(e.target.value),
					endDateValue: endDate,
					onChangeEndDate: (e) => setEndDate(e.target.value),
					responsables: responsableUs,
					revision: revisionUs,
					equipos: equipos,
					valueResponsable: responsable.name,
					valueRevision: revision.name,
					onClickCreateTemplate: () => alert('crear plantilla'),
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
					onChangeNameTask: (e) => setNameTask(e.target.value),
					onChangeDescriptionTask: (e) => setDescriptionTask(e.target.value),
					onClickPrioridad: (e) => setPriority(e.target.id),
					prioridadInicial: priority,
					check: checked,
					onChangeCheckbox: (e) => setCheckedd(!checked),
					startDateValue: startDate,
					onChangeStartDate: (e) => setStartDate(e.target.value),
					endDateValue: endDate,
					onChangeEndDate: (e) => setEndDate(e.target.value),
					responsables: responsableUs,
					revision: revisionUs,
					equipos: equipos,
					valueResponsable: responsable.name,
					valueRevision: revision.name,
					onClickCreateTemplate: () => alert('crear plantilla'),
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
storiesOf('Pruebas funcionalidad/modal de proyectos', module).add('setData', () => (
	<DemoComponent />
));
