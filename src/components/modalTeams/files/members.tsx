import React from 'react';
import { Dropdown } from '../../../components';
import { Spans } from '../../../utils/cardsUtils';
import { AddTask } from '../../task/files';

//COMPONENTE QUE REGRESA UN DROPDOWN CON LOS INTEGRANTES Y UN INPUT PARAA AGREGAR EL NOMBRE DEL PUESTO
const Members = (props: any) => {
	const {
		style,
		principal,
		memberValue,
		membersOptions,
		role,
		onClickAddUser,
		Children,
		onChangeUserSelected,
	} = props;
	return (
		<div>
			<div>
				<div style={{ width: '100%', ...style }}>
					{principal && <p style={{ width: '100%' }}> Encargado </p>}
					<Dropdown
						isSearchable
						placeHolder="Selecciona el encargado"
						options={membersOptions}
						onChange={onChangeUserSelected}
						initialValue={memberValue}
					/>
					<div style={{ marginTop: '5px' }}>
						<Spans legend={role ? role : 'Sin definir'} boldLegend={'Puesto: '} />
					</div>
				</div>
				<AddTask legend="+ Agregar Personal bajo su mando" onClick={onClickAddUser} />
			</div>
			<div
				style={{
					borderLeft: '2px solid #282828',
					paddingLeft: '10px',
				}}
			>
				{Children && <Children />}
			</div>
		</div>
	);
};
export default Members;
