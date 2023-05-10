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
			content={{
				idTask: '1',
				equipos: [],
				// moreOptions: [],
				onCl_newTemplate: () => alert('nueva palntilla'),
				onCl_addTask: () => alert('nueva palntilla'),
				responsables: [],
				revision: [],
				templateOptions: [],
				onCl_delete: () => alert('Hola'),
				check: checkValue,
				onCh_checkbox: (e) => setCheckValue(!checkValue),
				subtasks: [
					{
						equipos: [],
						idTask: '1',
						onCl_newTemplate: () => {},
						responsables: [],
						revision: [],
						templateOptions: [],
						subtasks: [
							{
								equipos: [],
								idTask: '1',
								onCl_newTemplate: () => {},
								responsables: [],
								revision: [],
								templateOptions: [],
								subtasks: [
									{
										equipos: [],
										idTask: '1',
										onCl_newTemplate: () => {},
										responsables: [],
										revision: [],
										templateOptions: [],
										subtasks: [
											{
												equipos: [],
												idTask: '1',
												onCl_newTemplate: () => {},
												responsables: [],
												revision: [],
												templateOptions: [],
												subtasks: [
													{
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
				],
			}}
			footer={{}}
		/>
	);
}
storiesOf('Pruebas funcionalidad/modal de tareas', module).add('setData', () => <DemoComponent />);
