import { Modo, onClickType } from '../../../../types';

export interface cardTeam {
	onCl_edit: onClickType;
	onCl_preview: onClickType;
	onCl_delete: onClickType;
	modo: Modo;
	teamName: string;
	teamColor: string;
	members?: string[];
}

export type content = {
	onCl_preview: onClickType;
	modo: Modo;
	teamName: string;
	teamColor: string;
	members?: string[];
};
export type aside = {
	onCl_edit: onClickType;
	onCl_preview: onClickType;
	onCl_delete: onClickType;
	modo: Modo;
};
