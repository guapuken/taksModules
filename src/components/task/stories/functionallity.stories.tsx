import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import { Task } from '../..';

function DemoComponent() {
	const [description, setDescription] = useState('');
	const [name, setName] = useState('');

	console.clear();
	console.log('description: ', description);
	console.log('name: ', name);

	return (
		<Task
			equipos={[]}
			idTask="1"
			onCh_descriptionTask={(e) => setDescription(e.target.value)}
			onCh_nameTask={(e) => setName(e.target.value)}
			onCl_newTemplate={() => alert('newTemplate')}
			responsables={[]}
			revision={[]}
			templateOptions={[]}
			subtasks={[
				{
					equipos: [],
					idTask: '2',
					onCh_descriptionTask: (e) => setDescription(e.target.value),
					onCh_nameTask: (e) => setName(e.target.value),
					onCl_newTemplate: () => alert('newTemplate'),
					responsables: [],
					revision: [],
					templateOptions: [],
				},
			]}
		/>
	);
}
storiesOf('Pruebas funcionalidad/tasks', module).add('setData', () => <DemoComponent />);
