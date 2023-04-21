import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTeams from '.';

function DemoComponent(props) {
	const { initialTeamColor, teamNameValue, memberSelectedValue } = props;
	const [teamColor, setTeamColor] = React.useState(initialTeamColor || '');
	const [teamName, setTeamName] = React.useState(teamNameValue || '');
	const [member, setMember] = React.useState(memberSelectedValue || '');

	// consoles para ver que funcionen correctamente los setteos
	console.clear();
	console.log('team name:', teamName);
	console.log('team color:', teamColor);
	console.log('user select:', member);

	const members = [
		{ id: '1', title: 'Olaf' },
		{ id: '2', title: 'Adan' },
		{ id: '3', title: 'Ivan' },
		{ id: '4', title: 'Jorge' },
		{ id: '5', title: 'Denisse' },
		{ id: '6', title: 'Renes' },
	];
	return (
		<ModalTeams
			onChangeTeamColor={(e) => setTeamColor(e.target.value)}
			teamColor={teamColor}
			teamNameValue={teamName}
			onChangeTeamName={(e) => setTeamName(e.target.value)}
			role="Ux/Ui Designer"
			membersOptions={members}
			onChangeUserSelected={(e) => setMember(e)}
			memberValue={member}
			members={[
				{
					role: 'Ux/Ui Designer',
					membersOptions: members,
					onChangeUserSelected: (e) => setMember(e),
					memberValue: member,
					members: [
						{
							role: 'Ux/Ui Designer',
							membersOptions: members,
							onChangeUserSelected: (e) => setMember(e),
							memberValue: member,
						},
						{
							role: 'Ux/Ui Designer',
							membersOptions: members,
							onChangeUserSelected: (e) => setMember(e),
							memberValue: member,
						},
					],
				},
				{
					role: 'Ux/Ui Designer',
					membersOptions: members,
					onChangeUserSelected: (e) => setMember(e),
					memberValue: member,
				},
			]}
		/>
	);
}

// creación de stories
storiesOf('Pruebas funcionalidad/teams modal', module).add('setData', () => (
	<DemoComponent
		initialTeamColor="#25df68"
		teamNameValue="TI Sistemas"
		memberSelectedValue={{ value: '1', label: 'Olaf' }}
	/>
));
