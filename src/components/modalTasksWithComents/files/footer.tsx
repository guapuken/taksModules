import React from 'react';
import { Button, Buttons, Dropdown } from '../../../components';
import { functions } from '../types';

const Footer = (props: functions) => {
	const { onCl_reWork, onCh_dropdown, onCl_approve, onCl_confirm, reasonToRework } = props;
	const [reWork, setReWork] = React.useState(false);
	const [reasonToWorkAgain, setReasonToWorkAgain] = React.useState(reasonToRework);
	React.useEffect(() => {
		console.log('cambio rework:');
		console.log('reasonToWorkAgain: ', reasonToWorkAgain);
	}, [reWork]);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '90%',
				gap: '20px',
				margin: '0 auto',
			}}
		>
			<div
				style={{
					width: '100%',
					paddingRight: '30px',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
				}}
			>
				{!reWork && (
					<Button
						legend={'Volver a trabajar tarea'}
						style={{ width: '100%', height: '20px' }}
						secondary
						onCl={() => {
							setReWork(true);
							onCl_reWork;
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
							isSearchable
							placeHolder="Selecciona la razón"
							onCh={(e) => {
								if (onCh_dropdown) {
									onCh_dropdown(e);
								}
							}}
							options={[
								{ title: 'Faltó corregir camiones', id: '1' },
								{ title: 'Viene mal editada', id: '2' },
								{ title: 'El proveedor cambio el sitio', id: '3' },
								{ title: 'La prueba de color viene rayada', id: '4' },
							]}
							initialValue={reasonToWorkAgain}
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
							}}
						/>
					</div>
				)}
			</div>
			{!reWork && (
				<Button
					legend={'Aprobar tarea'}
					style={{ width: '100%', height: '20px' }}
					primary
					onCl={onCl_approve}
				/>
			)}
		</div>
	);
};
export default Footer;
