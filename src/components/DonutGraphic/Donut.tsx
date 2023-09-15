import React from 'react';
import './styles/TaMo_Donut.scss';

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
const Donut = ({ porcentajes, colores, grados, modo, size }) => {
	return (
		<div
			className="TaMo_donut"
			style={{
				width: size ?? '140px',
				height: size ?? '140px',
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
			<div className="TaMo_donut__hole"></div>
			<div className="TaMo_donut__datos"></div>
		</div>
	);
};

export default Donut;
