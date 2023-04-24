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
	const { templateOptions, onCl_newTemplate } = props;
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
					onClick: onCl_newTemplate,
				},
		  ]
		: [
				{
					id: 'createTemplate',
					title: '+ Crear plantilla',
					onClick: onCl_newTemplate,
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
				onCh_checkbox={datos.onCh_checkbox}
				checked={datos.taskComplete}
				isSubtask={datos.isSubtask}
				check={datos.check}
				onCh_nameTask={datos.onCh_nameTask}
				onCh_descriptionTask={datos.onCh_descriptionTask}
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
					onCh_duration={datos.onCh_duration}
					plantillas={datos.plantillas}
					disabledEndDate={datos.check ? datos.check : datos.disabledEndDate}
					disabledStartDate={datos.check ? datos.check : datos.disabledStartDate}
					onCh_endDate={datos.onCh_endDate}
					onCh_startDate={datos.onCh_startDate}
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
						onCl_selectPriority={datos.onCl_selectPriority}
						prioridadInicial={prioridadInicial}
					/>
				)}
				<IconMoreOptions
					modo={modo}
					onCl_delete={datos.onCl_delete}
					onCl_reminder={datos.onCl_reminder}
					options={datos.moreOptions}
				/>
			</div>
			{datos.subtaskForbbiden ?? (
				<div style={{ display: 'flex', alignItems: 'baseline' }}>
					<AddTask legend="+ Añadir subtarea" onClick={datos.onCl_addTask} />
					<IconDropdown
						modo={modo}
						legend="Cargar plantilla"
						iconStyles={{
							marginLeft: '20px',
							fontSize: '15px',
						}}
						options={optionsPlantillas({
							templateOptions: datos.templateOptions,
							onCl_newTemplate: datos.onCl_newTemplate,
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
										onCh_nameTask={e.onCh_nameTask}
										onCh_descriptionTask={e.onCh_descriptionTask}
										plantillas
										onCh_duration={e.onCh_duration}
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
													onClick: e.onCl_delete,
												},
											]
										}
										onCl_delete={e.onCl_delete}
										subtaskForbbiden={e.subtaskForbbiden}
										subtasks={e.subtasks}
										onCl_newTemplate={e.onCl_newTemplate}
										onCl_addTask={e.onCl_addTask}
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
										onCh_nameTask={e.onCh_nameTask}
										onCh_descriptionTask={e.onCh_descriptionTask}
										idCheckbox={e.idTask}
										onCh_checkbox={e.onCh_checkbox}
										//
										disabledEndDate={e.disabledEndDate}
										disabledStartDate={e.disabledStartDate}
										onCh_endDate={e.onCh_endDate}
										onCh_startDate={e.onCh_startDate}
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
										onCl_selectPriority={e.onCl_selectPriority}
										//
										moreOptions={
											e.moreOptions ?? [
												{
													id: 'deleteTask',
													title: 'Eliminar',
													onClick: e.onCl_delete,
												},
											]
										}
										onCl_delete={e.onCl_delete}
										onCl_reminder={e.onCl_reminder}
										//
										subtaskForbbiden={e.subtaskForbbiden}
										subtasks={e.subtasks}
										//
										onCl_newTemplate={e.onCl_newTemplate}
										onCl_addTask={e.onCl_addTask}
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
