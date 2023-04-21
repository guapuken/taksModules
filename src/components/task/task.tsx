import React from 'react';
// componentes auxiliares
import { involucrados } from '../../utils/cardsUtils';
import { IconDropdown, InputTask } from '../../components';
import { AddTask, IconAsign, IconDates, IconMoreOptions, IconPriority } from './files';
// types
import { templateOptions } from './types';
import { tasks } from '../../types';
// estilos
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
const Task = (props: tasks) => {
	//desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedaddes
	const { modo = 'Light', prioridadInicial = 'none' } = props;

	const showTask = () => (datos.plantillas ? false : true);

	return (
		<div id={datos.idTask} className={`ctn${modo}_TascC`}>
			<InputTask
				id={datos.idTask}
				modo={modo}
				principalTask={datos.principalTask}
				showTask={datos.plantillas ? false : true}
				disabled={
					datos.taskDisabled ? datos.taskDisabled : datos.taskComplete ? true : false
				}
				chCheck={datos.chCheck}
				checked={datos.taskComplete}
				isSubtask={datos.isSubtask}
				check={datos.check}
				onChangeNameTask={datos.onChangeNameTask}
				onChangeDescriptionTask={datos.onChangeDescriptionTask}
				valueTask={datos.valueTask}
				valueDescription={datos.valueDescription}
				idCheckbox={datos.idTask}
			/>
			<div
				className={'icnsCtn'}
				style={{
					padding: showTask() ? '0 0 0 20px' : '0',
				}}
			>
				<IconDates
					idTask={datos.idTask}
					modo={modo}
					onChangeDuration={datos.onChangeDuration}
					plantillas={datos.plantillas}
					disabledEndDate={datos.check ? datos.check : datos.disabledEndDate}
					disabledStartDate={datos.check ? datos.check : datos.disabledStartDate}
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
					disabled={datos.check ? datos.check : false}
				/>
				{!datos.plantillas && (
					<IconPriority
						modo={modo}
						onClickPrioridad={datos.onClickPrioridad}
						prioridadInicial={prioridadInicial}
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
					<div style={{ borderLeft: '3px solid #28282830', paddingLeft: '20px' }}>
						{datos.subtasks.map((e: tasks) => (
							<div style={{ margin: '.5vh 0' }}>
								{datos.plantillas ? (
									<Task
										idTask={e.idTask}
										taskDisabled={e.taskDisabled}
										taskComplete={e.taskComplete}
										valueTask={e.valueTask}
										valueDescription={e.valueDescription}
										onChangeNameTask={e.onChangeNameTask}
										onChangeDescriptionTask={e.onChangeDescriptionTask}
										plantillas
										onChangeDuration={e.onChangeDuration}
										durationValue={e.durationValue}
										className={e.className}
										responsables={e.responsables}
										equipos={e.equipos}
										revision={e.revision}
										valueResponsable={e.valueResponsable}
										valueRevision={e.valueRevision}
										moreOptions={
											e.moreOptions ?? [
												{
													id: 'delete',
													title: 'Eliminar',
													onClick: e.onClickEliminar,
												},
											]
										}
										onClickEliminar={e.onClickEliminar}
										subtaskForbbiden={e.subtaskForbbiden}
										subtasks={e.subtasks}
										onClickCreateTemplate={e.onClickCreateTemplate}
										onClickAddTask={e.onClickAddTask}
										templateOptions={e.templateOptions}
										modo={modo}
									/>
								) : (
									<Task
										idTask={e.idTask}
										taskDisabled={e.taskDisabled}
										taskComplete={e.taskComplete}
										check={e.check}
										valueTask={e.valueTask}
										valueDescription={e.valueDescription}
										onClickCheck={e.onClickCheck}
										onChangeNameTask={e.onChangeNameTask}
										onChangeDescriptionTask={e.onChangeDescriptionTask}
										idCheckbox={e.idTask}
										chCheck={e.chCheck}
										//
										disabledEndDate={e.disabledEndDate}
										disabledStartDate={e.disabledStartDate}
										onChangeEndDate={e.onChangeEndDate}
										onChangeStartDate={e.onChangeStartDate}
										startDateValue={e.startDateValue}
										endDateValue={e.endDateValue}
										className={e.className}
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
										moreOptions={
											e.moreOptions ?? [
												{
													id: 'deleteTask',
													title: 'Eliminar',
													onClick: e.onClickEliminar,
												},
											]
										}
										onClickEliminar={e.onClickEliminar}
										onClickRecordatorio={e.onClickRecordatorio}
										//
										subtaskForbbiden={e.subtaskForbbiden}
										subtasks={e.subtasks}
										//
										onClickCreateTemplate={e.onClickCreateTemplate}
										onClickAddTask={e.onClickAddTask}
										templateOptions={e.templateOptions}
										modo={modo}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Task;
