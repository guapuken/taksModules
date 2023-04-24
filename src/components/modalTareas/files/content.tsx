import React from 'react';
import { content } from '../types';
import { Task } from '../../../components';

const Content = (props: content) => {
	const datos = { ...props };
	return (
		<div>
			<Task
				idTask={datos.idTask}
				check={datos.check}
				onCh_checkbox={datos.onCh_checkbox}
				idCheckbox={datos.idTask}
				equipos={datos.equipos}
				subtasks={datos.subtasks}
				principalTask
				onCh_descriptionTask={datos.onCh_descriptionTask}
				onCh_nameTask={datos.onCh_nameTask}
				onCl_addTask={datos.onCl_addTask}
				onCl_newTemplate={datos.onCl_newTemplate}
				onCl_selectPriority={datos.onCl_selectPriority}
				onCl_delete={datos.onCl_delete}
				onCl_reminder={datos.onCl_reminder}
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
				onCh_startDate={datos.onCh_startDate}
				onCh_endDate={datos.onCh_endDate}
				templateOptions={datos.templateOptions}
				moreOptions={datos.moreOptions}
				className={datos.className}
			/>
		</div>
	);
};

export default Content;
