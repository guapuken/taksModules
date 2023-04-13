import React from 'react';
import { Modo } from '../../types';

export interface modalProps {
	// elements
	header?: string;
	Content?: any;
	Footer?: any;
	// styles
	style?: React.CSSProperties;
	styleHeader?: React.CSSProperties;
	styleContent?: React.CSSProperties;
	styleFooter?: React.CSSProperties;
	// theme
	modo?: Modo;
}

// componente header
export type header = {
	header?: string;
	styleHeader?: React.CSSProperties;
};

// componente footer
export type footer = {
	Footer?: any;
	styleFooter?: React.CSSProperties;
};

// componente footer
export type content = {
	header?: string;
	Content?: any;
	Footer?: any;
	styleContent?: React.CSSProperties;
};
