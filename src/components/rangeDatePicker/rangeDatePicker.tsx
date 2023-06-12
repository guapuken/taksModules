import React, { CSSProperties, useEffect, useState } from 'react';

// types
import { rangeDatePicker } from './types';
// functions
import { MonthName } from './files/functions';
// styles
import './rangeDatePicker.scss';

const RangeDatePicker = ({
	startDateValue,
	endDateValue,
	style,
	modo,
	disabledEndDate,
	disabledStartDate,
	onCh_endDate,
	onCh_startDate,
	minStartDate,
	maxStartDate,
	minEndDate,
	maxEndDate,
}: rangeDatePicker) => {
	/**
	 * Hooks que definen la fecha inicial y fecha final
	 */
	const [startDate, setStartDate] = useState(startDateValue || '');
	const [endDate, setEndDate] = useState(endDateValue || '');

	useEffect(() => {
		if (startDateValue) setStartDate(startDateValue);
	}, [startDateValue]);
	useEffect(() => {
		if (endDateValue) setEndDate(endDateValue);
	}, [endDateValue]);
	return (
		<div id={`dates${modo}_RDatePC`} style={style} className={`ctn${modo}_RDatePC`}>
			<div>
				<p>Inicio</p>
				<label htmlFor="startDate" className={`${startDate === '' ? 'No' : ''}Dt`}>
					{startDate === '' ? 'Inicio' : MonthName(String(startDate))}
				</label>
				<input
					type="datetime-local"
					id="startDate"
					name="start-date"
					min={minStartDate}
					max={maxStartDate}
					className={'DatePickerTaskComponent'}
					value={String(startDate)}
					disabled={disabledStartDate}
					onChange={(e: any) => {
						setStartDate(e.target.value);
						if (onCh_startDate) {
							onCh_startDate(e);
						}
					}}
				/>
			</div>
			<h2>→</h2>
			<div>
				<p>Entrega</p>
				<label id="lblEnd" htmlFor="endDate" className={`${endDate === '' ? 'No' : ''}Dt`}>
					{endDate === '' ? 'Fin' : MonthName(String(endDate))}
				</label>
				<input
					type="datetime-local"
					id="endDate"
					name="endDate"
					disabled={disabledEndDate}
					min={minEndDate ?? String(startDate)}
					max={maxEndDate}
					value={String(endDate)}
					className={`${'DatePickerTaskComponent'} ${'CalendarOpenTaskModules'}`}
					onChange={(e: any) => {
						setEndDate(e.target.value);
						if (onCh_endDate) onCh_endDate(e);
					}}
				/>
			</div>
		</div>
	);
};

export default RangeDatePicker;
