import React from 'react';
import { AutoresizeInput } from '../../../components';
import { SimpleButtonText } from '../../../utils/cardsUtils';
import Button from '../../button';
import { functions } from '../types';

const CommentTask = (props: functions) => {
	const { onCl_addComent, onCh_addFile, onCh_comment } = props;
	return (
		<div className="ctnBlockComents_TWCC">
			<fieldset style={{}}>
				<AutoresizeInput id="" onCh={onCh_comment} placeholder="Comentar" taskType="task" />
			</fieldset>
			<div className="ctnButtons" style={{}}>
				<input
					type="file"
					id="file"
					onChange={(e) => {
						if (onCh_addFile) {
							onCh_addFile(e);
						}
					}}
				/>
				<label htmlFor="file">
					<SimpleButtonText legend="Adjuntar archivo" />
				</label>
				<Button
					primary
					legend="Agregar comentario"
					onCl={onCl_addComent}
					style={{ height: '20px' }}
				/>
			</div>
		</div>
	);
};
export default CommentTask;
