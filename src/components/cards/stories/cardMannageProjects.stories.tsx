import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardMannageProjects from '../MannageProjects/cardMannageProjects';
import { cardMannageProjects } from '../MannageProjects/types/types';
import { functions, modo, number, statusTasks, text } from '../../../storyUtils';

const Template: Story<cardMannageProjects> = (args) => <CardMannageProjects {...args} />;

export const UberEats = Template.bind({});
UberEats.args = {
	onCl_delete: () => alert('Eliminar proyecto'),
	onCl_preview: () => alert('Previsualizar'),
	onCl_edit: () => alert('editar'),
	title: '1526-Uber_Eats-Noviembre',

	isCampaignTask: true,
	statusTask: 1,
	modo: 'Dark',
	percentTask: 75,
	tasks: 35,
};

export default {
	title: 'Cards/MannageProjects/Ejemplos/UberEats',
	component: CardMannageProjects,
	argTypes: {
		title: text(),
		statusTask: statusTasks(),
		percentTask: number(),
		tasks: number(),
		onCl_delete: functions(),
		onCl_preview: functions(),
		onCl_edit: functions(),
		modo: modo(),
	},
} as Meta;
