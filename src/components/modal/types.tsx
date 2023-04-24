import React from 'react';
import { Modo, css } from '../../types';

export interface modalProps {
	// elements
	header?: string;
	Content?: any;
	Footer?: any;
	// styles
	style?: css;
	styleHeader?: css;
	styleContent?: css;
	styleFooter?: css;
	// theme
	modo?: Modo;
}

// componente header
export type header = {
	header?: string;
	styleHeader?: css;
};

// componente footer
export type footer = {
	Footer?: any;
	styleFooter?: css;
};

// componente footer
export type content = {
	header?: string;
	Content?: any;
	Footer?: any;
	styleContent?: css;
};
