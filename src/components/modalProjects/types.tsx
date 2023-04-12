import React from 'react';
import { Modo, onChangeType, onClickType } from '../../types';

// botones
export type clickButtons = {
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
};

// interfaz principal
export interface ModalProjectsProps {
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
	onClickAddTask?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeName?: onChangeType;
	projectNameValue?: string;
	Children?: childrenTypes[];
	templateOptions?: optionsType[];
	onClickCreateTemplate?: (e: React.MouseEvent<HTMLElement>) => void;
	modo: Modo;
}

// types
export type submenus = {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
};
export type optionsType = {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	className?: string;
};
export type childrenTypes = {
	idTask: String;
	equipos: optionsType[];
	Children: any;
	onChangeDescriptionTask: onChangeType;
	onChangeNameTask: onChangeType;
	onClickAddTask: (e: React.MouseEvent<HTMLElement>) => void;
	onClickCreateTemplate: (e: React.MouseEvent<HTMLElement>) => void;
	revision: optionsType[];
	valueRevision: string;
	responsables: optionsType[];
	taskDisabled: boolean;
	valueTask: string;
	valueDescription: string;
	valueResponsable: string;
	subtaskForbbiden: boolean;
	templateOptions: optionsType[];
	onClickDeleteTask: (e: React.MouseEvent<HTMLElement>) => void;
	className: string;
	durationValue: string;
};
