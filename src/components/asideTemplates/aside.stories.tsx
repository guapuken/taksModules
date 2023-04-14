import React from 'react';
import { Meta, Story } from '@storybook/react';
// componente principal
import AsideTemplates from './asideTemplates';
// types
import { aside } from './types';

// utilidades del storybook
import { modo } from '../../storyUtils';

// componentes auxiliares
import Cards from '../cards';

// creación de plantilla donde se colocará el componente
const Template: Story<aside> = (args) => <AsideTemplates {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {
	isWhite: true,
};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	children: (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			<Cards rounded modo={'Dark'} />
			<Cards rounded modo={'Dark'} />
			<Cards rounded modo={'Dark'} />
		</div>
	),
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará / nombre del componente
	title: 'Átomos/aside',
	component: AsideTemplates,
	//definición de argumentos
	argTypes: {
		isWhite: {
			type: 'boolean',
		},
		modo: modo(),
		children: {
			type: 'function',
		},
	},
} as Meta;
