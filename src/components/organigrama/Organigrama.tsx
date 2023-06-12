import React from 'react';
import { SimpleContainer, ValidationComponent } from '../Atoms';
import ContenedorUser from './componentesPrincipales/ContenedorUser';
import Members, { members, membersOptions } from './componentesPrincipales/Members';

export interface organigrama {
	memberValue: membersOptions;
	avatar?: string;
	role: string;
	members?: members[];
}

const Organigrama = ({ memberValue, avatar, role, members }: organigrama) => {
	return (
		<SimpleContainer
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '40px',
				flexDirection: 'column',
			}}
		>
			<ContenedorUser
				userName={memberValue.title}
				boss={true}
				lowLevel={false}
				avatar={avatar}
				role={role}
			/>
			<ValidationComponent validate={members}>
				<SimpleContainer style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
					{members?.map((member) => (
						<Members
							memberValue={member.memberValue}
							role={member.role}
							avatar={member.avatar}
							members={member.members}
						/>
					))}
				</SimpleContainer>
			</ValidationComponent>
		</SimpleContainer>
	);
};

export default Organigrama;
