import React from 'react';
import Buttons from '../buttons';
import Modal from '../modal';
import Task from '../task';
import '../../global.scss';
import { onBlurType, onChangeType, onClickType, optionsIcnDrp, submenusArray } from '../../types';

//TYPES
interface submenus {
	id?: string;
	className?: string;
	onClick?: onClickType;
	title?: string;
}
interface optionsType {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: onClickType;
	className?: string;
}

export interface ModalTareasProps {
	onClickCrear?: onClickType;
	onClickCancelar?: onClickType;
	onClickAddTask?: onClickType;
	onClickNewTemplate: onClickType;
	onClickPriority?: onClickType;
	onClickDeleteTask?: onClickType;
	onClickReminder?: onClickType;
	taskCheckValue?: boolean;
	priorityValue?: 'baja' | 'media' | 'alta';
	equipos: submenusArray[];
	revision: submenusArray[];
	responsables: submenusArray[];
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
	templateOptions: optionsIcnDrp[];
	moreOptions: optionsIcnDrp[];
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
