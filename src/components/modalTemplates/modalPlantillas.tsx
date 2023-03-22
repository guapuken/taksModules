import React from 'react';
import { onChangeType, onClickType } from '../../utils/types/typesUtils';
import Buttons from '../buttons';
import InputLabel from '../inputLabel';
import Modal from '../modal';
import Task from '../task';
import { AddTask } from '../task/complements/addTask';
import '../../index.scss';

//TYPES
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

//INTERFACES
export interface ModalTemplatesProps {
	onClickCrear?: onClickType;
	onClickCancelar?: onClickType;
	onClickAddTask?: onClickType;
	onChangeTemplateName?: onChangeType;
	templateNameValue?: string;
	Children?: childrenTypes[];
}
const ModalTamplates = (props: ModalTemplatesProps) => {
	//DESESTRUCTURACIÓN DEL PROPIEDADES COMPONENTE PRINCIPAL
	const {
		onClickCrear,
		onClickCancelar,
		onClickAddTask,
		onChangeTemplateName = () => {},
		templateNameValue,
		Children,
	} = props;

	//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
	const Footer = () => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear plantilla', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);

	//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
	const Content = () => (
		<div>
			<InputLabel
				legend="Nombre de la plantilla"
				onChange={onChangeTemplateName}
				style={{ maxWidth: '98%' }}
				initialValue={templateNameValue}
			/>
			<AddTask legend="+ Añadir tarea" onClick={onClickAddTask} />
			<div style={{ borderLeft: '.2rem solid #282828', paddingLeft: '1rem' }}>
				{Children &&
					Children.map((e: any) => (
						<Task
							idCheckbox={e.idTask}
							equipos={e.equipos}
							Children={e.Children}
							principalTask
							onChangeDescriptionTask={e.onChangeDescription}
							onChangeNameTask={e.onChangeName}
							onClickAddTask={e.onClickAddTask}
							onClickCreateTemplate={e.onClickNewTemplate}
							revision={e.revision}
							valueRevision={e.valueRevision}
							responsables={e.responsables}
							taskDisabled={e.taskDisabled}
							valueTask={e.valueTask}
							valueDescription={e.valueDescription}
							valueResponsable={e.valueResponsable}
							subtaskForbbiden={e.subtaskForbbiden}
							templateOptions={e.templateOptions}
							moreOptions={[
								{
									title: 'Eliminar',
									onClick: e.onClickDeleteTask,
								},
							]}
							className={e.className}
							plantillas
							durationValue={e.durationValue}
						/>
					))}
			</div>
		</div>
	);

	//DESESTRUCTURACIÓN DE PROPIEDADES DEL COMPONENTE DE MODAL
	const args = {
		header: 'Creación de plantillas',
		Content: Content,
		Footer: Footer,
	};
	return <Modal {...args} />;
};

export default ModalTamplates;
