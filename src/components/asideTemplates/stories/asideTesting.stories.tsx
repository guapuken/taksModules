import React, { useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';
import { AsideTemplates, CardTaskReview } from '../..';
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
			onCl_reorder={{} as any}
			modo="Light"
			Card={CardTaskReview}
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
			imageNoTasks="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f30abe9-b108-4bc0-914f-0ccc2d90df1e/d9t8pvp-0b5178fd-b6fb-4560-bc35-b5580b36fedb.png/v1/fill/w_1024,h_693/bob_esponja_enojado_render_by_sethmendozada_d9t8pvp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkzIiwicGF0aCI6IlwvZlwvN2YzMGFiZTktYjEwOC00YmMwLTkxNGYtMGNjYzJkOTBkZjFlXC9kOXQ4cHZwLTBiNTE3OGZkLWI2ZmItNDU2MC1iYzM1LWI1NTgwYjM2ZmVkYi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.W8pvC-o3feSTq5gbCn2rYNZALPjg-jN1hbkRsgJ8O5o"
			tasks={tiposTask as tasks[]}
			priText={tiposTask.length === 0 ? 'No hay nada por aquí' : 'No tenemos nada de tareas'}
			secText={
				tiposTask.length === 0 ? 'PONTE A HACER ALGOOO!!!!!' : 'Agradezcamos a Jesús 😇'
			}
			legendBtn={tiposTask.length === 0 ? 'Tarea nueva' : ''}
			onCh_dropdown={(e: any) => {
				setTasks(e);
				if (e.id === 'revision') setTiposTasks(tareasRevision);
				if (e.id === 'porRevisar') setTiposTasks(tareasRevisar);
				if (e.id === 'porhacer') setTiposTasks(tareasEmpezar);
			}}
		/>
	);
}
storiesOf('Átomos/aside', module).add('testing', () => <ComponentDemo />);
