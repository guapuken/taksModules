import React from 'react';
// types
import { commentsTask } from './types';
// componentes principales
import { Comments, CommentTask } from './files';
// estilos
import './commentsTask.scss';

const CommentsTask = ({
	modo = 'Light',
	comments,
	onCl_addComment,
	onCh_addFile,
	onCh_comment,
}: commentsTask) => {
	return (
		<>
			{/* TODO: Agregar el componente de mensajes */}
			{/* <div className={`ctn${modo}_CTC`}>  ctnLight_CTC   ctnundefined_CTC  */}
			<div className={`ctn_CTC ${modo}`}>
				{' '}
				{/* ctn_CTC undefined  */}
				<h2>Comentarios</h2>
				{comments && <Comments comments={comments} />}
				<CommentTask
					idComment=""
					modo={modo}
					onCh_addFile={onCh_addFile}
					onCl_addComment={onCl_addComment}
					onCh_comment={onCh_comment}
				/>
			</div>
		</>
	);
};
export default CommentsTask;
