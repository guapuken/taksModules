import React, { useEffect, useState } from 'react';
// componentes auxiliares
import { involucrados } from '../../utils/cardsUtils';
import { Dropdown, IconDropdown, InputTask } from '../../components';
import { AddTask, IconAsign, IconDates, IconMoreOptions, IconPriority } from './files';
import { ValidationComponent } from '../Atoms';
// types
import { templateOptions } from './types';
import { onChangeType, tasks } from '../../types';
// archivos multimedia
import dependencieIcon from '../../img/dependencies.svg';
// estilos
import './task.scss';
import DropdownWithPopup from '../DropdownWithPopup/DropdownWithPopup';
import { ButtonItem } from '../../utils/asideUtils';
import { autoIncrementalId } from '../../utils/functions/functions';
import { optionsIcnDrp } from '../../types';

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
const Task = ({
	plantillas,
	idTask,
	principalTask,
	taskDisabled,
	taskComplete,
	onCh_checkbox,
	isSubtask,
	check,
	onCh_nameTask,
	onCh_descriptionTask,
	valueTask,
	valueDescription,
	onCh_duration,
	disabledEndDate,
	disabledStartDate,
	onCh_endDate,
	onCh_startDate,
	startDateValue,
	endDateValue,
	className,
	durationValue,
	valueResponsable,
	valueRevision,
	responsables,
	equipos,
	revision,
	onCl_selectPriority,
	onCl_delete,
	onCl_reminder,
	moreOptions,
	subtaskForbbiden,
	onCl_addTask,
	templateOptions,
	onCl_newTemplate,
	subtasks,
	modo = 'Light',
	prioridadInicial = 'none',
	maxEndDate,
	maxStartDate,
	minEndDate,
	minStartDate,
	reasignForbidden,
	dependenciesOptions,
	dependencie,
	forbbidenDependencies,
}: tasks) => {
	return (
		<div id={idTask} className={`ctn${modo}_TascC`}>
			<InputTask
				check={check ?? false}
				showTask={plantillas ? false : true}
				modo={modo}
				principalTask={principalTask}
				// disabled={taskDisabled ? taskDisabled : taskComplete ? true : false}
				onCh_checkbox={onCh_checkbox}
				idCheckbox={idTask}
				id={idTask}
				onCh_nameTask={onCh_nameTask}
				valueTask={valueTask}
				onCh_descriptionTask={onCh_descriptionTask}
				valueDescription={valueDescription}
				isSubtask={isSubtask}
			/>
			<div className="icnsCtn">
				<IconDates
					idTask={idTask}
					maxEndDate={maxEndDate}
					maxStartDate={maxStartDate}
					minEndDate={minEndDate}
					minStartDate={minStartDate}
					modo={modo}
					onCh_duration={onCh_duration as onChangeType}
					plantillas={plantillas}
					disabledEndDate={check ? check : disabledEndDate}
					disabledStartDate={check ? check : disabledStartDate}
					onCh_endDate={onCh_endDate}
					onCh_startDate={onCh_startDate}
					startDateValue={startDateValue as string}
					endDateValue={endDateValue as string}
					className={className}
					durationValue={durationValue}
				/>
				<ValidationComponent validate={!reasignForbidden}>
					<IconAsign
						modo={modo}
						involucrados={involucrados(valueResponsable, valueRevision)}
						responsables={responsables}
						equipos={equipos}
						revision={revision}
						valueResponsable={valueResponsable}
						valueRevision={valueRevision}
						style={{ marginRight: '20px' }}
						disabled={check ? check : false}
					/>
				</ValidationComponent>
				<ValidationComponent validate={!plantillas}>
					<IconPriority
						modo={modo}
						onCl_selectPriority={onCl_selectPriority}
						prioridadInicial={prioridadInicial}
					/>
				</ValidationComponent>
				<ValidationComponent validate={!forbbidenDependencies}>
					<DropdownWithPopup
						dropdownIcon={dependencieIcon}
						dropdownOptions={dependenciesOptions as optionsIcnDrp[]}
						legend={1}
						modo={modo}
						validateToShowIcon={dependencie}
						title="Esta tarea se iniciará una vez finalice la tarea de la que depende"
					>
						<ValidationComponent validate={dependencie}>
							<span>
								<strong>Depende de la tarea: </strong>

								<span style={{ display: 'block' }}>{dependencie?.taskName}</span>
							</span>
						</ValidationComponent>
					</DropdownWithPopup>
				</ValidationComponent>
				<IconMoreOptions
					modo={modo}
					onCl_delete={onCl_delete}
					onCl_reminder={onCl_reminder}
					options={moreOptions}
				/>
			</div>
			{subtaskForbbiden ?? (
				<div style={{ display: 'flex', alignItems: 'baseline' }}>
					<AddTask legend="+ Añadir subtarea" onClick={onCl_addTask} />
					<IconDropdown
						modo={modo}
						legend="Cargar plantilla"
						iconStyles={{
							marginLeft: '20px',
							fontSize: '15px',
						}}
						options={optionsPlantillas({
							templateOptions: templateOptions,
							onCl_newTemplate: onCl_newTemplate,
						})}
					/>
				</div>
			)}
			{subtasks && (
				<div className={'ChildrenContainerTaskModules'}>
					<div
						style={{
							borderLeft: '3px solid #28282830',
							paddingLeft: '20px',
						}}
					>
						{subtasks.map((e: any) => {
							console.log(e);
							return (
								<div style={{ margin: '.5vh 0' }} key={e.idTask}>
									{plantillas ? (
										<Task
											check={e.check}
											onCh_checkbox={e.onCh_checkbox}
											onCh_endDate={e.onCh_endDate}
											onCh_startDate={e.onCh_startDate}
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
											dependenciesOptions={e.dependenciesOptions}
											dependencie={e.dependencie}
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
											dependenciesOptions={e.dependenciesOptions}
											dependencie={e.dependencie}
											maxEndDate={e.maxEndDate}
											maxStartDate={e.maxStartDate}
											minEndDate={e.minEndDate}
											minStartDate={e.minStartDate}
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
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default Task;
