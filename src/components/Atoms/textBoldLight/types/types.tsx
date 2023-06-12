import { Modo, css } from '../../../../types';

export interface textBoldLightProps {
	legend?: string | number;
	boldLegend?: string | number;
	positionBold?: 'start' | 'end';
	styleBold?: css;
	style?: css;
	fontSize?: string;
	className?: string;
	modo?: Modo;
}
