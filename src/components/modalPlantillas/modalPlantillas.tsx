import React from 'react';
import { onBlurType, onChangeType, onClickType } from '../../utils/types/typesUtils';
import Buttons from '../buttons';
import Modal from '../modal';
import Task from '../task';

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
type priorityTypes = 'baja' | 'media' | 'alta';

export interface ModalPlantillasProps {
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
	durationValue?: string;
	Children?: any;
}
const ModalPlantillas = (props: ModalPlantillasProps) => {
	const {
		onClickCrear,
		onClickCancelar,
		//
		equipos,
		revision,
		responsables,
		//
		idTask,
		onChangeDescription,
		onChangeName,
		onClickAddTask,
		onClickNewTemplate,
		onClickDeleteTask,
		taskDisabled,
		valueRevision,
		valueTask,
		valueDescription,
		valueResponsable,
		subtaskForbbiden,
		isSubtask,
		templateOptions,
		className,
		Children,
		durationValue,
	} = props;
	const Footer = () => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear plantilla', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);
	const Content = () => (
		<div>
			<Task
				idCheckbox={idTask}
				equipos={equipos}
				Children={Children}
				principalTask
				onChangeDescriptionTask={onChangeDescription}
				onChangeNameTask={onChangeName}
				onClickAddTask={onClickAddTask}
				onClickCreateTemplate={onClickNewTemplate}
				revision={revision}
				valueRevision={valueRevision}
				responsables={responsables}
				taskDisabled={taskDisabled}
				valueTask={valueTask}
				valueDescription={valueDescription}
				valueResponsable={valueResponsable}
				subtaskForbbiden={subtaskForbbiden}
				isSubtask={isSubtask}
				templateOptions={templateOptions}
				moreOptions={[
					{
						title: 'Eliminar',
						onClick: onClickDeleteTask,
					},
				]}
				className={className}
				plantillas
				durationValue={durationValue}
			/>
		</div>
	);
	const args = {
		header: 'Creación de plantillas',
		Content: Content,
		Footer: Footer,
	};
	return <Modal {...args} />;
};

export default ModalPlantillas;
