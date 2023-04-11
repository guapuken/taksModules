import React from 'react';
import { IconDropdown, InputLabel, Task } from '../../../components';
import { AddTask } from '../../task/files';
import { optionsPlantillas } from '../../task/task';

//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
const Content = (props: any) => {
	const {
		onChangeName,
		onBlurName,
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
				// onChange={onChangeName}
				// onChange={(e: any) => {
				// 	setProjectName(e.target.value);
				// 	onChangeName(e);
				// }}
				onChange={onChangeName}
				// onBlur={onBlurName}
				style={{ maxWidth: '98%' }}
				initialValue={projectNameValue}
			/>
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
			<div style={{ borderLeft: '2px solid #282828', paddingLeft: '10px' }}>
				{Children &&
					Children.map((e: any) => (
						<Task
							idCheckbox={e.idTask}
							equipos={e.equipos}
							Children={e.Children}
							principalTask
							onChangeDescriptionTask={e.onChangeDescription}
							onChangeNameTask={e.onChangeName}
							onClickAddTask={e.onClickAddTask}
							onClickCreateTemplate={e.onClickNewTemplate}
							revision={e.revision}
							valueRevision={e.valueRevision}
							responsables={e.responsables}
							taskDisabled={e.taskDisabled}
							valueTask={e.valueTask}
							valueDescription={e.valueDescription}
							valueResponsable={e.valueResponsable}
							subtaskForbbiden={e.subtaskForbbiden}
							templateOptions={e.templateOptions}
							moreOptions={[
								{
									title: 'Eliminar',
									onClick: e.onClickDeleteTask,
								},
							]}
							className={e.className}
							plantillas
							durationValue={e.durationValue}
						/>
					))}
			</div>
		</div>
	);
};

export default Content;
