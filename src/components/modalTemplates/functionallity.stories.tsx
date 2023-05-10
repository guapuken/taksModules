import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTemplates from '.';

function DemoComponent() {
	return (
		<ModalTemplates
			idTemplate="1"
			tasks={[
				{
					idTask: '1',
					valueTask: 'Bloqueos',
					valueDescription: 'Realizar los bloqueos de los siguientes sitios',

					equipos: [],
					templateOptions: [],
					onCl_newTemplate: () => {},
					responsables: [],
					revision: [],
					subtasks: [
						{
							idTask: '1',
							equipos: [],
							onCl_newTemplate: () => {},
							responsables: [],
							revision: [],
							templateOptions: [],
						},
						{
							idTask: '1',
							equipos: [],
							onCl_newTemplate: () => {},
							responsables: [],
							revision: [],
							templateOptions: [],

							subtasks: [
								{
									idTask: '1',
									equipos: [],
									onCl_newTemplate: () => {},
									responsables: [],
									revision: [],
									templateOptions: [],
								},
								{
									idTask: '1',
									equipos: [],
									onCl_newTemplate: () => {},

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
