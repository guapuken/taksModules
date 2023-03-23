/// <reference types="react" />
import { onChangeType, onClickType } from '../../utils/types/typesUtils';
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
type childrenTypes = {
    idTask: String;
    equipos: optionsType[];
    Children: any;
    onChangeDescriptionTask: onChangeType;
    onChangeNameTask: onChangeType;
    onClickAddTask: onClickType;
    onClickCreateTemplate: onClickType;
    revision: optionsType[];
    valueRevision: string;
    responsables: optionsType[];
    taskDisabled: boolean;
    valueTask: string;
    valueDescription: string;
    valueResponsable: string;
    subtaskForbbiden: boolean;
    templateOptions: optionsType[];
    onClickDeleteTask: onClickType;
    className: string;
    durationValue: string;
};
export interface ModalTemplatesProps {
    onClickCrear?: onClickType;
    onClickCancelar?: onClickType;
    onClickAddTask?: onClickType;
    onChangeTemplateName?: onChangeType;
    templateNameValue?: string;
    Children?: childrenTypes[];
}
declare const ModalTamplates: (props: ModalTemplatesProps) => JSX.Element;
export default ModalTamplates;
