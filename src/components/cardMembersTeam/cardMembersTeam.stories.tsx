import React from 'react';
//importación de elementos del storybook a usar
import { Meta, Story } from '@storybook/react';

//importación del componente principal
import CardMembersTeam, { CardMembersTeamProps } from './cardMembersTeam';

const Template: Story<CardMembersTeamProps> = (args) => <CardMembersTeam {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	name: 'Jorge Correa',
	role: ' Encargado de Sistemas',
	incompletedTasks: 25,
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agruparpá/nombre del componente
	title: 'Cards/members team',
	component: CardMembersTeam,
	//definición de argumentos
	argTypes: {},
} as Meta;
