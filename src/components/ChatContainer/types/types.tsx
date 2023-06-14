import { Modo, onBlurType, onChangeType, onClickType, themeStyle } from '../../../types';
export interface chatProps {
	modo: Modo;
	multiplesChats?: boolean;
	projectName: string;
	onCh_addFile?: onChangeType;
	onCl_addComment: onClickType;
	onCh_comment: onBlurType;
	onCh_dropdown: onChangeType;
	messages: msns[];
	height?: string;
	chatValue: { id: string; title: string };
	chats: { id: string; title: string }[];
	themeStyle: themeStyle;
}

export type msns = {
	avatar?: string | undefined;
	type: 'Received' | 'Sent' | 'System';
	userName?: string;
	message: string;
	date: string;
};
