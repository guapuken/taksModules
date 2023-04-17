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
				onChangeCheckbox={datos.onCheck}
				idCheckbox={datos.idTask}
				equipos={datos.equipos}
				subtasks={datos.substasks}
				principalTask
				onChangeDescriptionTask={datos.onChangeDescription}
				onChangeNameTask={datos.onChangeName}
				onClickAddTask={datos.onClickAddTask}
				onClickCreateTemplate={datos.onClickNewTemplate}
				onClickPrioridad={datos.onClickPriority}
				onClickEliminar={datos.onClickDeleteTask}
				onClickRecordatorio={datos.onClickReminder}
				prioridadInicial={datos.priorityValue}
				revision={datos.revision}
				valueRevision={datos.valueRevision}
				responsables={datos.responsables}
				taskComplete={datos.taskComplete}
				taskDisabled={datos.taskDisabled}
				onChangeDias={datos.onChangeDays}
				disabledEndDate={datos.disabledEndDate}
				disabledStartDate={datos.disabledStartDate}
				endDateValue={datos.endDateValue}
				startDateValue={datos.startDateValue}
				valueTask={datos.valueTask}
				valueDescription={datos.valueDescription}
				valueResponsable={datos.valueResponsable}
				subtaskForbbiden={datos.subtaskForbbiden}
				onClickCheck={datos.onClickCheck}
				onChangeStartDate={datos.onChangeStartDate}
				onChangeEndDate={datos.onChangeEndDate}
				isSubtask={datos.isSubtask}
				templateOptions={datos.templateOptions}
				moreOptions={datos.moreOptions}
				plantillas={datos.plantillas}
				className={datos.className}
			/>
		</div>
	);
};

export default Content;
