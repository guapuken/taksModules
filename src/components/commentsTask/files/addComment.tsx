import React from 'react';
// componentes auxiliares
import { AutoresizeInput, Button } from '../../../components';
// types
import { commentTask } from '../types';
// import { Texts } from '../../Atoms';

const CommentTask = (props: commentTask) => {
	const { onCl_addComment, onCh_addFile, idComment, onCh_comment, modo, initialValueComment } =
		props;

	return (
		<div className="ctnBlockComents_TWCC" style={{ padding: '10px' }}>
			<fieldset>
				<AutoresizeInput
					modo={modo}
					id={idComment as string}
					placeholder="Agregar comentario"
					taskType="task"
					onCh={onCh_comment}
					initialValue={initialValueComment}
				/>
			</fieldset>
			<div className="ctnButtons">
				{/* 
				TODO: Esta parte se activará cuando se solucione lo de los archivos
				<input
					type="file"
					id="file"
					onChange={(e) => {
						if (onCh_addFile) {
							onCh_addFile(e);
						}
					}}
				/>
				<label htmlFor="file" style={{ userSelect: 'none', cursor: 'pointer' }}>
					<Texts modo={modo}>Adjuntar</Texts>
				</label> 
				*/}
				<Button
					modo={modo}
					primary
					legend="Comentar"
					onCl={onCl_addComment}
					style={{ height: '20px' }}
				/>
			</div>
		</div>
	);
};
export default CommentTask;
