import React from 'react';
import { AutoresizeInput } from '../../../../../components';
import { Button } from '../../../../../components';
import { functions } from '../types/types';

const CommentTask = (props: functions) => {
	const { onCl_addComment, onCh_addFile, onCh_comment, modo, valueComment } = props;
	return (
		<div className="ctnBlockComents_TWCC">
			<fieldset>
				<AutoresizeInput
					modo={modo}
					id=""
					onCh={onCh_comment}
					placeholder="Comentar"
					taskType="task"
					initialValue={valueComment}
				/>
			</fieldset>
			<div className="ctnButtons" style={{}}>
				{/* Se agregará esta parte cuando se puedan subir archivos */}
				{/* <input
					type="file"
					id="file"
					onChange={(e) => {
						if (onCh_addFile) {
							onCh_addFile(e);
						}
					}}
				/>
				<label htmlFor="file">
					<Texts>Adjuntar</Texts>
				</label> */}
				<Button
					modo={modo}
					primary
					legend="Agregar comentario"
					onCl={onCl_addComment}
					style={{ height: '20px' }}
				/>
			</div>
		</div>
	);
};
export default CommentTask;
