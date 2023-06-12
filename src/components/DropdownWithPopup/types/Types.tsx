import { Modo, css, optionsIcnDrp } from '../../../types';

export interface dropdownWithPopupProps {
	style?: css;
	className?: string;
	modo: Modo;
	dropdownOptions: optionsIcnDrp[];
	dropdownIcon: any;
	styleIcon?: css;
	disabledDropdown?: boolean;
	legend: string | number;
	validateToShowIcon?: any;
	children?: any;
	title?: string;
}
