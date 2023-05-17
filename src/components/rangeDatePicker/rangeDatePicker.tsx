import React, { CSSProperties, useEffect, useState } from 'react';

// styles
import './rangeDatePicker.scss';
// types
import { rangeDatePicker } from './types';
// functions
import { MonthName } from './files/functions';

const RangeDatePicker = ({
	startDateValue,
	endDateValue,
	style,
	modo,
	disabledEndDate,
	disabledStartDate,
	onCh_endDate,
	onCh_startDate,
}: rangeDatePicker) => {
	/**
	 * Hooks que definen la fecha inicial y fecha final
	 */
	const [startDate, setStartDate] = useState(startDateValue || '');
	const [endDate, setEndDate] = useState(endDateValue || '');

	useEffect(() => {
		setStartDate(startDateValue);
	}, [startDateValue]);
	useEffect(() => {
		setEndDate(endDateValue);
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
					min={String(startDate)}
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
