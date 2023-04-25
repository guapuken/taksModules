export interface carousel {
	Card?: any;
	width?: number;
	data?: elements[];
}

export type elements = {
	id: string;
	index: number;
	[key: string]: any;
};
