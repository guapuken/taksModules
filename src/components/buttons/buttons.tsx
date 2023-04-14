import React from 'react';
import Button from '../button/button';

import { buttons } from './types';

//component
const Buttons = (props: buttons) => {
	// desestructuración de props
	const datos = { ...props };
	// inicialización de props
	const {
		size = 'medium',
		composition = 'horizontal',
		onClick = {
			primary: () => alert('change the function'),
			secondary: () => alert('change the function'),
			tertiary: () => alert('change the function'),
		},
	} = props;

	function returnButtons() {
		function dataButton(tipo = 'primary') {
			return {
				legend:
					tipo === 'primary'
						? datos.legends?.primary
						: tipo === 'secondary'
						? datos.legends?.secondary
						: tipo === 'tertiary'
						? datos.legends?.tertiary
						: 'clic here',
				onClick:
					tipo === 'primary'
						? onClick?.primary
						: tipo === 'secondary'
						? onClick?.secondary
						: tipo === 'tertiary'
						? onClick?.tertiary
						: undefined,
				size: size,
				color:
					tipo === 'primary'
						? datos.colorButtons?.primary
						: tipo === 'secondary'
						? datos.colorButtons?.secondary
						: tipo === 'tertiary'
						? datos.colorButtons?.tertiary
						: undefined,
				colorHover:
					tipo === 'primary'
						? datos.colorHover?.primary
						: tipo === 'secondary'
						? datos.colorHover?.secondary
						: tipo === 'tertiary'
						? datos.colorHover?.tertiary
						: undefined,
				className:
					tipo === 'primary'
						? datos.className?.primary
						: tipo === 'secondary'
						? datos.className?.secondary
						: tipo === 'tertiary'
						? datos.className?.tertiary
						: undefined,
				primary: tipo === 'primary' ? datos.buttons?.primary : false,
				secondary: tipo === 'secondary' ? datos.buttons?.secondary : false,
				tertiary: tipo === 'tertiary' ? datos.buttons?.tertiary : false,
				rounded: datos.rounded ? datos.rounded : false,
				disabled:
					tipo === 'primary'
						? datos.disabled?.primary
						: tipo === 'secondary'
						? datos.disabled?.secondary
						: tipo === 'tertiary'
						? datos.disabled?.tertiary
						: undefined,
				style:
					tipo === 'primary'
						? datos.style?.primary
						: tipo === 'secondary'
						? { ...datos.style?.secondary }
						: tipo === 'tertiary'
						? datos.style?.tertiary
						: undefined,
				styleIcon:
					tipo === 'primary'
						? datos.styleIcon?.primary
						: tipo === 'secondary'
						? datos.styleIcon?.secondary
						: tipo === 'tertiary'
						? datos.styleIcon?.tertiary
						: undefined,
				border: datos.border ? datos.border : false,
				id:
					tipo === 'primary'
						? datos.id?.primary
						: tipo === 'secondary'
						? datos.id?.secondary
						: tipo === 'tertiary'
						? datos.id?.tertiary
						: undefined,
				key:
					tipo === 'primary'
						? datos.keys?.primary
						: tipo === 'secondary'
						? datos.keys?.secondary
						: tipo === 'tertiary'
						? datos.keys?.tertiary
						: undefined,
				icon:
					tipo === 'primary'
						? datos.icons?.primary
						: tipo === 'secondary'
						? datos.icons?.secondary
						: tipo === 'tertiary'
						? datos.icons?.tertiary
						: undefined,
			};
		}

		//styles
		let compositionStyles = {
			horizontal: {
				display: 'flex',
				justifyContent:
					datos.buttons?.secondary && !datos.buttons?.primary && !datos.buttons?.tertiary
						? 'right'
						: 'space-between',
				gap: '10px',
				width: '100%',
			},
			vertical: {
				display: 'flex',
				justifyContent:
					datos.buttons?.secondary && !datos.buttons?.primary && !datos.buttons?.tertiary
						? 'right'
						: 'space-between',
				gap: '10px',
				width: '100%',
			},
			box: {
				display: 'flex',
				justifyContent:
					datos.buttons?.secondary && !datos.buttons?.primary && !datos.buttons?.tertiary
						? 'right'
						: 'space-between',
				gap: '10px',
				width: '100%',
			},
		};

		let buttonsStyles = {
			horizontal: {
				secondary: {
					width: !datos.buttons?.primary ? '50%' : '25%',
				},
				primary: {
					width: '50%',
				},
				tertiary: {
					width: '25%',
				},
			},
			vertical: {
				width: '100%',
				// maxHeight: '2rem',
			},
			box: {
				primary: {
					width: '100%',
				},
				tertiaryAndSecondary: {
					width: '50%',
				},
			},
		};
		return composition === 'horizontal' ? (
			<div style={{ ...compositionStyles.horizontal, ...datos.styleComposition }}>
				{datos.buttons?.secondary && (
					<Button
						{...dataButton('secondary')}
						style={{ ...buttonsStyles.horizontal.secondary, ...datos.style?.secondary }}
					/>
				)}
				{datos.buttons?.tertiary && (
					<Button
						{...dataButton('tertiary')}
						style={{ ...buttonsStyles.horizontal.tertiary, ...datos.style?.tertiary }}
					/>
				)}
				{datos.buttons?.primary && (
					<Button
						{...dataButton('primary')}
						style={{ ...buttonsStyles.horizontal.primary, ...datos.style?.primary }}
					/>
				)}
			</div>
		) : composition === 'vertical' ? (
			<div
				style={{
					flexDirection: 'column',
					flexWrap: 'wrap',
					maxWidth: '100%',
					...compositionStyles.vertical,
					...datos.styleComposition,
				}}
			>
				{datos.buttons?.primary && (
					<Button
						{...dataButton('primary')}
						style={{ ...buttonsStyles.vertical, ...datos.style?.primary }}
					/>
				)}
				{datos.buttons?.secondary && (
					<Button
						{...dataButton('secondary')}
						style={{ ...buttonsStyles.vertical, ...datos.style?.secondary }}
					/>
				)}
				{datos.buttons?.tertiary && (
					<Button
						{...dataButton('tertiary')}
						style={{ ...buttonsStyles.vertical, ...datos.style?.tertiary }}
					/>
				)}
			</div>
		) : composition === 'box' ? (
			<div
				style={{
					flexDirection: 'column',
					flexWrap: 'wrap',
					...compositionStyles.box,
					...datos.styleComposition,
				}}
			>
				{datos.buttons?.primary && (
					<Button
						{...dataButton('primary')}
						style={{ ...buttonsStyles.box.primary, ...datos.style?.primary }}
					/>
				)}
				<div
					style={{
						display: 'flex',
						gap: '10px',
						maxWidth: '100%',
						justifyContent: 'right',
					}}
				>
					{datos.buttons?.tertiary && (
						<Button
							{...dataButton('tertiary')}
							style={{
								...buttonsStyles.box.tertiaryAndSecondary,
								...datos.style?.tertiary,
							}}
						/>
					)}
					{datos.buttons?.secondary && (
						<Button
							{...dataButton('secondary')}
							style={{
								...buttonsStyles.box.tertiaryAndSecondary,
								...datos.style?.secondary,
							}}
						/>
					)}
				</div>
			</div>
		) : (
			<></>
		);
	}
	return returnButtons();
};

export default Buttons;
