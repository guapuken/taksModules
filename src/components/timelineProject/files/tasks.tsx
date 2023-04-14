import React from 'react';
// estilos
import { tasks } from '../types';
import '../timelineProject.scss';
import Button from '../../button/button';

const Tasks = (props: tasks) => {
	const { completed, taskName, duration, onClickShow, legendBtn } = props;
	return (
		<div className="ctnTasks">
			<div className={`circle${completed ? 'Complete' : ''}`}></div>
			<div className="ctnDrtnTaks">
				{duration && <p className="drtnTask">{duration} días hábiles</p>}
				<div>
					{taskName && !onClickShow ? (
						<p className="nmTask">{taskName}</p>
					) : (
						<div>
							<p className="nmTask">{taskName}</p>
							<Button
								border
								primary
								legend={legendBtn}
								style={{ margin: '10px 0' }}
								onClick={onClickShow}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
