import { Modo, css } from '../../../types';
import { onClicks } from './aside';
import { header } from './header';
export interface container {
	children?: any;
	AsideContent?: any;
	FooterContent?: any;
	header?: header;
	onCl_menus?: onClicks;
	style?: css;
	headerStyle?: css;
	contentStyle?: css;
	footerStyle?: css;
	modo?: Modo;
	isPM?: boolean;
}
