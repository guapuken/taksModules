import React from 'react';
import { comentarios, contentProps } from '../types';

const Comentarios = (props: contentProps) => {
	const { comentarios } = props;
	return (
		<div style={{ overflow: 'hidden' }}>
			<h5 className="ttlComents" style={{ fontWeight: 'lighter' }}>
				Comentarios
			</h5>
			{comentarios && (
				<div className="ctnComents">
					{comentarios.map((comentario: comentarios) => (
						<div className={`comentCtn${comentario.personalMsn ? 'Personal' : ''}`}>
							<p className="userName">{comentario.user}</p>
							<p>{comentario.comentario}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Comentarios;
