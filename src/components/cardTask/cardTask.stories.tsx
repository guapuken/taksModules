import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardTask, { CardTaskProps } from './cardTask';

const Template: Story<CardTaskProps> = (args) => <CardTask {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Basic = Template.bind({});
Basic.args = {
	status: 'outOfTime',
	followNotificationsValue: true,
	onClickShowDetails: () => alert('ver detalles'),
	onChangeNotificationSwitch: () => {},
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
};
export default {
	title: 'CardTask',
	component: CardTask,
} as Meta;
