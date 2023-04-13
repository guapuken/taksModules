import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTeams from '.';

function DemoComponent(props) {
	const { initialTeamColor, teamNameValue, memberSelectedValue } = props;
	const [teamColor, setTeamColor] = React.useState(initialTeamColor || '');
	const [teamName, setTeamName] = React.useState(teamNameValue || '');
	const [member, setMember] = React.useState(memberSelectedValue || null);

	// consoles para ver que funcionen correctamente los setteos
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

// creación de stories
storiesOf('Pruebas funcionalidad/teams modal', module).add('setData', () => (
	<DemoComponent
		initialTeamColor="#25df68"
		teamNameValue="TI Sistemas"
		memberSelectedValue={{ value: '1', label: 'Olaf' }}
	/>
));
