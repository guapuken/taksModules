import React, { useEffect } from 'react';
import { Meta, Story, storiesOf } from '@storybook/react';
import ModalTeams from './modalTeams';
import { Members } from './files';
import { modalTeams } from './types';

const Template: Story<modalTeams> = (args) => <ModalTeams {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

let options = [
	{
		id: 'Jorge Correa',
		title: 'Jorge Correa',
	},
	{
		id: 'Olaf',
		title: 'Olaf',
	},
	{
		id: 'Adan',
		title: 'Adan',
	},
	{
		id: 'Adin',
		title: 'Adin',
	},
	{
		id: 'Adon',
		title: 'Adon',
	},
	{
		id: 'Adun',
		title: 'Adun',
	},
];
// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	membersOptions: options,
	memberValue: {
		id: 'Jorge Correa',
		title: 'Jorge Correa',
	},
	teamColor: '#525486',
	onCl_confirm: () => alert('Create Team'),
	onCl_abort: () => alert('Abort team creation '),
	onCl_delete: () => alert('eliminar'),
	members: [{ membersOptions: options }, { membersOptions: options }],
};

export default {
	title: 'Modales/teams',
	component: ModalTeams,
} as Meta;
