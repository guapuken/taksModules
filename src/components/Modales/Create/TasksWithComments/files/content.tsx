import React, { useState } from 'react';
import { SimpleContainer, TextButton, Texts, Title } from '../../../../Atoms';
import '../styles/modalTaskWithComents.scss';
import { contentProps, subtasksComponent } from '../types/types';
import { Comentarios } from './index';

const Subtasks = ({
	taskName,
	taskDescription,
	subtasks,
	completed,
	modo,
	themeStyle,
}: subtasksComponent) => {
	return (
		<div
			className="modalTaskWithComments__tareas-subtarea"
			theme-config={modo}
			theme-style={themeStyle}
		>
			<SimpleContainer style={{ display: 'flex', gap: '5px' }}>
				<SimpleContainer
					className="modalTaskWithComments__tareas-subtarea-circle"
					labels={{
						'status-task': completed ? 'completed' : 'incompleted',
					}}
					children={null}
				/>
				<SimpleContainer>
					<Title modo={modo as any}>{taskName}</Title>
					<Texts modo={modo as any}>{taskDescription}</Texts>
				</SimpleContainer>
			</SimpleContainer>
			{subtasks && (
				<SimpleContainer className="modalTaskWithComments__tareas-subtarea-individuales">
					{subtasks.map((indSubTask) => (
						<SimpleContainer className="modalTaskWithComments__tareas-subtarea-division">
							<Subtasks
								taskName={indSubTask.taskName}
								subtasks={indSubTask.subtasks}
								taskDescription={indSubTask.taskDescription}
								completed={indSubTask.completed}
							/>
						</SimpleContainer>
					))}
				</SimpleContainer>
			)}
		</div>
	);
};
const Content = ({
	modo = 'Light',
	messages,
	taskName = 'Tarea',
	taskDescription = 'Tarea',
	completed,
	subtasks,
	onCh_comment,
	onCh_addFile,
	onCl_addComment,
	onCh_dropdown,
	onCl_approve,
	onCl_abort,
	onCl_edit,
	onCl_confirm,
	onCl_reWork,
	reasonsToWorkAgain,
	onCl_close,
	valueComment,
	themeStyle,
}: contentProps) => {
	const [showTasks, setShowTasks] = useState(false);

	return (
		// <div className={`ctn${modo}${messages ? 'Cmts' : 'noCmts'}_TWCC`}>
		<SimpleContainer
			labels={{
				className: 'modalTaskWithComments',
				'have-comments': messages ? 'withMessages' : 'noMessages',
			}}
		>
			<SimpleContainer className="modalTaskWithComments__tareas">
				<SimpleContainer className="modalTaskWithComments__tareas-tarea">
					<SimpleContainer
						className="modalTaskWithComments__tareas-tarea-circle"
						labels={{
							'status-task': completed ? 'completed' : 'incompleted',
						}}
						children={null}
					/>
					<SimpleContainer>
						<Title
							modo={modo}
							className={`taskName${completed ? 'Check' : 'Incompleted'}`}
						>
							{taskName}
						</Title>
						<Texts modo={modo}>{taskDescription}</Texts>
					</SimpleContainer>
				</SimpleContainer>
				{!showTasks ? (
					<SimpleContainer className="modalTaskWithComments__tareas-subtareas">
						<Title modo={modo} style={{ padding: '15px' }}>
							Subtareas
						</Title>
						{subtasks?.map((individualSubtask) => (
							<Subtasks
								taskName={individualSubtask.taskName}
								taskDescription={individualSubtask.taskDescription}
								subtasks={individualSubtask.subtasks}
								completed={individualSubtask.completed}
							/>
						))}
					</SimpleContainer>
				) : (
					<></>
				)}

				<TextButton modo={modo} onClick={() => setShowTasks(!showTasks)}>
					{`${showTasks ? 'Ocultar' : 'Ver'} ${subtasks?.length || 0} subtareas más`}
				</TextButton>
			</SimpleContainer>
			<Comentarios
				onCl_abort={onCl_abort}
				onCl_edit={onCl_edit}
				valueComment={valueComment}
				reasonsToWorkAgain={reasonsToWorkAgain}
				onCl_close={onCl_close}
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
		</SimpleContainer>
	);
};
export default Content;
