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

					onChangeNameTask: (e) => console.log(e.target.value),
					onChangeDescriptionTask: (e) => console.log(e.target.value),

					equipos: [],
					templateOptions: [],
					onClickCreateTemplate: () => {},
					responsables: [],
					revision: [],
					onChangeDuration: (e) => console.log(e.target.value),
					subtasks: [
						{
							idTask: '1',
							equipos: [],
							onClickCreateTemplate: () => {},
							responsables: [],
							revision: [],
							templateOptions: [],
						},
						{
							idTask: '1',
							equipos: [],
							onClickCreateTemplate: () => {},
							responsables: [],
							revision: [],
							templateOptions: [],
							subtasks: [
								{
									idTask: '1',
									equipos: [],
									onClickCreateTemplate: () => {},
									responsables: [],
									revision: [],
									templateOptions: [],
								},
								{
									idTask: '1',
									equipos: [],
									onClickCreateTemplate: () => {},
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
