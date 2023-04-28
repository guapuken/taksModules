import { Meta, Story } from '@storybook/react';
import React from 'react';
import ModalTemplates from '.';
import Task from '../task';
import ModalPlantillas, { ModalTemplatesProps } from './modalPlantillas';

const Template: Story<ModalTemplatesProps> = (args) => <ModalTemplates {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

const equipos = [
	{
		title: 'creactive',
	},
	{ title: 'Saales' },
];
const revision = [
	{
		title: 'creactive',
	},
	{ title: 'Saales' },
];
const responsables = [
	{
		title: 'creactive',
	},
	{ title: 'Saales' },
];
const templateOptions = [
	{
		title: 'creactive',
	},
	{ title: 'Saales' },
];
const ChildrenTask1 = () => (
	<Task
		idTask=""
		idCheckbox={'189045'}
		equipos={equipos as any}
		onCh_descriptionTask={() => alert('Cambio la descripción')}
		onCh_nameTask={() => alert('Cambio la descripción')}
		onCl_addTask={() => alert('Cambio la descripción')}
		onCl_newTemplate={() => alert('Cambio la descripción')}
		revision={revision as any}
		valueRevision={'Kaori Soto'}
		responsables={responsables as any}
		valueTask={'Realizar los tipos de exhibición integral'}
		valueDescription={'Solamente realizar integrales'}
		valueResponsable={'Denisse Hernández'}
		isSubtask
		templateOptions={templateOptions as any}
		moreOptions={[
			{
				id: 'eliminar',
				title: 'Eliminar',
				onClick: () => alert('Cambio la descripción'),
			},
		]}
		className={''}
		plantillas
		durationValue={'3'}
	/>
);
export const WithProperties = Template.bind({});
WithProperties.args = {
	templateNameValue: 'Dummies plazas principales',
	edit: true,
	tasks: [
		{
			idTask: '1024',
			equipos: equipos,
			Children: ChildrenTask1,
			onCh_descriptionTask: () => alert('Cambio la descripción'),
			onCh_nameTask: () => alert('Cambio la descripción'),
			onCl_addTask: () => alert('Cambio la descripción'),
			onCl_newTemplate: () => alert('Cambio la descripción'),
			revision: revision,
			valueRevision: 'Jorge Correa',
			responsables: responsables,
			taskDisabled: false,
			valueTask: 'Dummies CDMX',
			valueDescription: 'Hacer dummies de CDMX de la campaña de Uber',
			valueResponsable: 'Victor Galván',
			subtaskForbbiden: false,
			templateOptions: templateOptions,
			onClickDeleteTask: () => alert('Cambio la descripción'),
			className: '',
			durationValue: '5',
		},
		{
			idTask: '1025',
			equipos: equipos,
			Children: ChildrenTask1,
			onCh_descriptionTask: () => alert('Cambio la descripción'),
			onCh_nameTask: () => alert('Cambio la descripción'),
			onCl_addTask: () => alert('Cambio la descripción'),
			onCl_newTemplate: () => alert('Cambio la descripción'),
			revision: revision,
			valueRevision: 'Jorge Correa',
			responsables: responsables,
			taskDisabled: false,
			valueTask: 'Dummies Monterrey',
			valueDescription: 'Hacer dummies de Monterrey de la campaña de Uber',
			valueResponsable: 'Victor Galván',
			subtaskForbbiden: false,
			templateOptions: templateOptions,
			onClickDeleteTask: () => alert('Cambio la descripción'),
			className: '',
			durationValue: '5',
		},
	],
};

export default {
	title: 'Modales/templates',
	component: ModalPlantillas,
} as Meta;
