import React from 'react';
import { Button, Buttons, Dropdown } from '../../../components';
import { functions } from '../types';
import { aspectRatio } from '../../../utils/functions/functions';

const Footer = (props: functions) => {
	const {
		onCh_dropdown,
		onCl_approve,
		onCl_confirm,
		valueReasonToWorkAgain,
		modo,
		reasonsToWorkAgain,
	} = props;
	const [reWork, setReWork] = React.useState(false);
	return (
		<div style={{ width: '100%', position: 'relative' }}>
			{!reWork && (
				<Buttons
					buttons={{
						primary: true,
						secondary: true,
						// tertiary: true,
					}}
					composition={'horizontal'}
					modo={modo}
					legends={{
						primary: 'Aprobar tarea',
						secondary: 'Volver a trabajar',
						// tertiary: 'Regresar',
					}}
					onCl_buttons={{
						primary: onCl_approve,
						secondary: () => setReWork(true),
						tertiary: {} as any,
					}}
				/>
			)}
			{reWork && (
				<div
					style={{
						display: 'flex',
						gap: '20px',
						width: '100%',
						flexWrap: 'wrap',
						margin: '0 auto',
					}}
				>
					<Dropdown
						modo={modo}
						isSearchable
						placeHolder="Selecciona la razón"
						onCh={onCh_dropdown}
						options={reasonsToWorkAgain}
						initialValue={valueReasonToWorkAgain}
						topPosition
						style={{ minWidth: '100%' }}
					/>
					<Buttons
						styleComposition={{ width: '100%' }}
						buttons={{ primary: true, secondary: true }}
						legends={{ primary: 'Confirmar', secondary: 'Cancelar' }}
						onCl_buttons={{
							primary: onCl_confirm,
							secondary: () => setReWork(false),
							tertiary: {} as any,
						}}
						modo={modo}
						composition="horizontal"
					/>
				</div>
			)}
		</div>
	);
};
export default Footer;
