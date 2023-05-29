import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
// componente principal
import ModalTareas from '../Tasks/modalTareas';
// types
import { tasksProps } from '../Tasks/types/types';

const Template: Story<tasksProps> = (args) => <ModalTareas {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//exportación default de los valores
export default {
	title: 'Modales/Creación/Tareas/InitialState',
	component: ModalTareas,
} as Meta;
