import React, { CSSProperties, useEffect, useState } from 'react';

// types
import { rangeDatePicker } from './types';
// functions
import { MonthName } from './files/functions';
// styles
import './rangeDatePicker.scss';
import { SimpleContainer, Texts, Title } from '../Atoms';

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
		<SimpleContainer style={style} className="rangeDatePicker">
			<SimpleContainer className="rangeDatePicker__startDate">
				<Texts modo={modo} className="rangeDatePicker__textLabel">
					Inicio
				</Texts>
				<label
					htmlFor="startDate"
					className={`rangeDatePicker__labelDate ${startDate === '' ? 'noDate' : 'date'}`}
				>
					{startDate === '' ? 'Inicio' : MonthName(String(startDate))}
				</label>
				<input
					type="datetime-local"
					id="startDate"
					name="start-date"
					min={minStartDate}
					max={maxStartDate}
					value={String(startDate)}
					disabled={disabledStartDate}
					onChange={(e: any) => {
						setStartDate(e.target.value);
						if (onCh_startDate) {
							onCh_startDate(e);
						}
					}}
				/>
			</SimpleContainer>
			<Title modo={modo}>→</Title>
			<SimpleContainer className="rangeDatePicker__startDate">
				<Texts modo={modo} className="rangeDatePicker__textLabel">
					Entrega
				</Texts>
				<label
					id="lblEnd"
					htmlFor="endDate"
					className={`rangeDatePicker__labelDate ${endDate === '' ? 'noDate' : 'date'}`}
				>
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
					onChange={(e: any) => {
						setEndDate(e.target.value);
						if (onCh_endDate) onCh_endDate(e);
					}}
				/>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default RangeDatePicker;
