import React from 'react';
import { Dropdown, IconDropdown, InputLabel, Task } from '../../../components';
import { AddTask } from '../../task/files';
import { optionsPlantillas } from '../../task/task';
import { content } from '../types';
import { onChangeType } from '../../../types';
import { Spans } from '../../../utils/cardsUtils';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
const Content = (props: content) => {
	// desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const { modo = 'Light' } = props;

	//
	return (
		<div>
			<InputLabel
				id={datos.idProject}
				legend="Nombre del proyecto"
				onCh={datos.onCh_nameProject}
				style={{ marginBottom: '10px' }}
				initialValue={datos.projectNameValue}
			/>
			<Spans
				boldLegend={'Equipo encargado'}
				legend={'(Opcional)'}
				style={{ opacity: '.5' }}
			/>
			<Dropdown
				onCh={datos.onCh_asignTeam as onChangeType}
				options={datos.teamOptions}
				placeHolder="Asignar proyecto a un equipo"
				isSearchable
				modo={modo}
				style={{ margin: '5px 0 5px 0' }}
				initialValue={datos.initialTeamValue}
			/>
			<div style={{ display: 'flex', alignItems: 'baseline' }}>
				<AddTask legend="+ Añadir tarea" onClick={datos.onCl_addTask} />
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
			<div style={{ paddingLeft: '15px' }}>
				<div
					style={{
						borderLeft: '3px solid #28282830',
						paddingLeft: '20px',
					}}
				>
					{datos.subtasks &&
						datos.subtasks.map((e: any) => (
							<Task
								idTask={e.idTask}
								taskDisabled={e.taskDisabled}
								taskComplete={e.taskComplete}
								check={e.check}
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
								//
								subtaskForbbiden={e.subtaskForbbiden}
								subtasks={e.subtasks}
								//
								onCl_newTemplate={e.onCl_newTemplate}
								onCl_addTask={e.onCl_addTask}
								templateOptions={e.templateOptions}
								modo={modo}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Content;
