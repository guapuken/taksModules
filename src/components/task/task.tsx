import React, { useEffect, useState } from 'react';
// componentes auxiliares
import { IconDropdown, InputTask } from '../../components';
import { involucrados } from '../../utils/cardsUtils';
import { SimpleContainer, Texts, Title, ValidationComponent } from '../Atoms';
import { AddTask, IconAsign, IconDates, IconMoreOptions, IconPriority } from './files';
// types
import { tasks } from '../../types';
// archivos multimedia
import dependencieIcon from '../../img/dependencies.svg';
// estilos
import DropdownWithPopup from '../DropdownWithPopup/DropdownWithPopup';

//data auxiliar
import { opcionesDificultad } from './data/dificultadOptions';

import './task.scss';

// archivos multimedia
import { DificultadIcon } from '../../img/dificultadIcon';

//COMPONENTE PRINCIPAL
const Task = (props: tasks) => {
	const {
		plantillas,
		idTask,
		principalTask,
		taskDisabled,
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
		subtasks,
		modo = 'Light',
		prioridadInicial = 'none',
		maxEndDate,
		maxStartDate,
		minEndDate,
		minStartDate,
		reasignForbidden,
		dependenciesOptions,
		dependence,
		forbbidenDependencies,
		valueDificultad,
		onCh_dificultad,
		isPM,
		haveSubPersonal,
	} = props;

	const [dificultad, setDificultad] = useState({ ...valueDificultad });

	useEffect(() => {
		setDificultad({ ...valueDificultad });
	}, [valueDificultad]);

	const handleClick = (e: any) => {
		e.preventDefault();
		if (onCh_dificultad) onCh_dificultad(e);
		setDificultad({ id: e?.target?.id, title: e?.target?.outerText });
	};

	function heightSubtask() {
		const element = document.getElementById(`${idTask ?? ''}Subtask`);
		const numberLastElement = (subtasks?.length ?? 1) - 1;
		const lastElement = document.getElementById(
			subtasks
				? subtasks[numberLastElement]
					? subtasks[numberLastElement].idTask
						? `${subtasks[numberLastElement].idTask}Subtask`
						: ''
					: ''
				: ''
		);
		if (subtasks && subtasks[numberLastElement] && subtasks[numberLastElement].idTask) {
			element?.style.setProperty(
				'--heightSubtask',
				`${element.clientHeight - (lastElement?.clientHeight || 0)}px`
			);
		}
	}

	heightSubtask();

	return (
		<SimpleContainer
			labels={{
				id: idTask,
				className: 'tasks',
				'have-subtask': subtasks?.length ?? 0 >= 1 ? 'subtasks' : '',
			}}
		>
			<SimpleContainer>
				<InputTask
					check={check ?? false}
					showTask={plantillas ? false : true}
					modo={modo}
					principalTask={principalTask}
					disabled={taskDisabled}
					onCh_checkbox={onCh_checkbox ?? ({} as any)}
					idCheckbox={idTask}
					id={idTask}
					onCh_nameTask={onCh_nameTask}
					valueTask={valueTask}
					onCh_descriptionTask={onCh_descriptionTask}
					valueDescription={valueDescription}
					isSubtask={isSubtask}
				/>
				<SimpleContainer className="tasks__icons">
					<IconDates
						idTask={idTask}
						maxEndDate={maxEndDate}
						maxStartDate={maxStartDate}
						minEndDate={minEndDate}
						minStartDate={minStartDate}
						modo={modo}
						onCh_duration={onCh_duration ?? ({} as any)}
						plantillas={plantillas}
						disabledEndDate={check ? check : disabledEndDate}
						disabledStartDate={check ? check : disabledStartDate}
						onCh_endDate={onCh_endDate ?? ({} as any)}
						onCh_startDate={onCh_startDate ?? ({} as any)}
						startDateValue={startDateValue as string}
						endDateValue={endDateValue as string}
						className="tasks__icons-dates"
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
							disabled={check ? check : false}
							isPM={isPM}
							haveSubPersonal={haveSubPersonal}
						/>
					</ValidationComponent>
					<IconDropdown
						modo={modo}
						options={opcionesDificultad(handleClick)}
						svg={<DificultadIcon dificultad={dificultad} />}
						iconStyles={{ fill: 'red' }}
						title={`Dificultad ${dificultad.title ?? ''}`}
					/>
					<ValidationComponent validate={!forbbidenDependencies}>
						<DropdownWithPopup
							dropdownIcon={dependencieIcon}
							dropdownOptions={dependenciesOptions ?? []}
							legend={1}
							modo={modo}
							validateToShowIcon={dependence}
							title="Esta tarea se iniciará una vez finalice la tarea de la que depende"
						>
							<ValidationComponent validate={dependence}>
								<Title modo="Dark">Depende de la tarea:</Title>
								<Texts modo="Dark">{dependence?.title ?? ''}</Texts>
							</ValidationComponent>
						</DropdownWithPopup>
					</ValidationComponent>
					<ValidationComponent validate={!plantillas}>
						<IconPriority
							modo={modo}
							onCl_selectPriority={onCl_selectPriority}
							prioridadInicial={prioridadInicial}
						/>
					</ValidationComponent>
					<IconMoreOptions
						modo={modo}
						onCl_delete={onCl_delete}
						onCl_reminder={onCl_reminder}
						options={moreOptions}
					/>
				</SimpleContainer>
				<ValidationComponent validate={!subtaskForbbiden}>
					<SimpleContainer className="tasks__buttons">
						<AddTask legend="+ Añadir subtarea" onClick={onCl_addTask} />
						<IconDropdown
							modo={modo}
							legend="Cargar plantilla"
							iconStyles={{
								fontSize: '15px',
							}}
							options={templateOptions ?? null}
						/>
					</SimpleContainer>
				</ValidationComponent>
			</SimpleContainer>
			<ValidationComponent validate={subtasks}>
				<SimpleContainer
					className="tasks__subtareas"
					labels={{
						id: `${idTask}Subtask`,
					}}
				>
					{subtasks?.map((e: any) => {
						return (
							<SimpleContainer className="tasks__subtareas-individual" key={e.idTask}>
								<Task
									// inputTask_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
									idTask={e.idTask}
									idCheckbox={e.idCheckbox}
									valueTask={e.valueTask}
									valueDescription={e.valueDescription}
									onCh_descriptionTask={e.onCh_descriptionTask}
									onCh_nameTask={e.onCh_nameTask}
									onCh_checkbox={plantillas ? () => {} : e.onCh_checkbox}
									check={plantillas ? false : e.check}
									//Icons_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
									//////Date
									onCh_endDate={plantillas ? () => {} : e.onCh_endDate}
									onCh_startDate={plantillas ? () => {} : e.onCh_startDate}
									endDateValue={plantillas ? undefined : endDateValue}
									startDateValue={plantillas ? undefined : startDateValue}
									maxEndDate={plantillas ? undefined : maxEndDate}
									maxStartDate={plantillas ? undefined : maxStartDate}
									minEndDate={plantillas ? undefined : minEndDate}
									minStartDate={plantillas ? undefined : minStartDate}
									disabledEndDate={plantillas ? false : disabledEndDate}
									disabledStartDate={plantillas ? false : disabledStartDate}
									onCh_duration={plantillas ? onCh_duration : () => {}}
									durationValue={plantillas ? durationValue : undefined}
									//////asigUser
									responsables={e.responsables}
									revision={e.revision}
									valueRevision={e.valueRevision}
									valueResponsable={e.valueResponsable}
									equipos={e.equipos}
									reasignForbidden={e.reasignForbidden}
									//////dificultad
									valueDificultad={e.valueDificultad}
									onCh_dificultad={e.onCh_dificultad}
									//////dependencies
									dependence={e.dependence}
									dependenciesOptions={e.dependenciesOptions}
									forbbidenDependencies={e.forbbidenDependencies}
									//////prioritys
									onCl_selectPriority={
										plantillas ? () => {} : onCl_selectPriority
									}
									prioridadInicial={plantillas ? undefined : prioridadInicial}
									//////moreOptions
									moreOptions={e.moreOptions}
									onCl_delete={e.onCl_delete}
									onCl_reminder={plantillas ? () => {} : onCl_reminder}
									//buttons_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
									subtaskForbbiden={e.subtaskForbbiden}
									//////addTask
									onCl_addTask={e.onCl_addTask}
									//////chargeTemplates
									templateOptions={e.templateOptions}
									//generales_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
									isPM={isPM}
									subtasks={e.subtasks}
									haveSubPersonal={haveSubPersonal}
									taskComplete={plantillas ? false : e.taskComplete}
									taskDisabled={e.taskDisabled}
									onClickCheck={plantillas ? () => {} : e.onClickCheck}
									isSubtask
									modo={modo}
									plantillas={plantillas}
								/>
							</SimpleContainer>
						);
					})}
				</SimpleContainer>
			</ValidationComponent>
		</SimpleContainer>
	);
};

export default Task;
