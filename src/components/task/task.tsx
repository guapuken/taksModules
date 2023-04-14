import React from 'react';
import { involucrados } from '../../utils/cardsUtils';
import IconDropdown from '../iconDropdown';
import InputTask from '../inputTask';
import { AddTask, IconAsign, IconDates, IconMoreOptions, IconPriority } from './files';
import { templateOptions } from './types';

import { tasksProps } from './types';
import './task.scss';

//Valida si existe la propiedad de plantillas y las agrega al dropdown de cargar plantilla en caso de que si exista
export const optionsPlantillas = (props: templateOptions) => {
	const { templateOptions, onClickCreateTemplate } = props;
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
					id: 'createTemplate',
					title: '+ Crear plantilla',
					onClick: onClickCreateTemplate,
				},
		  ]
		: [
				{
					id: 'createTemplate',
					title: '+ Crear plantilla',
					onClick: onClickCreateTemplate,
				},
				...templateOptions,
		  ];
};

//COMPONENTE PRINCIPAL
const Task = (props: tasksProps) => {
	//desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedaddes
	const { modo = 'Light' } = props;

	const showTask = () => (datos.plantillas ? false : true);

	return (
		<div className={`ctn${modo}_TascC`}>
			<InputTask
				modo={modo}
				style={{ maxWidth: '100%' }}
				principalTask={datos.principalTask}
				showTask={datos.plantillas ? false : true}
				disabled={
					datos.taskDisabled ? datos.taskDisabled : datos.taskComplete ? true : false
				}
				onChange={datos.onChangeCheckbox}
				checked={datos.taskComplete}
				isSubtask={datos.isSubtask}
				check={datos.check}
				onClickCheck={datos.onClickCheck}
				onChangeNameTask={datos.onChangeNameTask}
				onChangeDescriptionTask={datos.onChangeDescriptionTask}
				valueTask={datos.valueTask}
				valueDescription={datos.valueDescription}
				idCheckbox={datos.idCheckbox}
			/>
			<div
				className={'icnsCtn'}
				style={{
					padding: showTask() ? '0 0 0 20px' : '0',
				}}
			>
				<IconDates
					modo={modo}
					onChangeDias={datos.onChangeDias}
					plantillas={datos.plantillas}
					disabledEndDate={datos.disabledEndDate}
					disabledStartDate={datos.disabledStartDate}
					onChangeEndDate={datos.onChangeEndDate}
					onChangeStartDate={datos.onChangeStartDate}
					startDateValue={datos.startDateValue}
					endDateValue={datos.endDateValue}
					className={datos.className}
					durationValue={datos.durationValue}
				/>
				<IconAsign
					modo={modo}
					involucrados={involucrados(datos.valueResponsable, datos.valueRevision)}
					responsables={datos.responsables}
					equipos={datos.equipos}
					revision={datos.revision}
					valueResponsable={datos.valueResponsable}
					valueRevision={datos.valueRevision}
					style={{ marginRight: '20px' }}
				/>
				{!datos.plantillas && (
					<IconPriority
						modo={modo}
						onClickPrioridad={datos.onClickPrioridad}
						prioridadInicial={datos.prioridadInicial}
					/>
				)}
				<IconMoreOptions
					modo={modo}
					onClickEliminar={datos.onClickEliminar}
					onClickRecordatorio={datos.onClickRecordatorio}
					options={datos.moreOptions}
				/>
			</div>
			{datos.subtaskForbbiden ?? (
				<div style={{ display: 'flex', alignItems: 'baseline' }}>
					<AddTask legend="+ Añadir subtarea" onClick={datos.onClickAddTask} />
					<IconDropdown
						modo={modo}
						legend="Cargar plantilla"
						iconStyles={{
							marginLeft: '20px',
							fontSize: '15px',
						}}
						options={optionsPlantillas({
							templateOptions: datos.templateOptions,
							onClickCreateTemplate: datos.onClickCreateTemplate,
						})}
					/>
				</div>
			)}
			{datos.subtasks && (
				<div className={'ChildrenContainerTaskModules'}>
					{datos.subtasks.map((e) => (
						<Task
							idTask={e.idTask}
							taskDisabled={e.taskDisabled}
							taskComplete={e.taskComplete}
							check={e.check}
							valueTask={e.valueTask}
							valueDescription={e.valueDescription}
							onChangeNameTask={e.onChangeNameTask}
							onChangeDescriptionTask={e.onChangeDescriptionTask}
							idCheckbox={e.idTask}
							onChangeCheckbox={e.onChangeCheckbox}
							//
							disabledEndDate={e.disabledEndDate}
							disabledStartDate={e.disabledStartDate}
							onChangeEndDate={e.onChangeEndDate}
							onChangeStartDate={e.onChangeStartDate}
							startDateValue={e.startDateValue}
							endDateValue={e.endDateValue}
							//
							responsables={e.responsables}
							equipos={e.equipos}
							revision={e.revision}
							valueResponsable={e.valueResponsable}
							valueRevision={e.valueRevision}
							//
							prioridadInicial={e.prioridadInicial}
							onClickPrioridad={e.onClickPrioridad}
							//
							moreOptions={e.moreOptions}
							subtaskForbbiden={e.subtaskForbbiden}
							subtasks={e.subtasks}
							//
							onClickCreateTemplate={e.onClickCreateTemplate}
							onClickAddTask={e.onClickAddTask}
							templateOptions={e.templateOptions}
							modo={modo}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Task;
