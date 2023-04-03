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
		idCheckbox={'189045'}
		equipos={equipos}
		onChangeDescriptionTask={() => alert('Cambio la descripción')}
		onChangeNameTask={() => alert('Cambio la descripción')}
		onClickAddTask={() => alert('Cambio la descripción')}
		onClickCreateTemplate={() => alert('Cambio la descripción')}
		revision={revision}
		valueRevision={'Kaori Soto'}
		responsables={responsables}
		valueTask={'Realizar los tipos de exhibición integral'}
		valueDescription={'Solamente realizar integrales'}
		valueResponsable={'Denisse Hernández'}
		isSubtask
		templateOptions={templateOptions}
		moreOptions={[
			{
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
	Children: [
		{
			idTask: '1024',
			equipos: equipos,
			Children: ChildrenTask1,
			onChangeDescriptionTask: () => alert('Cambio la descripción'),
			onChangeNameTask: () => alert('Cambio la descripción'),
			onClickAddTask: () => alert('Cambio la descripción'),
			onClickCreateTemplate: () => alert('Cambio la descripción'),
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
			onChangeDescriptionTask: () => alert('Cambio la descripción'),
			onChangeNameTask: () => alert('Cambio la descripción'),
			onClickAddTask: () => alert('Cambio la descripción'),
			onClickCreateTemplate: () => alert('Cambio la descripción'),
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
