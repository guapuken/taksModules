/// <reference types="react" />
import '../../styles.scss';
import './modal.scss';
export interface ModalProps {
    Content?: any;
    Footer?: any;
    data?: any;
    style?: {};
    styleHeader?: {};
    styleContent?: {};
    styleFooter?: {};
    header?: string;
}
declare const Modal: (props: ModalProps) => JSX.Element;
export default Modal;
