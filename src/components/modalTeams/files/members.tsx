import React from 'react';
import { Dropdown } from '../../../components';
import { Spans } from '../../../utils/cardsUtils';
import { AddTask } from '../../task/files';
import { members, membersOptions } from '../types';
import { onChangeType } from '../../../types';

//COMPONENTE QUE REGRESA UN DROPDOWN CON LOS INTEGRANTES Y UN INPUT PARAA AGREGAR EL NOMBRE DEL PUESTO
const Members = ({
	style,
	principal,
	memberValue,
	membersOptions,
	role,
	onCl_addUser,
	// Children,
	members,
	onCh_user,
}: members) => {
	return (
		<div>
			<div>
				<div style={{ width: '100%', ...style }}>
					{principal && <p style={{ width: '100%' }}> Encargado </p>}
					<Dropdown
						// isSearchable
						placeHolder="Selecciona el encargado"
						options={membersOptions as membersOptions[]}
						onCh={onCh_user as onChangeType}
						initialValue={memberValue || undefined}
					/>
					<div style={{ marginTop: '5px' }}>
						<Spans legend={role ? role : 'Sin definir'} boldLegend={'Puesto: '} />
					</div>
				</div>
				<AddTask legend="+ Agregar Personal bajo su mando" onClick={onCl_addUser} />
			</div>
			<div
				style={{
					borderLeft: '2px solid #282828',
					paddingLeft: '10px',
				}}
			>
				{members &&
					members.map((member: members) => (
						<Members
							style={style}
							memberValue={member.memberValue}
							membersOptions={membersOptions}
							role={member.role}
							onCl_addUser={member.onCl_addUser}
							members={member.members}
							onCh_user={member.onCh_user}
						/>
					))}
			</div>
		</div>
	);
};
export default Members;
