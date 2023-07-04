import React from 'react';

import { Meta, Story } from '@storybook/react';
import CardMannageTask from '../MannageTasks/cardMannageTasks';
import { cardMannageTasks } from '../MannageTasks/types';
import { functions, modo, number, statusTasks, text } from '../../../storyUtils';

const Template: Story<cardMannageTasks> = (args) => <CardMannageTask {...args} />;

// estado del componente con propiedades
export const Dummies = Template.bind({});
Dummies.args = {
	title: 'Dummies MTY',
	tasks: 25,
	modo: 'Dark',
	isCampaignTask: true,
	percentTask: 25,
	// statusTask: 'outOfTime',
	statusTask: 3,
	onCl_preview: () => alert('Previsualizar'),
	onCl_delete: () => alert('Eliminar'),
	onCl_edit: () => alert('Editar'),
};

export default {
	title: 'Cards/MannageTasks/Ejemplos/Dummies',
	component: CardMannageTask,
	// definición de argumentos
	argTypes: {
		onCl_delete: functions(),
		onCl_preview: functions(),
		onCl_edit: functions(),
		title: text(),
		pendingTasks: number(),
		percentTask: number(),
		statusTask: statusTasks(),
		modo: modo(),
	},
} as Meta;
