import React, { useEffect, useState } from 'react';
// types
import { chatProps } from './types/types';
import Dropdown from '../dropdown/dropdown';
//componentes principales
import { AddComment } from './principalComponents';
import { Msns } from '../../components';
// styles
import './styles/chat.scss';
const Chat = ({
	modo = 'Light',
	multiplesChats,
	projectName,
	onCl_addComment,
	onCh_addFile,
	onCh_comment,
	onCh_dropdown,
	messages,
	chatValue,
	chats,
}: chatProps) => {
	const [chatCanal, setCanalChat] = useState(
		chatValue || {
			id: undefined,
			title: undefined,
		}
	);
	const [comment, setComment] = useState('');
	const [heightComments, setHeightComments] = useState(0);
	const [heightTitle, setHeightTitle] = useState(0);

	useEffect(() => {
		if (heigthCommentArea('addComments')) {
			const height = heigthCommentArea('addComments').height ?? 0;
			setHeightComments(height);
		}
		if (heigthCommentArea('ctnTtl')) {
			const height = heigthCommentArea('ctnTtl').height ?? 0;
			setHeightTitle(height);
		}
	}, [comment]);

	function heigthCommentArea(id: string) {
		const refButton = document.getElementById(id);
		const widthElement = refButton?.clientWidth;
		const heightElement = refButton?.clientHeight;
		let width = 0;
		let height = 0;
		if (widthElement !== width) {
			width += widthElement ?? 0;
		}
		if (heightElement !== height) {
			height += heightElement ?? 0;
		}
		if (height !== 0 && width !== 0) {
			return { width, height };
		}
		return { widthElement, heightElement };
	}

	return (
		<div className={`ctn${modo}_ChC`}>
			<div id="ctnTtl">
				{multiplesChats && (
					<div className="ctnDropdown">
						<label>Selecciona el chat</label>
						<Dropdown
							options={chats}
							placeHolder="Selecciona un chat"
							onCh={(e: any) => {
								setCanalChat(e);
								if (onCh_dropdown) {
									onCh_dropdown(e);
								}
							}}
							initialValue={chatCanal}
							modo={modo}
						/>
					</div>
				)}
				<div className="ttlChat">
					<h5>{chatCanal.title}</h5>
					<p
						className="TextOverflow"
						title={projectName}
						style={{ WebkitLineClamp: '1' }}
					>
						{projectName}
					</p>
				</div>
			</div>
			<div style={{ height: `calc(100% - ${heightTitle}px )` }}>
				{messages && (
					<Msns
						messages={messages}
						height={`calc(100% - ${heightComments}px)`}
						modo={modo}
					/>
				)}
				<div id="addComments">
					<AddComment
						onCh_addFile={onCh_addFile}
						onCl_addComment={onCl_addComment}
						onCh_comment={(e: any) => {
							setComment(e.target.value);
							if (onCh_comment) {
								onCh_comment(e);
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Chat;
