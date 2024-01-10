import { Modo, css, onChangeType } from '../../../types';

export interface inputLabel {
	type?: 'text' | 'number' | 'email' | 'password';
	legend: string;
	initialValue?: string;
	min?: number;
	max?: number;
	onCh: /* onChangeType */any;
	style?: css;
	id: string;
	modo?: Modo;
}
