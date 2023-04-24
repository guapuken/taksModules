import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardTeam, { CardTeamProps } from './cardTeam';

const Template: Story<CardTeamProps> = (args) => <CardTeam {...args} />;

export const initialState = Template.bind({});
initialState.args = {};
export const withProperties = Template.bind({});
withProperties.args = {
	members: [
		'Jorge Correa',
		'Ivan Flores',
		'Denisse Hernández',
		'Olaf Ruvalcaba',
		'Adan Moreno',
		'Rene Carrillo',
		'Victor Galván',
	],
	teamName: 'Sistemas TI',
	teamColor: '#126EFA',
	onClickView: () => alert('ver'),
	onClickEdit: () => alert('editar'),
	onClickDelete: () => alert('eliminar'),
	// modo: 'Dark',
};

export default {
	title: 'CARDS DE GESTIÓN/team',
	component: CardTeam,
} as Meta;
