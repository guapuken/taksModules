import React from 'react';
import { content } from '../types';
import { Task } from '../../../components';

const Content = (props: content) => {
	const datos = { ...props };
	return (
		<div>
			<Task
				idTask={datos.idTask}
				check={datos.taskCheckValue}
				chCheck={datos.chCheck}
				idCheckbox={datos.idTask}
				equipos={datos.equipos}
				subtasks={datos.substasks}
				principalTask
				onChangeDescriptionTask={datos.onChangeTaskDescription}
				onChangeNameTask={datos.onChangeTaskName}
				onClickAddTask={datos.onClickAddTask}
				onClickCreateTemplate={datos.onClickNewTemplate}
				onClickPrioridad={datos.onClickPriority}
				onClickEliminar={datos.onClickDelete}
				onClickRecordatorio={datos.onClickReminder}
				prioridadInicial={datos.priorityValue}
				revision={datos.revision}
				valueRevision={datos.valueRevision}
				responsables={datos.responsables}
				taskComplete={datos.taskComplete}
				taskDisabled={datos.taskDisabled}
				disabledEndDate={datos.disabledEndDate}
				disabledStartDate={datos.disabledStartDate}
				endDateValue={datos.endDateValue}
				startDateValue={datos.startDateValue}
				valueTask={datos.valueTask}
				valueDescription={datos.valueDescription}
				valueResponsable={datos.valueResponsable}
				subtaskForbbiden={datos.subtaskForbbiden}
				onChangeStartDate={datos.onChangeStartDate}
				onChangeEndDate={datos.onChangeEndDate}
				templateOptions={datos.templateOptions}
				moreOptions={datos.moreOptions}
				className={datos.className}
			/>
		</div>
	);
};

export default Content;
