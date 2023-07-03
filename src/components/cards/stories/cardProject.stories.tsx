import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
import { boolean, functions, modo, number, statusTasks, text } from '../../../storyUtils';
// componente principal
import CardProject from '../Projects/cardProject';
import { cardProject } from '../Projects/types';

const Template: Story<cardProject> = (args) => <CardProject {...args} />;

export const UberEats = Template.bind({});
UberEats.args = {
	projectName: '2563-Uber_Eats-Noviembre',
	ejecutivo: 'Juan C. Almada',
	completedTask: 15,
	incompletedTask: 10,
	status: 'outOfTime',
};

export default {
	title: 'Cards/Projects/Ejemplos/Uber Eats',
	component: CardProject,
	argTypes: {
		statustask: statusTasks(),
		modo: modo(),
		onCl_followProject: functions(),
		onCl_showDetails: functions(),
		onCl_share: functions(),
		onCh_follow: functions(),
		idProject: text(),
		follow: boolean(),
		incompletedTask: number(),
		completedTask: number(),
		ejecutivo: text(),
		projectName: text(),
	},
} as Meta;
