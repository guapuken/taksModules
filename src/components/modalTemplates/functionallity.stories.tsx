import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTemplates from '.';

function DemoComponent() {
	return (
		<ModalTemplates
			idTemplate="1"
			onCh_templateName={(e) => console.log(e.target.value)}
			tasks={[
				{
					idTask: '1',
					valueTask: 'Bloqueos',
					valueDescription: 'Realizar los bloqueos de los siguientes sitios',

					onCh_nameTask: (e) => console.log(e.target.value),
					onCh_descriptionTask: (e) => console.log(e.target.value),

					equipos: [],
					templateOptions: [],
					onCl_newTemplate: () => {},
					responsables: [],
					revision: [],
					onCh_duration: (e) => console.log(e.target.value),
					subtasks: [
						{
							idTask: '1',
							equipos: [],
							onCl_newTemplate: () => {},
							responsables: [],
							revision: [],
							templateOptions: [],
							onCh_duration: (e) => console.log(e.target.value),
						},
						{
							idTask: '1',
							equipos: [],
							onCl_newTemplate: () => {},
							responsables: [],
							revision: [],
							templateOptions: [],
							onCh_duration: (e) => console.log(e.target.value),

							subtasks: [
								{
									idTask: '1',
									equipos: [],
									onCl_newTemplate: () => {},
									responsables: [],
									revision: [],
									templateOptions: [],
									onCh_duration: (e) => console.log(e.target.value),
								},
								{
									idTask: '1',
									equipos: [],
									onCl_newTemplate: () => {},
									onCh_duration: (e) => console.log(e.target.value),

									responsables: [],
									revision: [],
									templateOptions: [],
								},
							],
						},
					],
				},
			]}
		/>
	);
}

// creación de stories
storiesOf('Pruebas funcionalidad/modal templates', module).add('setData', () => <DemoComponent />);
