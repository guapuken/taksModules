import React, { useEffect, useRef, useState } from 'react';

import './Donut.scss';
import { Texts, Title } from '../../../../Atoms';
import { findMaxValue } from '../../../../../utils/functions/functions';

const Donut = ({ colores, porcentajes, values }: any) => {
	function percentToDegrees(percents: number[]) {
		let value = 0;
		let newArray = [] as any;
		let i = 0;
		while (i < percents.length) {
			if (i <= 0) {
				value += percents[i];
				
				newArray.push(Math.floor((percents[i] * 180) / 100)??0)/* : newArray.push(0) */
			} else {
				value += percents[i];
				// value ? newArray.push(Math.floor((percents[i] * 180) / 100)): newArray.push(0)

				newArray.push(Math.floor((percents[i] + value * 180) / 100)??0);
			}
			i++;
		}
		return newArray;
	}

	function elementsToPie({ colores, porcentajes }: any) {
		let porcentajesToDegrees = percentToDegrees(porcentajes);
		let contador = 0;
		let background = '';
		if (colores && porcentajesToDegrees) {
			while (contador <= porcentajesToDegrees.length) {
				if (contador === 0) {
					background += `${colores[contador]} 0deg ${porcentajesToDegrees[contador]}deg, `;
				} else if (contador === porcentajes.length) {
					background += `transparent ${porcentajesToDegrees[contador - 1]}deg 180deg`;
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

	return (
		<div
			className="donut"
			style={{
				width: '140px',
				height: '140px',
				background: elementsToPie({
					colores: colores,
					porcentajes: porcentajes,
				}),
			}}
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
						{`${values[0]}: ${porcentajes[0]}%`}
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
						{`${values[1]}: ${porcentajes[1]}%`}
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
						{`${values[2]}: ${porcentajes[2]}%`}
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
						{`${values[3]}: ${porcentajes[3]}%`}
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
						{`${values[4]}: ${porcentajes[4]}%`}
					</Texts>
				</div>
			</div>
		</div>
	);
};

export default Donut;

/* import React, { useEffect, useRef, useState } from 'react';

import './Donut.scss';
import { Texts, Title } from '../../../../Atoms';

const Donut = () => {
	const [isOver, setIsOver] = useState(false);
	function percentToDegrees(percents: number[]) {
		let value = 0;
		let newArray = [] as any;
		let i = 0;
		while (i < percents.length) {
			if (i <= 0) {
				value += percents[i];
				newArray.push(Math.floor((percents[i] * 180) / 100));
			} else {
				value += percents[i];
				newArray.push(Math.floor((percents[i] + value * 180) / 100));
			}
			i++;
		}
		console.log(value);
		return newArray;
	}

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const data = [40, 15, 20, 10, 15]; // Valores para los segmentos del arco
	const colors = ['#F8B03D', '#5FB464', '#3866AE', '#CA2284', '#8E1913']; // Colores para cada segmento

	useEffect(() => {
		drawPieChart();
	}, []);

	const drawPieChart = () => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext('2d');

		if (canvas) {
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const radius = Math.min(centerX, centerY) - 10;

			let startAngle = 0;
			let endAngle = 0;

			for (let i = 0; i < data.length; i++) {
				const slicePercentage = data[i] / data.reduce((a, b) => a + b, 0);
				endAngle = startAngle + 2 * Math.PI * slicePercentage;

				if (ctx) {
					ctx.fillStyle = colors[i];
					ctx.beginPath();
					ctx.moveTo(centerX, centerY);
					ctx.arc(centerX, centerY, radius, startAngle, endAngle);
					ctx.lineTo(centerX, centerY);
					ctx.fill();
				}

				startAngle = endAngle;
			}
		}
	};

	return (
		<div className="circle-donut">
			<canvas ref={canvasRef} width={200} height={200}></canvas>
			<span className="circle-donut-info"></span>
		</div>
	);
	// );
};

export default Donut; */
