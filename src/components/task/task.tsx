import React from 'react';
import '../../global.scss';
import { involucrados } from '../../utils/cardsUtils';
import IconDropdown from '../iconDropdown';
import InputTask from '../inputTask';
import { AddTask, IconAsign, IconDates, IconMoreOptions, IconPriority } from './files';
import './task.scss';
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
	modo?: Modo;
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
