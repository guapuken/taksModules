import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardTaskReview, { CardTaskReviewProps } from './cardTaskReview';

const Template: Story<CardTaskReviewProps> = (args) => <CardTaskReview {...args} />;

//estado inicial del componente
export const intialState = Template.bind({});
intialState.args = {};

//Ejemplo ya con Datos
export const withProperties = Template.bind({});
withProperties.args = {
	taskName: 'Hace dummies de las principales plazas',
	taskDescription: 'Realizar dummies de CDMX, Monterrey y Guadalajara',
	statusTask: 'outOfTime',
	onClickShowDetails: () => alert('Click'),
	// modo: 'Dark',
};
export default {
	title: 'Cards/task review',
	component: CardTaskReview,
} as Meta;
