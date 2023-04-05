import React from 'react';
// elementos auxiliares --------------------------------------------------------------------
//componentes
import { CardContainer } from '../../../utils/cardsUtils';
// funciones
import { Hover } from '../../../utils/hover';

//Componente que regresa el contenido de la card
const Content = (props: any) => {
	const { modo, teamName = 'Equipo', onClickView, members = [], teamColor } = props;
	const [mouseEnter, setMouseEnter] = React.useState(false);
	return (
		<CardContainer className={`ctn${modo === 'Dark' ? 'Dark' : ''}_CTeamC`}>
			<div className={'ctnInfo'}>
				<div
					className={'teamName'}
					onMouseEnter={Hover(setMouseEnter).enter}
					onMouseLeave={Hover(setMouseEnter).exit}
				>
					<h3>{teamName}</h3>
					<p
						onClick={() => {
							setMouseEnter(!mouseEnter);
							onClickView;
						}}
					>{`${members?.length} Integrantes...`}</p>
					{members && members.length > 0 && mouseEnter && (
						<span className={'memberTeam'}>
							{members?.map((e) => (
								<span>{e}</span>
							))}
						</span>
					)}
				</div>
			</div>
			<div className={'lblColor'} style={{ background: teamColor }}></div>
		</CardContainer>
	);
};
export default Content;
