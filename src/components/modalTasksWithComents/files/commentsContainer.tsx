import React from 'react';
// types
import { comentarios } from '../types';

const CommentCtn = (comentarios: any) => {
	return comentarios ? (
		<div className="ctnComentsIndividual">
			{comentarios.map((comentario: comentarios) => {
				return (
					<div
						className={`comentCtn${comentario.personalMsn ? 'Personal' : ''}`}
						key={comentario.id}
					>
						<p className="userName">{comentario.user}</p>
						<p className="coments">{comentario.comentario}</p>
						<p className="dateAndTime">{comentario.dateAndTime}</p>
					</div>
				);
			})}
		</div>
	) : (
		<></>
	);
};

export default CommentCtn;
