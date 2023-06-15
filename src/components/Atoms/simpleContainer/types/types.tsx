import { css, onClickType } from '../../../../types';
export type simpleContainerProps = {
	children: any;
	style?: css;
	className?: string;
	id?: string;
	onClick?: onClickType;
	draggable?: boolean;
	labels?: { [key: string]: string };
	// [key:string]?: any;
};
