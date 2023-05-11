import React, { useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';
import { AsideTemplates } from '../..';

const tareasRevisar = [
	{
		id: '25',
		taskName: 'a',
		taskDescription: 'Recordar hacer los dummies de la campaña de uber',
		statusTask: 2,
		onCl_showDetails: () => alert('ver detalles'),
	},
	{
		id: '2',
		taskName: 'z',
		taskDescription: 'Recordar hacer los dummies de la campaña de uber',
		statusTask: 3,
		onCl_showDetails: () => alert('ver detalles'),
	},
	{
		id: '30',
		taskName: 'k',
		taskDescription: 'Recordar hacer los dummies de la campaña de uber',
		statusTask: 1,
		onCl_showDetails: () => alert('ver detalles'),
	},
	{
		id: '1',
		taskName: 'd',
		taskDescription: 'Recordar hacer los dummies de la campaña de uber',
		statusTask: 3,
		onCl_showDetails: () => alert('ver detalles'),
	},
];
const tareasRevision = [
	{
		id: '25',
		taskName: 'a',
		taskDescription: 'Recordar hacer los dummies de la campaña de uber',
		statusTask: 2,
		onCl_showDetails: () => alert('ver detalles'),
	},
];
export function ComponentDemo() {
	const [tasks, setTasks] = useState('revision');
	const [tiposTask, setTiposTask] = useState([
		{
			id: undefined,
			title: undefined,
		},
	]);

	useEffect(() => {
		if (tasks === 'revision') {
			setTiposTask(tareasRevision);
		}
		if (tasks === 'porRevisar') {
			setTiposTask(tareasRevisar);
		}
		// setTiposTask(tasks.title === 'revision' ? tareasRevision : tareasRevisar);
	}, [tasks]);
	return (
		<AsideTemplates
			modo="Light"
			tasks={tiposTask}
			priText="Hola"
			secText="no agregaste datos"
			onCh_dropdown={(e: any) => {
				setTasks(e.id);
			}}
		/>
	);
}
storiesOf('Pruebas funcionalidad/Aside', module).add('setData', () => <ComponentDemo />);
