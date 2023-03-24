import React from 'react';
import { windowSize } from '../../../utils/widthSize';
import Information from '../../information/information';
import InputLabel from '../../inputLabel';
import RangeDatePicker from '../../rangeDatePicker';

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
}

//Visualización de componente si la propiedad de plantillas es true
export const IconDates = (props: IconDatesProps) => {
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
	} = props;
	return plantillas ? (
		<div style={{ position: 'relative', zIndex: '2' }} className={className}>
			<InputLabel
				style={{ width: '12.2rem' }}
				legend="Duración"
				type="number"
				onChange={onChangeDias ? onChangeDias : () => {}}
				initialValue={durationValue}
			/>
			<div className="IconInformationTaskcomponent">
				<Information
					info="¿En cuántos días debería de estar lista la tarea una vez que se le asigne al responsable?"
					positionInfo={windowSize().width < 500 ? 'bottom' : 'right_bottom'}
				/>
			</div>
		</div>
	) : (
		<RangeDatePicker
			endDateValue={endDateValue}
			startDateValue={startDateValue}
			disabledEndDate={disabledEndDate}
			disabledStartDate={disabledStartDate}
			onChangeEndDate={onChangeEndDate}
			onChangeStartDate={onChangeStartDate}
		/>
	);
};
