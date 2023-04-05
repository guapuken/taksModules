import React, { CSSProperties, useEffect, useState } from 'react';
import '../../global.scss';
import './rangeDatePicker.scss';
import { Modo } from '../../types';
import { MonthName } from './files/functions';

export interface RangeDatePickerProps {
	startDateValue?: Date;
	endDateValue?: Date;
	style?: CSSProperties;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onChangeStartDate?: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeEndDate?: (e: React.FormEvent<HTMLInputElement>) => void;
	modo: Modo;
}

function date(props: any) {
	const { tomorrow, date } = props;
	const newDate = date ? date : new Date();
	var month = newDate.getUTCMonth() + 1;
	var day = tomorrow ? newDate.getUTCDate() + 1 : newDate.getUTCDate();
	var year = newDate.getUTCFullYear();
	return `${year}-${month <= 9 ? `0${month}` : month}-${day <= 9 ? `0${day}` : day}`;
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
	const [startDate, setStartDate] = useState(startDateValue || date({ tomorrow: false }));
	const [endDate, setEndDate] = useState(endDateValue || date({ tomorrow: true }));

	useEffect(() => {
		setEndDate(startDate.toString());
	}, [startDate]);

	return (
		<div
			id={`dates${modo}_RDatePC`}
			onClick={() => document.getElementById('start-date')?.focus()}
			style={style}
			className={`ctn${modo}_RDatePC`}
		>
			<div>
				<p>Comienza</p>
				<label htmlFor="start-date">
					{startDate === '' ? 'Comienza' : MonthName(startDate.toString().slice(-5))}
				</label>
				<input
					type="date"
					id="start-date"
					name="start-date"
					className={'DatePickerTaskComponent'}
					value={startDate.toString()}
					disabled={disabledStartDate}
					onChange={(e) => {
						setStartDate(e.target.value);
						document.getElementById('endDate')?.focus();
						onChangeStartDate;
					}}
				/>
			</div>
			<h2>{'=>'}</h2>
			<div>
				<p>Termina</p>
				<label htmlFor="endDate">
					{endDate === '' ? 'Termina' : MonthName(endDate.toString().slice(-5))}
				</label>
				<input
					type="date"
					id="endDate"
					name="endDate"
					value={endDate.toString()}
					disabled={disabledEndDate}
					min={startDate.toString()}
					className={`${'DatePickerTaskComponent'} ${'CalendarOpenTaskModules'}`}
					onChange={(e) => {
						setEndDate(e.target.value);
						onChangeEndDate;
					}}
				/>
			</div>
		</div>
	);
};

export default RangeDatePicker;
