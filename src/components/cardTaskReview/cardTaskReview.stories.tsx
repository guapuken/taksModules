import React from 'react';
// utilidades para el storybook
import { Meta, Story } from '@storybook/react';
import { functions, modo, statusTasks, text } from '../../storyUtils';
// componente principal
import CardTaskReview from './cardTaskReview';
import { cardTaskReview } from './types';

const Template: Story<cardTaskReview> = (args) => <CardTaskReview {...args} />;

//estado inicial del componente
export const intialState = Template.bind({});
intialState.args = {};

//Ejemplo ya con Datos
export const withProperties = Template.bind({});
withProperties.args = {
	taskName: 'Hace dummies de las principales plazas',
	taskDescription: 'Realizar dummies de CDMX, Monterrey y Guadalajara',
	statusTask: 'outOfTime',
	onCl_showDetails: () => alert('Click'),
	// modo: 'Dark',
};
export default {
	title: 'Cards/task review',
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
