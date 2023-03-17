import React, { CSSProperties } from 'react';
import { IconDropdown } from '../components';
import { onClickType } from './types/typesUtils';

//Regresa el contenedor general del aside
export const AsideContainer = ({ children }: any) => {
	return (
		<div
			className="ContainerAsideCardTeamComponent"
			style={{ justifyContent: 'center', alignItems: 'center' }}
		>
			{children}
		</div>
	);
};

//Retorna un button con una imagen del tamaño de 3rem
interface AsideButtonItemProps {
	onClick?: onClickType;
	src?: string;
	title?: string;
}
export const AsideButtonItem = (props: AsideButtonItemProps) => {
	const { onClick, src, title } = props;
	return (
		<button onClick={onClick} title={title}>
			<img src={src} alt={title} style={{ height: '3rem' }} />
		</button>
	);
};
function sizeLimit(numero: number, limite: number) {
	let resultado = numero;
	let i = 1;
	while (resultado < limite) {
		resultado *= i;
		i++;
	}
	return i * numero > limite ? i - 1 : i;
}
function sliceButtons(size: number, buttons?: any) {
	let maxButtons = sizeLimit(5, size);
	if (maxButtons * 5 - 2 > size) {
		return (
			buttons &&
			buttons?.map((e: any) => (
				<ButtonItem
					img={e.img}
					onClick={e.onClick}
					alt={e.titleToShow}
					title={e.titleToShow}
				/>
			))
		);
	} else {
		return (
			<>
				{buttons.slice(0, maxButtons - 1).map((e) => (
					<ButtonItem
						img={e.img}
						onClick={e.onClick}
						alt={e.titleToShow}
						title={e.titleToShow}
					/>
				))}
				<IconDropdown
					icon={require('../img/opciones.svg')}
					title={'Más opciones...'}
					options={
						maxButtons === 1
							? buttons?.map((e) => {
									return { title: e.titleToShow, onClick: e.onClick };
							  })
							: buttons?.slice(maxButtons - 1).map((e) => {
									return { title: e.titleToShow, onClick: e.onClick };
							  })
					}
				/>
			</>
		);
	}
}

type buttonstypes = { img?: string; onClick?: onClickType; titleToShow?: string };
interface ButtonsArrayProps {
	vertical?: boolean;
	style?: any;
	buttons?: buttonstypes[];
	children?: any;
	size: number;
}
export const ButtonsArray = (props: ButtonsArrayProps) => {
	const { vertical, style, buttons, children, size } = props;
	return (
		<div
			className={`buttonsArray`}
			style={{
				flexDirection: vertical ? 'column' : 'row',
				alignItems: vertical ? '' : 'center',
				justifyContent: vertical ? 'center' : '',
				...style,
			}}
		>
			{children ? children : sliceButtons(size, buttons)}
		</div>
	);
};

interface ButtonItemProps {
	children?: any;
	img?: string;
	alt?: string;
	onClick?: onClickType;
	style?: CSSProperties;
	styleImg?: CSSProperties;
	title?: string;
}
export const ButtonItem = (props: ButtonItemProps) => {
	const { children, img, alt, onClick, style, styleImg, title } = props;
	return (
		<button
			style={{ width: 'auto', height: '3rem', cursor: 'pointer', ...style }}
			onClick={onClick}
		>
			{img && (
				<img
					src={img}
					alt={alt}
					style={{ width: 'auto', height: '3rem', ...styleImg }}
					title={title}
				/>
			)}
			{children}
		</button>
	);
};
