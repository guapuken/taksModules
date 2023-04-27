import { css } from '../../types';

export interface carousel {
	Card?: any;
	width?: number;
	data?: elements[];
	property?: elements;
	setProperty?: any;
	ref?: any;
}

export type elements = {
	id: string;
	[key: string]: any;
};
