import React from 'react';
import { useWindowSize } from '../../../utils/windowSize';
import Information from '../../information/information';
import InputLabel from '../../inputLabel';
import RangeDatePicker from '../../rangeDatePicker';
import { Modo } from '../../../types';

interface IconDatesProps {
	plantillas?: boolean;
	className?: string;
	onChangeDias?: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeEndDate?: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeStartDate?: (e: React.FormEvent<HTMLInputElement>) => void;
	endDateValue?: Date;
	startDateValue?: Date;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	durationValue?: string;
	modo: Modo;
	idTask: string;
}

//Visualización de componente si la propiedad de plantillas es true
const IconDates = (props: IconDatesProps) => {
	const {
		onChangeDias,
		plantillas,
		className,
		endDateValue,
		startDateValue,
		disabledEndDate,
		disabledStartDate,
		onChangeEndDate,
		onChangeStartDate,
		durationValue,
		idTask,
		modo,
	} = props;
	return plantillas ? (
		<div style={{ position: 'relative', zIndex: '2' }} className={className}>
			<InputLabel
				id={idTask}
				style={{ width: '122px' }}
				legend="Duración"
				type="number"
				onChange={onChangeDias ? onChangeDias : () => {}}
				initialValue={durationValue}
			/>
			<div className="IconInformationTaskcomponent">
				<Information
					modo={modo}
					info="¿En cuántos días debería de estar lista la tarea una vez que se le asigne al responsable?"
					positionInfo={useWindowSize().width < 500 ? 'bottom' : 'right_bottom'}
				/>
			</div>
		</div>
	) : (
		<RangeDatePicker
			modo={modo}
			endDateValue={endDateValue}
			startDateValue={startDateValue}
			disabledEndDate={disabledEndDate}
			disabledStartDate={disabledStartDate}
			onChangeEndDate={onChangeEndDate}
			onChangeStartDate={onChangeStartDate}
		/>
	);
};
export default IconDates;
