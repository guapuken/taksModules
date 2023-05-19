import React from 'react';
// types
import { commentsTask } from './types';
// componentes principales
import { Comments, CommentTask } from './files';
// estilos
import './commentsTask.scss';
import Msns from '../msns/Msns';
import { ValidationComponent } from '../Atoms';

const CommentsTask = ({
	modo = 'Light',
	messages,
	onCl_addComment,
	onCh_addFile,
	onCh_comment,
	initialValueComment,
}: commentsTask) => {
	return (
		<>
			{/* TODO: Agregar el componente de mensajes */}
			<div className={`ctn_CTC ${modo}`}>
				<h2>Comentarios</h2>
				<ValidationComponent validate={messages}>
					<Msns messages={messages} modo={modo} />
				</ValidationComponent>
				{messages && <Msns messages={messages} modo={modo} />}
				<CommentTask
					initialValueComment={initialValueComment}
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
