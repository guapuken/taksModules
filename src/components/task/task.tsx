import React, { useEffect, useState } from 'react';
// componentes auxiliares
import { Dificultad, IconDropdown, InputTask } from '../../components';
import { involucrados } from '../../utils/cardsUtils';
import { SimpleContainer, ValidationComponent } from '../Atoms';
import { AddTask, IconAsign, IconDates, IconMoreOptions, IconPriority } from './files';
// types
import { onChangeType, tasks } from '../../types';
// archivos multimedia
import dependencieIcon from '../../img/dependencies.svg';
// estilos
import { optionsIcnDrp } from '../../types';
import DropdownWithPopup from '../DropdownWithPopup/DropdownWithPopup';
import './task.scss';

// archivos multimedia
import { FlameIcon } from '../../img/flame';
import flame from '../../img/flame.svg';

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

	console.log('dificultad', dificultad);
	useEffect(() => {
		setDificultad({ ...valueDificultad });
	}, [valueDificultad]);

	const handleClick = (e: any) => {
		e.preventDefault();
		if (onCh_dificultad) onCh_dificultad(e);
		setDificultad({ id: e.target.id, title: e.target.outerText });
	};

	return (
		<div id={idTask} className={`ctn_TascC`}>
			<InputTask
				check={check ?? false}
				showTask={plantillas ? false : true}
				modo={modo}
				principalTask={principalTask}
				disabled={taskDisabled}
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
						isPM={isPM}
						haveSubPersonal={haveSubPersonal}
					/>
				</ValidationComponent>
				<IconDropdown
					modo={modo}
					options={[
						{
							id: '1',
							title: 'Muy fácil',
							onClick: handleClick,
						},
						{
							id: '2',
							title: 'Fácil',
							onClick: handleClick,
						},
						{
							id: '3',
							title: 'Normal',
							onClick: handleClick,
						},
						{
							id: '4',
							title: 'Dificil',
							onClick: handleClick,
						},
						{
							id: '5',
							title: 'Muy dificil',
							onClick: handleClick,
						},
					]}
					svg={
						<SimpleContainer>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
								fill={
									dificultad.id === '1'
										? 'green'
										: dificultad.id === '2'
										? 'greenyellow'
										: dificultad.id === '3'
										? 'yellow'
										: dificultad.id === '4'
										? 'orange'
										: dificultad.id === '5'
										? 'red'
										: '#525252'
								}
								style={{ height: '30px' }}
							>
								<path d="M384 319.1C384 425.9 297.9 512 192 512s-192-86.13-192-192c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5v85.5c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2c13.5-19.72 44.15-10.77 44.15 13.03C215.1 127 384 149.7 384 319.1z" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
								fill={
									dificultad.id === '1'
										? 'green'
										: dificultad.id === '2'
										? 'greenyellow'
										: dificultad.id === '3'
										? 'yellow'
										: dificultad.id === '4'
										? 'orange'
										: dificultad.id === '5'
										? 'red'
										: '#000'
								}
								style={{
									height: '30px',
									position: 'absolute',
									left: '3px',
									opacity: 0.3,
									zIndex: -1,
								}}
							>
								<path d="M384 319.1C384 425.9 297.9 512 192 512s-192-86.13-192-192c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5v85.5c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2c13.5-19.72 44.15-10.77 44.15 13.03C215.1 127 384 149.7 384 319.1z" />
							</svg>
						</SimpleContainer>
					}
					iconStyles={{ fill: 'red' }}
					title={`Dificultad ${dificultad.title ?? ''}`}
				/>
				<ValidationComponent validate={!forbbidenDependencies}>
					<DropdownWithPopup
						dropdownIcon={dependencieIcon}
						dropdownOptions={dependenciesOptions as optionsIcnDrp[]}
						legend={1}
						modo={modo}
						validateToShowIcon={dependence}
						title="Esta tarea se iniciará una vez finalice la tarea de la que depende"
					>
						<ValidationComponent validate={dependence}>
							<span>
								<strong>Depende de la tarea: </strong>

								<span style={{ display: 'block' }}>{dependence?.title ?? ''}</span>
							</span>
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
			</div>
			<ValidationComponent validate={!subtaskForbbiden}>
				<div style={{ display: 'flex', alignItems: 'baseline', position: 'relative' }}>
					<AddTask legend="+ Añadir subtarea" onClick={onCl_addTask} />
					<IconDropdown
						modo={modo}
						legend="Cargar plantilla"
						iconStyles={{
							marginLeft: '20px',
							fontSize: '15px',
						}}
						options={templateOptions ?? []}
					/>
				</div>
			</ValidationComponent>
			{subtasks && (
				<div className={'ChildrenContainerTaskModules'}>
					<div
						style={{
							borderLeft: '3px solid #28282830',
							paddingLeft: '20px',
						}}
					>
						{subtasks.map((e: any) => {
							return (
								<div style={{ margin: '.5vh 0' }} key={e.idTask}>
									{plantillas ? (
										<Task
											check={e.check}
											isPM={isPM}
											haveSubPersonal={haveSubPersonal}
											onCh_checkbox={e.onCh_checkbox}
											onCh_endDate={e.onCh_endDate}
											onCh_startDate={e.onCh_startDate}
											idTask={e.idTask}
											valueDificultad={e.valueDificultad}
											onCh_dificultad={e.onCh_dificultad}
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
											dependenciesOptions={e.dependenciesOptions ?? []}
											dependence={e.dependence}
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
											onCl_addTask={e.onCl_addTask}
											templateOptions={e.templateOptions}
											modo={modo}
										/>
									) : (
										<Task
											isPM={isPM}
											haveSubPersonal={haveSubPersonal}
											idTask={e.idTask}
											taskDisabled={e.taskDisabled}
											taskComplete={e.taskComplete}
											valueDificultad={e.valueDificultad}
											onCh_dificultad={e.onCh_dificultad}
											check={e.check}
											valueTask={e.valueTask}
											valueDescription={e.valueDescription}
											onClickCheck={e.onClickCheck}
											onCh_nameTask={e.onCh_nameTask}
											onCh_descriptionTask={e.onCh_descriptionTask}
											idCheckbox={e.idTask}
											onCh_checkbox={e.onCh_checkbox}
											dependenciesOptions={e.dependenciesOptions ?? []}
											dependence={e.dependence}
											maxEndDate={e.maxEndDate}
											maxStartDate={e.maxStartDate}
											minEndDate={e.minEndDate}
											minStartDate={e.minStartDate}
											disabledEndDate={e.disabledEndDate}
											disabledStartDate={e.disabledStartDate}
											onCh_endDate={e.onCh_endDate}
											onCh_startDate={e.onCh_startDate}
											startDateValue={e.startDateValue}
											endDateValue={e.endDateValue}
											className={e.className}
											responsables={e.responsables}
											equipos={e.equipos}
											revision={e.revision}
											valueResponsable={e.valueResponsable}
											valueRevision={e.valueRevision}
											prioridadInicial={e.prioridadInicial}
											onCl_selectPriority={e.onCl_selectPriority}
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
											subtaskForbbiden={e.subtaskForbbiden}
											subtasks={e.subtasks}
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
