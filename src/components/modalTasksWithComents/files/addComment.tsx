import React from 'react';
import { AutoResizeInput } from '../../inputTask/complements/autoResizeInput';
import { SimpleButtonText } from '../../../utils/cardsUtils';
import Button from '../../button';
import { functions } from '../types';

const CommentTask = (props: functions) => {
	const { onClickAddComent, onChangeAddFile } = props;
	return (
		<div className="ctnBlockComents_TWCC">
			<fieldset style={{}}>
				<AutoResizeInput placeholder="Comentar" taskType="task" />
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
				<label htmlFor="file">
					<SimpleButtonText legend="Adjuntar archivo" />
				</label>
				<Button
					primary
					legend="Agregar comentario"
					onClick={onClickAddComent}
					style={{ height: '20px' }}
				/>
			</div>
		</div>
	);
};
export default CommentTask;
