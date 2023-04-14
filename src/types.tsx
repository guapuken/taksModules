import React from 'react';
//Exportación de types que se pueden repetir en múltiples archivos
// ---------------------------------------------------------------------------------------------------------
//      themas de color
// ---------------------------------------------------------------------------------------------------------
export type Modo = 'Dark' | 'Light';
// tamaños a usar
export type size = 'small' | 'medium' | 'large';
// export type statusTask = 'onTime' | 'delayed' | 'outOfTime';
export type statusTask = 'onTime' | 'delayed' | 'outOfTime' | 1 | 2 | 3;
// composiciones de botones
export type compositions = 'horizontal' | 'vertical' | 'box';
//tipos de task
export type taskType = 'principal' | 'task' | 'subtask';
// opciones del dropdown
export type optionsDropdown = {
	value: string | number;
	label: string;
};
// prioridades
export type prioritys = 'none' | 'baja' | 'media' | 'alta';
// ---------------------------------------------------------------------------------------------------------
//      icon dropdown
// ---------------------------------------------------------------------------------------------------------
// opciones del iconDropdown
export type optionsIcnDrp = {
	// requirements
	title: string;
	id: string;
	// notRequires
	onClick?: onClickType;
	submenus?: submenusArray[];
	className?: string;
};
//definición la estructura de los submenus del icon dropdown
export interface submenusArray {
	// reqquirements
	id: string;
	title: string;
	// notRequires
	onClick?: onClickType;
	className?: string;
}
// ---------------------------------------------------------------------------------------------------------
//      funciones
// ---------------------------------------------------------------------------------------------------------
export type onClickType = (e: React.MouseEvent<HTMLElement>) => void;
export type onChangeType = (e: React.FormEvent<HTMLInputElement>) => void;
export type onBlurType = (e: React.FocusEvent<HTMLInputElement>) => void;
// ---------------------------------------------------------------------------------------------------------
//      estilos
// ---------------------------------------------------------------------------------------------------------
export type css = React.CSSProperties;
