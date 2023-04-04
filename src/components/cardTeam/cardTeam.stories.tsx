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
	onClickView: () => alert('view'),
};

export default {
	title: 'Cards/team',
	component: CardTeam,
} as Meta;
