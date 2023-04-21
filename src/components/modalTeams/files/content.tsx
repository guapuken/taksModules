import React from 'react';
// componentes auxiliares
import { InputLabel } from '../../../components';
import { Spans } from '../../../utils/cardsUtils';
import { Members } from '.';
// types
import { onBlurType, onChangeType } from '../../../types';
// estilos
import '../modalTeams.scss';
import { content } from '../types';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
const Content = ({
	teamColor,
	onCh_teamColor,

	onCh_teamName,
	teamName,
	onCh_user,
	memberValue,

	membersOptions,
	onCl_addUser,
	role,
	members,
	idTeam,
	modo = 'Light',
}: content) => {
	const [asignColor, setAsignColor] = React.useState(teamColor || '');
	const [nameTeam] = React.useState(teamName || '');
	return (
		<div className={`ctn${modo}_MTC`}>
			<div className={'inptsCtn'}>
				<InputLabel
					id={idTeam as any}
					legend="Nombre del equipo"
					onCh={onCh_teamName as onBlurType}
					style={{ height: '30px', width: '45%' }}
					initialValue={nameTeam}
				/>
				<div className="ctnColorLbl">
					<Spans
						legend={asignColor}
						boldLegend={
							teamColor === undefined ? 'Color de equipo' : 'Color de quipo: '
						}
					/>
					<input
						id={asignColor}
						type="color"
						value={asignColor}
						onChange={(e: any) => setAsignColor(e.target.value)}
						onBlur={(e) => {
							if (onCh_teamColor) {
								onCh_teamColor(e);
							}
						}}
					/>
				</div>
			</div>
			<div>
				<Members
					principal
					memberValue={memberValue}
					membersOptions={membersOptions}
					role={role}
					onCl_addUser={onCl_addUser}
					style={{ marginTop: '20px' }}
					members={members}
					onCh_user={onCh_user}
				/>
			</div>
		</div>
	);
};

export default Content;
