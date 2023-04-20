import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardTask, { CardTaskProps } from './cardTask';

const Template: Story<CardTaskProps> = (args) => <CardTask {...args} />;

export const initialState = Template.bind({});
initialState.args = {};

export const withProperties = Template.bind({});
withProperties.args = {
	status: 'outOfTime',
	followNotificationsValue: true,
	onClickShowDetails: () => alert('ver detalles'),
	onChangeNotificationSwitch: () => {},
	onClickFollow: () => alert('hola'),
	taskName: 'Dummies campaña 1526-UberEats-Sitios-Noviembre-Urbanos',
	taskDescription: 'Realizar os dummies de la plaza de Ciudad de méxico y Aguascalientes Sun sun',
	subtasks: 2,
	valueResponsable: 'Creative',
	valueRevision: 'Kaori Soto',
	responsables: [
		{
			title: 'Graciela Villa',
			onClick: () => alert('Graciela Villa'),
		},
		{
			title: 'Luis Lara',
			onClick: () => alert('Luis Lara'),
		},
		{
			title: 'Eder Valencia',
			onClick: () => alert('Eder Valencia'),
		},
	],
	// equipos: [{ title: 'Creative' }],
	revision: [
		{
			title: 'Kaori Soto',
			onClick: () => alert('Kaori Soto'),
		},
		{
			title: 'Adrian Romero',
			onClick: () => alert('Adrian Romero'),
		},
		{
			title: 'Juan Carlos',
			onClick: () => alert('Juan Carlos'),
		},
	],
	percentTask: 10,
	// modo: 'Dark',
};
export default {
	title: 'Cards/task',
	component: CardTask,
} as Meta;
