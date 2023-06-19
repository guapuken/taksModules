import React from 'react';
//importación de elementos del storybook a usar
import { Meta, Story } from '@storybook/react';
import { modo, number, text } from '../../storyUtils';

//importación del componente principal
import CardMembersTeam from './cardMembersTeam';
import { cardMembersTeam } from './types';
import { SimpleContainer } from '../Atoms';

const Template: Story<cardMembersTeam> = (args) => (
	<SimpleContainer style={{ display: 'flex' }}>
		<CardMembersTeam {...args} />
		<CardMembersTeam {...args} />
		<CardMembersTeam {...args} />
		<CardMembersTeam {...args} />
		<CardMembersTeam {...args} />
		<CardMembersTeam {...args} />
		<CardMembersTeam {...args} />
	</SimpleContainer>
);

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	name: 'Jorge Correa',
	role: ' Encargado de Sistemas',
	incompletedTasks: 25,
	modo: 'Dark',
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agruparpá/nombre del componente
	title: 'Cards/members team',
	component: CardMembersTeam,
	//definición de argumentos
	argTypes: {
		name: text(),
		role: text(),
		incompletedTasks: number(),
		modo: modo(),
	},
} as Meta;
