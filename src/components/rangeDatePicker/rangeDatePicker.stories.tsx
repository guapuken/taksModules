import { Meta, Story } from '@storybook/react';
import React from 'react';
import RangeDatePicker from './rangeDatePicker';
import { rangeDatePicker } from './types';

const Template: Story<rangeDatePicker> = (args) => <RangeDatePicker {...args} />;

// estado inicial del componente
export const Initial = Template.bind({});
Initial.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	startDateValue: '2023-12-12T12:00:00',
	maxStartDate: '2023-12-12T12:00:00',
	endDateValue: '2023-12-12T12:00:00',
	maxEndDate: '2023-12-18T12:00:00',
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará y nombre del componente
	title: 'Átomos/rango de fechas',
	component: RangeDatePicker,
	// definición de argumentos
	argTypes: {},
} as Meta;
