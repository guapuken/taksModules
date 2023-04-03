import { Meta, Story } from '@storybook/react';
import React from 'react';
import RangeDatePicker, { RangeDatePickerProps } from './rangeDatePicker';

const Template: Story<RangeDatePickerProps> = (args) => <RangeDatePicker {...args} />;

// estado inicial del componente
export const Initial = Template.bind({});
Initial.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	startDateValue: '04 06 2023',
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará y nombre del componente
	title: 'Átomos/rango de fechas',
	component: RangeDatePicker,
	// definición de argumentos
	argTypes: {},
} as Meta;
