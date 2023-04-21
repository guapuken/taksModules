import { Modo, css, onBlurType, onChangeType, onClickType } from '../../types';

export type clickButtons = {
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
};
//TYPES
export interface submenus {
	id?: number | string;
	className?: string;
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface optionsType {
	id?: string;
	title?: string;
	className?: string;
	submenus?: submenus[];
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type membersValues = {
	value?: string;
	label?: string;
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
	onClickAddUser?: onClickType;
	// Children
	members?: members[];
	onChangeUserSelected?: onChangeType;
};

// //INTERFACES
export interface modalTeams {
	onChangeTeamColor?: onBlurType;
	onChangeTeamName?: onBlurType;
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
	memberValue?: membersValues;
	onClickAddUser?: onClickType;
	modo?: Modo;
	teamColor?: string;
	teamNameValue?: string;
	membersOptions?: any;
	onChangeUserSelected?: onBlurType;
	role?: string;
	members?: members[];
}
