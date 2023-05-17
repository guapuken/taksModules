import React from 'react';
import { AutoresizeInput, Button } from '../../../components';

const AddComment = ({ onCh_addFile, onCl_addComment, onCh_comment, modo }: any) => {
	return (
		<div className="ctnBlockComents_TWCC">
			<fieldset>
				<AutoresizeInput
					modo={modo}
					id="addCommentInput"
					placeholder="Comentar"
					taskType="task"
					onCh={onCh_comment}
				/>
			</fieldset>
			{/* 
			TODO: Implementar cuando se active la subida de archivos
			<div className="ctnButtons">
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
					<Texts>Adjuntar</Texts>
				</label>
			</div> 
			*/}
			<Button
				modo={modo}
				primary
				size="small"
				legend="Comentar"
				onCl={onCl_addComment}
				style={{ width: '100%', height: '20px' }}
				textStyle={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>
		</div>
	);
};

export default AddComment;
