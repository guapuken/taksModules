import {
	Modo,
	onChangeType,
	onClickType,
	optionsDropdown,
	tasksTemplates,
} from '../../../../../types';
//INTERFACES
export interface modalTemplates {
	onCl_confirm: onClickType;
	onCl_abort: onClickType;
	onCl_addTask: onClickType;
	onCh_templateName: onChangeType;
	onCl_close: onClickType;
	onCl_postventaTemplate?: onClickType;
	onCl_ventaTemplate?: onClickType;
	onCl_preventaTemplate?: onClickType;
	onCl_plantillaMedio?: onClickType;
	onCl_plantillaReporte?: onClickType;

	onCh_dropDownTipoMedio: onChangeType;
	optionsTipoMedio?: optionsDropdown[];
	valueTipoMedio?: optionsDropdown;
	onCl_plantillaCampania: onClickType;
	onCh_checkboxMedio: onChangeType;

	edit?: boolean;
	templateNameValue?: string;
	idTemplate: string;
	tasks?: tasksTemplates[];
	modo: Modo;
	isMannager?: boolean;
	isPM?: boolean;
	haveSubPersonal?: boolean;
	onCh_checkboxPrintBF?: onChangeType;
	valueCheckboxPrintBF?: boolean;
	isEditingTemplate?: boolean;
	valueCheckboxMedio?: boolean;
	valueCheckboxCampaign?: boolean;
	disabledPreventa?: boolean;
	disabledVenta?: boolean;
	disabledPostventa?: boolean;
	valueTemplateType?: 'Preventa' | 'Venta' | 'Postventa';
	valueTipoPlantillaVenta?: 'PlantillaMedio' | 'PlantillaCampania' | null;
	valueTipoPlantillaPostventa?: 'PlantillaMedio' | 'PlantillaReporte' | null;
}
