import React from 'react';

//importación de elementos del storybook a utilizar
import { Meta, Story } from '@storybook/react';

// importación del componente principal
import Buttons from './buttons';
// types
import { buttons } from './types';

//creación de la plantilla donde se colocarán las historias
const Template: Story<buttons> = (args) => <Buttons {...args} />;

//estado inicial del componente
export const Basic = Template.bind({});
Basic.args = {};

export const Horizontal = Template.bind({});
Horizontal.args = {
	composition: 'horizontal',
	legends: {
		primary: 'Comprar ahora',
		secondary: 'Cancelar',
		tertiary: 'Regresar',
	},
	buttons: {
		primary: true,
		secondary: true,
		tertiary: true,
	},
	onCl_buttons: {
		primary: () => alert('Realizando pago...'),
		secondary: () => alert('Cancelando...'),
		tertiary: () => alert('Regresando a la página inicial...'),
	},
	size: 'large',
	styleComposition: {
		maxWidth: '100vw',
	},
	// rounded: true,
	// border: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
	composition: 'vertical',
	legends: {
		primary: 'Comprar ahora',
		secondary: 'Cancelar',
		tertiary: 'Regresar',
	},
	buttons: {
		primary: true,
		secondary: true,
		tertiary: true,
	},
	onClick: {
		primary: () => alert('Realizando pago...'),
		secondary: () => alert('Cancelando...'),
		tertiary: () => alert('Regresando a la página inicial...'),
	},
	size: 'large',
	styleComposition: {
		maxWidth: '50vw',
	},
	rounded: true,
	border: true,
};

export const Box = Template.bind({});
Box.args = {
	composition: 'box',
	legends: {
		primary: 'Comprar ahora',
		secondary: 'Cancelar',
		tertiary: 'Regresar',
	},
	buttons: {
		primary: true,
		secondary: true,
		tertiary: true,
	},
	onCl_buttons: {
		primary: () => alert('Realizando pago...'),
		secondary: () => alert('Cancelando...'),
		tertiary: () => alert('Regresando a la página inicial...'),
	},
	styleComposition: {
		maxWidth: '25vw',
	},
	size: 'small',
};

//exportación default de valores
export default {
	//nombre de la carpeta en la que se agrupará / nombre del componente
	title: 'Moleculas/buttons',
	component: Buttons,
	//definición de argumentos
	argTypes: {
		composition: {
			control: {
				options: ['vertical', 'horizontal', 'box'],
				type: 'select',
			},
		},
		legends: {
			control: 'object',
		},
		colorButtons: {
			control: 'object',
		},
		buttons: {
			control: 'object',
		},
		icons: {
			control: 'object',
		},
		colorHover: {
			control: 'object',
		},
		className: {
			control: 'object',
		},
		disabled: {
			control: 'object',
		},
		style: {
			control: 'object',
		},
		styleIcon: {
			control: 'object',
		},
		id: {
			control: 'object',
		},
		keys: {
			control: 'object',
		},
		onClick: {
			control: 'object',
		},
		size: {
			control: {
				options: ['small', 'medium', 'large'],
				type: 'select',
			},
		},
		styleComposition: {
			control: 'object',
		},
		rounded: {
			control: {
				type: 'boolean',
			},
		},
		border: {
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta;
