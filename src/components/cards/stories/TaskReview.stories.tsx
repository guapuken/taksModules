import React from 'react';
// utilidades para el storybook
import { Meta, Story } from '@storybook/react';
import { functions, modo, statusTasks, text } from '../../../storyUtils';
// componente principal
import CardTaskReview from '../TaskReview/cardTaskReview';
import { cardTaskReview } from '../TaskReview/types/types';

const Template: Story<cardTaskReview> = (args) => <CardTaskReview {...args} />;

//Ejemplo ya con Datos
export const Dummies = Template.bind({});
Dummies.args = {
	taskName: 'Hace dummies de las principales plazas',
	taskDescription: 'Realizar dummies de CDMX, Monterrey y Guadalajara',
	statusTask: 3,
	// statusTask: 2,
	onCl_showDetails: () => alert('Click'),
	// modo: 'Dark',
};
export default {
	title: 'Cards/Task review/Ejemplos/Dummies',
	component: CardTaskReview,
	// definición de argumentos
	argTypes: {
		statusTask: statusTasks(),
		onCl_showDetails: functions(),
		modo: modo(),
		taskName: text(),
		taskDescription: text(),
	},
} as Meta;
