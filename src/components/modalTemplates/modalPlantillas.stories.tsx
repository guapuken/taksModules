import { Meta, Story } from '@storybook/react';
import React from 'react';
import ModalTemplates from '.';
import Task from '../task';
import ModalPlantillas, { ModalTemplatesProps } from './modalPlantillas';

const Template: Story<ModalTemplatesProps> = (args) => <ModalTemplates {...args} />;

export const Initial = Template.bind({});
Initial.args = {};

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
		// Children={Children}
		onChangeDescriptionTask={() => alert('Cambio la descripción')}
		onChangeNameTask={() => alert('Cambio la descripción')}
		onClickAddTask={() => alert('Cambio la descripción')}
		onClickCreateTemplate={() => alert('Cambio la descripción')}
		revision={revision}
		valueRevision={'Kaori Soto'}
		responsables={responsables}
		// taskDisabled={taskDisabled}
		valueTask={''}
		valueDescription={''}
		valueResponsable={'Denisse Hernández'}
		// subtaskForbbiden={subtaskForbbiden}
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
export const Basic = Template.bind({});
Basic.args = {
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
			valueTask: '',
			valueDescription: '',
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
			valueTask: '',
			valueDescription: '',
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
	title: 'ModalPlantillas',
	component: ModalPlantillas,
} as Meta;
