import React, { useEffect } from 'react';
import ModalTask from '../Tasks/modalTareas';
import { storiesOf } from '@storybook/react';
import { equipos, responsable, revision } from '../../data/exampleData';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	// consoles para revisar que sse generen de manera correcta los setteos
	// console.clear();
	const [checkValue, setCheckValue] = React.useState(false);
	const [checkValue2, setCheckValue2] = React.useState(false);
	const [valueTask, setValueTask] = React.useState('');

	return (
		<ModalTask
			onCl_close={() => alert('closeModal')}
			idTask="1"
			dependenciesOptions={[
				{
					id: '1',
					title: 'Dummies',
				},
			]}
			dependence={{
				id: '1',
				taskName: 'Dummies',
			}}
			equipos={equipos}
			endDateValue={''}
			startDateValue={''}
			modo="Light"
			onCh_descriptionTask={() => {}}
			onCh_endDate={() => {}}
			onCh_nameTask={() => {}}
			onCh_startDate={() => {}}
			onCheck={() => {}}
			onCl_abort={() => {}}
			onCl_confirm={() => setValueTask('Hola')}
			onCl_reminder={() => {}}
			onCl_selectPriority={() => {}}
			valueResponsable={'Juan Perez'}
			// moreOptions= []
			onCl_newTemplate={() => alert('nueva palntilla')}
			onCl_addTask={() => setValueTask('Hola')}
			responsables={responsable}
			revision={revision}
			templateOptions={[]}
			onCl_delete={() => alert('Hola')}
			valueTask="Hola que hace"
			valueDescription="Nada y tu?"
			check={checkValue}
			onCh_checkbox={(e) => setCheckValue(!checkValue)}
			subtasks={[
				{
					check: checkValue2,
					onCh_checkbox: () => setCheckValue2(!checkValue2),
					onCh_endDate: {} as any,
					onCh_startDate: {} as any,
					valueDescription: '',
					valueTask: valueTask,
					onCh_descriptionTask: () => {},
					onCh_nameTask: () => {},
					valueDificultad: { id: '2', title: 'Fácil' },
					equipos: [],
					idTask: '1',
					onCl_newTemplate: () => {},
					responsables: [],
					revision: [],
					templateOptions: [],
					subtasks: [
						{
							check: false,
							onCh_checkbox: {} as any,
							onCh_endDate: {} as any,
							onCh_startDate: {} as any,
							valueDescription: '',
							valueTask: valueTask,
							onCh_descriptionTask: () => {},
							onCh_nameTask: () => {},
							equipos: [],
							idTask: '1',
							onCl_newTemplate: () => {},
							responsables: [],
							revision: [],
							templateOptions: [],
							subtasks: [
								{
									check: false,
									onCh_checkbox: {} as any,
									onCh_endDate: {} as any,
									onCh_startDate: {} as any,
									valueDescription: '',
									valueTask: valueTask,
									onCh_descriptionTask: () => {},
									onCh_nameTask: () => {},
									equipos: [],
									idTask: '1',
									onCl_newTemplate: () => {},
									responsables: [],
									revision: [],
									templateOptions: [],
									subtasks: [
										{
											check: false,
											onCh_checkbox: {} as any,
											onCh_endDate: {} as any,
											onCh_startDate: {} as any,
											valueDescription: '',
											valueTask: valueTask,
											onCh_descriptionTask: () => {},
											onCh_nameTask: () => {},
											equipos: [],
											idTask: '1',
											onCl_newTemplate: () => {},
											responsables: [],
											revision: [],
											templateOptions: [],
											subtasks: [
												{
													check: false,
													onCh_checkbox: {} as any,
													onCh_endDate: {} as any,
													onCh_startDate: {} as any,
													valueDescription: '',
													valueTask: valueTask,
													onCh_descriptionTask: () => {},
													onCh_nameTask: () => {},
													equipos: [],
													idTask: '1',
													onCl_newTemplate: () => {},
													responsables: [],
													revision: [],
													templateOptions: [],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			]}
		/>
	);
}
storiesOf('Modales/Creación/Tareas/Ejemplos/Dummies', module).add('Dummies', () => (
	<DemoComponent />
));
