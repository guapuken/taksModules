import React from 'react';
//importación de elementos del storybook que se utilizarán para definir las historias
import { Meta, Story } from '@storybook/react';
//importación del componente y su interfaz que utilizará para definir sus propiedades
import CardMannageTemplate, { cardTemplate } from './cardMannageTemplate';

//creación de plantilla en la que se colocarán los elementos
const Template: Story<cardTemplate> = (args) => <CardMannageTemplate {...args} />;

//estado inicial del componente
export const initialState = Template.bind({});
initialState.args = {};

//estado del componente con propiedades
export const withProperties = Template.bind({});
withProperties.args = {
	onClickDelete: () => alert('Eliminar'),
	onClickPreview: () => alert('Previsualizar'),
	title: 'Espectaculares',
	tasks: 15,
};

//exportación de valores por default
export default {
	//titulo de la carpeta en la que se exportará y el título que se le asignará al componente
	title: 'Cards de gestión/templates',
	component: CardMannageTemplate,

	// definición de tipos de datos que reciben los argumentos que se reciben
	argTypes: {
		//argumentos de tipo función
		onClickDelete: {
			type: 'function',
		},
		onClickPreview: {
			type: 'function',
		},
		//argumentos de tipo string
		title: {
			type: 'string',
		},
		//argumentos de tipo number
		tasks: {
			type: 'number',
		},
		//argumentos de tipo select
		modo: {
			control: {
				type: 'select',
				options: ['Dark', 'Light'],
			},
		},
	},
} as Meta;
