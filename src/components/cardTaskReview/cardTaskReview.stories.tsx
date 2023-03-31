import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardTaskReview, { CardTaskReviewProps } from './cardTaskReview';

const Template: Story<CardTaskReviewProps> = (args) => <CardTaskReview {...args} />;

//estado inicial del componente
export const Initial = Template.bind({});
Initial.args = {};

//Ejemplo ya con Datos
export const Basic = Template.bind({});
Basic.args = {
	taskName: 'Hace dummies de las principales plazas',
	taskDescription: 'Realizar dummies de CDMX, Monterrey y Guadalajara',
	statusTask: 'outOfTime',
	onClickShowDetails: () => alert('Click'),
	// modo: 'Dark',
};
export default {
	title: 'CardTaskReview',
	component: CardTaskReview,
} as Meta;
