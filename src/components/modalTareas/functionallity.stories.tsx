import React, { useEffect } from 'react';
import ModalTask from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	// consoles para revisar que sse generen de manera correcta los setteos
	// console.clear();
	const [checkValue, setCheckValue] = React.useState(false);
	const [valueTask, setValueTask] = React.useState('');

	return (
		<ModalTask
			idTask="1"
			equipos={[]}
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
			valueResponsable={'Juan PErez'}
			// moreOptions= []
			onCl_newTemplate={() => alert('nueva palntilla')}
			onCl_addTask={() => setValueTask('Hola')}
			responsables={[]}
			revision={[]}
			templateOptions={[]}
			onCl_delete={() => alert('Hola')}
			valueTask="Hola que hace"
			valueDescription="Nada y tu?"
			check={checkValue}
			onCh_checkbox={(e) => setCheckValue(!checkValue)}
			subtasks={[
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
storiesOf('Pruebas funcionalidad/modal de tareas', module).add('setData', () => <DemoComponent />);
