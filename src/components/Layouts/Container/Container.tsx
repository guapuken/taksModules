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
	themeStyle,
}) => {
	return (
		<SimpleContainer
			labels={{
				className: `container`,
				'theme-config': modo,
				'theme-style': themeStyle,
				'aside-content': AsideContent ? 'aside' : 'noAside',
				'chat-content': chat ? 'chat' : 'noChat',
			}}
		>
			<ValidationComponent validate={AsideContent}>
				<SimpleContainer className="container__aside">{AsideContent}</SimpleContainer>
			</ValidationComponent>
			<SimpleContainer
				labels={{
					className: 'container__children',
					'header-content': header ? 'header' : 'noHeader',
					'footer-content': FooterContent ? 'footer' : 'noFooter',
				}}
			>
				<ValidationComponent validate={header}>
					<SimpleContainer className="container__children-header">
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
				<SimpleContainer className="container__children-content">
					{children}
				</SimpleContainer>
				<ValidationComponent validate={FooterContent}>
					<SimpleContainer className="container__children-footer">
						{FooterContent}
					</SimpleContainer>
				</ValidationComponent>
			</SimpleContainer>
			<ValidationComponent validate={chat}>
				<SimpleContainer className="container__chat">
					<Chat
						themeStyle=""
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
