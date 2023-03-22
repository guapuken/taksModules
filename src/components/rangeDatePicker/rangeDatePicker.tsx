import React, { CSSProperties, useEffect, useState } from 'react';
import { onChangeType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './rangeDatePicker.scss';

export interface RangeDatePickerProps {
	startDateValue?: Date;
	endDateValue?: Date;
	style?: CSSProperties;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onChangeStartDate?: onChangeType;
	onChangeEndDate?: onChangeType;
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
	} = props;
	const [startDate, setStartDate] = useState(startDateValue || date({ tomorrow: false }));
	const [endDate, setEndDate] = useState(endDateValue || date({ tomorrow: true }));

	useEffect(() => {
		setEndDate(startDate.toString());
	}, [startDate]);
	function MonthName(month: any) {
		const months = [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'May',
			'Jun',
			'Jul',
			'Ago',
			'Sep',
			'Oct',
			'Nov',
			'Dic',
		];
		const monthNumber = month.slice(0, 2);
		parseInt(monthNumber) + 1;
		if (monthNumber <= 9) {
			return `${months[monthNumber.slice(-1) - 1]}, ${month.slice(-2)}`;
		} else return `${months[monthNumber - 1]}, ${month.slice(-2)}`;
	}

	console.log(new Date());
	return (
		<div
			id="dates"
			onClick={() => document.getElementById('start-date')?.focus()}
			style={style}
		>
			<div>
				<p style={{ marginBottom: '.5rem' }}>Comienza</p>
				<label htmlFor="start-date">
					{startDate === '' ? 'Comienza' : MonthName(startDate.toString().slice(-5))}
				</label>
				<input
					type="date"
					id="start-date"
					name="start-date"
					className="DatePickerTaskComponent"
					value={startDate.toString()}
					disabled={disabledStartDate}
					onChange={(e) => {
						setStartDate(e.target.value);
						document.getElementById('endDate')?.focus();
						onChangeStartDate;
					}}
					// onChange={(e) => {
					// 	setStartDate(e.target.value);
					// 	document.getElementById('endDate')?.focus();
					// }}
					style={{ fontSize: '1.5rem' }}
				/>
			</div>
			<h2>{'=>'}</h2>
			<div>
				<p style={{ marginBottom: '.5rem' }}>Termina</p>
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
					className="DatePickerTaskComponent CalendarOpenTaskModules"
					onChange={(e) => {
						setEndDate(e.target.value);
						onChangeEndDate;
					}}
					style={{ fontSize: '1.5rem' }}
				/>
			</div>
		</div>
	);
};

export default RangeDatePicker;
