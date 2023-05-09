import React from 'react';
import { AutoresizeInput, Button } from '../../../components';

const AddComment = ({ onCh_addFile, onCl_addComment, onCh_comment }: any) => {
	return (
		<div className="ctnBlockComents_TWCC">
			<fieldset>
				<AutoresizeInput
					id="addCommentInput"
					placeholder="Comentar"
					taskType="task"
					onCh={onCh_comment}
				/>
			</fieldset>
			{/* Cuando se habilite la subida de archivos a los chats se agergaará esta parte del código */}
			{/* <div className="ctnButtons">
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
					<SimpleButtonText legend="Adjuntar archivo" style={{ fontSize: '10px' }} />
				</label>
				<Button primary size="small" legend="Comentar" onCl={onCl_addComment} />
			</div> */}
			<Button
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
