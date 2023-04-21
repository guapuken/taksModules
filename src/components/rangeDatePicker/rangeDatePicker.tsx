import React, { CSSProperties, useState } from 'react';

// styles
import './rangeDatePicker.scss';
// types
import { Modo, onBlurType } from '../../types';
// functions
import { MonthName } from './files/functions';

export interface RangeDatePickerProps {
	startDateValue?: Date;
	endDateValue?: Date;
	style?: CSSProperties;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onCh_startDate?: onBlurType;
	onCh_endDate?: onBlurType;
	modo: Modo;
}

const RangeDatePicker = (props: RangeDatePickerProps) => {
	// desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const { modo = 'Light' } = props;
	// hooks de setteos de fechas
	const [startDate, setStartDate] = useState(datos.startDateValue || '');
	const [endDate, setEndDate] = useState(datos.endDateValue || '');

	return (
		<div id={`dates${modo}_RDatePC`} style={datos.style} className={`ctn${modo}_RDatePC`}>
			<div>
				<p>Inicio</p>
				<label
					htmlFor="start-date"
					className={`${startDate === '' ? 'No' : ''}Dt`}
					onClick={() => document.getElementById('start-date')?.focus()}
				>
					{startDate === '' ? 'Inicio' : MonthName(String(startDate))}
				</label>
				<input
					type="datetime-local"
					id="start-date"
					name="start-date"
					className={'DatePickerTaskComponent'}
					value={String(startDate)}
					disabled={datos.disabledStartDate}
					onChange={(e) => {
						setStartDate(e.target.value);
					}}
					onBlur={(e) => {
						if (datos.onCh_startDate) {
							datos.onCh_startDate(e);
						}
					}}
				/>
			</div>
			<h2>→</h2>
			<div>
				<p>Entrega</p>
				<label htmlFor="endDate" className={`${endDate === '' ? 'No' : ''}Dt`}>
					{endDate.toString() === '' ? 'Fin' : MonthName(String(endDate))}
				</label>
				<input
					type="datetime-local"
					id="endDate"
					name="endDate"
					disabled={datos.disabledEndDate}
					min={String(startDate)}
					value={String(endDate)}
					className={`${'DatePickerTaskComponent'} ${'CalendarOpenTaskModules'}`}
					onChange={(e) => {
						setEndDate(e.target.value);
					}}
					onBlur={(e) => {
						if (datos.onCh_endDate) {
							datos.onCh_endDate(e);
						}
					}}
				/>
			</div>
		</div>
	);
};

export default RangeDatePicker;
