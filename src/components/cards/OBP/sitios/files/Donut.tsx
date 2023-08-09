import React, { useEffect, useRef, useState } from 'react';

import './Donut.scss';
import { Texts, Title } from '../../../../Atoms';
import { findMaxValue } from '../../../../../utils/functions/functions';
import { Modo } from '../../../../../types';

/***
 Función que se encarga de generar un arreglo de número que son pasados de porcentajes a grados para poder generar la curvatura total de un círculo
 */
function percentToDegrees(percents: number[], grados: number) {
	let value = 0;
	let newArray = [] as any;
	let i = 0;
	while (i < percents.length) {
		if (i <= 0) {
			value += percents[i];

			newArray.push(Math.floor((percents[i] * grados) / 100) || 0);
		} else {
			value += percents[i];

			newArray.push(Math.floor((percents[i] + value * grados) / 100));
		}
		i++;
	}
	return newArray;
}

/**
 Función que genera un gradiente cónico para generar una gráfica estática por medio de estilos de css
 */
function elementsToPie({ colores, porcentajes, grados }: any) {
	let porcentajesToDegrees = percentToDegrees(porcentajes, grados);
	let contador = 0;
	let background = '';
	if (colores && porcentajesToDegrees) {
		while (contador <= porcentajesToDegrees.length) {
			if (contador === 0) {
				background += `${colores[contador]} 0deg ${porcentajesToDegrees[contador]}deg, `;
			} else if (contador === porcentajes.length) {
				background += `transparent ${porcentajesToDegrees[contador - 1]}deg ${grados}deg`;
			} else {
				background += `${colores[contador]} ${porcentajesToDegrees[contador - 1]}deg ${
					porcentajesToDegrees[contador]
				}deg,`;
			}
			contador++;
		}
	}
	return `conic-gradient(${background})`;
}
export const HalfDonut = ({ colores, porcentajes, values }: any) => {
	return (
		<div
			className="donut"
			style={{
				width: '140px',
				height: '140px',
				background: elementsToPie({
					colores: colores,
					porcentajes: porcentajes,
					grados: 180,
				}),
			}}
			theme-config="Dark"
		>
			<div className="donut__hole"></div>
			<div className="donut__datos">
				<div className="donut__datos-max">
					<Texts
						modo="Dark"
						className={
							porcentajes[0] === findMaxValue(porcentajes)
								? 'donut__datos-max-maxValue'
								: ''
						}
						style={{ borderColor: colores[0] }}
					>
						{`${values[0]}: ${isNaN(porcentajes[0]) ? 0 : porcentajes[0]}%`}
					</Texts>
					<Texts
						modo="Dark"
						className={
							porcentajes[1] === findMaxValue(porcentajes)
								? 'donut__datos-max-maxValue'
								: ''
						}
						style={{ borderColor: colores[1] }}
					>
						{`${values[1]}: ${isNaN(porcentajes[1]) ? 0 : porcentajes[1]}%`}
					</Texts>
					<Texts
						modo="Dark"
						className={
							porcentajes[2] === findMaxValue(porcentajes)
								? 'donut__datos-max-maxValue'
								: ''
						}
						style={{ borderColor: colores[2] }}
					>
						{`${values[2]}: ${isNaN(porcentajes[2]) ? 0 : porcentajes[2]}%`}
					</Texts>
					<Texts
						modo="Dark"
						className={
							porcentajes[3] === findMaxValue(porcentajes)
								? 'donut__datos-max-maxValue'
								: ''
						}
						style={{ borderColor: colores[3] }}
					>
						{`${values[3]}: ${isNaN(porcentajes[3]) ? 0 : porcentajes[3]}%`}
					</Texts>
					<Texts
						modo="Dark"
						className={
							porcentajes[4] === findMaxValue(porcentajes)
								? 'donut__datos-max-maxValue'
								: ''
						}
						style={{ borderColor: colores[4] }}
					>
						{`${values[4]}: ${isNaN(porcentajes[4]) ? 0 : porcentajes[4]}%`}
					</Texts>
				</div>
			</div>
		</div>
	);
};

interface Donut {
	colores: string[];
	porcentajes: number[];
	grados?: number;
	modo: Modo;
}
export const Donut = ({ colores, porcentajes, grados, modo }: Donut) => {
	return (
		<div
			className="donut"
			style={{
				width: '140px',
				height: '140px',
				background:
					porcentajes && colores
						? elementsToPie({
								colores: colores,
								porcentajes: porcentajes,
								grados: grados ?? 360,
						  })
						: '#000',
			}}
			theme-config={modo}
		>
			<div className="donut__hole"></div>
			<div className="donut__datos"></div>
		</div>
	);
};
