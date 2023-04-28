import { css } from '../../types';

export interface carousel {
	Card?: any;
	width?: number;
	height?: number;
	data?: elements[];
	property?: elements;
	setProperty?: any;
	ref?: any;
	titleContent?: any;
}

export type elements = {
	id: string;
	[key: string]: any;
};
