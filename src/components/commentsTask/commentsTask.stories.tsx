import React from 'react';
import { Meta, Story } from '@storybook/react';

import CommentsTask from './commentsTask';
import { commentsTask } from './types';
import { modo } from '../../storyUtils';
import Button from '../button/Button';
import useModalWithData from '../Atoms/hooks/useModalWithData';

const Template: Story<commentsTask> = (args) => {
	const { isOpened, setData, data } = useModalWithData();
	return (
		<div>
			<Button modo="Light" onCl={() => setData({ id: '1', title: '1' })} />
			<CommentsTask {...args} isActive={isOpened()} handleClose={() => setData(null)} />
		</div>
	);
};

// estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	// personalMsn: true,
	modo: 'Light',
	messages: [
		{
			id: 1,
			userName: 'Jorge Correa',
			message: 'Los componentes tienen que salir al 100 antes del jueves',
			date: '2023-04-04 GMT-600 00:00:00',
			type: 'Received',
		},
		{
			id: 2,
			userName: 'Victor Galván',
			message: 'Estamos en eso, sin problemas salen',
			date: '2023-04-04 GMT-600 00:00:00',
			type: 'Sent',
		},
		{
			id: 3,
			userName: 'Victor Galván',
			message: 'Estamos en eso, sin problemas salen',
			date: '2023-04-04 GMT-600 00:00:00',
			type: 'Sent',
		},
		{
			id: 4,
			userName: 'Jorge Correa',
			message: 'Los componentes tienen que salir al 100 antes del jueves',
			date: '2023-04-04 GMT-600 00:00:00',
			type: 'Received',
		},
		{
			id: 5,
			userName: 'Jorge Correa',
			message: 'Los componentes tienen que salir al 100 antes del jueves',
			date: '2023-04-04 GMT-600 00:00:00',
			type: 'Received',
		},
		{
			id: 6,
			userName: 'Jorge Correa',
			message: 'Los componentes tienen que salir al 100 antes del jueves',
			date: '2023-04-04 GMT-600 00:00:00',
			type: 'Received',
		},
	],
};

export default {
	title: 'Modales/comentarios en tareas',
	component: CommentsTask,
	// definición de argumentos
	argTypes: {
		modo: modo(),
	},
} as Meta;
