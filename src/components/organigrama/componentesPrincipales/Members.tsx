import React from 'react';
import { SimpleContainer, ValidationComponent } from '../../Atoms';
import ContenedorUser from './ContenedorUser';

export type membersOptions = {
	title: string;
	id: string;
};
export interface members {
	role: string;
	memberValue: membersOptions;
	avatar?: string;
	members?: members[];
	lowLevel?: boolean;
}

const Members = ({ role, memberValue, avatar, members, lowLevel }: members) => {
	return (
		<SimpleContainer
			style={{
				display: 'flex',
				gap: '40px',
				flexDirection: 'column',
				borderLeft: members && '2px solid #dedede',
				borderRight: members && '2px solid #dedede',
				padding: '0 20px',
			}}
		>
			<ContenedorUser
				lowLevel={lowLevel}
				boss={false}
				role={role}
				userName={memberValue.title}
				avatar={avatar}
			/>
			<ValidationComponent validate={members}>
				<SimpleContainer style={{ display: 'flex', gap: '20px' }}>
					{members?.map((member) => (
						<Members
							role={member.role}
							avatar={member.avatar}
							memberValue={member.memberValue}
							members={member.members}
							lowLevel={member.lowLevel}
						/>
					))}
				</SimpleContainer>
			</ValidationComponent>
		</SimpleContainer>
	);
};

export default Members;
