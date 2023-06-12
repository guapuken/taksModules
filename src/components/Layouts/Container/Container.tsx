import React from 'react';
import { SimpleContainer, Title, ValidationComponent } from '../../Atoms';

import './Styles/Container.scss';
import { Button, Chat } from '../../../components';

const Container = ({
	header,
	children,
	AsideContent,
	FooterContent,
	modo,
	chat,
	onCh_commentChat,
	onCh_dropdownChat,
	onCl_addCommentChat,
	projectName,
	chatValue,
	chats,
	messages,
	multiplesChats,
}) => {
	return (
		<SimpleContainer className={`ContainerC ${modo}`}>
			<ValidationComponent validate={AsideContent}>{AsideContent}</ValidationComponent>
			{/* header */}
			{/* children */}
			<SimpleContainer className="ContainerC__children">
				<ValidationComponent validate={header}>
					<SimpleContainer className="ContainerC__children_header">
						<Title modo={modo}>{header.legend}</Title>
						<ValidationComponent validate={header.legendBtn}>
							<Button
								modo={modo}
								onCl={header.onCl_btn}
								legend={header.legendBtn}
								primary
								size="small"
							/>
						</ValidationComponent>
					</SimpleContainer>
				</ValidationComponent>
				<SimpleContainer className="ContainerC__children_children">
					{children}
				</SimpleContainer>
				{/* footer */}
				<ValidationComponent validate={FooterContent}>
					<SimpleContainer className="ContainerC__children_footer">
						{FooterContent}
					</SimpleContainer>
				</ValidationComponent>
			</SimpleContainer>
			<ValidationComponent validate={chat}>
				<SimpleContainer className="ContainerC__chat">
					<Chat
						multiplesChats={multiplesChats}
						onCh_comment={onCh_commentChat}
						onCh_dropdown={onCh_dropdownChat}
						onCl_addComment={onCl_addCommentChat}
						projectName={projectName}
						modo={modo}
						chatValue={chatValue}
						chats={chats}
						messages={messages}
					/>
					{chat}
				</SimpleContainer>
			</ValidationComponent>
		</SimpleContainer>
	);
};

export default Container;
