import React from 'react';
// elementos auxiliares --------------------------------------------------------------------
//componentes
import { CardContainer } from '../../../utils/cardsUtils';
// funciones
import { Hover } from '../../../utils/hover';

//Componente que regresa el contenido de la card
const Content = ({ modo, teamName = 'Equipo', onCl_preview, members, teamColor }: any) => {
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
							onCl_preview;
						}}
					>{`${members?.length ?? 0} Integrantes...`}</p>
					{members && members.length > 0 && mouseEnter && (
						<span className={'memberTeam'}>
							{members?.map((e: any) => {
								return (
									<span key={e.id} id={e.name}>
										{e.name}
									</span>
								);
							})}
						</span>
					)}
				</div>
			</div>
			<div className={'lblColor'} style={{ background: teamColor }}></div>
		</CardContainer>
	);
};
export default Content;
