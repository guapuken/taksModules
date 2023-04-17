import React, { CSSProperties, useEffect, useState } from 'react';
import '../../global.scss';
import './rangeDatePicker.scss';
import { Modo, onBlurType } from '../../types';
import { MonthName } from './files/functions';

export interface RangeDatePickerProps {
	startDateValue?: Date;
	endDateValue?: Date;
	style?: CSSProperties;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onChangeStartDate?: onBlurType;
	onChangeEndDate?: onBlurType;
	modo: Modo;
}

const RangeDatePicker = (props: RangeDatePickerProps) => {
	const {
		startDateValue,
		endDateValue,
		style,
		disabledStartDate,
		disabledEndDate,
		onChangeStartDate,
		onChangeEndDate,
		modo = 'Light',
	} = props;
	const [startDate, setStartDate] = useState(startDateValue || '');
	const [endDate, setEndDate] = useState(endDateValue || '');

	return (
		<div id={`dates${modo}_RDatePC`} style={style} className={`ctn${modo}_RDatePC`}>
			<div>
				<p>Comienza</p>
				<label htmlFor="start-date">
					{startDate === '' ? 'Comienza' : MonthName(String(startDate))}
				</label>
				<input
					type="datetime-local"
					id="start-date"
					name="start-date"
					className={'DatePickerTaskComponent'}
					value={String(startDate)}
					disabled={disabledStartDate}
					onChange={(e) => {
						setStartDate(e.target.value);
					}}
					onBlur={(e) => {
						console.log('onBlur start');
						if (onChangeStartDate) {
							onChangeStartDate(e);
						}
					}}
				/>
			</div>
			<h2>{'=>'}</h2>
			<div>
				<p>Termina</p>
				<label htmlFor="endDate">
					{endDate.toString() === '' ? 'Termina' : MonthName(String(endDate))}
				</label>
				<input
					type="datetime-local"
					id="endDate"
					name="endDate"
					disabled={disabledEndDate}
					min={String(startDate)}
					value={String(endDate)}
					className={`${'DatePickerTaskComponent'} ${'CalendarOpenTaskModules'}`}
					onChange={(e) => {
						setEndDate(e.target.value);
					}}
					onBlur={(e) => {
						console.log('on Blur');
						if (onChangeEndDate) {
							onChangeEndDate(e);
						}
					}}
				/>
			</div>
		</div>
	);
};

export default RangeDatePicker;
