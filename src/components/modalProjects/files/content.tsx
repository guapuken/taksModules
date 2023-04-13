import React from 'react';
import { IconDropdown, InputLabel, Task } from '../../../components';
import { AddTask } from '../../task/files';
import { optionsPlantillas } from '../../task/task';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
const Content = (props: any) => {
	const {
		onChangeName,
		projectNameValue,
		onClickAddTask,
		modo,
		templateOptions,
		onClickCreateTemplate,
		Children,
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
					options={optionsPlantillas(templateOptions, onClickCreateTemplate)}
				/>
			</div>
			<div style={{ borderLeft: '2px solid #282828', paddingLeft: '10px' }}>
				{Children &&
					Children.map((e: any) => (
						<Task
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
									title: 'Eliminar',
									onClick: e.onClickDeleteTask,
								},
							]}
							//
							subtaskForbbiden={e.subtaskForbbiden}
							Children={e.Children}
							//
							onClickCreateTemplate={e.onClickNewTemplate}
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
