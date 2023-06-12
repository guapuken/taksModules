import React from 'react';

//importación de elementos del storybook para usar
import { Meta, Story } from '@storybook/react';
//importación de componente principal
import ModalTaskWithComents from '../TasksWithComments/modalTaskWithComents';

//Creación de plantilla donde se colocarán las historias
const Template: Story = (args) => <ModalTaskWithComents {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//exportación de valores default
export default {
	title: 'Modales/Creación/TaskWithComments/InitialState',
	component: ModalTaskWithComents,
	//definición de argumentos
	argTypes: {},
} as Meta;
