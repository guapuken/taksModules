import React from 'react';

import { AutoresizeInput } from '../../../components';
import { SimpleButtonText } from '../../../utils/cardsUtils';
import Button from '../../button';
import { commentTask } from '../types';

const CommentTask = (props: commentTask) => {
	const { onClickAddComment, onChangeAddFile } = props;
	return (
		<div className="ctnBlockComents_TWCC" style={{ padding: '10px' }}>
			<fieldset>
				<AutoresizeInput placeholder="Agregar comentario" taskType="task" />
			</fieldset>
			<div className="ctnButtons" style={{}}>
				<input
					type="file"
					id="file"
					onChange={(e) => {
						if (onChangeAddFile) {
							onChangeAddFile(e);
						}
					}}
				/>
				<label htmlFor="file" style={{ userSelect: 'none', cursor: 'pointer' }}>
					<SimpleButtonText legend="Adjuntar" />
				</label>
				<Button
					primary
					legend="Comentar"
					onClick={onClickAddComment}
					style={{ height: '20px' }}
				/>
			</div>
		</div>
	);
};
export default CommentTask;
