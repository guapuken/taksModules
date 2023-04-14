import React from 'react';
import { IconDropdown, InputLabel, Task } from '../../../components';
import { AddTask } from '../../task/files';
import { optionsPlantillas } from '../../task/task';
import { content } from '../types';
import { onClickType } from '../../../types';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
const Content = (props: content) => {
	const {
		onChangeName,
		projectNameValue,
		onClickAddTask,
		modo = 'Light',
		templateOptions,
		onClickCreateTemplate,
		subtasks,
	} = props;

	return (
		<div>
			<InputLabel
				legend="Nombre del proyecto"
				onChange={onChangeName}
				style={{ maxWidth: '98%' }}
				initialValue={projectNameValue}
			/>
			<div style={{ display: 'flex', alignItems: 'baseline' }}>
				<AddTask legend="+ Añadir tarea" onClick={onClickAddTask} />
				<IconDropdown
					modo={modo}
					legend="Cargar plantilla"
					iconStyles={{
						marginLeft: '20px',
						fontSize: '15px',
					}}
					options={optionsPlantillas({
						templateOptions: templateOptions,
						onClickCreateTemplate: onClickCreateTemplate,
					})}
				/>
			</div>
			<div style={{ borderLeft: '2px solid #282828', paddingLeft: '10px' }}>
				{subtasks &&
					subtasks.map((e: any) => (
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
							moreOptions={[
								{
									id: 'delete',
									title: 'Eliminar',
									onClick: e.onClickDeleteTask,
								},
							]}
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
	);
};

export default Content;
