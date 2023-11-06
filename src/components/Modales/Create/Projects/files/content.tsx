import React, { useEffect, useState } from 'react';
import { Button, Dropdown, IconDropdown, InputLabel, Task } from '../../../../../components';
import { AddTask } from '../../../../task/files';
// import { optionsPlantillas } from '../../../../task/task';
import { onChangeType, onClickType } from '../../../../../types';
import { Spans } from '../../../../../utils/cardsUtils';
import { SimpleContainer, TextBoldLight, Texts, ValidationComponent } from '../../../../Atoms';
import { content } from '../types/types';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
const Content = ({
	idProject,
	onCh_nameProject,
	projectNameValue,
	onCh_asignTeam,
	teamOptions,
	initialTeamValue,
	onCl_addTask,
	templateOptions,
	subtasks,
	modo = 'Light',
	themeStyle,
	isMannager,
	onCh_asignPM,
	optionsPM,
	PMSelected,
}: content) => {
	return (
		<div className="modalProjects" theme-config={modo} theme-style={themeStyle}>
			<InputLabel
				id={idProject}
				legend="Nombre del proyecto"
				onCh={onCh_nameProject}
				style={{ marginBottom: '10px' }}
				initialValue={projectNameValue}
			/>
			<SimpleContainer style={{ display: 'flex', gap: '10px', width: '100%' }}>
				<SimpleContainer style={{ width: '100%' }}>
					<TextBoldLight
						boldLegend={'Equipo encargado'}
						legend={'(Opcional)'}
						modo={modo}
						styleBold={{ textTransform: 'none' }}
					/>
					<Dropdown
						onCh={onCh_asignTeam}
						options={teamOptions}
						placeHolder="Asignar proyecto a un equipo"
						isSearchable
						modo={modo}
						style={{ margin: '5px 0 5px 0' }}
						initialValue={initialTeamValue}
					/>
				</SimpleContainer>
				<ValidationComponent validate={isMannager}>
					<SimpleContainer style={{ width: '100%' }}>
						<Spans boldLegend={'Asignar project mannager'} style={{ opacity: '.5' }} />
						<Dropdown
							modo={modo}
							onCh={onCh_asignPM as onChangeType}
							options={optionsPM ?? []}
							initialValue={PMSelected}
							isSearchable
							style={{ margin: '5px 0 5px 0' }}
							placeHolder="Asignar a un project mannager"
						/>
					</SimpleContainer>
				</ValidationComponent>
			</SimpleContainer>
			<div style={{ display: 'flex', alignItems: 'baseline' }}>
				<AddTask modo={modo} legend="+ Añadir tarea" onClick={onCl_addTask} />
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
			<div style={{ paddingLeft: '15px' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}
				>
					{subtasks &&
						subtasks.map((e: any) => {
							return (
								<Task
									reasignForbidden={e.reasignForbidden}
									key={e.idTask}
									isPM={e.isPM}
									haveSubPersonal={e.haveSubPersonal}
									idTask={e.idTask}
									taskDisabled={e.taskDisabled}
									taskComplete={e.taskComplete}
									check={e.check}
									dependence={e.dependence}
									dependenciesOptions={e.dependenciesOptions ?? []}
									valueTask={e.valueTask}
									valueDescription={e.valueDescription}
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
									maxEndDate={e.maxEndDate}
									maxStartDate={e.maxStartDate}
									minEndDate={e.minEndDate}
									minStartDate={e.minStartDate}
									//
									responsables={e.responsables}
									equipos={e.equipos}
									revision={e.revision}
									valueTeam={e.valueTeam}
									valueResponsable={e.valueResponsable}
									valueRevision={e.valueRevision}
									//
									prioridadInicial={e.prioridadInicial}
									onCl_selectPriority={e.onCl_selectPriority}
									valueDificultad={e.valueDificultad}
									onCh_dificultad={e.onCh_dificultad}
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
									//
									subtaskForbbiden={e.subtaskForbbiden}
									subtasks={e.subtasks}
									//
									// onCl_newTemplate={e.onCl_newTemplate}
									onCl_addTask={e.onCl_addTask}
									templateOptions={e.templateOptions}
									modo={modo}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Content;
