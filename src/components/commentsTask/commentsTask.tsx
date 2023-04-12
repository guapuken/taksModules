import React from 'react';
// types
import { commentsTask } from './types';
// componentes principales
import { Comments, CommentTask } from './files';
// estilos
import './commentsTask.scss';

const CommentsTask = (props: commentsTask) => {
	const { modo = 'Light', comments, onClickAddComment, onChangeAddFile } = props;
	return (
		<>
			<div className={`ctn${modo}_CTC`}>
				<h2>Comentarios</h2>
				{comments && <Comments comments={comments} />}
				<CommentTask
					onChangeAddFile={onChangeAddFile}
					onClickAddComment={onClickAddComment}
				/>
			</div>
		</>
	);
};
export default CommentsTask;
