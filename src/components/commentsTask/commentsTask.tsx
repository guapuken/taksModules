import React from 'react';
// types
import { commentsTask } from './types';
// componentes principales
import { CommentTask } from './files';
// estilos
import './commentsTask.scss';
import Msns from '../msns/Msns';
import close from '../../img/close.svg';
import { SimpleContainer, Title, ValidationComponent } from '../Atoms';

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
			<SimpleContainer className="commentTask">
				<SimpleContainer
					onClick={handleClose}
					className="commentTask__bg"
					children={null}
					style={{}}
				/>
				<SimpleContainer className={`commentTask__contenedor`}>
					<SimpleContainer
						className="commentTask__contenedor-title"
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Title modo={modo}>Comentarios</Title>
						<img style={{ height: '30px' }} src={close} alt="" onClick={handleClose} />
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
				</SimpleContainer>
			</SimpleContainer>
		</ValidationComponent>
	);
};
export default CommentsTask;
