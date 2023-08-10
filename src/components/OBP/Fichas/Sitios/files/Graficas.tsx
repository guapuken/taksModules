import React, { useState } from 'react';
import { Texts, Title } from '../../../../Atoms';
import { Donut } from '../../../../cards/OBP/sitios/files/Donut';
import { Modo } from '../../../../../types';

type objects = {
	title: string;
	value: number;
	color: string;
};
interface GraficasProps {
	data: objects[];
	modo: Modo;
	title?: string;
}
const Graficas = (props: GraficasProps) => {
	const { data, modo, title } = props;
	// hooks de estado que nos permiten cambiar y mostrar de manera visual el elementto mayor dentro de la gráfica
	const [maxValue, setMaxValue] = useState(0);
	const [textMaxValue, setTextMaxValue] = useState('');

	// variables que guardan los arreglos para ser colocados en los elemtentos de abajo
	let percents = [] as any;
	let colores = [] as any;
	// genrar los textos que contiene la gráfica, al mismo tiempo le agrag el borde del color al que corresponde, su porcentaje y su nombre
	function getOptions(options: any[], modo: Modo) {
		if (options) {
			return options?.map((option: any) => {
				percents.push(option.value);
				colores.push(option.color);
				if (option.value > maxValue) {
					setMaxValue(option.value);
					setTextMaxValue(option.title);
				}
				return (
					<Texts
						key={`${option.value}${option.title}`}
						modo={modo}
						style={{
							borderBottom: `4px solid ${option.color ?? '#000'}`,
							opacity: '1',
							scale: option.value === maxValue && maxValue > 0 ? '1.2' : '',
						}}
					>
						<span style={{ fontWeight: '700' }}>{option.title ?? 'N/A'}</span>
						{`: ${option.value ?? 0}%`}
					</Texts>
				);
			});
		}
	}

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
		>
			<div style={{ display: 'flex', gap: '20px' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
					{data ? getOptions(data, modo) : <></>}
				</div>
				<div style={{ position: 'relative' }}>
					<Donut colores={colores} porcentajes={percents} modo={modo} />
					<Texts
						modo={modo}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%,-50%)',
							zIndex: '1',
							fontSize: '18px',
						}}
					>
						<span style={{ fontSize: 'inherit', color: 'inherit' }}>Mayor</span>
						<span style={{ fontSize: '22px', fontWeight: '700', color: 'inherit' }}>
							{textMaxValue}
						</span>
						<span
							style={{ fontSize: 'inherit', color: 'inherit' }}
						>{`${maxValue}%`}</span>
					</Texts>
				</div>
			</div>
			<Title modo={modo}>{title}</Title>
		</div>
	);
};

export default Graficas;
