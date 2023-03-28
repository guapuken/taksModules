import React from 'react';
import '../../styles.scss';
import { involucrados } from '../../utils/cardsUtils';
import IconDropdown from '../iconDropdown';
import InputTask from '../inputTask';
import { AddTask } from './complements/addTask';
import { IconAsign } from './complements/iconAsign';
import { IconDates } from './complements/iconDates';
import { IconMoreOptions } from './complements/iconMoreOptions';
import { IconPriority } from './complements/iconPriority';
import css from './task.module.scss';

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
	onClickCheck?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeNameTask?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChangeDescriptionTask?: (e: React.FocusEvent<HTMLInputElement>) => void;
	idCheckbox?: string;
	onChangeCheckbox?: (e: React.FormEvent<HTMLInputElement>) => void;

	//Icon Dates
	plantillas?: boolean;
	onChangeDias?: (e: React.FormEvent<HTMLInputElement>) => void;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onChangeEndDate?: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeStartDate?: (e: React.FormEvent<HTMLInputElement>) => void;
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
	onClickPrioridad?: (e: React.MouseEvent<HTMLElement>) => void;

	//Icon MoreOptions
	moreOptions?: optionsType[];
	onClickEliminar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickRecordatorio?: (e: React.MouseEvent<HTMLElement>) => void;

	//addTask
	subtaskForbbiden?: boolean;
	Children?: any;

	//botones agregar
	onClickCreateTemplate?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickAddTask?: (e: React.MouseEvent<HTMLElement>) => void;
	templateOptions?: optionsType[];
}
//Valida si existe la propiedad de plantillas y las agrega al dropdown de cargar plantilla en caso de que si exista
export const optionsPlantillas = (
	templateOptions: optionsType[],
	onClickCreateTemplate: (e: React.MouseEvent<HTMLElement>) => void
) => {
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
	} = props;

	const showTask = () => (plantillas ? false : true);

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
						options={optionsPlantillas(templateOptions, onClickCreateTemplate)}
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
