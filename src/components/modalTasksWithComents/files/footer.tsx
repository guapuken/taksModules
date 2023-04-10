import React from 'react';
import { Button, Buttons, Dropdown } from '../../../components';
import { onChangeType, onClickType } from '../../../types';

const Footer = (
	onChangeDrop?: onChangeType,
	onClickReWork?: onClickType,
	onClickConfirm?: onClickType
) => {
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
						onClick={() => {
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
								{ label: 'Faltó corregir camiones', value: '1' },
								{ label: 'Viene mal editada', value: '2' },
								{ label: 'El proveedor cambio el sitio', value: '3' },
								{ label: 'La prueba de color viene rayada', value: '4' },
							]}
							topPosition
							style={{ minWidth: '100%' }}
						/>
						<Buttons
							styleComposition={{ width: '100%' }}
							buttons={{ primary: true, secondary: true }}
							legends={{ primary: 'Confirmar', secondary: 'Cancelar' }}
							onClick={{
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
				/>
			)}
		</div>
	);
};
export default Footer;
