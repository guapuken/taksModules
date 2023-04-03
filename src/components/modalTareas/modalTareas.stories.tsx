import { Meta, Story } from '@storybook/react';
import React from 'react';
import ModalTareas, { ModalTareasProps } from './modalTareas';

const Template: Story<ModalTareasProps> = (args) => <ModalTareas {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//estado de componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	projectNameValue: 'UBER-EATS-1235-ESP-NOV',
	onClickCrear: () => alert('crear'),
	onClickCancelar: () => alert('cancelar'),
	onClickAddTask: () => alert('añadir tarea'),
	onClickCreateTemplate: () => alert('crear plantilla'),
};

//exportación default de los valores
export default {
	title: 'Modales/tareas',
	component: ModalTareas,
} as Meta;
