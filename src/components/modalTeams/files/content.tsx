import React from 'react';
// componentes auxiliares
import { InputLabel } from '../../../components';
import { Spans } from '../../../utils/cardsUtils';
import { Members } from '.';
// types
import { onBlurType, onChangeType } from '../../../types';
// estilos
import '../modalTeams.scss';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
const Content = (props: any) => {
	const {
		teamColor,
		onChangeTeamColor,

		onChangeTeamName,
		teamNameValue,
		onChangeUserSelected,
		memberValue,

		membersOptions,
		onClickAddUser,
		role,
		Children,
		modo = 'Light',
	} = props;
	const [asignColor, setAsignColor] = React.useState(teamColor || '');
	const [teamName] = React.useState(teamNameValue || '');
	return (
		<div className={`ctn${modo}_MTC`}>
			<div className={'inptsCtn'}>
				<InputLabel
					legend="Nombre del equipo"
					onChange={onChangeTeamName as onBlurType}
					style={{ height: '30px', width: '45%' }}
					initialValue={teamName}
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
							if (onChangeTeamColor) {
								onChangeTeamColor(e);
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
					onClickAddUser={onClickAddUser}
					style={{ marginTop: '20px' }}
					Children={Children}
					onChangeUserSelected={onChangeUserSelected}
				/>
			</div>
		</div>
	);
};

export default Content;
