export interface carousel {
	Card?: any;
	height?: number;
	data: elements[];
	titleContent?: any;
}

export type elements = {
	id: string;
	[key: string]: any;
};
