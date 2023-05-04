import { Modo, onChangeType, onClickType } from '../../../types';
export interface chatProps {
	modo?: Modo;
	multiplesChats?: boolean;
	projectName?: string;
	onCh_addFile?: onChangeType;
	onCl_addComment?: onClickType;
	onCh_comment?: onChangeType;
}
