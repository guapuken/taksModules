import React, { CSSProperties, useState } from 'react';

// styles
import './rangeDatePicker.scss';
// types
import { rangeDatePicker } from './types';
// functions
import { MonthName } from './files/functions';

const RangeDatePicker = (props: rangeDatePicker) => {
	// desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const { modo = 'Light' } = props;
	// hooks de setteos de fechas
	const [startDate, setStartDate] = useState(datos.startDateValue || '');
	const [endDate, setEndDate] = useState(datos.endDateValue || '');
	const nextinput = React.useRef<any>(null);

	// function focusNext() {
	// 	const inputElement = nextinput.current;
	// 	if (inputElement) {
	// 		inputElement.click();
	// 	}
	// }

	return (
		<div id={`dates${modo}_RDatePC`} style={datos.style} className={`ctn${modo}_RDatePC`}>
			<div>
				<p>Inicio</p>
				<label htmlFor="start-date" className={`${startDate === '' ? 'No' : ''}Dt`}>
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
						console.log('cambió');
						if (datos.onCh_startDate) {
							datos.onCh_startDate(e);
						}
						document.getElementById('end-date')?.focus();
						// focusNext();
					}}
				/>
			</div>
			<h2>→</h2>
			<div>
				<p>Entrega</p>
				<label
					htmlFor="endDate"
					className={`${endDate === '' ? 'No' : ''}Dt`}
					ref={nextinput}
					onClick={() => {
						// document.getElementById('end-date')?.focus();
					}}
				>
					{endDate.toString() === '' ? 'Fin' : MonthName(String(endDate))}
				</label>
				<input
					type="datetime-local"
					id="end-date"
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
