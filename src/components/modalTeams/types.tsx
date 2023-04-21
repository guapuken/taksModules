import { Modo, css, onBlurType, onChangeType, onClickType } from '../../types';

export type clickButtons = {
	onCl_confirm?: onClickType;
	onCl_abort?: onClickType;
};
//TYPES
export interface submenus {
	id?: number | string;
	className?: string;
	title?: string;
	onCl?: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface optionsType {
	id?: string;
	title?: string;
	className?: string;
	submenus?: submenus[];
	onCl?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type membersValues = {
	title: string;
	id: string;
};

export type membersOptions = {
	title: string;
	id: string;
};
//members
export type members = {
	style?: css;
	principal?: boolean;
	memberValue?: membersOptions;
	membersOptions?: membersOptions[];
	role?: string;
	onCl_addUser?: onClickType;
	// Children
	members?: members[];
	onCh_user?: onChangeType;
};

// //INTERFACES
export interface modalTeams {
	teamColor?: string;
	onCh_teamColor?: onBlurType;
	onCh_teamName?: onBlurType;
	onCh_user?: onChangeType;
	memberValue?: membersValues;
	membersOptions?: any;
	onCl_addUser?: onClickType;
	role?: string;
	members?: members[];
	idTeam: string;
	modo?: Modo;

	onCl_confirm?: onClickType;
	onCl_abort?: onClickType;
	teamName?: string;
}

export type content = {
	teamColor?: string;
	onCh_teamColor?: onBlurType;
	onCh_teamName?: onBlurType;
	onCh_user?: onChangeType;
	memberValue?: membersValues;
	membersOptions?: any;
	onCl_addUser?: onClickType;
	role?: string;
	members?: members[];
	idTeam: string;
	modo?: Modo;
	teamName?: string;
};
