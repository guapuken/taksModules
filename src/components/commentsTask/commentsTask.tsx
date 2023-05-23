import React from 'react';
// types
import { commentsTask } from './types';
// componentes principales
import { Comments, CommentTask } from './files';
// estilos
import './commentsTask.scss';
import Msns from '../msns/Msns';
import close from '../../img/close.svg';
import { SimpleContainer, ValidationComponent } from '../Atoms';

const CommentsTask = ({
	modo = 'Light',
	messages,
	onCl_addComment,
	onCh_addFile,
	onCh_comment,
	initialValueComment,
	isActive,
	handleClose,
}: commentsTask) => {
	return (
		<ValidationComponent validate={isActive}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'fixed',
					top: '0',
					left: '0',
					width: '100vw',
					height: '100vh',
				}}
			>
				<SimpleContainer
					onClick={handleClose}
					children={null}
					style={{
						width: '100%',
						height: '100%',
						position: 'fixed',
						top: '0',
						left: '0',
					}}
				/>
				<div className={`ctn_CTC ${modo}`}>
					<SimpleContainer
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<h2>Comentarios</h2>
						<img
							style={{ height: '30px' }}
							src={close}
							alt=""
							className="iconClose"
							onClick={handleClose}
						/>
					</SimpleContainer>
					<ValidationComponent validate={messages}>
						<Msns messages={messages} modo={modo} />
					</ValidationComponent>
					<CommentTask
						initialValueComment={initialValueComment}
						idComment=""
						modo={modo}
						onCh_addFile={onCh_addFile}
						onCl_addComment={onCl_addComment}
						onCh_comment={onCh_comment}
					/>
				</div>
			</div>
		</ValidationComponent>
	);
};
export default CommentsTask;
