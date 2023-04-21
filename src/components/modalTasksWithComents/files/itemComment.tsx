import React from 'react';
//
import { functions, itemComments } from '../types';
// estilos
import '../modalTaskWithComents.scss';
import { CommentTask, CommentCtn } from '.';

const Comentarios = (props: itemComments) => {
	const { comments, onCl_addComent, onCh_addFile, showTasks } = props;
	return (
		<div className={`ctnComents${showTasks ? 'Full' : ''}_TWCC`} style={{ overflow: 'hidden' }}>
			<h5 className="ttlComents" style={{ fontWeight: 'lighter' }}>
				Comentarios
			</h5>
			{comments && CommentCtn(comments)}
			<CommentTask onCh_addFile={onCh_addFile} onCl_addComent={onCl_addComent} />
		</div>
	);
};

export default Comentarios;
