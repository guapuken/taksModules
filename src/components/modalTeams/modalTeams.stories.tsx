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
		value: 'Jorge Correa',
		label: 'Jorge Correa',
	},
	{
		value: 'Olaf',
		label: 'Olaf',
	},
	{
		value: 'Adan',
		label: 'Adan',
	},
];
// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	membersOptions: options,
	memberValue: {
		value: 'Jorge Correa',
		label: 'Jorge Correa',
	},
	teamColor: '#525486',
	onClickCreate: () => alert('Create Team'),
	onClickAbort: () => alert('Abort team creation '),
	Children: () => (
		<div>
			<Members
				membersOptions={options}
				Children={() => <Members membersOptions={options} />}
			/>
			<Members
				membersOptions={options}
				Children={() => <Members membersOptions={options} />}
			/>
		</div>
	),
};

export default {
	title: 'Modales/teams',
	component: ModalTeams,
} as Meta;
