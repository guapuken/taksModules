import { Meta, Story } from '@storybook/react';
import React from 'react';
import CardTeam, { CardTeamProps } from './cardTeam';

const Template: Story<CardTeamProps> = (args) => <CardTeam {...args} />;

export const Initial = Template.bind({});
Initial.args = {};
export const Bisic = Template.bind({});
Bisic.args = {
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
	title: 'CardTeam',
	component: CardTeam,
} as Meta;
