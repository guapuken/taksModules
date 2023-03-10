import React, { useState } from 'react';
import { onChangeType } from '../../../utils/types/typesUtils';
import { windowSize } from '../../../utils/widthSize';
import Information from '../../information/information';
import InputLabel from '../../inputLabel';
import RangeDatePicker from '../../rangeDatePicker';

interface IconDatesProps {
	plantillas?: boolean;
	className?: string;
	onChangeDias?: onChangeType;
	endDateValue?: Date;
	startDateValue?: Date;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
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
	} = props;
	return plantillas ? (
		<div style={{ position: 'relative', zIndex: '2' }} className={className}>
			<InputLabel
				style={{ width: '12.2rem' }}
				legend="Duración"
				type="number"
				onChange={onChangeDias ? onChangeDias : () => {}}
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
		/>
	);
};
