import React, { useEffect } from 'react';
import ModalTask from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	// consoles para revisar que sse generen de manera correcta los setteos
	// console.clear();
	const [checkValue, setCheckValue] = React.useState(false);

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
			onCl_confirm={() => {}}
			onCl_reminder={() => {}}
			onCl_selectPriority={() => {}}
			valueResponsable={'Juan PErez'}
			// moreOptions= []
			onCl_newTemplate={() => alert('nueva palntilla')}
			onCl_addTask={() => alert('nueva palntilla')}
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
