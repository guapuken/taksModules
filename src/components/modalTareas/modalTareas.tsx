import React from 'react';
import { onBlurType, onChangeType, onClickType } from '../../utils/types/typesUtils';
import Buttons from '../buttons';
import Modal from '../modal';
import Task from '../task';
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
const ModalTareas = (props: ModalTareasProps) => {
	const {
		onClickCrear,
		onClickCancelar,
		taskCheckValue,
		//
		equipos,
		revision,
		responsables,
		//
		idTask,
		onCheck,
		onChangeDescription,
		onChangeName,
		onClickAddTask,
		onClickNewTemplate,
		onClickPriority,
		onClickDeleteTask,
		onClickReminder,
		priorityValue,
		taskComplete,
		taskDisabled,
		valueRevision,
		onChangeDays,
		disabledEndDate,
		disabledStartDate,
		endDateValue,
		startDateValue,
		valueTask,
		valueDescription,
		valueResponsable,
		subtaskForbbiden,
		onClickCheck,
		onChangeStartDate,
		onChangeEndDate,
		isSubtask,
		templateOptions,
		moreOptions,
		plantillas,
		className,
		Children,
	} = props;
	const Footer = () => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear tarea', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);
	const Content = () => (
		<div>
			<Task
				check={taskCheckValue}
				onChangeCheckbox={onCheck}
				idCheckbox={idTask}
				equipos={equipos}
				Children={Children}
				principalTask
				onChangeDescriptionTask={onChangeDescription}
				onChangeNameTask={onChangeName}
				onClickAddTask={onClickAddTask}
				onClickCreateTemplate={onClickNewTemplate}
				onClickPrioridad={onClickPriority}
				onClickEliminar={onClickDeleteTask}
				onClickRecordatorio={onClickReminder}
				prioridadInicial={priorityValue}
				revision={revision}
				valueRevision={valueRevision}
				responsables={responsables}
				taskComplete={taskComplete}
				taskDisabled={taskDisabled}
				onChangeDias={onChangeDays}
				disabledEndDate={disabledEndDate}
				disabledStartDate={disabledStartDate}
				endDateValue={endDateValue}
				startDateValue={startDateValue}
				valueTask={valueTask}
				valueDescription={valueDescription}
				valueResponsable={valueResponsable}
				subtaskForbbiden={subtaskForbbiden}
				onClickCheck={onClickCheck}
				onChangeStartDate={onChangeStartDate}
				onChangeEndDate={onChangeEndDate}
				isSubtask={isSubtask}
				templateOptions={templateOptions}
				moreOptions={moreOptions}
				plantillas={plantillas}
				className={className}
			/>
		</div>
	);
	const args = {
		header: 'Creación de tareas',
		Content: Content,
		Footer: Footer,
	};
	return <Modal {...args} />;
};

export default ModalTareas;
