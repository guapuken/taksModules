import React, { useEffect } from 'react';
import { Meta, Story, storiesOf } from '@storybook/react';
import ModalTeams from './modalTeams';
import { Members } from './files';
import { modalTeams } from './types';

const Template: Story<modalTeams> = (args) => <ModalTeams {...args} />;

function DemoComponent(props) {
	const { initialTeamColor, teamNameValue, memberSelectedValue } = props;
	const [teamColor, setTeamColor] = React.useState(initialTeamColor || '');
	const [teamName, setTeamName] = React.useState(teamNameValue || '');
	const [member, setMember] = React.useState(memberSelectedValue || null);
	console.clear();
	console.log('team name:', teamName);
	console.log('team color:', teamColor);
	console.log('user select:', member);
	return (
		<ModalTeams
			onChangeTeamColor={(e) => setTeamColor(e.target.value)}
			teamColor={teamColor}
			teamNameValue={teamName}
			onChangeTeamName={(e) => setTeamName(e.target.value)}
			role="Ux/Ui Designer"
			membersOptions={[
				{ value: '1', label: 'Olaf' },
				{ value: '2', label: 'Adan' },
				{ value: '3', label: 'Ivan' },
				{ value: '4', label: 'Jorge' },
				{ value: '5', label: 'Denisse' },
				{ value: '6', label: 'Renes' },
			]}
			onChangeUserSelected={(e) => setMember(e)}
			memberValue={member}
		/>
	);
}
storiesOf('Pruebas funcionalidad/projectModal', module).add('setteo de datos', () => (
	<DemoComponent
		initialTeamColor="#25df68"
		teamNameValue="TI Sistemas"
		memberSelectedValue={{ value: '1', label: 'Olaf' }}
	/>
));

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
