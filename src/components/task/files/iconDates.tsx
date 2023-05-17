import React from 'react';
import { useWindowSize } from '../../../utils/windowSize';
import Information from '../../information/information';
import InputLabel from '../../inputLabel';
import RangeDatePicker from '../../rangeDatePicker';
import { Modo, onBlurType, onChangeType } from '../../../types';

interface IconDatesProps {
	plantillas?: boolean;
	className?: string;
	onCh_duration: onChangeType;
	onCh_endDate: (e: React.FormEvent<HTMLInputElement>) => void;
	onCh_startDate: (e: React.FormEvent<HTMLInputElement>) => void;
	endDateValue: string;
	// endDateValue?: Date;
	startDateValue: string;
	// startDateValue?: Date;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	durationValue?: string;
	modo: Modo;
	idTask: string;
}

//Visualización de componente si la propiedad de plantillas es true
const IconDates = (props: IconDatesProps) => {
	const {
		onCh_duration,
		plantillas,
		className,
		endDateValue,
		startDateValue,
		disabledEndDate,
		disabledStartDate,
		onCh_endDate,
		onCh_startDate,
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
				onCh={onCh_duration}
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
			onCh_endDate={onCh_endDate}
			onCh_startDate={onCh_startDate}
		/>
	);
};
export default IconDates;
