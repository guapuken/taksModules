import { Meta, Story } from '@storybook/react';
import React from 'react';
import ModalTemplates from '../Templates/modalPlantillas';
import Task from '../../../task';
import ModalPlantillas from '../Templates/modalPlantillas';
import { modalTemplates } from '../Templates/types/types';
import { equipos, responsable, revision, templateOptions } from '../../data/exampleData.js';

const Template: Story<modalTemplates> = (args) => <ModalTemplates {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

const ChildrenTask1 = () => (
	<Task
		check={false}
		onCh_checkbox={{} as any}
		onCh_endDate={{} as any}
		onCh_startDate={{} as any}
		idTask=""
		idCheckbox={'189045'}
		equipos={equipos as any}
		onCh_descriptionTask={() => alert('Cambio la descripción')}
		onCh_nameTask={() => alert('Cambio la descripción')}
		onCl_addTask={() => alert('Cambio la descripción')}
		onCl_newTemplate={() => alert('Cambio la descripción')}
		revision={revision as any}
		valueRevision={'Kaori Soto'}
		responsables={responsable as any}
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

export default {
	title: 'Modales/Creación/Plantillas/InitialState',
	component: ModalPlantillas,
} as Meta;
