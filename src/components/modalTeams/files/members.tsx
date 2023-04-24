import React from 'react';
import { Dropdown } from '../../../components';
import { Spans } from '../../../utils/cardsUtils';
import { AddTask } from '../../task/files';
import { members, membersOptions } from '../types';
import { onChangeType } from '../../../types';

import del from '../../../img/vaciar.svg';

//COMPONENTE QUE REGRESA UN DROPDOWN CON LOS INTEGRANTES Y UN INPUT PARAA AGREGAR EL NOMBRE DEL PUESTO
const Members = ({
	style,
	principal,
	memberValue,
	membersOptions,
	onCl_delete,
	role,
	onCl_addUser,
	members,
	onCh_user,
}: members) => {
	return (
		<div>
			<div>
				<div style={{ width: '100%', ...style }}>
					{principal && <p style={{ width: '100%' }}> Encargado </p>}
					<div
						style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
					>
						<Dropdown
							// isSearchable
							placeHolder="Selecciona el encargado"
							options={membersOptions as membersOptions[]}
							onCh={onCh_user as onChangeType}
							initialValue={memberValue || undefined}
							style={{ width: '95%' }}
						/>
						<img
							src={del}
							alt="eliminar"
							title="Eliminar"
							style={{ height: '30px', width: ' auto', cursor: 'pointer' }}
							onClick={onCl_delete}
						/>
					</div>
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
							onCl_delete={member.onCl_delete}
						/>
					))}
			</div>
		</div>
	);
};
export default Members;
