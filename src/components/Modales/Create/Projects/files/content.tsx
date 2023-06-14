import React, { useEffect, useState } from 'react';
import { Dropdown, IconDropdown, InputLabel, Task } from '../../../../../components';
import { AddTask } from '../../../../task/files';
// import { optionsPlantillas } from '../../../../task/task';
import { onChangeType } from '../../../../../types';
import { Spans } from '../../../../../utils/cardsUtils';
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
}: content) => {
	//

	return (
		<div className="modalProjects" theme-config={modo} theme-style={themeStyle}>
			<InputLabel
				id={idProject}
				legend="Nombre del proyecto"
				onCh={onCh_nameProject}
				style={{ marginBottom: '10px' }}
				initialValue={projectNameValue}
			/>
			<Spans
				boldLegend={'Equipo encargado'}
				legend={'(Opcional)'}
				style={{ opacity: '.5' }}
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
			<div style={{ display: 'flex', alignItems: 'baseline' }}>
				<AddTask legend="+ Añadir tarea" onClick={onCl_addTask} />
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
						borderLeft: '3px solid #28282830',
						paddingLeft: '20px',
					}}
				>
					{subtasks &&
						subtasks.map((e: any) => {
							console.table(e);
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
