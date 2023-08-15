import React from 'react';
import { SimpleContainer, ValidationComponent } from '../../../Atoms';
import Timeline from '../../../timelineProject/timelineProject';
// archivos multimedia
import close from '../../../../img/close.svg';
import Button from '../../../button/Button';
import { Modo, onClickType } from '../../../../types';

export type tasks = {
	completed?: boolean;
	taskName: string;
	duration: number;
	onCl_showDetails?: onClickType;
	legendBtn?: string;
	modo: Modo;
};
export interface timelineMedioProps {
	isActive: boolean;
	handleClose: any;
	modo: Modo;
	tasks: tasks[];
	onCl_goToGant?: onClickType;
}
const TimelineMedio = ({
	isActive,
	handleClose,
	modo,
	tasks,
	onCl_goToGant,
}: timelineMedioProps) => {
	return (
		<ValidationComponent validate={isActive}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'fixed',
					top: '0',
					left: '0',
					width: '100vw',
					height: '100vh',
				}}
			>
				<SimpleContainer
					onClick={handleClose}
					children={null}
					style={{
						position: 'fixed',
						width: '100%',
						height: '100%',
						top: '0',
						left: '0',
					}}
				/>
				<div
					className={`ctn_TimelineMedio ${modo}`}
					style={{
						boxShadow: ' 0 0  20px #dedede',
						width: 'auto',
						padding: '20px',
						height: 'auto',
						borderRadius: '20px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
						gap: '10px',
					}}
				>
					<img src={close} alt="" onClick={handleClose} style={{ height: '30px' }} />
					<Timeline modo={modo} tasks={tasks} />
					{onCl_goToGant && (
						<Button
							modo={modo}
							onCl={onCl_goToGant as onClickType}
							legend={'Ver progreso en Gant'}
							primary
						/>
					)}
				</div>
			</div>
		</ValidationComponent>
	);
};

export default TimelineMedio;
