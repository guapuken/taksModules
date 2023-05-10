import React, { Fragment } from 'react';
import { contentProps } from '../types';
import { Comentarios } from './index';
import { SimpleButtonText } from '../../../utils/cardsUtils';
import { Task } from '../../../components';
import { optionsIcnDrp } from '../../../types';
import '../modalTaskWithComents.scss';

const Content = ({
	modo = 'Light',
	messages,
	isReviewer,
	taskName = 'Tarea',
	taskDescription = 'Tarea',
	idTask,
	equipos,
	responsables,
	revision,
	onCl_newTemplate,
	templateOptions,
	check,
	endDateValue,
	startDateValue,
	onCh_descriptionTask,
	onCh_nameTask,
	subtasks,
	onCh_comment,
	onCh_addFile,
	onCl_addComment,
	onCl_addTask,
	onCh_checkbox,
	onCh_endDate,
	onCh_startDate,
	onCl_selectPriority,
	onCl_delete,
	onCl_reminder,
	valueRevision,
	valueResponsable,
	prioridadInicial,
	onCh_dropdown,
	onCl_approve,
	onCl_confirm,
	onCl_reWork,
}: contentProps) => {
	const [showTasks, setShowTasks] = React.useState(false);
	return (
		<div className={`ctn${modo}${messages ? 'Cmts' : 'noCmts'}_TWCC`}>
			<div className="ctnTaskDtls" /* style={{ overflow: 'hidden', height: '100%' }} */>
				<div className="ctnPrnlTask">
					{isReviewer ? (
						<Fragment>
							<h5
								className={`taskName${check ? 'Check' : 'Incompleted'}`}
								style={{
									textDecoration: check ? 'line-through' : '',
									textDecorationColor: check ? 'red' : '',
								}}
							>
								{taskName}
							</h5>
							<p
								style={{
									textDecoration: check ? 'line-through' : '',
									textDecorationColor: check ? 'red' : '',
								}}
							>
								{taskDescription}
							</p>
							{showTasks ? (
								subtasks?.map((individualSubtask) => (
									<div style={{ marginLeft: '15px', marginTop: '15px' }}>
										<p
											style={{
												textDecoration: 'line-through',
												textDecorationColor: 'red',
												fontWeight: 'bold',
											}}
										>
											{individualSubtask.valueTask}
										</p>
										<p
											style={{
												opacity: '.5',
												textDecoration: 'line-through',
												textDecorationColor: 'red',
											}}
										>
											{individualSubtask.valueDescription}
										</p>
									</div>
								))
							) : (
								<></>
							)}
						</Fragment>
					) : (
						<Task
							idTask={idTask}
							equipos={equipos as optionsIcnDrp[]}
							responsables={responsables as optionsIcnDrp[]}
							revision={revision as optionsIcnDrp[]}
							onCl_newTemplate={onCl_newTemplate}
							templateOptions={templateOptions}
							check={check}
							endDateValue={endDateValue}
							startDateValue={startDateValue}
							idCheckbox={idTask}
							onCh_descriptionTask={onCh_descriptionTask}
							onCh_nameTask={onCh_nameTask}
							valueTask={taskName as string}
							valueDescription={taskDescription as string}
							subtasks={showTasks ? (subtasks as []) : []}
							modo={modo}
							onCl_addTask={onCl_addTask}
							onCh_checkbox={onCh_checkbox}
							onCh_endDate={onCh_endDate}
							onCh_startDate={onCh_startDate}
							onCl_selectPriority={onCl_selectPriority}
							onCl_delete={onCl_delete}
							onCl_reminder={onCl_reminder}
							valueRevision={valueRevision}
							valueResponsable={valueResponsable}
							prioridadInicial={prioridadInicial}
							taskComplete={check ? true : false}
						/>
					)}
					<SimpleButtonText
						legend={`${showTasks ? 'Ocultar' : 'Ver'} ${
							subtasks?.length || 0
						} subtareas más`}
						style={{ fontSize: '13px', marginTop: '5px' }}
						onClick={() => setShowTasks(!showTasks)}
					/>
				</div>
			</div>
			<Comentarios
				onCh_dropdown={onCh_dropdown}
				onCl_approve={onCl_approve}
				onCl_confirm={onCl_confirm}
				onCl_reWork={onCl_reWork}
				onCh_comment={onCh_comment}
				messages={messages}
				showTasks={showTasks}
				onCh_addFile={onCh_addFile}
				onCl_addComment={onCl_addComment}
				modo={modo}
			/>
		</div>
	);
};
export default Content;
