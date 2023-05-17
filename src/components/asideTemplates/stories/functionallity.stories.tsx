import React, { useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';
import { AsideTemplates } from '../..';
import { tasks } from '../types/types';

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
		statusTask: 3,
		onCl_showDetails: () => alert('ver detalles'),
	},
];
const tareasEmpezar = [];
export function ComponentDemo() {
	const [tasks, setTasks] = useState({
		id: 'porRevisar',
		title: 'Tareas para revisar',
	});
	const [tiposTask, setTiposTasks] = useState(tareasRevisar);

	return (
		<AsideTemplates
			modo="Light"
			initialValueDropdown={tasks}
			optionsDropdown={[
				{
					id: 'revision',
					title: 'Tareas en revisión',
				},
				{
					id: 'porRevisar',
					title: 'Tareas para revisar',
				},
				{
					id: 'porhacer',
					title: 'Tareas por hacer',
				},
			]}
			// tasks={tiposTask as tasks[]}
			tasks={[]}
			priText={tiposTask.length === 0 ? 'No hay nada por aquí' : 'No tenemos nada de tareas'}
			secText={
				tiposTask.length === 0
					? 'Por qué no empezar ahora mismo'
					: 'Agradezcamos a Jesús 😇'
			}
			legendBtn={tiposTask.length === 0 ? 'Tarea nueva' : ''}
			onCh_dropdown={(e: any) => {
				console.log(e);
				setTasks(e);
				if (e.id === 'revision') setTiposTasks(tareasRevision);
				if (e.id === 'porRevisar') setTiposTasks(tareasRevisar);
				if (e.id === 'porEmpezar') setTiposTasks(tareasEmpezar);
			}}
		/>
	);
}
storiesOf('Pruebas funcionalidad/Aside', module).add('setData', () => <ComponentDemo />);
