import React from 'react';

//componentes principales
import { Content, Footer } from './files';
//componentes auxiliares
import Modal from '../modal';
// types
import { Modo } from '../../types';

//TYPES
interface submenus {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
}
interface optionsType {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	className?: string;
}
interface childrenTypes {
	idTask: String;
	equipos: optionsType[];
	Children: any;
	onChangeDescriptionTask: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeNameTask: (e: React.FormEvent<HTMLInputElement>) => void;
	onClickAddTask: (e: React.MouseEvent<HTMLElement>) => void;
	onClickCreateTemplate: (e: React.MouseEvent<HTMLElement>) => void;
	revision: optionsType[];
	valueRevision: string;
	responsables: optionsType[];
	taskDisabled: boolean;
	valueTask: string;
	valueDescription: string;
	valueResponsable: string;
	subtaskForbbiden: boolean;
	templateOptions: optionsType[];
	onClickDeleteTask: (e: React.MouseEvent<HTMLElement>) => void;
	className: string;
	durationValue: string;
}

//INTERFACES
export interface ModalProjectsProps {
	onClickCrear?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickCancelar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickAddTask?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeTemplateName?: (e: React.FormEvent<HTMLInputElement>) => void;
	projectNameValue?: string;
	Children?: childrenTypes[];
	templateOptions?: optionsType[];
	onClickCreateTemplate?: (e: React.MouseEvent<HTMLElement>) => void;
	modo: Modo;
}
const ModalProjects = (props: ModalProjectsProps) => {
	return (
		<Modal
			header="Creación de proyectos"
			Content={() => <Content {...props} />}
			Footer={() => <Footer {...props} />}
		/>
	);
};

export default ModalProjects;
