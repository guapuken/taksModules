import React, { Fragment } from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTeams from '.';
import Button from '../button/Button';

function DemoComponent(props) {
	const { initialTeamColor, teamNameValue, memberSelectedValue } = props;
	const [teamColor, setTeamColor] = React.useState(initialTeamColor || '');
	const [teamName, setTeamName] = React.useState(teamNameValue || '');
	const [member, setMember] = React.useState(memberSelectedValue || '');

	const members = [
		{ id: '1', title: 'Olaf' },
		{ id: '2', title: 'Adan' },
		{ id: '3', title: 'Ivan' },
		{ id: '4', title: 'Jorge' },
		{ id: '5', title: 'Denisse' },
		{ id: '6', title: 'Renes' },
	];
	return (
		<Fragment>
			<Button modo="Light" onCl={() => setMember({ id: '4', title: 'Jorge' })} />
			<ModalTeams
				modo="Light"
				onCl_addUser={() => {}}
				idTeam="1"
				onCh_teamColor={(e) => setTeamColor(e.target.value)}
				teamColor={teamColor}
				teamName={teamName}
				onCh_teamName={(e) => setTeamName(e.target.value)}
				role="Ux/Ui Designer"
				membersOptions={members}
				onCh_user={(e) => {
					setMember(e);
				}}
				memberValue={member}
				onCl_abort={() => alert('Ccancelar')}
				onCl_confirm={() => alert('Confirmar')}
				onCl_delete={() => alert('borrar')}
				members={[
					{
						modo: 'Light',
						onCl_addUser: () => {},
						onCl_delete: () => {},
						role: 'Ux/Ui Designer',
						membersOptions: members,
						onCh_user: (e) => setMember(e),
						memberValue: member,
						members: [
							{
								modo: 'Light',
								onCl_addUser: () => {},
								onCl_delete: () => {},
								role: 'Ux/Ui Designer',
								membersOptions: members,
								onCh_user: (e) => setMember(e),
								memberValue: member,
							},
							{
								modo: 'Light',
								onCl_addUser: () => {},
								onCl_delete: () => {},
								role: 'Ux/Ui Designer',
								membersOptions: members,
								onCh_user: (e) => setMember(e),
								memberValue: member,
							},
						],
					},
					{
						modo: 'Light',
						onCl_addUser: () => {},
						onCl_delete: () => {},
						role: 'Ux/Ui Designer',
						membersOptions: members,
						onCh_user: (e) => setMember(e),
						memberValue: member,
					},
				]}
			/>
		</Fragment>
	);
}

// creación de stories
storiesOf('Pruebas funcionalidad/teams modal', module).add('setData', () => (
	<DemoComponent
		initialTeamColor="#25df68"
		teamNameValue="TI Sistemas"
		// memberSelectedValue={{ value: '1', label: 'Olaf' }}
	/>
));
