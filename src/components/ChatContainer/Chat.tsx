import React from 'react';
// types
import { chatProps } from './types/types';
// styles
import './styles/chat.scss';
import Dropdown from '../dropdown/dropdown';
//componentes principales
import { AddComment } from './principalComponents';
// archivos multimedia
import exampleAvatar from '../../img/example_1.jpg';
const Chat = ({
	modo = 'Light',
	multiplesChats,
	projectName,
	onCl_addComment,
	onCh_addFile,
	onCh_comment,
}: chatProps) => {
	return (
		<div className={`ctn${modo}_ChC`}>
			<div>
				{multiplesChats && (
					<div className="ctnDropdown">
						<label>Selecciona el chat</label>
						<Dropdown
							options={[
								{ id: '1', title: 'Chat comercial' },
								{ id: '2', title: 'Chat operacional' },
							]}
							placeHolder="Selecciona un chat"
							onCh={() => {}}
							modo={modo}
						/>
					</div>
				)}
				<h5>{`Chat de proyecto`}</h5>
				<p>{projectName}</p>
			</div>
			<div>
				<div className="ctnMsns">
					<div className="msn" ty-msn={'Received'}>
						<div className="avatar_user">
							<p
								className="image"
								style={{ backgroundImage: `url(${exampleAvatar})` }}
							></p>
							<p className="userName">Jorge Correa</p>
						</div>
						<div className="msn_text">
							<span>Hola cómo vamos con las tareas</span>
							<span className="date">hace 2 minutos</span>
						</div>
						<div className="msn_text">
							<span>Hola cómo vamos con las tareas</span>
							<span className="date">hace 2 minutos</span>
						</div>
						<div className="msn_text">
							<span>Hola cómo vamos con las tareas</span>
							<span className="date">hace 2 minutos</span>
						</div>
					</div>
				</div>
				<AddComment
					onCh_addFile={onCh_addFile}
					onCl_addComment={onCl_addComment}
					onCh_comment={onCh_comment}
				/>
			</div>
		</div>
	);
};

export default Chat;
