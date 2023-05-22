import React, { Fragment, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { Button, Task } from '../..';

function DemoComponent() {
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [priority, setPriority] = useState('baja');

	return (
		<Fragment>
			<Button
				modo="Light"
				onCl={() => {
					setPriority('alta');
					setDescription('Hacerte guaje');
				}}
			/>
			<Task
				equipos={[]}
				idTask="1"
				onCh_descriptionTask={(e) => setDescription(e.target.value)}
				onCh_nameTask={(e) => {}}
				onCl_newTemplate={() => alert('newTemplate')}
				responsables={[]}
				revision={[]}
				prioridadInicial={priority}
				// onCl_selectPriority={()=>}
				templateOptions={[]}
				valueTask={'name'}
				check={false}
				onCh_checkbox={() => {}}
				onCh_endDate={(e) => setStartDate(e.target.value)}
				onCh_startDate={(e) => setEndDate(e.target.value)}
				valueDescription={description}
				endDateValue={endDate}
				startDateValue={startDate}
				subtasks={[
					{
						check: false,
						onCh_checkbox: (e) => {},
						onCh_endDate: () => {},
						onCh_startDate: () => {},
						valueDescription: description,
						valueTask: 'name',
						equipos: [],
						idTask: '2',
						onCh_descriptionTask: (e) => setDescription(e.target.value),
						onCh_nameTask: (e) => {},
						onCl_newTemplate: () => alert('newTemplate'),
						responsables: [],
						revision: [],
						templateOptions: [],
						endDateValue: '2023-09-05 00:00:00',
						startDateValue: '2023-09-05 00:00:00',
					},
				]}
			/>
		</Fragment>
	);
}
storiesOf('Pruebas funcionalidad/tasks', module).add('setData', () => <DemoComponent />);
