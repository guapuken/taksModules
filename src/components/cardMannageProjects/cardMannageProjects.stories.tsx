import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardMannageProjects, { cardMannageProjects } from './cardMannageProjects';

const Template: Story<cardMannageProjects> = (args) => <CardMannageProjects {...args} />;

export const initialState = Template.bind({});
initialState.args = {};

export const withProperties = Template.bind({});
withProperties.args = {
	onClickDelete: () => alert('Eliminar proyecto'),
	onClickPreview: () => alert('Previsualizar'),
	title: 'UBER EATS-1523-Sitios-Noviembre23',
	// statusTask: 'delayed',
	statusTask: 1,
	percentTask: 100,
	tasks: 35,
};

export default {
	title: 'Cards de gestión/projects',
	component: CardMannageProjects,
	argTypes: {
		title: {
			control: 'text',
		},
		statusTask: {
			control: {
				type: 'select',
				options: ['delayed', 'outOfTime', 'onTime'],
			},
		},
		percentTask: { type: 'number' },
		tasks: { type: 'number' },
		onClickDelete: {
			type: 'function',
		},
		onClickPreview: {
			type: 'function',
		},
		modo: {
			control: {
				type: 'select',
				options: ['Dark', 'Light'],
			},
		},
	},
} as Meta;
// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import CardMannageProjects from '.';

// //Estado inicial del componente
// const initialArgs = {};
// storiesOf('Cards de gestión/CardMannageProjects', module).add('default', () => (
// 	<CardMannageProjects {...initialArgs} />
// ));

// const basicArgs = {
// 	onClickDelete: () => alert('Eliminar proyecto'),
// 	onClickPreview: () => alert('Previsualizar'),
// 	// modo: 'Dark',
// 	title: 'UBER EATS-1523-Sitios-Noviembre23',
// 	statusTask: 'delayed',
// 	percentTask: 100,
// 	tasks: 35,
// };
// storiesOf('Cards de gestión/CardMannageProjects', module).add('basic', () => (
// 	<CardMannageProjects {...basicArgs} />
// ));
