import { Modo, onChangeType, onClickType } from '../../../../../types';

export interface modalRecordatorioProps {
	modo: Modo;
	onCl_confirmar: onClickType;
	isOpened: boolean;
	setData: any;
	onCh_fechaRecordatorio?: onChangeType;
	valueRecordatorio?: string;
}
