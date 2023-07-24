import { Modo } from '../../../types';

export interface carousel {
	Card?: any;
	height?: number;
	data: elements[];
	titleContent?: any;
	modo: Modo;
}

export type elements = {
	id: string;
	[key: string]: any;
};
