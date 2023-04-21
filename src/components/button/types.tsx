import React from 'react';
// types externos
import { Modo, onClickType, size } from '../../types';

export interface button {
	onCl_button?: onClickType;
	size?: size;
	//css properties
	style?: React.CSSProperties;
	styleIcon?: React.CSSProperties;
	//string properties
	legend?: string;
	color?: string;
	id?: string;
	key?: string;
	icon?: string;
	colorHover?: string;
	className?: string;
	//boolean properties
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	rounded?: boolean;
	disabled?: boolean;
	border?: boolean;
	float?: boolean;
	modo?: Modo;
}
