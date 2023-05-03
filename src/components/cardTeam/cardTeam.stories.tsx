import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
import { functions, modo, object, text } from '../../storyUtils';

// componente principal
import CardTeam from './cardTeam';
import { cardTeam } from './types';

const Template: Story<cardTeam> = (args) => <CardTeam {...args} />;

export const initialState = Template.bind({});
initialState.args = {};
export const withProperties = Template.bind({});
withProperties.args = {
	members: [
		{ id: 1, name: 'Jorge Correa' },
		{ id: 2, name: 'Ivan Flores' },
		{ id: 3, name: 'Denisse Hernández' },
		{ id: 4, name: 'Olaf Ruvalcaba' },
		{ id: 5, name: 'Adan Moreno' },
		{ id: 6, name: 'Rene Carrillo' },
		{ id: 7, name: 'Victor Galván' },
	],
	teamName: 'Sistemas TI',
	teamColor: '#126EFA',
	onCl_preview: () => alert('ver'),
	onCl_edit: () => alert('editar'),
	onCl_delete: () => alert('eliminar'),
	// modo: 'Dark',
};

export default {
	title: 'CARDS DE GESTIÓN/team',
	component: CardTeam,
	// definición de argumentos
	argTypes: {
		onCl_edit: functions(),
		onCl_preview: functions(),
		onCl_delete: functions(),
		modo: modo(),
		teamName: text(),
		teamColor: text(),
		members: object(),
	},
} as Meta;
