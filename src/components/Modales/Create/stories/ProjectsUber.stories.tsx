import React, { Fragment } from 'react';
import ModalProjects from '../Projects/modalProjects';
import { storiesOf } from '@storybook/react';
import { equipos, revisionarios, responsables } from '../../data/exampleData';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [projectName, setProjectName] = React.useState(
		'Dummies - Uber Eats-2536-Espectaculares-Noviembre'
	);

	return (
		<ModalProjects
			onCh_asignTeam={(e) => console.log(e)}
			onCl_close={{} as any}
			modo="Light"
			initialTeamValue={{
				id: '-22',
				title: 'Creative',
			}}
			isMannager
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
			onCl_addTask={() => alert('Tarea nueva')}
			onCl_newTemplate={() => alert('Crear plantilla')}
			onCl_confirm={() => {}}
			onCl_abort={() => alert('Adios')}
			idProject={'1'}
			subtasks={[
				{
					check: false,
					equipos: [],
					idTask: '1',
					onCh_checkbox: {} as any,
					onCh_descriptionTask: {} as any,
					onCh_endDate: {} as any,
					onCh_nameTask: {} as any,
					onCh_startDate: {} as any,
					onCl_newTemplate: {} as any,
					responsables: [],
					revision: [],
					templateOptions: [],
					valueDescription: 'Bloquear los sitios elegidos por el cliente',
					valueTask: 'Bloqueos - 2563_UberEats_Noviembre - IMJ-CDMX-ESP-152D',
					subtasks: [],
				},
				{
					check: false,
					equipos: [],
					idTask: '2',
					onCh_checkbox: {} as any,
					onCh_descriptionTask: {} as any,
					onCh_endDate: {} as any,
					onCh_nameTask: {} as any,
					onCh_startDate: {} as any,
					onCl_newTemplate: {} as any,
					responsables: [],
					revision: [],
					templateOptions: [],
					valueDescription: 'Hacer los dummies de la campaña',
					valueTask: 'Dummies - 2563_UberEats_Noviembre - IMJ-CDMX-ESP-152D',
					subtasks: [
						{
							check: false,
							equipos: [],
							idTask: '3',
							onCh_checkbox: {} as any,
							onCh_descriptionTask: {} as any,
							onCh_endDate: {} as any,
							onCh_nameTask: {} as any,
							onCh_startDate: {} as any,
							onCl_newTemplate: {} as any,
							responsables: [],
							revision: [],
							templateOptions: [],
							valueDescription: 'Dummies de la plaza de CDMX',
							valueTask: 'Dummies CDMX',
						},
						{
							check: false,
							equipos: [],
							idTask: '4',
							onCh_checkbox: {} as any,
							onCh_descriptionTask: {} as any,
							onCh_endDate: {} as any,
							onCh_nameTask: {} as any,
							onCh_startDate: {} as any,
							onCl_newTemplate: {} as any,
							responsables: [],
							revision: [],
							templateOptions: [],
							valueDescription: 'Dummies de la plaza de ZMG',
							valueTask: 'Dummies ZMG',
							subtasks: [
								{
									check: false,
									equipos: [],
									idTask: '5',
									onCh_checkbox: {} as any,
									onCh_descriptionTask: {} as any,
									onCh_endDate: {} as any,
									onCh_nameTask: {} as any,
									onCh_startDate: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Dummies de urbanos',
									valueTask: 'Dummies Urbanos',
								},
								{
									check: false,
									equipos: [],
									idTask: '6',
									onCh_checkbox: {} as any,
									onCh_descriptionTask: {} as any,
									onCh_endDate: {} as any,
									onCh_nameTask: {} as any,
									onCh_startDate: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Dummies de sitios',
									valueTask: 'Dummies sitios',
								},
							],
						},
						{
							check: false,
							equipos: [],
							idTask: '7',
							onCh_checkbox: {} as any,
							onCh_descriptionTask: {} as any,
							onCh_endDate: {} as any,
							onCh_nameTask: {} as any,
							onCh_startDate: {} as any,
							onCl_newTemplate: {} as any,
							responsables: [],
							revision: [],
							templateOptions: [],
							valueDescription: 'Dummies de la plaza de MTY',
							valueTask: 'Dummies MTY',
							subtasks: [
								{
									check: false,
									equipos: [],
									idTask: '7',
									onCh_checkbox: {} as any,
									onCh_descriptionTask: {} as any,
									onCh_endDate: {} as any,
									onCh_nameTask: {} as any,
									onCh_startDate: {} as any,
									onCl_newTemplate: {} as any,
									responsables: [],
									revision: [],
									templateOptions: [],
									valueDescription: 'Dummies de la plaza de ZMG',
									valueTask: 'Dummies ZMG',
								},
							],
						},
					],
				},
				{
					check: false,
					equipos: [],
					idTask: '2',
					onCh_checkbox: {} as any,
					onCh_descriptionTask: {} as any,
					onCh_endDate: {} as any,
					onCh_nameTask: {} as any,
					onCh_startDate: {} as any,
					onCl_newTemplate: {} as any,
					responsables: [],
					revision: [],
					templateOptions: [],
					valueDescription: 'Hacer la prueba de color de la campaña',
					valueTask: 'PDC - 2563_UberEats_Noviembre - IMJ-CDMX-ESP-152D',
				},
			]}
		/>
	);
}
storiesOf('Modales/Creación/Proyectos/Ejemplos/Uber Eats', module).add('Uber Eats', () => (
	<DemoComponent />
));
