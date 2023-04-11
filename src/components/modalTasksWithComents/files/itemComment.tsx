import React from 'react';
//
import { contentProps, itemComments } from '../types';
// estilos
import '../modalTaskWithComents.scss';
import { CommentTask, CommentCtn } from '.';

const Comentarios = (props: itemComments) => {
	const { comments, onClickAddComent, onChangeAddFile, showTasks } = props;
	return (
		<div className={`ctnComents${showTasks ? 'Full' : ''}_TWCC`} style={{ overflow: 'hidden' }}>
			<h5 className="ttlComents" style={{ fontWeight: 'lighter' }}>
				Comentarios
			</h5>
			{comments && CommentCtn(comments)}
			<CommentTask onChangeAddFile={onChangeAddFile} onClickAddComent={onClickAddComent} />
		</div>
	);
};

export default Comentarios;
