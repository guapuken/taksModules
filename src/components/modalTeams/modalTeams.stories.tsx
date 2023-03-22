import React from 'react';
import { Meta, Story } from '@storybook/react';
import ModalTeams, { Members, ModalTeamsProps } from './modalTeams';

const Template: Story<ModalTeamsProps> = (args) => <ModalTeams {...args} />;
export const Initial = Template.bind({});
Initial.args = {};
export const Basic = Template.bind({});
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
Basic.args = {
	membersOptions: options,
	memberValue: {
		value: 'Jorge Correa',
		label: 'Jorge Correa',
	},
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
	title: 'ModalTeams',
	component: ModalTeams,
} as Meta;
