import React from 'react';
// types
import { commentsTask } from './types';
// componentes principales
import { Comments, CommentTask } from './files';
// estilos
import './commentsTask.scss';

const CommentsTask = (props: commentsTask) => {
	const { modo = 'Light', comments, onCl_addComment, onCh_addFile, onCh_comment } = props;
	return (
		<>
			<div className={`ctn${modo}_CTC`}>
				<h2>Comentarios</h2>
				{comments && <Comments comments={comments} />}
				<CommentTask
					onCh_addFile={onCh_addFile}
					onCl_addComment={onCl_addComment}
					onCh_comment={onCh_comment}
				/>
			</div>
		</>
	);
};
export default CommentsTask;
