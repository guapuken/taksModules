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
				onChange={datos.onChangeName}
				style={{ marginBottom: '10px' }}
				initialValue={datos.projectNameValue}
			/>
			<Spans
				boldLegend={'Equipo encargado'}
				legend={'(Opcional)'}
				style={{ opacity: '.5' }}
			/>
			<Dropdown
				onChange={datos.onChangeAsignTeam as onChangeType}
				options={datos.teamOptions}
				placeHolder="Asignar proyecto a un equipo"
				isSearchable
				modo={modo}
				style={{ margin: '5px 0 5px 0' }}
				initialValue={datos.initialTeamValue}
			/>
			<div style={{ display: 'flex', alignItems: 'baseline' }}>
				<AddTask legend="+ Añadir tarea" onClick={datos.onClickAddTask} />
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
											onClick: e.onClikEliminar,
										},
									]
								}
								//
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
			</div>
		</div>
	);
};

export default Content;
