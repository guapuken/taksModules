import React, { Fragment } from 'react';
import { contentProps, subtasksComponent } from '../types';
import { Comentarios } from './index';
import { SimpleButtonText } from '../../../utils/cardsUtils';
import { Task } from '../../../components';
import { optionsIcnDrp } from '../../../types';
import '../modalTaskWithComents.scss';

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
	onCl_confirm,
	onCl_reWork,
	reasonsToWorkAgain,
	onCl_close,
	valueComment,
}: contentProps) => {
	const [showTasks, setShowTasks] = React.useState(false);
	const Subtasks = ({ taskName, taskDescription, subtasks, completed }: subtasksComponent) => {
		console.log(completed);
		return (
			<div
				style={{
					marginLeft: '15px',
					marginTop: '15px',
				}}
			>
				<p
					style={{
						textDecoration: completed ? 'line-through' : 'none',
						textDecorationColor: 'red',
						fontWeight: 'bold',
					}}
				>
					{taskName}
				</p>
				<p
					style={{
						opacity: '.5',
						textDecoration: completed ? 'line-through' : 'none',
						textDecorationColor: 'red',
					}}
				>
					{taskDescription}
				</p>
				{subtasks && (
					<div
						style={{
							borderLeft: '2px solid #dedede',
							marginLeft: '10px',
							paddingLeft: '5px',
						}}
					>
						{subtasks.map((indSubTask) => (
							<Subtasks
								taskName={indSubTask.taskName}
								subtasks={indSubTask.subtasks}
								taskDescription={indSubTask.taskDescription}
								completed={indSubTask.completed}
							/>
						))}
					</div>
				)}
			</div>
		);
	};
	return (
		<div className={`ctn${modo}${messages ? 'Cmts' : 'noCmts'}_TWCC`}>
			<div className="ctnTaskDtls" /* style={{ overflow: 'hidden', height: '100%' }} */>
				<div className="ctnPrnlTask">
					<div>
						<h5
							className={`taskName${completed ? 'Check' : 'Incompleted'}`}
							style={{
								textDecoration: completed ? 'line-through' : '',
								textDecorationColor: 'red',
							}}
						>
							{taskName}
						</h5>
						<p
							style={{
								textDecoration: completed ? 'line-through' : '',
								textDecorationColor: 'red',
							}}
						>
							{taskDescription}
						</p>
						{showTasks ? (
							<div
								style={{
									borderLeft: '2px solid #dedede',
									marginLeft: '10px',
									paddingLeft: '5px',
								}}
							>
								{subtasks?.map((individualSubtask) => (
									<Subtasks
										taskName={individualSubtask.taskName}
										taskDescription={individualSubtask.taskDescription}
										subtasks={individualSubtask.subtasks}
										completed={individualSubtask.completed}
									/>
								))}
							</div>
						) : (
							<></>
						)}
					</div>

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
		</div>
	);
};
export default Content;
