/// <reference types="react" />
import { onBlurType, onChangeType, onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
type submenus = {
    id?: number | string;
    className?: string;
    onClick?: onClickType;
    title?: string;
};
type optionsType = {
    id?: string;
    submenus?: submenus[];
    title?: string;
    onClick?: onClickType;
    className?: string;
};
type priorityTypes = 'baja' | 'media' | 'alta';
export interface ModalTareasProps {
    onClickCrear?: onClickType;
    onClickCancelar?: onClickType;
    onClickAddTask?: onClickType;
    onClickNewTemplate?: onClickType;
    onClickPriority?: onClickType;
    onClickDeleteTask?: onClickType;
    onClickReminder?: onClickType;
    taskCheckValue?: boolean;
    priorityValue?: priorityTypes;
    equipos?: submenus[];
    revision?: submenus[];
    responsables?: submenus[];
    idTask?: string;
    onCheck?: onChangeType;
    onChangeDays?: onChangeType;
    onChangeDescription?: onBlurType;
    onChangeName?: onBlurType;
    taskComplete?: boolean;
    taskDisabled?: boolean;
    valueRevision?: string;
    disabledEndDate?: boolean;
    disabledStartDate?: boolean;
    endDateValue?: Date;
    startDateValue?: Date;
    valueTask?: string;
    valueDescription?: string;
    valueResponsable?: string;
    subtaskForbbiden?: boolean;
    onClickCheck?: onClickType;
    onChangeStartDate?: onChangeType;
    onChangeEndDate?: onChangeType;
    isSubtask?: boolean;
    templateOptions?: optionsType[];
    moreOptions?: optionsType[];
    plantillas?: boolean;
    className?: string;
    Children?: any;
}
declare const ModalTareas: (props: ModalTareasProps) => JSX.Element;
export default ModalTareas;
