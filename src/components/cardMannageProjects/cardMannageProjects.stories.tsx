import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardMannageProjects, { cardMannageProjects } from './cardMannageProjects';

const Template: Story<cardMannageProjects> = (args) => <CardMannageProjects {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

export const Basic = Template.bind({});
Basic.args = {
	onClickDelete: () => alert('Eliminar proyecto'),
	onClickPreview: () => alert('Previsualizar'),
	// modo: 'Dark',
	title: 'UBER EATS-1523-Sitios-Noviembre23',
	statusTask: 'delayed',
	percentTask: 100,
	tasks: 35,
};

export default {
	title: 'CardMannageProjects',
	component: CardMannageProjects,
} as Meta;
