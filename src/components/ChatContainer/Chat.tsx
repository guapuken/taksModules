import React, { useState } from 'react';
// types
import { chatProps } from './types/types';
// styles
import './styles/chat.scss';
import Dropdown from '../dropdown/dropdown';
//componentes principales
import { AddComment, Msn } from './principalComponents';
const Chat = ({
	modo = 'Light',
	multiplesChats,
	projectName,
	onCl_addComment,
	onCh_addFile,
	onCh_comment,
	onCh_dropdown,
	messages,
}: chatProps) => {
	const [chatCanal, setCanalChat] = useState({
		id: '1',
		title: 'Chat comercial',
	});
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
							onCh={(e: any) => {
								console.log(e);
								setCanalChat(e);
								if (onCh_dropdown) {
									onCh_dropdown(e);
								}
							}}
							initialValue={{
								id: '1',
								title: 'Chat comercial',
							}}
							modo={modo}
						/>
					</div>
				)}
				<h5>{chatCanal.title}</h5>
				<p>{projectName}</p>
			</div>
			<div>
				<div className="ctnMsns">
					<Msn messages={messages} />
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
