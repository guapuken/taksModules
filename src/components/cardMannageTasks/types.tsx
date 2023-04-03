import { Modo, statusTask } from '../../types';

export type content = {
	modo?: Modo;
	title?: string;
	statusTask?: statusTask;
	percentTask?: number;
	tasks?: number;
};
