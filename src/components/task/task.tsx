import React from 'react';
import '../../global.scss';
import { involucrados } from '../../utils/cardsUtils';
import IconDropdown from '../iconDropdown';
import InputTask from '../inputTask';
import { AddTask, IconAsign, IconDates, IconMoreOptions, IconPriority } from './files';
import './task.scss';
import { Modo, onBlurType, onChangeType, onClickType } from '../../types';

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

//INTERFACES
export interface TaskProps {
	//Input Task
	principalTask?: boolean;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	isSubtask?: boolean;
	check?: boolean;
	valueTask?: string;
	valueDescription?: string;
	onClickCheck?: onClickType;
	onChangeNameTask?: onBlurType;
	onChangeDescriptionTask?: onBlurType;
	idCheckbox?: string;
	onChangeCheckbox?: onChangeType;

	//Icon Dates
	plantillas?: boolean;
	onChangeDias?: onChangeType;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onChangeEndDate?: onChangeType;
	onChangeStartDate?: onChangeType;
	startDateValue?: Date;
	endDateValue?: Date;
	className?: string;
	durationValue?: string;

	//Icon Asign
	responsables?: submenus[];
	equipos?: submenus[];
	revision?: submenus[];
	valueResponsable?: string;
	valueRevision?: string;

	//Icon Priority
	prioridadInicial?: 'baja' | 'media' | 'alta';
	onClickPrioridad?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsType[];
	onClickEliminar?: onClickType;
	onClickRecordatorio?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	Children?: any;

	//botones agregar
	onClickCreateTemplate?: onClickType;
	onClickAddTask?: onClickType;
	templateOptions?: optionsType[];
	modo?: Modo;
}
//Valida si existe la propiedad de plantillas y las agrega al dropdown de cargar plantilla en caso de que si exista
export const optionsPlantillas = (
	templateOptions: optionsType[] | null,
	onClickCreateTemplate: onClickType | null
) => {
	templateOptions?.map((e: any) => {
		return {
			title: e.title,
			onClick: e.onClick,
			id: e.id,
		};
	});
	return !templateOptions
		? [
				{
					title: '+ Crear plantilla',
					onClick: onClickCreateTemplate,
				},
		  ]
		: [
				{
					title: '+ Crear plantilla',
					onClick: onClickCreateTemplate,
				},
				...templateOptions,
		  ];
};

//COMPONENTE PRINCIPAL
const Task = (props: TaskProps) => {
	//desestructuración de propiedades
	const {
		//Input Task
		principalTask = false,
		taskDisabled,
		taskComplete,
		isSubtask,
		check,
		onClickCheck,
		onChangeNameTask,
		onChangeDescriptionTask,
		valueTask,
		valueDescription,
		idCheckbox,
		onChangeCheckbox,

		//Icon Dates
		onChangeDias,
		plantillas = false,
		disabledEndDate,
		disabledStartDate,
		onChangeEndDate,
		onChangeStartDate,
		startDateValue,
		endDateValue,
		className,
		durationValue,

		//Icon Asign
		responsables,
		equipos,
		revision,
		valueResponsable,
		valueRevision,

		//Icon Priority
		onClickPrioridad,
		prioridadInicial,

		//Icon MoreOptions
		onClickEliminar,
		onClickRecordatorio,
		moreOptions,

		//addTask
		subtaskForbbiden,
		Children,

		//BotonesAgregar
		onClickCreateTemplate = () => {},
		onClickAddTask,
		templateOptions = [{}],
		modo = 'Light',
	} = props;

	const showTask = () => (plantillas ? false : true);

	return (
		<div className={`ctn${modo}_TascC`}>
			<InputTask
				modo={modo}
				style={{ maxWidth: '100%' }}
				principalTask={principalTask}
				showTask={plantillas ? false : true}
				disabled={taskDisabled ? taskDisabled : taskComplete ? true : false}
				onChange={onChangeCheckbox}
				checked={taskComplete}
				isSubtask={isSubtask}
				check={check}
				onClickCheck={onClickCheck}
				onChangeNameTask={onChangeNameTask}
				onChangeDescriptionTask={onChangeDescriptionTask}
				valueTask={valueTask}
				valueDescription={valueDescription}
				idCheckbox={idCheckbox}
			/>
			<div
				className={'icnsCtn'}
				style={{
					padding: showTask() ? '0 0 0 20px' : '0',
				}}
			>
				<IconDates
					modo={modo}
					onChangeDias={onChangeDias}
					plantillas={plantillas}
					disabledEndDate={disabledEndDate}
					disabledStartDate={disabledStartDate}
					onChangeEndDate={onChangeEndDate}
					onChangeStartDate={onChangeStartDate}
					startDateValue={startDateValue}
					endDateValue={endDateValue}
					className={className}
					durationValue={durationValue}
				/>
				<IconAsign
					modo={modo}
					involucrados={involucrados(valueResponsable, valueRevision)}
					responsables={responsables}
					equipos={equipos}
					revision={revision}
					valueResponsable={valueResponsable}
					valueRevision={valueRevision}
					style={{ marginRight: '20px' }}
				/>
				{!plantillas && (
					<IconPriority
						modo={modo}
						onClickPrioridad={onClickPrioridad}
						prioridadInicial={prioridadInicial}
					/>
				)}
				<IconMoreOptions
					modo={modo}
					onClickEliminar={onClickEliminar}
					onClickRecordatorio={onClickRecordatorio}
					options={moreOptions}
				/>
			</div>
			{subtaskForbbiden ?? (
				<div style={{ display: 'flex', alignItems: 'baseline' }}>
					<AddTask legend="+ Añadir subtarea" onClick={onClickAddTask} />
					<IconDropdown
						modo={modo}
						legend="Cargar plantilla"
						iconStyles={{
							marginLeft: '20px',
							fontSize: '15px',
						}}
						options={optionsPlantillas(templateOptions, onClickCreateTemplate)}
					/>
				</div>
			)}
			{Children && (
				<div className={'ChildrenContainerTaskModules'}>
					<Children />
				</div>
			)}
		</div>
	);
};

export default Task;
