import React from 'react';
import { Button, Dropdown } from '../../../components';

const Footer = (onChangeDrop, onClickReWork) => {
	const [reWork, setReWork] = React.useState(false);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '90%',
				gap: '2rem',
				margin: '0 auto',
			}}
		>
			<div
				style={{
					width: '100%',
					paddingRight: '3rem',
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<Button
					legend={'Volver a trabajar tarea'}
					style={{ width: '100%', height: '2rem' }}
					secondary
					onClick={() => {
						setReWork(!reWork);
						onClickReWork;
					}}
				/>
				{reWork && (
					<Dropdown
						isSearchable
						placeHolder="Ingresa la razón"
						onChange={onChangeDrop}
						options={[
							{ label: 'Faltó corregir camiones', value: '1' },
							{ label: 'Viene mal editada', value: '2' },
							{ label: 'El proveedor cambio el sitio', value: '3' },
							{ label: 'La prueba de color viene rayada', value: '4' },
						]}
						topPosition
					/>
				)}
			</div>
			<Button legend={'Aprobar tarea'} style={{ width: '100%', height: '2rem' }} primary />
		</div>
	);
};
export default Footer;
