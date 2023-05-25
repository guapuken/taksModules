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
	// startDateValue: '04 06 2023',
	maxStartDate: '2023-02-02 00:00:00',
	minStartDate: '2023-02-01 00:00:00',
	maxEndDate: '2023-02-02 00:00:00',
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará y nombre del componente
	title: 'Átomos/rango de fechas',
	component: RangeDatePicker,
	// definición de argumentos
	argTypes: {},
} as Meta;
