import React, { useState } from 'react';
import { involucrados } from '../../utils/cardsUtils';
import { onBlurType, onChangeType, onClickType } from '../../utils/types/typesUtils';
import IconDropdown from '../iconDropdown';
import InputTask from '../inputTask';
import { IconAsign } from './complements/iconAsign';
import { IconDates } from './complements/iconDates';
import { IconMoreOptions } from './complements/iconMoreOptions';
import { IconPriority } from './complements/iconPriority';
import './task.scss';

//TYPES
type submenus = {
	id?: number | string;
	className?: string;
	onClick?: onClickType;
	title?: string;
};
type prioridadTypes = 'baja' | 'media' | 'alta';
type optionsType = {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: onClickType;
	className?: string;
};

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
	prioridadInicial?: prioridadTypes;
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
}

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
		onClickCreateTemplate,
		onClickAddTask,
		templateOptions,
	} = props;

	const showTask = () => (plantillas ? false : true);

	interface AddTaskProps {
		onClick?: onClickType;
		legend?: string;
		style?: {};
	}
	const AddTask = (props: AddTaskProps) => {
		const { onClick, legend = '+ Añadir', style } = props;
		return (
			<button
				onClick={onClick}
				className="ButtonAddTaskComponent"
				style={{ marginBlock: '0', margin: '1rem 0 2rem 0', fontSize: '1.5rem', ...style }}
			>
				{legend}
			</button>
		);
	};

	//Valida si existe la propiedad de plantillas y las agrega al dropdown de cargar plantilla en caso de que si exista
	const optionsPlantillas = () => {
		templateOptions?.map((e: any) => {
			return {
				title: e.title,
				onClick: e.onClick,
			};
		});
		if (templateOptions !== undefined) {
			return [
				{
					title: '+ Crear plantilla',
					onClick: onClickCreateTemplate,
				},
				...templateOptions,
			];
		} else
			return [
				{
					title: '+ Crear plantilla',
					onClick: onClickCreateTemplate,
				},
			];
	};

	return (
		<div className="ContainerTaksComponent" /* style={{ background: 'red' }} */>
			<InputTask
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
				className="IconsTaskContainer "
				style={{
					padding: showTask() ? '0 0 0 2rem' : '0',
				}}
			>
				<IconDates
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
					involucrados={involucrados(valueResponsable, valueRevision)}
					responsables={responsables}
					equipos={equipos}
					revision={revision}
					valueResponsable={valueResponsable}
					valueRevision={valueRevision}
					style={{ marginRight: '2rem' }}
				/>
				{!plantillas && (
					<IconPriority
						onClickPrioridad={onClickPrioridad}
						prioridadInicial={prioridadInicial}
					/>
				)}
				<IconMoreOptions
					onClickEliminar={onClickEliminar}
					onClickRecordatorio={onClickRecordatorio}
					options={moreOptions}
				/>
			</div>
			{!subtaskForbbiden && (
				<>
					<AddTask legend="+ Añadir subtarea" onClick={onClickAddTask} />
					<IconDropdown
						legend="Cargar plantilla"
						iconStyles={{
							marginLeft: '2rem',
							fontSize: '1.5rem',
						}}
						options={optionsPlantillas()}
					/>
				</>
			)}
			{Children && (
				<div className="ChildrenContainerTaskModules">
					<Children />
				</div>
			)}
		</div>
	);
};

export default Task;
