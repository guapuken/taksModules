import { Modo, onBlurType, onChangeType, onClickType } from '../../types';

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

// //INTERFACES
export interface modalTeams {
	onChangeTeamColor?: onBlurType;
	onChangeTeamName?: onBlurType;
	memberValue?: membersValues;
	onClickAddUser?: onClickType;
	modo?: Modo;
	teamColor?: string;
	teamNameValue?: string;
	membersOptions?: any;
	onChangeUserSelected?: onBlurType;
	role?: string;
	Children?: any;
}
