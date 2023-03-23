/// <reference types="react" />
import { onChangeType, onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './modalTeams.scss';
type submenus = {
    id?: number | string;
    className?: string;
    title?: string;
    onClick?: onClickType;
};
type optionsType = {
    id?: string;
    title?: string;
    className?: string;
    submenus?: submenus[];
    onClick?: onClickType;
};
export interface ModalTeamsProps {
    onClickCrear?: onClickType;
    onClickCancelar?: onClickType;
    onClickAddUser?: onClickType;
    onClickCreateTemplate?: onClickType;
    onChangeTeamName?: onChangeType;
    onChangeTeamColor?: onChangeType;
    onChangeRolname?: onChangeType;
    templateOptions?: optionsType[];
    teamNameValue?: string;
    teamColor?: string;
    memberValue?: {
        value?: string | number;
        label?: string;
    };
    role?: string;
    membersOptions?: any;
    Children?: any;
}
export declare const Members: (props: any) => JSX.Element;
declare const ModalTeams: (props: ModalTeamsProps) => JSX.Element;
export default ModalTeams;
