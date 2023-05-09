import React from 'react';
// utilidades storybook
import { Meta, Story, storiesOf } from '@storybook/react';
import { object } from '../../../storyUtils';
// componentes auxiliares
import { CardTask } from '../../../components';

// componente principal
import Carousel from '../carousel';

// generación de plantilla donde se colocará el componente
storiesOf('carousel', module).add('setData', () => {
	const data = [
		{
			id: '1',
			taskName: 'Dummies plazas principales',
			taskDescription: 'Realizar los dummies de la plaza de ciudad de México',
			onCl_edit: () => alert('Editar'),
			onCl_reasignDate: () => alert('Reasignar fecha'),
			onCl_asignTask: () => alert('Asignar tarea'),
			onCl_follow: () => alert('Seguir tarea'),
			onCl_reminder: () => alert('recordatorio'),
			onCl_status: () => alert('cambiar status'),
			percentTask: 75,
		},
		{
			id: '2',
			taskName: 'Dummies CDMX',
			taskDescription: 'Realizar los dummies de la plaza de ciudad de México',
		},
		{
			id: '3',
			taskName: 'Dummies GDL',
			taskDescription: 'Realizar los dummies de la plaza de ciudad de México',
		},
		{
			id: '4',
			taskName: 'Dummies MTY',
			taskDescription: 'Realizar los dummies de la plaza de ciudad de México',
		},
		{
			id: '5',
			taskName: 'Dummies MER',
			taskDescription: 'Realizar los dummies de la plaza de ciudad de México',
		},
	];
	return (
		<Carousel
			data={data}
			Card={(e: any) => {
				return (
					<CardTask
						idTask={e.property.id}
						taskName={e.property.taskName}
						taskDescription={e.property.taskDescription}
						onCl_edit={e.property.onCl_edit}
						onCl_reasignDate={e.property.onCl_reasignDate}
						onCl_asignTask={e.property.onCl_asignTask}
						onCl_follow={e.property.onCl_follow}
						onCl_reminder={e.property.onCl_reminder}
						onCl_status={e.property.onCl_status}
						percentTask={e.property.percentTask | 0}
					/>
				);
			}}
		/>
	);
});

// export default {
// 	// title: 'Atomo/Carousel',
// 	component: Carousel,
// 	argTypes: {
// 		Card: object(),
// 	},
// } as Meta;
