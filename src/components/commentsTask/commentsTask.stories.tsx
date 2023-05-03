import React from 'react';
import { Meta, Story } from '@storybook/react';

import CommentsTask from './commentsTask';
import { commentsComponent } from './types';

const Template: Story<commentsComponent> = (args) => <CommentsTask {...args} />;

// estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	// personalMsn: true,
	modo: 'Dark',
	comments: [
		{
			id: 1,
			user: 'Jorge Correa',
			comment: 'Los componentes tienen que salir al 100 antes del jueves',
			dateAndTime: '08-04-2023',
		},
		{
			id: 2,
			user: 'Victor Galván',
			comment: 'Estamos en eso, sin problemas salen',
			dateAndTime: 'hace 5 minutos',
			personalMsn: true,
		},
		{
			id: 3,
			user: 'Victor Galván',
			comment: 'Estamos en eso, sin problemas salen',
			dateAndTime: 'hace 5 minutos',
			personalMsn: true,
		},
		{
			id: 4,
			user: 'Jorge Correa',
			comment: 'Los componentes tienen que salir al 100 antes del jueves',
			dateAndTime: 'hace 5 minutos',
		},
		{
			id: 5,
			user: 'Jorge Correa',
			comment: 'Los componentes tienen que salir al 100 antes del jueves',
			dateAndTime: 'hace 5 minutos',
		},
		{
			id: 6,
			user: 'Jorge Correa',
			comment: 'Los componentes tienen que salir al 100 antes del jueves',
			dateAndTime: 'hace 5 minutos',
		},
	],
};

export default {
	title: 'Modales/comentarios en tareas',
	component: CommentsTask,
	// definición de argumentos
	argTypes: {},
} as Meta;
