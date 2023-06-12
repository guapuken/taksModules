import React from 'react';
// estilos
import { tasks } from '../types';
import '../timelineProject.scss';
import { Button } from '../../../components';

const Tasks = (props: tasks) => {
	const { completed, taskName, duration, onCl_showDetails, legendBtn, modo } = props;
	return (
		<div className="ctnTasks">
			<div className={`circle${completed ? 'Complete' : ''}`}></div>
			<div className="ctnDrtnTaks">
				{duration && (
					<p className="drtnTask">{`${duration} ${
						duration <= 1 ? 'día hábil' : 'días hábiles'
					}`}</p>
				)}
				<div>
					{taskName && !onCl_showDetails ? (
						<p className="nmTask">{taskName}</p>
					) : (
						<div>
							<p className="nmTask">{taskName}</p>
							<Button
								modo={modo}
								border
								primary
								legend={legendBtn}
								style={{ margin: '10px 0' }}
								onCl={onCl_showDetails as any}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
