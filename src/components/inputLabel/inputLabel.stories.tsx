import React from 'react';
//importación de elementos del storybook a utilizar
import { Meta, Story } from '@storybook/react';
//importación del componente principal
import InputLabel from './inputLabel';
import { inputLabel } from './types/types';

const Template: Story<inputLabel> = (args) => <InputLabel {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	type: 'text',
	legend: 'Digita el responsable',
	initialValue: 'Jorge Correa',
};

export default {
	// nombre de la carpeta en la que se agrupará y el nombre del componente
	title: 'Átomos/inputLabel',
	component: InputLabel,
	//definición de argumentos
	argTypes: {},
} as Meta;
