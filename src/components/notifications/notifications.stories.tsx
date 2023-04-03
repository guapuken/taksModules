import React from 'react';
import { Meta, Story } from '@storybook/react';
import Notifications, { NotificationsProps } from './notifications';

const Template: Story<NotificationsProps> = (args) => <Notifications {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	checkValue: true,
	idNotification: '1',
};

//exportación de valores deafult
export default {
	// nombre de la carpeta en la que se agrupará y nombre del componente
	title: 'Átomos/switch notifications',
	component: Notifications,
	//definición de argumentos
	argTypes: {
		checkValue: {
			type: 'boolean',
		},
		onChange: {
			type: 'function',
		},
		idNotification: {
			type: 'string',
		},
	},
} as Meta;
