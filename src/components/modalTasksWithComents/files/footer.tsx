import React from 'react';
import { Button, Buttons, Dropdown } from '../../../components';
import { onChangeType } from '../../../types';
import { functions } from '../types';

const Footer = (props: functions) => {
	const { onClickReWork, onChangeDrop, onClickApprove, onClickConfirm } = props;
	const [reWork, setReWork] = React.useState(false);
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
						onCl_button={() => {
							setReWork(!reWork);
							onClickReWork;
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
							placeHolder="Ingresa la razón"
							onChange={onChangeDrop as onChangeType}
							options={[
								{ title: 'Faltó corregir camiones', id: '1' },
								{ title: 'Viene mal editada', id: '2' },
								{ title: 'El proveedor cambio el sitio', id: '3' },
								{ title: 'La prueba de color viene rayada', id: '4' },
							]}
							topPosition
							style={{ minWidth: '100%' }}
						/>
						<Buttons
							styleComposition={{ width: '100%' }}
							buttons={{ primary: true, secondary: true }}
							legends={{ primary: 'Confirmar', secondary: 'Cancelar' }}
							onCl_buttons={{
								primary: onClickConfirm,
								secondary: () => setReWork(!reWork),
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
					onCl_button={onClickApprove}
				/>
			)}
		</div>
	);
};
export default Footer;
