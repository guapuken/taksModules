import React from 'react';
import { getIconsInterface, iconsInterface } from './typesgetIcons';

const getIcons = ({ icon = 'puntosSupensivos', ...props }: iconsInterface) => {
	const dataToView = {
		//#region Icono Pautar
		pautar: () => (
			<>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M20.09,4.59a15.5,15.5,0,1,1-15.5,15.5,15.52,15.52,0,0,1,15.5-15.5m0-2a17.5,17.5,0,1,0,17.5,17.5,17.49,17.49,0,0,0-17.5-17.5Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M37.2,37.2l7.91,6-1.89,1.89-6-7.91m-4.37-5.84-1.47,1.47L42.16,47a1.24,1.24,0,0,0,1.86.13L47.14,44A1.24,1.24,0,0,0,47,42.16L32.83,31.36Z"
				/>
			</>
		),
		//#endregion
		//#region Icono minimizar
		minimizar: () => (
			<>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="17.5,7.5 17.5,17.5 7.5,17.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="7.5,32.5 17.5,32.5 17.5,42.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="32.5,7.5 32.5,17.5 42.5,17.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="42.5,32.5 32.5,32.5 32.5,42.5 " />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="32.5" y1="32.5" x2="42.5" y2="42.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.5" y1="7.5" x2="17.5" y2="17.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.5" y1="42.5" x2="17.5" y2="32.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="32.5" y1="17.5" x2="42.5" y2="7.5" />
			</>
		),
		//#endregion
		//#region Icono Orientar
		orientar: () => (
			<g>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M25,6c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.1,0.1L44,43.7c0.1,0.1,0,0.3-0.1,0.3c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0
                L27,35.6c-0.6-0.3-1.3-0.5-2-0.5c-0.7,0-1.4,0.2-1.9,0.5L6.2,44c0,0-0.1,0-0.1,0c0,0-0.1,0-0.2-0.1c0-0.1,0-0.1,0-0.2L24.8,6.1
                C24.8,6,24.9,6,25,6 M25,4c-0.8,0-1.6,0.4-2,1.2L4.1,42.8c-0.3,0.6-0.3,1.4,0,2.1c0.4,0.8,1.2,1.2,2,1.2c0.3,0,0.7-0.1,1-0.3
                l16.8-8.4c0.3-0.2,0.7-0.3,1.1-0.3s0.7,0.1,1.1,0.3l16.8,8.4c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0,0.7-0.1,1-0.2c1.1-0.5,1.6-1.9,1-3
                L27,5.2c-0.2-0.4-0.6-0.8-1-1C25.7,4,25.4,4,25,4L25,4z"
				/>
			</g>
		),
		//#endregion
		//#region Icono Tráfico
		trafico: () => (
			<g>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					{...props}
					d="M26.1,23.3l2,1.7l-2,1.7v-0.3v-0.7v-2L26.1,23.3 M25,4L4,25l6.8,6.8l1.9-1.9L7.8,25L25,7.8L42.2,25L25,42.2
                    l-4.6-4.6V26.4c0-0.1,0-0.1,0.1-0.1h3.6v3c0,0.4,0.3,0.7,0.7,0.7c0,0,0,0,0,0c0.2,0,0.3-0.1,0.4-0.2l5.4-4.4c0.3-0.2,0.3-0.7,0.1-1
                    c0,0-0.1-0.1-0.1-0.1l-5.4-4.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2,0-0.4,0.1-0.6,0.3c-0.1,0.1-0.2,0.3-0.2,0.4v3h-3.6
                    c-1.6,0-2.9,1.3-2.9,2.9v11v1.2L25,46l21-21L25,4L25,4z"
				/>
			</g>
		),
		//#endregion
		//#region Icono Sitios
		sitios: () => (
			<g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.03,27.5H8.04c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h33.99c1.1,0,2,0.9,2,2v17.5
		C44.03,26.6,43.14,27.5,42.03,27.5z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.5" y1="11.51" x2="27.5" y2="11.51" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="33.24" y1="11.51" x2="38.24" y2="11.51" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="11.82" y1="11.51" x2="16.82" y2="11.51" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="14.32" y1="11.51" x2="14.32" y2="6" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="11.51" x2="25" y2="6" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="35.75" y1="11.51" x2="35.75" y2="6" />
				<rect x="22.5" y="27.5" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="5" height="16.52" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.5" y1="44.02" x2="32.5" y2="44.02" />
			</g>
		),
		//#endregion
		//#region catalogo
		catalogo: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25,40V12.79l-3.36-3.41H8.05c-1.11,0-2.01,0.9-2.01,2.01v26.59c0,1.11,0.9,2.01,2.01,2.01H25z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25,40V12.79l3.36-3.41h13.63c1.11,0,2.01,0.9,2.01,2.01v26.59c0,1.11-0.9,2.01-2.01,2.01H25z" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.03" y1="15" x2="38.99" y2="15" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.03" y1="20.01" x2="38.99" y2="20.01" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.03" y1="27.5" x2="38.99" y2="27.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.03" y1="32.51" x2="38.99" y2="32.51" />
				<rect x="11.47" y="15" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="8.54" height="5.01" />
				<rect x="11.47" y="27.5" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="8.54" height="5.01" />
			</>
		),
		//#endregion
		//#region Icono Urbanos
		urbanos: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M8.74,30.5H5.99V26c0-0.55,0.45-1,1-1h1.75c1.1,0,2,0.9,2,2v1.49C10.74,29.6,9.84,30.5,8.74,30.5z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M43.99,10.58v25.43c0,1.1-0.89,1.99-2,1.99h-5.11c0-1.97-1.6-3.56-3.57-3.56c-1.96,0-3.56,1.59-3.56,3.56H17.86
	c0-1.97-1.59-3.56-3.56-3.56c-1.97,0-3.56,1.59-3.56,3.56H7.98c-1.1,0-1.99-0.89-1.99-1.99V24.64c0-0.59,0.13-1.17,0.38-1.7
	l6.13-12.18c0.68-1.35,2.06-2.2,3.56-2.2h25.91C43.09,8.56,43.99,9.47,43.99,10.58z"/>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="14.3" cy="38" r="3.56" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.88,38c0,1.97-1.6,3.56-3.57,3.56c-1.96,0-3.56-1.59-3.56-3.56s1.6-3.56,3.56-3.56
	C35.28,34.44,36.88,36.03,36.88,38z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="43.99" y1="25" x2="7.04" y2="25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="43.99" y1="13.52" x2="11.11" y2="13.52" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.5" y1="13.52" x2="17.5" y2="25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="26.25" y1="13.52" x2="26.25" y2="25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="35" y1="13.52" x2="35" y2="25" />
			</>
		),
		//#endregion
		//#region Icono Billetes
		billetes: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M37.28,29.74L37.28,29.74c0.01,0.15-0.14,0.29-0.46,0.4l-15.96,5.13c-0.68,0.22-1.85,0.19-2.62-0.07l-7.68-2.54
	c-0.41-0.13-0.61-0.3-0.62-0.47l-0.01,0c0,0,0,6.73,0,6.87c0,0.17,0.21,0.34,0.63,0.48l7.68,2.54c0.77,0.26,1.94,0.29,2.62,0.07
	l15.96-5.13c0.31-0.1,0.46-0.24,0.46-0.38C37.28,36.48,37.28,29.74,37.28,29.74z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M23.83,32.74l2.39,0.8l-5.37,1.72c-0.68,0.22-1.85,0.19-2.62-0.06l-7.68-2.55c-0.11-0.04-0.21-0.07-0.29-0.12
	c-0.06-0.03-0.12-0.06-0.17-0.1S10,32.35,9.97,32.31c-0.01,0-0.01-0.01-0.01-0.01c-0.02-0.04-0.04-0.07-0.04-0.11
	c0-0.15,0.15-0.29,0.47-0.39l5.43-1.75h0.01l0.43-0.14h0.01l2.41,0.8l-0.46,0.15L23.83,32.74z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M37.28,29.76c0,0.04-0.01,0.08-0.04,0.11c-0.01,0.03-0.03,0.05-0.06,0.07c0,0-0.01,0.02-0.02,0.02
	c-0.04,0.04-0.09,0.07-0.15,0.1c-0.05,0.03-0.12,0.06-0.2,0.08l-5.69,1.83v-0.11l-2.27-0.74l-0.62-0.2l2.09-0.67l0.8-0.26l3.9-1.25
	l1.63,0.54c0.4,0.13,0.61,0.31,0.62,0.46C37.28,29.75,37.28,29.75,37.28,29.76z"/>
				<path d="M18.22,30.86l5.61,1.88l-2.59,0.83c-0.77-0.26-1.95-0.29-2.63-0.07l-2.85-0.95c0.68-0.21,0.6-0.6-0.17-0.85L18.22,30.86z" />
				<path d="M31.61,30.24l-2.76,0.88l-0.62-0.2l2.09-0.67l0.8-0.26C31.22,30.08,31.38,30.16,31.61,30.24z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31.12,31.86v0.11l-4.89,1.57h-0.01l-2.39-0.8l-5.61-1.88l0.46-0.15l3.64,1.2c0.77,0.26,1.95,0.29,2.62,0.07
	l3.29-1.06l0.62,0.2L31.12,31.86z"/>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="16.27,29.91 18.68,30.71 18.22,30.86 15.83,30.05 16.26,29.91 " />
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="31.12,31.97 31.12,38.85 26.23,40.42 26.23,33.54 " />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M30.32,23.37v6.88l-2.09,0.67l-3.29,1.06c-0.67,0.22-1.85,0.19-2.62-0.07l-3.64-1.2l-2.41-0.8h-0.01l-1.62-0.54
	c-0.41-0.14-0.62-0.31-0.63-0.48v-6.61l2.95,0.98c0.04,0.01,0.09,0.03,0.14,0.04c0.01,0,0.03,0.01,0.04,0.01l5.18,1.72
	c0.77,0.25,1.95,0.28,2.62,0.06l5.37-1.72H30.32z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.37,19.57c0,0,0,0.01,0,0.02v6.89c0,0.14-0.15,0.27-0.46,0.37l-5.7,1.83V21.8l5.7-1.83
	c0.15-0.05,0.26-0.11,0.34-0.17c0.03-0.03,0.06-0.06,0.08-0.1c0.03-0.04,0.04-0.09,0.03-0.13H41.37z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.37,19.59c0,0.04-0.01,0.08-0.04,0.11c-0.02,0.04-0.05,0.07-0.08,0.1c-0.08,0.06-0.19,0.12-0.34,0.17
	l-5.7,1.83l-4.89,1.57h-0.01l-5.37,1.72c-0.67,0.22-1.85,0.19-2.62-0.06l-5.18-1.72c0.76,0.21,1.82,0.23,2.45,0.02l1.59-0.51
	l3.78-1.22v-0.03L25,21.59h0.01l4.84-1.56v-0.08l0.13,0.04L34,18.7l1.55-0.5c0.31-0.1,0.46-0.23,0.46-0.37v-0.28l4.73,1.56
	c0.4,0.13,0.61,0.3,0.62,0.46C41.37,19.58,41.37,19.58,41.37,19.59z"/>
				<path d="M25.01,21.59l2.91,0.98l-2.59,0.83c-0.77-0.26-1.95-0.29-2.62-0.07l-1.53-0.51l3.78-1.22v-0.03L25,21.59H25.01z" />
				<path d="M35.7,20.07l-2.76,0.88l-2.96-0.96L34,18.7l1.53,0.51C34.85,19.43,34.93,19.81,35.7,20.07z" />
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="35.21,21.8 35.21,28.68 35.02,28.74 31.12,29.99 30.32,30.25 30.32,23.37 " />
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="35.21,21.69 35.21,21.8 30.32,23.37 30.31,23.37 27.92,22.57 25.01,21.59 29.85,20.03 29.85,19.95 
	29.98,19.99 32.94,20.95 "/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M19.59,16.44c-0.68,0.22-1.86,0.19-2.63-0.06l-7.67-2.55c-0.1-0.03-0.2-0.07-0.28-0.11
	c-0.04-0.02-0.07-0.04-0.1-0.06c-0.07-0.03-0.12-0.07-0.16-0.12c-0.02-0.01-0.04-0.03-0.05-0.05c-0.03-0.05-0.04-0.09-0.04-0.12
	c0,0,0,2.99,0,5.03v1.84c0,0.17,0.21,0.34,0.63,0.48l4.72,1.56l2.95,0.98c0.04,0.01,0.09,0.03,0.14,0.04c0.01,0,0.03,0.01,0.04,0.01
	c0.76,0.21,1.82,0.23,2.45,0.02l1.59-0.51l3.78-1.22v-6.88L19.59,16.44z"/>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25,21.59 24.96,21.6 24.96,21.57 " />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.01,10.94v6.89c0,0.14-0.15,0.27-0.46,0.37L34,18.7l-4.02,1.29l-0.13-0.04v-6.8l5.7-1.83
	C35.86,11.22,36.01,11.08,36.01,10.94z"/>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="29.98,19.99 29.85,20.03 29.85,19.95 " />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.01,10.94c0,0.14-0.15,0.28-0.46,0.38l-5.7,1.83l-4.89,1.57l-5.37,1.72c-0.68,0.22-1.86,0.19-2.63-0.06
	l-7.67-2.55c-0.1-0.03-0.2-0.07-0.28-0.11c-0.04-0.02-0.07-0.04-0.1-0.06c-0.07-0.04-0.12-0.08-0.16-0.12
	c-0.02-0.01-0.04-0.03-0.05-0.05c-0.03-0.05-0.04-0.09-0.04-0.12c-0.02-0.15,0.14-0.29,0.46-0.39l5.43-1.75h0.01l4.87-1.57h0.01
	l5.64-1.81c0.68-0.22,1.85-0.19,2.62,0.07l7.68,2.54C35.8,10.6,36.01,10.77,36.01,10.94z"/>
				<path d="M16.95,12.04l5.6,1.88l-2.58,0.83c-0.77-0.26-1.94-0.29-2.62-0.07l-2.86-0.95c0.68-0.22,0.61-0.6-0.16-0.85l2.61-0.84H16.95
	z"/>
				<path d="M30.34,11.41l-2.77,0.89l-5.7-1.85l2.83-0.91c0.77,0.26,1.94,0.29,2.62,0.07l2.85,0.95C29.49,10.78,29.57,11.16,30.34,11.41
	z"/>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="29.85,13.15 29.85,20.03 25.01,21.59 25,21.59 24.96,21.57 24.96,14.72 " />
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25,21.59 24.96,21.6 24.96,21.57 " />
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="29.85,13.04 29.85,13.15 24.96,14.72 22.56,13.92 22.55,13.92 16.95,12.04 16.94,12.04 14.56,11.23 
	19.43,9.66 19.44,9.66 21.87,10.45 27.57,12.3 "/>
			</>
		),
		//#endregion
		//#region Icono outdoors
		outdoors: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M12.5,37.45v-4.01H9.19c-0.31,0-0.59,0.16-0.75,0.42l-2.29,3.75c-0.08,0.14-0.13,0.3-0.13,0.46v3.48
	c0,0.49,0.4,0.88,0.88,0.88h14.6c0.55,0,1-0.45,1-1v-3.98H12.5z"/>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="8.85" cy="42.44" r="1.56" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="17.99" cy="42.44" r="1.56" />
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31.72,29.52h11.22c0.57,0,1.03,0.46,1.03,1.03v11.01c0,0.48-0.39,0.88-0.88,0.88H28.17
		c-0.48,0-0.88-0.39-0.88-0.88v-3.24v-1.75c0-0.26,0.06-0.51,0.17-0.75l2.69-5.35C30.45,29.89,31.06,29.52,31.72,29.52z"/>
					<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="30.94" cy="42.44" r="1.56" />
					<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="39.29" cy="42.44" r="1.56" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="43.97" y1="36.53" x2="27.76" y2="36.53" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="34.17" y1="29.52" x2="34.17" y2="36.28" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="39.07" y1="29.78" x2="39.07" y2="36.53" />
				</g>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M38.7,23.77H11.3c-1.1,0-2-0.9-2-2V7.99c0-1.1,0.9-2,2-2H38.7c1.1,0,2,0.9,2,2v13.77
		C40.7,22.87,39.81,23.77,38.7,23.77z"/>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.9" y1="10.55" x2="27.03" y2="10.55" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.78" y1="10.55" x2="35.91" y2="10.55" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="14.07" y1="10.55" x2="18.21" y2="10.55" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="16.14" y1="10.55" x2="16.14" y2="5.99" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="24.97" y1="10.55" x2="24.97" y2="5.99" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="33.86" y1="10.55" x2="33.86" y2="5.99" />
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M21.48,29.31h-7.97c-0.56,0-1.02,0.46-1.02,1.02v7.17h10v-7.17C22.5,29.76,22.04,29.31,21.48,29.31z" />
			</>
		),
		//#endregion
		//#region Icono Indoors
		indoors: () => (
			<>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="22.13,32.79 38.33,34.17 38.04,43.59 14.18,43.59 14.18,34.62 " />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.99,35.8c0.01-0.21-0.01-0.41-0.07-0.58c-0.93-2.77-10.24-1.83-11.75-1.66" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M22.13,32.79l-3.8,0.88c5.25-6.99,20.98-11.57,25.16-6.77c0.35,0.41,0.49,0.96,0.42,1.5l-1.68,13.44
	c-0.12,1-0.98,1.75-1.98,1.75h-2.21l0.29-9.42L22.13,32.79z"/>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="20.14,43.49 20.14,37.45 22.13,36.94 28.1,37.69 32.07,38.19 32.07,43.59 " />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="38.33" y1="33.53" x2="38.58" y2="25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="30.82" y1="26.02" x2="31.17" y2="33.47" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="23.36" y1="29.33" x2="23.76" y2="32.48" />
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M23.27,15.07l-9.73-5.44l2.64-1.23c0.97-0.45,2.09-0.5,3.09-0.12l10.25,3.84" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.4,18.01l-4.33,7.77l3.27-1.53c0.59-0.27,1.1-0.69,1.48-1.2l6.1-8.09" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M27.41,11.32l9.41-4.39l1.13-0.53c1.99-0.93,4.35-0.07,5.27,1.92l0.53,1.13L14.3,23.19
		c-2.01,0.94-4.4,0.07-5.33-1.94l-2.71-5.82l0.14-0.06c1.36-0.64,2.97-0.45,4.15,0.49l2.64,2.1l7.46-3.48"/>
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M8.09,43.59h6.08v-8.97l-6.45,1.22c-0.94,0.18-1.63,1-1.63,1.96v3.79C6.1,42.7,6.99,43.59,8.09,43.59z" />
			</>
		),
		//#endregion
		//#region Icono Vallas
		vallas: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M18.52,19.51V38h-2.46c0-1.97-1.59-3.56-3.56-3.56c-1.97,0-3.56,1.59-3.56,3.56H8.03
	c-1.11,0-2.01-0.9-2.01-2.01v-7.92c0-0.37,0.1-0.74,0.3-1.05l5.22-8.56c0.37-0.6,1.02-0.96,1.72-0.96h3.25
	C17.62,17.5,18.52,18.4,18.52,19.51z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.99,8.56H25.52c-1.11,0-2,0.9-2,2v4.87v15.78h20.47V10.57C43.99,9.46,43.09,8.56,41.99,8.56z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M43.99,31.29v4.7c0,1.11-0.9,2.01-2.01,2.01h-5.1c0-1.97-1.6-3.56-3.57-3.56c-1.96,0-3.56,1.59-3.56,3.56H18.6
	c-0.05,0-0.08-0.03-0.08-0.07v-6.64c0-0.04,0.03-0.07,0.08-0.07h25.32C43.96,31.22,43.99,31.25,43.99,31.29z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="18.52" y1="28.51" x2="6.02" y2="28.51" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="12.5" cy="38" r="3.56" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.88,38c0,1.97-1.6,3.56-3.57,3.56c-1.96,0-3.56-1.59-3.56-3.56s1.6-3.56,3.56-3.56
	C35.28,34.44,36.88,36.03,36.88,38z"/>
			</>
		),
		//#endregion
		//#region Icono Dahboard
		dashboard: () => (
			<>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="15" cy="15" r="7.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="8.5" x2="42.5" y2="8.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="15" x2="42.5" y2="15" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="21.48" x2="42.5" y2="21.48" />
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="35,28.23 27.5,33.68 30.36,42.5 39.64,42.5 42.5,33.68 " />
				<rect x="7.5" y="37.5" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="5" height="5" />
				<rect x="12.5" y="32.5" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="5" height="10" />
				<rect x="17.5" y="27.5" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="5" height="15" />
			</>
		),
		//#endregion
		//#region ícono cotizador
		cotizador: () => (
			<>
				<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="10.03" y="6.25" width="29.97" height="37.5" rx="2" ry="2" />
				<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="10.01" y="6.25" width="29.99" height="11.25" rx="2" ry="2" />
				<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="15" y="22.92" width="7.51" height="5.5" rx="2" ry="2" />
				<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="27.5" y="22.92" width="7.51" height="5.5" rx="2" ry="2" />
				<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="27.5" y="33.9" width="7.51" height="5.5" rx="2" ry="2" />
				<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="15" y="33.9" width="7.51" height="5.5" rx="2" ry="2" />
				<g>
					<path fill={props?.fill ?? "var(--detailFont)"} d="M18.83,14.29c-.37,0-.73-.05-1.07-.15-.34-.1-.62-.23-.83-.39l.37-.81c.2.14.44.26.71.35.27.09.55.14.83.14.21,0,.39-.02.52-.06.13-.04.23-.1.29-.18.06-.08.09-.16.09-.26,0-.12-.05-.22-.15-.3s-.23-.13-.39-.18c-.16-.05-.34-.09-.53-.13-.19-.04-.39-.09-.58-.16-.19-.06-.37-.14-.53-.24-.16-.1-.29-.23-.39-.39-.1-.16-.15-.36-.15-.61,0-.27.07-.51.22-.73s.36-.4.65-.53.66-.2,1.1-.2c.29,0,.58.03.87.1.28.07.54.17.75.31l-.33.82c-.22-.12-.44-.22-.65-.28-.22-.06-.43-.09-.64-.09s-.38.02-.51.07c-.13.05-.23.11-.29.19-.06.08-.09.17-.09.27,0,.12.05.22.15.29s.23.13.39.18c.16.04.34.09.53.13.19.04.39.1.58.15.19.06.37.14.53.23.16.1.29.23.39.39s.15.36.15.61c0,.26-.07.5-.22.72-.15.22-.37.39-.66.53-.29.13-.66.2-1.1.2ZM18.59,15.01v-6.26h.67v6.26h-.67Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M24.96,14.29c-.37,0-.73-.05-1.07-.15-.34-.1-.62-.23-.83-.39l.37-.81c.2.14.44.26.71.35.27.09.55.14.83.14.21,0,.38-.02.52-.06.13-.04.23-.1.29-.18.06-.08.09-.16.09-.26,0-.12-.05-.22-.15-.3s-.23-.13-.39-.18-.34-.09-.53-.13c-.19-.04-.39-.09-.58-.16-.19-.06-.37-.14-.53-.24s-.29-.23-.39-.39-.15-.36-.15-.61c0-.27.07-.51.22-.73.14-.22.36-.4.65-.53s.66-.2,1.1-.2c.29,0,.58.03.87.1.28.07.53.17.75.31l-.33.82c-.22-.12-.43-.22-.65-.28-.22-.06-.43-.09-.64-.09s-.38.02-.51.07c-.13.05-.23.11-.29.19-.06.08-.09.17-.09.27,0,.12.05.22.15.29s.23.13.39.18c.16.04.34.09.53.13.19.04.39.1.58.15s.37.14.53.23c.16.1.29.23.39.39.1.16.15.36.15.61,0,.26-.07.5-.22.72-.15.22-.37.39-.66.53-.29.13-.66.2-1.1.2ZM24.72,15.01v-6.26h.67v6.26h-.67Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M31.1,14.29c-.37,0-.73-.05-1.07-.15-.34-.1-.62-.23-.83-.39l.37-.81c.2.14.44.26.71.35.27.09.55.14.83.14.21,0,.38-.02.52-.06.13-.04.23-.1.29-.18.06-.08.09-.16.09-.26,0-.12-.05-.22-.15-.3s-.22-.13-.38-.18-.34-.09-.53-.13c-.19-.04-.39-.09-.58-.16-.19-.06-.37-.14-.53-.24s-.29-.23-.39-.39-.15-.36-.15-.61c0-.27.07-.51.22-.73.14-.22.36-.4.65-.53.29-.13.65-.2,1.1-.2.29,0,.58.03.87.1.28.07.54.17.75.31l-.33.82c-.22-.12-.44-.22-.65-.28-.22-.06-.43-.09-.64-.09s-.38.02-.51.07c-.13.05-.23.11-.29.19-.06.08-.09.17-.09.27,0,.12.05.22.15.29s.23.13.38.18c.16.04.34.09.53.13.19.04.38.1.58.15s.37.14.53.23c.16.1.29.23.39.39s.15.36.15.61c0,.26-.07.5-.22.72-.15.22-.37.39-.66.53-.29.13-.66.2-1.1.2ZM30.86,15.01v-6.26h.67v6.26h-.67Z" />
				</g>
			</>
		),
		//#endregion
		//#region bloqueo estatus bloqueado
		bloqueado: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M38.01,42.5H11.99c-1.1,0-1.99-0.89-1.99-1.99V24.49c0-1.1,0.89-1.99,1.99-1.99h26.02
	c1.1,0,1.99,0.89,1.99,1.99v16.02C40,41.61,39.11,42.5,38.01,42.5z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M30.02,22.5H20v-5.01c0-2.77,2.24-5.01,5.01-5.01h0c2.77,0,5.01,2.24,5.01,5.01V22.5z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M35.02,22.5H15v-4.99C15,11.98,19.48,7.5,25.01,7.5h0c5.53,0,10.01,4.48,10.01,10.01V22.5z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.5,37.5h-1c-1.11,0-2-0.9-2-2V29.5c0-1.11,0.9-2,2-2h1c1.11,0,2,0.9,2,2v5.99C27.5,36.6,26.6,37.5,25.5,37.5
	z"/>
			</>
		),
		//#endregion
		//#region bloqueo estatus sin bloqueo
		desbloqueado: () => (
			<>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M36.11,25.62a.23.23,0,0,1,.21.21V43.77a.23.23,0,0,1-.21.21H13.89a.23.23,0,0,1-.21-.21V25.83a.23.23,0,0,1,.21-.21H36.11M35.4,23.8H14.6A2.65,2.65,0,0,0,12,26.4V43.3a2.65,2.65,0,0,0,2.6,2.6H35.3a2.65,2.65,0,0,0,2.6-2.6V26.4a2.5,2.5,0,0,0-2.5-2.6Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M25.1,29.1a1.77,1.77,0,0,1,1.7,1.8v1.2a2.22,2.22,0,0,1-.71,1.49l-.51.5-.07.7-.46,4.46-.46-4.46L24.51,34l-.59-.52a1.94,1.94,0,0,1-.62-1.39V30.9a1.81,1.81,0,0,1,1.8-1.8m0-2a3.8,3.8,0,0,0-3.8,3.8v1.2A3.93,3.93,0,0,0,22.6,35l.6,5.8a2,2,0,0,0,1.7,1.7h.15A2,2,0,0,0,26.9,40.8l.6-5.8a4.11,4.11,0,0,0,1.3-2.9V30.9a3.78,3.78,0,0,0-3.7-3.8Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M34.45,12.34V25h-9.6v-.4h7.74V12.76A7.16,7.16,0,0,0,25.44,5.6a7.05,7.05,0,0,0-7,7.16v2.75a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V12a9,9,0,0,1,8.77-9A9.27,9.27,0,0,1,34.45,12.34Z"
				/>
			</>
		),
		//#endregion
		//#region ícono Implementaciones especiales
		implementaciones: () => (
			<>
				<g>
					<g>
						<path fill={props?.fill ?? "var(--detailFont)"} d="M17.02,27.62l0.04,5.87c0,0.21,0.11,0.4,0.29,0.5l7.46,4.2c0.09,0.05,0.18,0.07,0.28,0.07c0.1,0,0.2-0.03,0.29-0.08
							l7.41-4.29c0.18-0.1,0.29-0.29,0.29-0.5l-0.04-5.74l7.86,4.45c0.38,0.21,0.39,0.75,0.02,0.99l-15.61,9.84
							c-0.09,0.06-0.2,0.09-0.31,0.09s-0.21-0.03-0.31-0.09L9.08,33.09c-0.37-0.23-0.35-0.77,0.02-0.99L17.02,27.62 M19,24.21
							l-2.96,1.68l-7.92,4.48c-0.8,0.45-1.28,1.27-1.31,2.18c-0.02,0.91,0.43,1.75,1.2,2.24l15.61,9.84c0.41,0.26,0.89,0.4,1.37,0.4
							s0.96-0.14,1.37-0.4l15.61-9.84c0.77-0.49,1.22-1.32,1.2-2.24c-0.02-0.91-0.51-1.73-1.31-2.18l-7.86-4.45l-3.01-1.7l0.02,3.45
							l0.03,4.92l-5.99,3.47l-6.03-3.4l-0.03-5.05L19,24.21L19,24.21z"
						/>
					</g>
					<g>
						<g>
							<polygon fill={props?.fill ?? "var(--detailFont)"} points="16.9,17.58 17.04,33.77 25.09,38.31 24.96,22.13 			" />
						</g>
						<g>
							<path fill={props?.fill ?? "var(--detailFont)"} d="M24.92,15.25l6.05,3.41l0.11,13.86L25.08,36l-6.05-3.41l-0.11-13.86L24.92,15.25 M24.91,12.95l-7.99,4.63l-0.01,0
					l0.13,16.19l8.06,4.54l8-4.64l-0.13-16.19l-0.01,0L24.91,12.95L24.91,12.95z"/>
						</g>
					</g>
					<g>
						<polygon points="13.74,19.07 9.84,21.33 13.74,23.58 13.74,19.07" />
					</g>
					<g>
						<polygon points="14.21,10.58 15.37,14.93 18.56,11.74 14.21,10.58" />
					</g>
					<g>
						<polygon points="24.89,6.06 22.64,9.96 27.14,9.96 24.89,6.06" />
					</g>
					<g>
						<path d="M35.64,10.42L35.64,10.42L35.64,10.42z M35.64,10.42l-4.35,1.17l3.18,3.18L35.64,10.42L35.64,10.42z" />
					</g>
					<g>
						<polygon points="36.26,18.86 36.26,23.36 40.16,21.11 36.26,18.86" />
					</g>
				</g>
			</>
		),
		//#endregion
		//#region carrito estatus normal
		carrito: () => (
			<>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="21.44" cy="39.28" r="3.22" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="33.94" cy="39.28" r="3.22" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M6.44,9.03h3.39c0.94,0,1.75,0.65,1.95,1.57l4.3,19.36c0.2,0.92,1.02,1.57,1.95,1.57h20.89" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M15.33,26.53h21.93c0.97,0,1.79-0.7,1.95-1.65l1.84-11.04c0.2-1.21-0.73-2.3-1.95-2.3H12.55" />
			</>
		),
		//#endregion
		//#region carrito estatus prohibido
		carritoForbidden: () => (
			<>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="21.44" cy="39.28" r="3.22" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.05,41.71c-.56.49-1.3.79-2.11.79-1.78,0-3.23-1.44-3.23-3.22,0-.81.3-1.55.8-2.11" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="38.94" y1="31.53" x2="37.19" y2="31.53" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.87,31.53h-7.83c-.94,0-1.75-.65-1.95-1.57l-.76-3.43-1.58-7.12" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M17.19,11.53h21.91c1.22,0,2.15,1.1,1.95,2.3l-1.84,11.05c-.16.95-.98,1.65-1.95,1.65h-5.07" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="20.87" y1="26.53" x2="15.33" y2="26.53" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.5" y1="7.5" x2="42.5" y2="42.5" />
			</>
		),
		//#endregion
		//#region ícono editar
		edit: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M39.06,8.53H10.94c-1.33,0-2.4,1.07-2.4,2.4v28.14c0,1.32,1.07,2.4,2.4,2.4h28.13c1.33,0,2.4-1.09,2.4-2.4
	V10.93C41.47,9.6,40.39,8.53,39.06,8.53z"/>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M20.79,33.97l-4.3,0.67c-0.66,0.1-1.23-0.47-1.13-1.13l0.67-4.3c0.07-0.42,0.26-0.8,0.56-1.1l12.17-12.17
		c0.78-0.78,2.04-0.78,2.82,0l2.48,2.48c0.78,0.78,0.78,2.04,0,2.82L21.89,33.41C21.6,33.71,21.21,33.9,20.79,33.97z"/>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.8" y1="26.9" x2="23.1" y2="32.2" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="26.62" y1="18.08" x2="31.92" y2="23.38" />
				</g>
			</>
		),
		//#endregion
		//#region ícono mapa
		map: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.01,6.03c-11.23,0-16.07,13.1-9.45,20.55L18.97,30l6.04,6.07L31.08,30l3.15-3.15
	C41.16,19.44,36.35,6.03,25.01,6.03z M25.01,23.71c-3.27,0-5.9-2.63-5.9-5.87c0-3.28,2.63-5.91,5.9-5.91c3.25,0,5.87,2.63,5.87,5.91
	C30.88,21.08,28.26,23.71,25.01,23.71z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.43,35H26.06l5-5h7.25c0.92,0,1.73,0.58,2,1.42L41.43,35z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M11.86,30l4.99,4.99H8.57l1.12-3.57c0.27-0.84,1.08-1.42,2-1.42H11.86z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M21.85,39.99L26.86,45H8.23c-1.4,0-2.41-1.29-2-2.56L7,39.99H21.85z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.77,45h-7.84l-5.01-5.01H43l0.77,2.45C44.18,43.71,43.17,45,41.77,45z" />
			</>
		),
		//#endregion
		//#region ícono compartir
		share: () => (
			<g>
				<ellipse fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="26.97" cy="13.18" rx="3.93" ry="3.96" />
				<ellipse fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="11.24" cy="28.95" rx="5.24" ry="5.29" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="16.4" y1="29.98" x2="30.92" y2="32.88" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="24.21" y1="15.95" x2="15.05" y2="25.13" />
				<ellipse fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="37.45" cy="34.18" rx="6.55" ry="6.61" />
			</g>
		),
		//#endregion
		//#region ícono pdf
		pdf: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.53,6.01v6.59c0,.51.41.92.92.92h6.55" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40,41.91V13.24c0-.54-.21-1.07-.6-1.46l-5.08-5.16c-.39-.4-.92-.62-1.48-.62H12.07c-1.15,0-2.07.93-2.07,2.07v33.82c0,1.15.93,2.07,2.07,2.07h25.85c1.15,0,2.07-.93,2.07-2.07Z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M27.52,19.22v-5.49c0-.68-.55-1.23-1.23-1.23h-2.58c-.68,0-1.23.55-1.23,1.23v5.49h-2.49c-1.1,0-1.65,1.33-.87,2.1l5.02,5.02c.48.48,1.26.48,1.74,0l5.02-5.02c.78-.78.23-2.1-.87-2.1h-2.49Z" />
				<g>
					<path fill={props?.fill ?? "var(--detailFont)"} d="M13.7,40v-7.7h3.52c.7,0,1.31.11,1.82.34.51.23.9.56,1.18.99.28.43.42.94.42,1.52s-.14,1.08-.42,1.51c-.28.42-.67.75-1.18.98-.51.23-1.12.35-1.82.35h-2.31l.97-.95v2.96h-2.18ZM15.88,37.27l-.97-1h2.18c.46,0,.79-.1,1.02-.3.22-.2.34-.47.34-.82s-.11-.64-.34-.84c-.22-.2-.56-.3-1.02-.3h-2.18l.97-1v4.26Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M21.7,40v-7.7h3.64c.85,0,1.6.16,2.24.47s1.15.76,1.51,1.33c.36.57.54,1.25.54,2.05s-.18,1.46-.54,2.04c-.36.58-.87,1.02-1.51,1.34s-1.39.47-2.24.47h-3.64ZM23.87,38.26h1.38c.44,0,.82-.08,1.15-.25s.58-.41.76-.73c.18-.32.28-.7.28-1.14s-.09-.83-.28-1.14-.44-.56-.76-.72-.71-.25-1.15-.25h-1.38v4.22Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M32.96,40h-2.18v-7.7h6.04v1.68h-3.86v6.02ZM32.8,35.68h3.55v1.68h-3.55v-1.68Z" />
				</g>
			</>
		),
		//#endregion
		//#region descargar
		download: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M28.95,18.01V9.43c0-1.06-0.86-1.93-1.93-1.93h-4.04c-1.06,0-1.93,0.86-1.93,1.93v8.59h-3.9
	c-1.72,0-2.58,2.08-1.36,3.29l7.85,7.85c0.75,0.75,1.97,0.75,2.73,0l7.85-7.85c1.21-1.21,0.35-3.29-1.36-3.29H28.95z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40.51,30h-2.07c-1.1,0-1.99,0.89-1.99,1.99v2.47c0,1.1-0.89,1.99-1.99,1.99H15.54c-1.1,0-1.99-0.89-1.99-1.99
	v-2.47c0-1.1-0.89-1.99-1.99-1.99H9.49c-1.1,0-1.99,0.89-1.99,1.99v4.46v2.73v1.33c0,1.1,0.89,1.99,1.99,1.99h31.02
	c1.1,0,1.99-0.89,1.99-1.99v-1.33h0v-7.19C42.5,30.89,41.61,30,40.51,30z"/>
			</>
		),
		//#endregion
		//#region ícono excel
		excel: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.53,6.01v6.59c0,.51.41.92.92.92h6.55" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40,41.91V13.24c0-.54-.21-1.07-.6-1.46l-5.08-5.16c-.39-.4-.92-.62-1.48-.62H12.07c-1.15,0-2.07.93-2.07,2.07v33.82c0,1.15.93,2.07,2.07,2.07h25.85c1.15,0,2.07-.93,2.07-2.07Z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M27.52,19.22v-5.49c0-.68-.55-1.23-1.23-1.23h-2.58c-.68,0-1.23.55-1.23,1.23v5.49h-2.49c-1.1,0-1.65,1.33-.87,2.1l5.02,5.02c.48.48,1.26.48,1.74,0l5.02-5.02c.78-.78.23-2.1-.87-2.1h-2.49Z" />
				<g>
					<path fill={props?.fill ?? "var(--detailFont)"} d="M14.15,40l3.37-4.67v1.55s-3.25-4.58-3.25-4.58h2.45l2.07,2.98h-1.04s2.04-2.98,2.04-2.98h2.35l-3.23,4.49v-1.54l3.41,4.75h-2.51l-2.1-3.13h1l-2.07,3.13h-2.49Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M22.82,40v-7.7h2.18v5.97h3.67v1.73h-5.85Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M32.21,40.15c-.63,0-1.24-.08-1.82-.24-.58-.16-1.06-.36-1.42-.61l.71-1.61c.34.22.74.4,1.19.54.45.14.9.21,1.35.21.3,0,.54-.03.73-.08.18-.06.32-.13.4-.22s.13-.2.13-.32c0-.18-.08-.32-.24-.42s-.37-.19-.63-.25c-.26-.07-.54-.13-.85-.2-.31-.07-.62-.15-.93-.25-.31-.1-.6-.24-.85-.4-.26-.17-.47-.38-.63-.65-.16-.27-.24-.61-.24-1.02,0-.46.13-.88.38-1.25s.63-.67,1.14-.9,1.14-.34,1.89-.34c.51,0,1,.06,1.49.17.49.11.92.28,1.3.5l-.67,1.62c-.37-.2-.73-.35-1.09-.45-.36-.1-.71-.15-1.04-.15-.3,0-.54.03-.73.09-.18.06-.32.14-.4.25-.08.1-.12.22-.12.35,0,.17.08.3.24.4.16.1.37.18.63.24.26.06.55.13.86.19.31.07.62.15.94.25.31.1.6.23.85.4.26.17.46.38.62.65.16.27.24.6.24,1.01,0,.45-.13.86-.38,1.24-.25.38-.63.68-1.13.91-.5.23-1.13.34-1.9.34Z" />
				</g>
			</>
		),
		//#endregion
		//#region ícono kml
		kml: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.53,6.01v6.59c0,.51.41.92.92.92h6.55" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40,41.91V13.24c0-.54-.21-1.07-.6-1.46l-5.08-5.16c-.39-.4-.92-.62-1.48-.62H12.07c-1.15,0-2.07.93-2.07,2.07v33.82c0,1.15.93,2.07,2.07,2.07h25.85c1.15,0,2.07-.93,2.07-2.07Z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M27.52,19.22v-5.49c0-.68-.55-1.23-1.23-1.23h-2.58c-.68,0-1.23.55-1.23,1.23v5.49h-2.49c-1.1,0-1.65,1.33-.87,2.1l5.02,5.02c.48.48,1.26.48,1.74,0l5.02-5.02c.78-.78.23-2.1-.87-2.1h-2.49Z" />
				<g>
					<path fill={props?.fill ?? "var(--detailFont)"} d="M14.12,40v-7h1.96v7h-1.96ZM15.89,38.45l-.11-2.22,3.01-3.23h2.18l-3,3.25-1.1,1.15-.98,1.05ZM18.82,40l-2.28-2.89,1.29-1.38,3.29,4.27h-2.3Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M21.64,40v-7h1.63l2.9,4.76h-.86l2.82-4.76h1.63l.02,7h-1.82l-.02-4.23h.31l-2.11,3.54h-.88l-2.17-3.54h.38v4.23h-1.83Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M31.75,40v-7h1.98v5.43h3.34v1.57h-5.32Z" />
				</g>
			</>
		),
		//#endregion
		//#region ícono guardar
		save: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31.58,42.57H9.55c-1.13,0-2.05-0.92-2.05-2.05V9.54c0-1.13,0.91-2.04,2.04-2.04h30.91
	c1.13,0,2.04,0.91,2.04,2.04v10.48v20.5c0,1.13-0.92,2.05-2.05,2.05H31.58z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M34.82,20H15.16c-1.04,0-1.87-0.84-1.87-1.87V7.5h23.41v10.63C36.69,19.16,35.85,20,34.82,20z" />
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.21" y1="11.75" x2="31.21" y2="15.75" />
				</g>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="14.5" y1="27.04" x2="35.5" y2="27.04" />
				</g>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="14.5" y1="31.7" x2="35.5" y2="31.7" />
				</g>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="14.5" y1="36.37" x2="35.5" y2="36.37" />
				</g>
			</>
		),
		//#endregion
		//#region ícono borrar
		delete: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.92,17.49H7.08c-0.55,0-1-0.45-1-1v-3.01c0-1.1,0.89-1.99,1.99-1.99h33.87c1.1,0,1.99,0.89,1.99,1.99v3.01
	C43.92,17.04,43.48,17.49,42.92,17.49z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M19.24,11.48V7.37c0-0.72,0.52-1.3,1.15-1.3h9.21c0.64,0,1.15,0.58,1.15,1.3v4.11" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="22.3" x2="25" y2="40.05" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="33.11" y1="40.05" x2="35.8" y2="22.3" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="16.89" y1="40.05" x2="14.19" y2="22.3" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.96,43.92H13.04c-1.1,0-2.03-1.02-2.15-2.36L8.78,17.49h32.44l-2.11,24.08
	C38.99,42.91,38.07,43.92,36.96,43.92z"/>
			</>
		),
		//#endregion
		//#region estatus visualizar
		previsualizar: () => (
			<>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M25,14.59c8,0,15,7.51,17.45,10.46C40,28,33,35.52,25,35.52S10,28,7.55,25.05C10,22.1,17,14.59,25,14.59m0-2c-11,0-20,12.46-20,12.46s9,12.47,20,12.47S45,25.05,45,25.05s-9-12.46-20-12.46Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M25,19.52a5.53,5.53,0,1,1-5.53,5.53A5.54,5.54,0,0,1,25,19.52m0-2a7.53,7.53,0,1,0,7.53,7.53A7.53,7.53,0,0,0,25,17.52Z"
				/>
			</>
		),
		//#endregion
		//#region estatus no visualizar
		noVisualizar: () => (
			<>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M31.79,36A17.23,17.23,0,0,1,25,37.52c-11,0-20-12.47-20-12.47a40.13,40.13,0,0,1,7.93-7.88l1.43,1.43a39.2,39.2,0,0,0-6.81,6.45C10,28,17,35.52,25,35.52a14.86,14.86,0,0,0,5.24-1Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M45,25.05a40.24,40.24,0,0,1-7.87,7.84L35.7,31.46a38.46,38.46,0,0,0,6.75-6.41C40,22.1,33,14.59,25,14.59a14.94,14.94,0,0,0-5.17,1l-1.54-1.54A17.21,17.21,0,0,1,25,12.59C36.05,12.59,45,25.05,45,25.05Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M27.8,32a7.53,7.53,0,0,1-10.33-7A7.57,7.57,0,0,1,18,22.26l1.6,1.59a5.32,5.32,0,0,0-.14,1.2A5.54,5.54,0,0,0,25,30.58a5.88,5.88,0,0,0,1.2-.13Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M32.53,25.05A7.44,7.44,0,0,1,32,27.77l-1.6-1.6a5.13,5.13,0,0,0,.12-1.12A5.54,5.54,0,0,0,25,19.52a5.19,5.19,0,0,0-1.12.12L22.28,18a7.5,7.5,0,0,1,10.25,7Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M43.21,43.21a1,1,0,0,1-1.42,0l-35-35A1,1,0,1,1,8.21,6.79L16.38,15l1.49,1.49,2.6,2.6,1.43,1.43,7.67,7.67L34,32.59l1.46,1.46,7.74,7.74A1,1,0,0,1,43.21,43.21Z"
				/>
			</>
		),
		//#endregion
		//#region Boards
		boards: () => (
			<>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M14.17,4.5v41H4.5V4.5h9.67m0-2H4.5a2,2,0,0,0-2,2v41a2,2,0,0,0,2,2h9.67a2,2,0,0,0,2-2V4.5a2,2,0,0,0-2-2Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M29.83,4.5v41H20.17V4.5h9.66m0-2H20.17a2,2,0,0,0-2,2v41a2,2,0,0,0,2,2h9.66a2,2,0,0,0,2-2V4.5a2,2,0,0,0-2-2Z"
				/>
				<path
					fill={props.fill ?? 'var(--detailFont)'}
					d="M45.5,4.5v41H35.83V4.5H45.5m0-2H35.83a2,2,0,0,0-2,2v41a2,2,0,0,0,2,2H45.5a2,2,0,0,0,2-2V4.5a2,2,0,0,0-2-2Z"
				/>
			</>
		),
		//#endregion
		//#region status con ilumincación
		conIluminacion: () => (
			<g>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25.01" y1="8.85" x2="25.01" y2="6.29" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15.04" y1="12.97" x2="13.22" y2="11.16" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="10.9" y1="22.94" x2="8.33" y2="22.94" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15.02" y1="32.92" x2="13.2" y2="34.73" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="34.96" y1="32.94" x2="36.78" y2="34.75" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="39.1" y1="22.97" x2="41.67" y2="22.97" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="34.98" y1="12.99" x2="36.8" y2="11.18" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.26,31.31c2.2-1.98,3.58-4.84,3.58-8.03c0-6.39-5.53-11.48-12.06-10.76c-4.82,0.53-8.8,4.37-9.48,9.18
		c-0.55,3.85,0.94,7.38,3.55,9.68c1.26,1.11,2.08,2.63,2.3,4.28c0.06,0.49,0.49,0.85,0.98,0.85l7.78,0c0.49,0,0.92-0.36,0.98-0.85
		C30.11,33.99,30.98,32.46,32.26,31.31z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25.01" y1="36.51" x2="25.01" y2="24.24" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.24" y1="24.18" x2="27.79" y2="24.18" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M20.26,40.4v1.41c0,1.05,0.85,1.9,1.9,1.9h5.71c1.05,0,1.9-0.85,1.9-1.9v-1.4c0-0.01,0-0.02,0-0.03h-9.52
		C20.26,40.39,20.26,40.4,20.26,40.4z"/>
			</g>
		),
		//#endregion
		//#region estatus sin iluminación
		sinIluminacion: () => (
			<g>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25.01" y1="9.03" x2="25.01" y2="6.49" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="11.06" y1="22.96" x2="8.52" y2="22.96" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15.13" y1="32.82" x2="13.34" y2="34.61" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="38.94" y1="22.99" x2="41.48" y2="22.99" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="34.87" y1="13.12" x2="36.66" y2="11.33" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M20.26,40.2v1.41c0,1.05,0.85,1.9,1.9,1.9h5.71c1.05,0,1.9-0.85,1.9-1.9v-1.4c0-0.01,0-0.02,0-0.03h-9.52
		C20.26,40.19,20.26,40.19,20.26,40.2z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M14.46,21.54c-0.1,0.57-0.15,1.16-0.15,1.75c0,3.19,1.4,6.05,3.61,8.01c1.47,1.29,2.33,3.12,2.33,5.07h4.76
		h4.28"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M20.62,13.55c1.22-0.57,2.57-0.91,3.97-0.96c6.1-0.23,11.13,4.65,11.13,10.7c0,1.58-0.34,3.07-0.96,4.41" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25.01" y1="36.37" x2="25.01" y2="32.09" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.5" y1="7.5" x2="42.5" y2="42.5" />
			</g>
		),
		//#endregion
		//#region estatus ambos tipos de iluminación
		iluminacionIndiferente: () => (
			<g>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="19.84" y1="15.15" x2="19.84" y2="12.94" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="11.23" y1="18.7" x2="9.67" y2="17.14" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.66" y1="27.3" x2="5.44" y2="27.3" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="11.21" y1="35.91" x2="9.65" y2="37.47" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="28.42" y1="35.93" x2="29.98" y2="37.49" />
					<g>
						<g>
							<g>
								<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M16.2,40.19v1.07c0,0.8,0.65,1.45,1.45,1.45h4.36c0.8,0,1.45-0.65,1.45-1.45v-1.07c0-0.01,0-0.01,0-0.02
						H16.2C16.2,40.18,16.2,40.18,16.2,40.19z"/>
								<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.31,33.34c1.66-1.49,2.71-3.66,2.71-6.07c0-4.84-4.2-8.69-9.15-8.12c-3.63,0.42-6.62,3.32-7.13,6.94
						c-0.41,2.91,0.72,5.57,2.68,7.3c0.9,0.8,1.51,1.87,1.71,3.04c0.08,0.48,0.49,0.84,0.98,0.84h5.46c0.49,0,0.89-0.35,0.98-0.83
						C23.75,35.25,24.39,34.16,25.31,33.34z"/>
							</g>
							<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="19.84" y1="37.27" x2="19.84" y2="28" />
						</g>
						<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.74" y1="27.95" x2="21.94" y2="27.95" />
					</g>
				</g>
				<g>
					<g>
						<g>
							<g>
								<path d="M37.27,26.98L37.27,26.98L37.27,26.98z M37.27,26.98H31.5c0,0,0,0.01,0,0.01v0.85c0,0.64,0.52,1.15,1.15,1.15h3.46
						c0.64,0,1.15-0.52,1.15-1.15v-0.85C37.27,26.99,37.27,26.98,37.27,26.98L37.27,26.98z"/>
							</g>
							<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.49,10.5c4.4-1.24,8.39,2.03,8.39,6.23c0,0.61-0.09,1.2-0.25,1.76" />
							<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M27.95,15.86c-0.3,2.28,0.59,4.37,2.13,5.73c0.65,0.57,1.11,1.32,1.3,2.14c0.13,0.54,0.58,0.94,1.13,0.94
					h3.75c0.19,0,0.37-0.05,0.53-0.14"/>
						</g>
						<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="34.38" y1="23.44" x2="34.38" y2="22.17" />
					</g>
				</g>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="24.22" y1="7.28" x2="44.56" y2="27.26" />
			</g>
		),
		//#endregion
		//#region status vista natural
		vistaNatural: () => (
			<>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="44,42.82 10,25 7.5,25 6,42.82 " />
				<g>
					<polygon points="14.25,31.25 19.03,35.46 16.02,35.46 12.83,31.25 	" />
					<polygon points="21.81,37.91 27.37,42.82 21.58,42.82 17.87,37.91 	" />
					<polygon points="11.91,30.02 10,27.5 12.86,30.02 	" />
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M22.07,19.54H42c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2H22.07c-1.1,0-2,0.9-2,2v9.54
	C20.07,18.65,20.96,19.54,22.07,19.54z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="39.07" y1="9.47" x2="35.92" y2="9.47" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="29.08" y1="9.47" x2="25.93" y2="9.47" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="37.5" y1="9.47" x2="37.5" y2="6" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="9.47" x2="27.5" y2="6" />
				<rect x="30" y="19.54" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 64.1155 49.4992)" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="4.12" height="10.41" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="36.78" y1="29.95" x2="27.33" y2="29.95" />
			</>
		),
		//#endregion
		//#region status vista cruzada
		vistaCruzada: () => (
			<>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="6,42.82 40,25 42.5,25 44,42.82 " />
				<g>
					<polygon points="35.75,31.25 30.97,35.46 33.98,35.46 37.17,31.25 	" />
					<polygon points="28.19,37.91 22.63,42.82 28.42,42.82 32.13,37.91 	" />
					<polygon points="38.09,30.02 40,27.5 37.14,30.02 	" />
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M27.93,19.54H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h19.93c1.1,0,2,0.9,2,2v9.54
	C29.93,18.65,29.04,19.54,27.93,19.54z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="10.93" y1="9.47" x2="14.08" y2="9.47" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="20.92" y1="9.47" x2="24.07" y2="9.47" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.5" y1="9.47" x2="12.5" y2="6" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.5" y1="9.47" x2="22.5" y2="6" />
				<rect x="15.88" y="19.54" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="4.12" height="10.41" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="13.22" y1="29.95" x2="22.67" y2="29.95" />
			</>
		),
		//#endregion
		//#region estatus sin preferencias de vistas
		sinPreferenciasVistas: () => (
			<g>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="6,44 23.76,22.5 26.13,22.5 44,44 	" />
				<g>
					<polygon points="24.42,30.21 23.77,35.23 26.23,35.23 25.58,30.21 		" />
					<polygon points="23.39,38.15 22.63,44 27.38,44 26.61,38.15 		" />
					<polygon points="25.39,28.75 25,25.75 24.61,28.75 		" />
				</g>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M19.5,17.28H8c-1.1,0-2-0.9-2-2v-4.77c0-1.1,0.9-2,2-2h11.5c1.1,0,2,0.9,2,2v4.77
			C21.5,16.39,20.6,17.28,19.5,17.28z"/>

					<rect x="13.75" y="17.28" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 27.5 41.3075)" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="0" height="6.74" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="11.06" y1="24.02" x2="16.44" y2="24.02" />
				</g>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.01,17.28h-11.5c-1.1,0-2-0.9-2-2v-4.77c0-1.1,0.9-2,2-2h11.5c1.1,0,2,0.9,2,2v4.77
			C44.01,16.39,43.11,17.28,42.01,17.28z"/>

					<rect x="36.26" y="17.28" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 72.5136 41.3075)" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="0" height="6.74" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="33.57" y1="24.02" x2="38.95" y2="24.02" />
				</g>
			</g>
		),
		//#endregion
		//#region ícono categoria
		categoria: () => (
			<>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M19.8,5.5l0,14.3H5.5l0-14.3H19.8 M4.7,2.5c-1.2,0-2.2,1-2.2,2.2c0,0,0,0,0,0v15.7c0,1.2,1,2.3,2.3,2.3h15.7
                    c1.2,0,2.2-1,2.3-2.3V4.8c0-1.2-1-2.3-2.3-2.3L4.7,2.5C4.8,2.5,4.7,2.5,4.7,2.5L4.7,2.5z"
					/>
				</g>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M44.5,5.5v14.3l-14.3,0V5.5L44.5,5.5 M45.3,2.5C45.3,2.5,45.2,2.5,45.3,2.5l-15.8,0c-1.2,0-2.3,1-2.3,2.3v15.7
                    c0,1.2,1,2.2,2.3,2.3h15.7c1.2,0,2.3-1,2.3-2.3V4.8C47.5,3.5,46.5,2.5,45.3,2.5C45.3,2.5,45.3,2.5,45.3,2.5L45.3,2.5z"
					/>
				</g>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M19.8,30.2v14.3l-14.3,0V30.2H19.8 M20.5,27.2H4.8c-1.2,0-2.3,1-2.3,2.3v15.7c0,1.2,1,2.2,2.2,2.3c0,0,0,0,0,0
                    s0,0,0,0h15.7c1.2,0,2.3-1,2.3-2.3V29.5C22.7,28.3,21.7,27.3,20.5,27.2L20.5,27.2z"
					/>
				</g>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M33.7,30.3c0.2,0,0.3,0,0.5,0c1.5,0.2,2.8,1.4,3.1,2.9c0.2,0.8,0.1,1.6-0.3,2.4l-0.5,1l-1,0.5
                    c-0.5,0.3-1.1,0.4-1.7,0.4c-0.2,0-0.5,0-0.7-0.1c-1.5-0.3-2.7-1.5-2.9-3c-0.1-1.1,0.2-2.1,0.9-2.9C31.7,30.7,32.7,30.3,33.7,30.3
                    M33.7,27.3c-4,0-7.1,3.5-6.6,7.6c0.4,2.8,2.6,5.1,5.3,5.6c0.4,0.1,0.8,0.1,1.2,0.1c1.1,0,2.2-0.3,3.2-0.8l3.6,5
                    c0.6,0.8,1.5,1.2,2.4,1.2c0.8,0,1.5-0.3,2.1-0.9l0,0c1.3-1.3,1.1-3.4-0.3-4.5l-5-3.7c0.6-1.3,0.9-2.7,0.6-4.3
                    c-0.5-2.8-2.9-4.9-5.7-5.3C34.3,27.3,34,27.3,33.7,27.3L33.7,27.3z"
					/>
				</g>
			</>
		),
		//#endregion
		//#region ícono círculo perosnalizado
		circuloPersonalizado: () => (
			<g>
				<path d="M24.98,7.53c0.13,0,0.26,0.06,0.34,0.17l4.49,5.96c0.21,0.28,0.01,0.68-0.34,0.68h-2.65c-0.24,0-0.43,0.19-0.43,0.43v8.78
		h8.83c0.24,0,0.43-0.19,0.43-0.43v-2.61c0-0.25,0.21-0.43,0.43-0.43c0.09,0,0.17,0.03,0.25,0.09l5.96,4.45
		c0.23,0.17,0.23,0.51,0,0.68l-5.96,4.49c-0.08,0.06-0.17,0.09-0.25,0.09c-0.22,0-0.43-0.17-0.43-0.43v-2.65
		c0-0.24-0.19-0.43-0.43-0.43h-8.78v8.83c0,0.24,0.19,0.43,0.43,0.43h2.61c0.35,0,0.55,0.4,0.34,0.68l-4.45,5.96
		c-0.09,0.11-0.21,0.17-0.34,0.17c-0.13,0-0.26-0.06-0.34-0.17l-4.49-5.96c-0.21-0.28-0.01-0.68,0.34-0.68h2.65
		c0.24,0,0.43-0.19,0.43-0.43v-8.78h-8.83c-0.24,0-0.43,0.19-0.43,0.43v2.61c0,0.25-0.21,0.43-0.43,0.43
		c-0.09,0-0.17-0.03-0.25-0.09L7.7,25.36c-0.23-0.17-0.23-0.51,0-0.68l5.96-4.49c0.08-0.06,0.17-0.09,0.25-0.09
		c0.22,0,0.43,0.17,0.43,0.43v2.65c0,0.24,0.19,0.43,0.43,0.43h8.78v-8.83c0-0.24-0.19-0.43-0.43-0.43h-2.61
		c-0.35,0-0.55-0.4-0.34-0.68l4.45-5.96C24.72,7.59,24.85,7.53,24.98,7.53 M24.98,5.53c-0.76,0-1.49,0.36-1.94,0.97l-4.45,5.96
		c-0.55,0.74-0.64,1.71-0.22,2.54c0.41,0.83,1.25,1.34,2.17,1.34h1.03v5.25h-5.21v-1.07c0-1.34-1.09-2.43-2.43-2.43
		c-0.53,0-1.03,0.17-1.46,0.49L6.5,23.08c-0.61,0.46-0.97,1.18-0.97,1.94c0,0.76,0.37,1.48,0.98,1.94l5.96,4.45
		c0.42,0.32,0.92,0.48,1.45,0.48c1.34,0,2.43-1.09,2.43-2.43v-1.03h5.25v5.21h-1.07c-0.93,0-1.76,0.51-2.17,1.34
		c-0.41,0.83-0.32,1.8,0.23,2.54l4.49,5.96c0.46,0.61,1.18,0.97,1.94,0.97c0.76,0,1.49-0.36,1.94-0.97l4.45-5.96
		c0.55-0.74,0.64-1.71,0.22-2.54c-0.41-0.83-1.25-1.34-2.17-1.34h-1.03V28.4h5.21v1.07c0,1.34,1.09,2.43,2.43,2.43
		c0.53,0,1.03-0.17,1.46-0.49l5.96-4.49c0.61-0.46,0.97-1.18,0.97-1.94c0-0.76-0.37-1.48-0.98-1.94l-5.96-4.45
		c-0.42-0.32-0.92-0.48-1.45-0.48c-1.34,0-2.43,1.09-2.43,2.43v1.03H28.4v-5.21h1.07c0.93,0,1.76-0.51,2.17-1.34
		c0.41-0.83,0.32-1.8-0.23-2.54L26.91,6.5C26.46,5.89,25.73,5.53,24.98,5.53L24.98,5.53z"/>
			</g>
		),
		//#endregion
		//#region ícono búsqueda
		busqueda: () => (
			<>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="20.13" cy="20.18" r="7.63" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.44,37.9l-9.93-9.93c-0.61-0.61-0.75-1.55-0.36-2.32c2.4-4.73,1.59-10.68-2.42-14.6
	c-4.7-4.58-12.4-4.69-17.22-0.23c-5.23,4.85-5.35,13.02-0.35,18.02c3.92,3.92,9.81,4.69,14.5,2.31c0.77-0.39,1.7-0.25,2.31,0.36
	l9.93,9.93c0.78,0.78,2.05,0.78,2.83,0l0.71-0.71C42.22,39.95,42.22,38.68,41.44,37.9z"/>
			</>
		),
		//#endregion
		//#region ícono clave
		clave: () => (
			<g>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="16.41" cy="17.24" r="4.22" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M38.74,36.13l3.56-3.56l-3.56-3.56l-3.56,3.56L24.26,21.65c0.7-1.27,1.11-2.72,1.11-4.28
		c0-4.88-3.96-8.83-8.83-8.83c-4.88,0-8.83,3.96-8.83,8.83c0,4.88,3.96,8.83,8.83,8.83c1.5,0,2.9-0.38,4.14-1.03l16.29,16.29
		l3.56-3.56L38.74,36.13z"/>
			</g>
		),
		//#endregion
		//#region ícono coordenadas
		coordenadas: () => (
			<>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25.76,33.55 31.03,18.99 16.43,24.21 23.43,26.55 " />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40,21.97C38.79,15.94,34.04,11.2,28,10c-0.47-0.09-0.81-0.49-0.81-0.96V8.48c0-0.54-0.44-0.98-0.98-0.98H23.8
	c-0.54,0-0.98,0.44-0.98,0.98v0.55c0,0.48-0.35,0.87-0.81,0.96c-6.04,1.2-10.79,5.95-12,11.99c-0.09,0.47-0.49,0.81-0.96,0.81H8.51
	c-0.54,0-0.98,0.44-0.98,0.98v2.41c0,0.54,0.44,0.98,0.98,0.98h0.53c0.48,0,0.87,0.35,0.96,0.81C11.2,34.04,15.97,38.8,22.02,40
	c0.47,0.09,0.81,0.49,0.81,0.96v0.51c0,0.54,0.44,0.98,0.98,0.98h2.41c0.54,0,0.98-0.44,0.98-0.98v-0.52c0-0.48,0.35-0.87,0.81-0.96
	c6.04-1.21,10.79-5.97,11.98-12.02c0.09-0.47,0.49-0.82,0.96-0.82h0.54c0.54,0,0.98-0.44,0.98-0.98v-2.41
	c0-0.54-0.44-0.98-0.98-0.98h-0.55C40.48,22.79,40.09,22.44,40,21.97z"/>
			</>
		),
		//#endregion
		//#region ícono busqueda por empresa
		busquedaEmpresa: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.44,37.9l-9.93-9.93c-0.61-0.61-0.75-1.55-0.36-2.32c2.4-4.73,1.59-10.68-2.42-14.6
	c-4.7-4.58-12.4-4.69-17.22-0.23c-5.23,4.85-5.35,13.02-0.35,18.02c3.92,3.92,9.81,4.69,14.5,2.31c0.77-0.39,1.7-0.25,2.31,0.36
	l9.93,9.93c0.78,0.78,2.05,0.78,2.83,0l0.71-0.71C42.22,39.95,42.22,38.68,41.44,37.9z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M15,25.08v-9.07c0-0.56,0.45-1.01,1.01-1.01h7.98c0.56,0,1.01,0.45,1.01,1.01v9.07" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="20" y1="17.5" x2="20" y2="20" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="20" y1="25" x2="20" y2="22.5" />
			</>
		),
		//#endregion
		//#region ícono reordenar
		reordernar: () => (
			<>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M17.1,9.6l-1.6,22.8l-0.2,2.8l1-0.3l-2.4,2.4L11.4,35l1,0.3l-0.2-2.8L10.5,9.6H17.1 M19.2,7.6H8.4l1.8,25
                l-5.4-1.4l9.1,9.1l9.1-9.1l-5.4,1.4L19.2,7.6L19.2,7.6z"
					/>
				</g>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M36.5,10.5l2.3,2.3l-0.9-0.2l0.2,2.8l1.6,22.7h-6.5l1.6-22.7l0.2-2.8l-0.9,0.2L36.5,10.5 M36.5,7.7l-9,9
                l5.4-1.4l-1.8,24.9h10.8l-1.8-24.9l5.4,1.4L36.5,7.7L36.5,7.7z"
					/>
				</g>
			</>
		),
		//#endregion
		//#region ícono puntos supensivos
		puntosSupensivos: () => (
			<>
				<circle fill={props?.fill ?? 'var(--detailFont)'} cx="10" cy="25" r="4" />
				<circle fill={props?.fill ?? 'var(--detailFont)'} cx="25" cy="25" r="4" />
				<circle fill={props?.fill ?? 'var(--detailFont)'} cx="40" cy="25" r="4" />
			</>
		),
		//#endregion
		//#region ícono dirección
		direccion: () => (
			<>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M25,5.5c8.3,0,15,6.7,15,15c0,5.7-8.5,16.2-15.1,22.8C18.5,36.7,9.9,26.2,9.9,20.5C10,12.3,16.7,5.5,25,5.5
                    L25,5.5 M25,2.5C25,2.5,25,2.5,25,2.5C25,2.5,25,2.5,25,2.5c-10,0-18,8-18.1,18c0,10,18.1,27,18.1,27s18.1-17,18.1-27
                    C43,10.6,35,2.5,25,2.5L25,2.5z"
					/>
				</g>
				<g>
					<path
						fill={props?.fill ?? 'var(--detailFont)'}
						d="M25,16c2.5,0,4.5,2,4.5,4.5S27.5,25,25,25s-4.5-2-4.5-4.5S22.5,16,25,16 M25,13c-4.1,0-7.5,3.4-7.5,7.5
                    S20.9,28,25,28s7.5-3.4,7.5-7.5S29.1,13,25,13L25,13z"
					/>
				</g>
			</>
		),
		//#endregion
		//#region ícono filtrar
		filtrar: () => (
			<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M9.57,10h30.86c0.83,0,1.3,0.96,0.78,1.62L28.94,26.96c-0.28,0.35-0.43,0.79-0.43,1.23v8.8
	c0,0.32-0.15,0.62-0.41,0.81c-0.96,0.69-3.39,2.42-5.02,3.58c-0.66,0.47-1.57,0-1.57-0.81l0-12.37c0-0.45-0.15-0.88-0.43-1.23
	L8.79,11.62C8.27,10.97,8.74,10,9.57,10z"/>
		),
		//#endregion
		//#region ícono filtrar
		ajustes: () => (
			<g>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="43.24" y1="15" x2="39.8" y2="15" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.8" y1="15" x2="8.24" y2="15" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="43.25" y1="25" x2="14.75" y2="25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="42.92" y1="35" x2="29.75" y2="35" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="21.75" y1="35" x2="7.92" y2="35" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="10.75" cy="25" r="4" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="35.8" cy="15" r="4" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="25.75" cy="35" r="4" />
			</g>
		),
		//#endregion
		//#region ícono Aeropuerto
		aeropuerto: () => (
			<g>
				<polyline strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} points="6.42,36.99 44,36.99 44,43.72 	" />
				<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} d="M37.45,22.06h5.1c0.7,0,1.18,0.7,0.93,1.35l-1.9,4.9c-0.15,0.38-0.52,0.63-0.93,0.63h-1.31
		c-0.41,0-0.78-0.25-0.93-0.63l-1.9-4.9C36.27,22.76,36.75,22.06,37.45,22.06z"/>
				<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} x1="40" y1="17.81" x2="40" y2="22.06" />
				<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} x1="36.5" y1="17.76" x2="43.5" y2="17.76" />
				<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} x1="40" y1="28.94" x2="40" y2="37.01" />
				<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} d="M34,43.99V34c0-2.21-1.79-4-4-4H10.06c-2.21,0-4,1.79-4,4v9.98" />
				<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} x1="12.99" y1="36.99" x2="12.99" y2="43.99" />
				<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} x1="27" y1="37.01" x2="27" y2="44" />
				<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} x1="20" y1="37.01" x2="20" y2="44" />
				<g>
					<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} d="M22.84,14.57l-9.73-5.44l2.64-1.23c0.97-0.45,2.09-0.5,3.09-0.12l10.25,3.84" />
					<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} d="M24.97,17.51l-4.33,7.77l3.27-1.53c0.59-0.27,1.1-0.69,1.48-1.2l6.1-8.09" />
					<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} d="M26.98,10.82l9.41-4.39l1.13-0.53c1.99-0.93,4.35-0.07,5.27,1.92l0.53,1.13L13.87,22.69
			c-2.01,0.94-4.4,0.07-5.33-1.94l-2.71-5.82l0.14-0.06c1.36-0.64,2.97-0.45,4.15,0.49l2.64,2.1l7.46-3.48"/>
				</g>
			</g>
		),
		//#endregion
		//#region ícono centros comerciales
		centrosComerciales: () => (
			<>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="13.63,7.51 13.63,7.56 14.57,31.45 14.78,36.73 " />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M44,31.39v9.08c0,1.09-0.89,1.98-1.99,1.98H21.23l15.18-0.14v-6.99c0-0.88-0.59-1.66-1.44-1.9l-0.69-0.2
	c-0.26-0.08-0.54-0.1-0.82-0.06l-10.52,1.46c-0.98,0.14-1.71,0.98-1.71,1.97v5.86h-7.6l1.15-5.71v-0.01l1.11-5.54
	c0.01-0.08,0.03-0.15,0.06-0.23c0.16-0.52,0.54-0.94,1.02-1.18c0.09-0.04,0.19-0.08,0.29-0.11c0.07-0.03,0.15-0.05,0.23-0.06
	l16-2.28c0.26-0.04,0.52-0.03,0.77,0.04L40,28.83l2.5,0.64C43.38,29.69,44,30.48,44,31.39z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M15.36,31.44c-3.74,0-6.64,0.62-7.4,2.37c-0.12,0.28-0.2,0.59-0.21,0.95v0.01" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.41,35.32v6.99l-15.18,0.14v-5.86c0-0.99,0.73-1.83,1.71-1.97l10.52-1.46c0.28-0.04,0.56-0.02,0.82,0.06
	l0.69,0.2C35.82,33.66,36.41,34.44,36.41,35.32z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="9.29" x2="23.62" y2="28.74" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40,20.36c0,1.98,0,8.47,0,8.47l-5.74-1.46c-0.25-0.07-0.51-0.08-0.77-0.04l-16,2.28
	c-0.08,0.01-0.16,0.03-0.23,0.06c-0.1,0.02-0.2,0.05-0.29,0.11c-0.49,0.22-0.87,0.65-1.02,1.18c-0.03,0.05-0.04,0.11-0.05,0.16
	l-0.01,0.07l-1.11,5.54v0.01l-1.15,5.71l-3.54,0.04c-1.06,0.01-1.95-0.81-2.03-1.87l-1.98-28.7c-0.03-0.44,0.1-0.88,0.36-1.25
	c1.35-1.92,3.97-2.91,7.19-3.11C22.13,7,34.87,11.89,39.7,19.3C39.9,19.62,40,19.98,40,20.36z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M6.94,23.95c3.87-8.1,23.76-3.15,33.21,4.48" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="33.77" y1="13.55" x2="32.5" y2="26.97" />
			</>
		),
		//#endregion
		//#region ícono campos a maximizar
		maximizarCampos: () => (
			<>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M38.41,44.9V21.14c0-.63.22-.85.85-.85H44c.78,0,.95.17.95.94V44c0,.14,0,.29,0,.43,0,.38-.1.47-.49.47h-6Z"
				/>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M40.64,8.55l-2.74,1-1.57.61a.76.76,0,0,1-1-.39.75.75,0,0,1,.5-1l5.85-2.24A.74.74,0,0,1,42.69,7q1.13,2.91,2.24,5.84a.76.76,0,1,1-1.41.54c-.47-1.21-.93-2.41-1.39-3.62L42,9.42a2.46,2.46,0,0,0-.14.26A41.77,41.77,0,0,1,21.34,30.29,39,39,0,0,1,9.21,33.66c-1.11.12-2.23.19-3.34.28a.77.77,0,0,1-.93-.72c0-.46.31-.77.86-.79A40.18,40.18,0,0,0,20.92,28.8,38.87,38.87,0,0,0,32.6,20.48,39.27,39.27,0,0,0,40.53,8.91l.1-.24S40.63,8.63,40.64,8.55Z"
				/>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M34.2,44.88H27.76c0-.12,0-.24,0-.36v-14c0-.66.21-.87.86-.87h4.79c.61,0,.83.22.83.84v14C34.22,44.63,34.21,44.74,34.2,44.88Z"
				/>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M23.53,44.88H17.07c0-.13,0-.26,0-.39V35.43c0-.7.21-.91.9-.91h4.69c.69,0,.89.21.89.91v9.45Z"
				/>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M12.82,44.9H6.87c-.41,0-.5-.08-.5-.49V37.26c0-.55.24-.79.78-.79H12.1c.48,0,.75.24.75.68,0,2.52,0,5.05,0,7.58A.86.86,0,0,1,12.82,44.9Z"
				/>
			</>
		),
		//#endregion
		//#region ícono plazas de interés
		plazasInteres: () => (
			<>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M18.42,22.46c-1.45-2-2.9-4-4.31-6A6.68,6.68,0,0,1,13,13.94a5.13,5.13,0,0,1,1-4.22,5.43,5.43,0,0,1,4.84-2.21A5.59,5.59,0,0,1,24.1,12.1a5.15,5.15,0,0,1-.79,3.55,39.75,39.75,0,0,1-3,4.35ZM16,13.63a2.52,2.52,0,1,0,2.55-2.5A2.49,2.49,0,0,0,16,13.63Z"
				/>
				<path
					stroke={props?.fill ?? 'var(--detailFont)'}
					strokeWidth={'2px'}
					d="M39.41,32.24l4.08-7.06-6.88-1.6-6,1h-.06L22.76,33l7.76-8.49-5.82-1-7.61,1L4,32.75l13.07-.93,5.63,1.24,8.62-.81,5.12,1.06V29.5A30.71,30.71,0,0,0,39.41,32.24Z"
				/>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M39.41,32.24l-3-2.74V42l.11-.12,2.83-3.59a2.26,2.26,0,0,1,1.85-.89h4.54l.25,0Z"
				/>
			</>
		),
		//#endregion
		//#region ícono tipoExhibición
		tipoExhibicion: () => (
			<path
				d="M15.75 0H2.25C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 4.9605e-09 1.65326 4.9605e-09 2.25V17.25C-2.10179e-05 17.5663 0.06678 17.8791 0.196028 18.1678C0.325275 18.4565 0.514054 18.7146 0.75 18.9253V19.7812C0.75 20.1045 0.878404 20.4145 1.10696 20.643C1.33552 20.8716 1.64552 21 1.96875 21H3.28125C3.60448 21 3.91448 20.8716 4.14304 20.643C4.3716 20.4145 4.5 20.1045 4.5 19.7812V19.5H13.5V19.7812C13.5 20.1045 13.6284 20.4145 13.857 20.643C14.0855 20.8716 14.3955 21 14.7188 21H16.0312C16.3545 21 16.6645 20.8716 16.893 20.643C17.1216 20.4145 17.25 20.1045 17.25 19.7812V18.9253C17.4859 18.7146 17.6747 18.4565 17.804 18.1678C17.9332 17.8791 18 17.5663 18 17.25V2.25C18 1.65326 17.7629 1.08097 17.341 0.65901C16.919 0.237053 16.3467 0 15.75 0ZM3.91266 17.2416C3.60394 17.2752 3.29241 17.2121 3.02106 17.0611C2.7497 16.9101 2.53189 16.6787 2.39768 16.3986C2.26348 16.1186 2.21949 15.8038 2.2718 15.4977C2.32411 15.1916 2.47013 14.9093 2.68971 14.6897C2.90929 14.4701 3.19161 14.3241 3.4977 14.2718C3.8038 14.2195 4.11859 14.2635 4.39863 14.3977C4.67867 14.5319 4.91015 14.7497 5.06113 15.0211C5.21212 15.2924 5.27516 15.6039 5.24156 15.9127C5.20459 16.2524 5.05269 16.5694 4.81103 16.811C4.56936 17.0527 4.25242 17.2046 3.91266 17.2416ZM8.0625 12H2.25C2.05109 12 1.86032 11.921 1.71967 11.7803C1.57902 11.6397 1.5 11.4489 1.5 11.25V5.25C1.5 5.05109 1.57902 4.86032 1.71967 4.71967C1.86032 4.57902 2.05109 4.5 2.25 4.5H8.0625C8.11223 4.5 8.15992 4.51975 8.19508 4.55492C8.23025 4.59008 8.25 4.63777 8.25 4.6875V11.8125C8.25 11.8622 8.23025 11.9099 8.19508 11.9451C8.15992 11.9802 8.11223 12 8.0625 12ZM9 3H2.27156C1.86844 3 1.52156 2.69062 1.50094 2.28797C1.49579 2.18641 1.51135 2.08486 1.54667 1.9895C1.58199 1.89414 1.63633 1.80696 1.7064 1.73326C1.77646 1.65956 1.86078 1.60087 1.95423 1.56077C2.04768 1.52067 2.14831 1.5 2.25 1.5H15.7284C16.1316 1.5 16.4784 1.80938 16.4991 2.21203C16.5042 2.31359 16.4887 2.41514 16.4533 2.5105C16.418 2.60586 16.3637 2.69304 16.2936 2.76674C16.2235 2.84044 16.1392 2.89913 16.0458 2.93923C15.9523 2.97933 15.8517 3 15.75 3H9ZM9.9375 4.5H15.75C15.9489 4.5 16.1397 4.57902 16.2803 4.71967C16.421 4.86032 16.5 5.05109 16.5 5.25V11.25C16.5 11.4489 16.421 11.6397 16.2803 11.7803C16.1397 11.921 15.9489 12 15.75 12H9.9375C9.88777 12 9.84008 11.9802 9.80492 11.9451C9.76975 11.9099 9.75 11.8622 9.75 11.8125V4.6875C9.75 4.63777 9.76975 4.59008 9.80492 4.55492C9.84008 4.51975 9.88777 4.5 9.9375 4.5ZM12.7584 15.9127C12.7248 15.6039 12.7879 15.2924 12.9389 15.0211C13.0899 14.7497 13.3213 14.5319 13.6014 14.3977C13.8814 14.2635 14.1962 14.2195 14.5023 14.2718C14.8084 14.3241 15.0907 14.4701 15.3103 14.6897C15.5299 14.9093 15.6759 15.1916 15.7282 15.4977C15.7805 15.8038 15.7365 16.1186 15.6023 16.3986C15.4681 16.6787 15.2503 16.9101 14.9789 17.0611C14.7076 17.2121 14.3961 17.2752 14.0873 17.2416C13.7476 17.2046 13.4306 17.0527 13.189 16.811C12.9473 16.5694 12.7954 16.2524 12.7584 15.9127Z"
				fill={props?.fill ?? 'var(--detailFont)'}
			/>
		),
		//#endregion
		//#region ícono logout
		logout: () => (
			<>
				<g>
					<g>
						<path
							fill={props?.fill ?? 'var(--detailFont)'}
							d="M31.7,49H12c-4.4,0-7.9-3.6-7.9-7.9V8.9C4.1,4.6,7.7,1,12,1h19.7v2.7H12C9.2,3.7,6.8,6,6.8,8.9v32.2
                    c0,2.9,2.3,5.2,5.2,5.2h19.7V49z"
						/>
					</g>
					<g>
						<path
							fill={props?.fill ?? 'var(--detailFont)'}
							d="M45.5,24.2L32.9,11.6c-0.8-0.8-2.3-0.2-2.3,1l0,10.9l-15.3,0c-0.8,0-1.6,0.6-1.7,1.4c-0.2,1,0.6,1.9,1.6,1.9
                    h15.4l0,11.1c0,1.2,1.5,1.8,2.3,1l12.6-12.6C46,25.6,46,24.7,45.5,24.2z"
						/>
					</g>
				</g>
			</>
		),
		//#endregion
		//#region estatus sin perifoneo
		noPerifoneo: () => (
			<g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M17.15,10.83l2.55-4.24c0.35-0.59,1.22-0.6,1.58,0c2.16,3.57,8.52,13.4,15.32,17.49l5.92,3.55
		c0.43,0.26,0.57,0.83,0.31,1.26l-2.86,4.75"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M13.24,17.36l-1.65,2.73l-4.41,7.34c-0.35,0.59,0.05,1.36,0.74,1.39c3.61,0.2,12.8,0.97,19.62,3.82
		c0.64,0.26,1.25,0.54,1.85,0.85"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M9.43,14.32l-1.77,2.93C7.38,17.73,7.53,18.34,8,18.62l3.28,1.97" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M33.44,38.33l-3.02,5.03c-0.28,0.48-0.9,0.63-1.37,0.34l-4.52-2.71c-0.47-0.29-0.62-0.9-0.34-1.37l3.96-6.58"
				/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="34.43" y1="22.59" x2="32.39" y2="25.97" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.32" y1="6.55" x2="42.32" y2="41.74" />
			</g>
		),
		//#endregion
		//#region estatus con perifoneo
		conPerifoneo: () => (
			<g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M19.3,6.75L7.1,27.87c-0.35,0.6,0.07,1.36,0.76,1.39c4.18,0.16,15.9,0.96,22.8,4.94l6,3.47
		c0.44,0.26,1.01,0.1,1.26-0.34l4.97-8.6c0.26-0.44,0.1-1.01-0.34-1.26l-6-3.47c-6.9-3.98-13.45-13.73-15.68-17.27
		C20.51,6.13,19.64,6.15,19.3,6.75z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M11.99,21.27l-4.16-2.4c-0.48-0.28-0.64-0.89-0.37-1.37l2.87-4.97c0.28-0.48,0.89-0.64,1.37-0.37l4.16,2.4" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M33.92,23.05l-9.54,16.53c-0.28,0.48-0.11,1.09,0.37,1.37l4.57,2.64c0.48,0.28,1.09,0.11,1.37-0.37l4.01-6.95"
				/>
			</g>
		),
		//#endregion
		//#region ícono ubicación
		ubicacion: () => (
			<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.01,6.03c-14.08,0-20.15,16.43-11.85,25.77l4.28,4.29l7.57,7.61l7.61-7.61l3.95-3.95
	C45.26,22.84,39.23,6.03,25.01,6.03z M25.01,28.2c-4.1,0-7.4-3.3-7.4-7.36c0-4.11,3.3-7.41,7.4-7.41c4.08,0,7.36,3.3,7.36,7.41
	C32.37,24.9,29.09,28.2,25.01,28.2z"/>
		),
		//#endregion
		//#region ícono flechas
		flechas: () => (
			<>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M46.6,27.67a1,1,0,0,1-.73-.31L25,5.62,4.13,27.36A1,1,0,0,1,2.68,26L25,2.73,47.32,26a1,1,0,0,1-.72,1.69Z"
				/>
				<path
					fill={props?.fill ?? 'var(--detailFont)'}
					d="M46.6,45.17a1,1,0,0,1-.73-.31L25,23.12,4.13,44.86a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.41L25,20.23,47.32,43.48a1,1,0,0,1-.72,1.69Z"
				/>
			</>
		),
		//#endregion
		//#region ícono timeline
		timeline: () => (
			<g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M13.98,33.87c1.15,2.54,3.69,4.29,6.65,4.29h10.21" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M13.85,28.11c1.08-2.68,3.7-4.57,6.78-4.57l8.77,0.01c2.01,0,3.85-0.82,5.17-2.14
		c0.64-0.64,1.17-1.4,1.53-2.26"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M13.35,8.94h16.05c3.03,0,5.63,1.85,6.73,4.48" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="10.41" cy="8.94" r="2.94" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="36.69" cy="38.16" r="5.84" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="36.7" cy="16.29" r="2.94" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="13.37" cy="30.99" r="2.94" />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="36.69,35.23 36.69,38.16 38.21,38.16 	" />
			</g>
		),
		//#endregion
		//#region ícono asignar usuario o usuario nuevo
		newUser: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.01,42.5H7.5v-7.09c0-4.37,3.54-7.91,7.91-7.91H25" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25,22.5L25,22.5c-4.14,0-7.5-3.36-7.5-7.5v0c0-4.14,3.36-7.5,7.5-7.5h0c4.14,0,7.5,3.36,7.5,7.5v0
	C32.5,19.14,29.14,22.5,25,22.5z"/>
				<g>
					<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="35" cy="35" r="7.5" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="35" y1="31.8" x2="35" y2="38.2" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="38.2" y1="35" x2="31.8" y2="35" />
				</g>
			</>
		),
		//#endregion
		//#region dificultad
		dificultad: () => (
			<path
				fill={props?.fill ?? 'var(--detailFont)'}
				d="M384 319.1C384 425.9 297.9 512 192 512s-192-86.13-192-192c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5v85.5c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2c13.5-19.72 44.15-10.77 44.15 13.03C215.1 127 384 149.7 384 319.1z"
			/>
		),
		//#endregion
		//#region recargar
		recargar: () => (
			<g>
				<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? 'var(--detailFont)'} d="M42.43,13.02l-1.99,1.15c-3.28-4.69-8.66-7.86-14.94-8.05C16.05,5.82,7.68,12.8,6.25,22.15
					C4.6,32.98,12.37,42.83,23.13,43.87c8.33,0.81,15.92-3.91,19.13-11.16c0.22-0.5-0.02-1.08-0.51-1.31l-2.43-1.13
					c-0.51-0.24-1.12-0.02-1.34,0.49c-2.34,5.34-7.83,8.91-13.97,8.54c-7.6-0.46-13.64-7.03-13.44-14.64
					c0.22-8.22,7.23-14.49,15.33-13.91c4.33,0.31,8.08,2.52,10.46,5.77l-2.34,1.35c-0.68,0.39-0.68,1.37,0,1.76l8.4,4.85
					c0.68,0.39,1.53-0.1,1.53-0.88v-9.7C43.96,13.12,43.11,12.63,42.43,13.02z"/>
			</g>
		),
		//#endregion
		//#region calendar
		calendar: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M26.49,27.49H23.5c-0.55,0-1-0.45-1-1V23.5c0-0.55,0.45-1,1-1h2.99c0.55,0,1,0.45,1,1v2.99
	C27.49,27.05,27.05,27.49,26.49,27.49z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.5,27.49H33.5c-0.55,0-1-0.45-1-1V23.5c0-0.55,0.45-1,1-1h2.99c0.55,0,1,0.45,1,1v2.99
	C37.5,27.05,37.05,27.49,36.5,27.49z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M16.49,37.49H13.5c-0.55,0-1-0.45-1-1V33.5c0-0.55,0.45-1,1-1h2.99c0.55,0,1,0.45,1,1v2.99
	C17.49,37.05,17.05,37.49,16.49,37.49z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M26.49,37.49H23.5c-0.55,0-1-0.45-1-1V33.5c0-0.55,0.45-1,1-1h2.99c0.55,0,1,0.45,1,1v2.99
	C27.49,37.05,27.05,37.49,26.49,37.49z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M36.5,37.49H33.5c-0.55,0-1-0.45-1-1V33.5c0-0.55,0.45-1,1-1h2.99c0.55,0,1,0.45,1,1v2.99
	C37.5,37.05,37.05,37.49,36.5,37.49z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40.5,42.5h-31c-1.1,0-2-0.9-2-2v-23h35v23C42.5,41.6,41.6,42.5,40.5,42.5z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.5,12.01v5.49h-35v-5.49C7.5,10.9,8.4,10,9.51,10h3.23v1.49c0,0.56,0.44,1,1,1h2.52c0.56,0,1-0.44,1-1V10
	h15.36v1.49c0,0.56,0.45,1,1,1h2.53c0.55,0,1-0.44,1-1V10h3.34C41.6,10,42.5,10.9,42.5,12.01z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M17.26,8.5v2.99c0,0.56-0.44,1-1,1h-2.52c-0.56,0-1-0.44-1-1V8.5c0-0.55,0.44-1,1-1h2.52
	C16.82,7.5,17.26,7.95,17.26,8.5z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M37.15,8.5v2.99c0,0.56-0.45,1-1,1h-2.53c-0.55,0-1-0.44-1-1V8.5c0-0.55,0.45-1,1-1h2.53
	C36.7,7.5,37.15,7.95,37.15,8.5z"/>
			</>
		),
		//#endregion
		//#region calendar
		reloj: () => (
			<>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="25" cy="25" r="17.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="37.48" y1="25" x2="34.82" y2="25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="37.48" x2="25" y2="34.82" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.52" y1="25" x2="15.18" y2="25" />
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="18.76" y1="14.17" x2="19.03" y2="14.64" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="35.81" y1="18.76" x2="35.34" y2="19.03" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.24" y1="35.81" x2="30.97" y2="35.33" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="14.2" y1="31.24" x2="14.67" y2="30.97" />
				</g>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="14.18" y1="18.74" x2="14.66" y2="19.02" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.25" y1="14.19" x2="30.98" y2="14.66" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="35.82" y1="31.23" x2="35.34" y2="30.96" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="18.77" y1="35.8" x2="19.04" y2="35.33" />
				</g>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25,12.5 25,25 30,25 " />
			</>
		),
		//#endregion
		//#region calendar
		prioridad: () => (
			<g>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.5" y1="42.88" x2="17.5" y2="12.88" />
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="22.5,12.88 40,20.38 22.5,27.88 	" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="17.5" cy="7.88" r="0.76" />
			</g>
		),
		//#endregion
		//#region confirmar
		confirmar: () => (
			<>
				<circle strokeWidth={"2px"} stroke={props?.fill ?? "var(--detailFont)"} fill='none' cx="25" cy="25" r="17.5" />
				<polyline strokeWidth={"2px"} stroke={props?.fill ?? "var(--detailFont)"} fill='none' points="15,27.5 20,32.5 35,17.5 " />
			</>
		),
		//#endregion
		//#region close
		close: () => (
			<>
				<circle strokeWidth={"2px"} stroke={props?.fill ?? "var(--detailFont)"} fill='none' cx="25" cy="25" r="17.5" />
				<g>
					<line strokeWidth={"2px"} stroke={props?.fill ?? "var(--detailFont)"} fill='none' x1="17.93" y1="17.93" x2="32.07" y2="32.07" />
					<line strokeWidth={"2px"} stroke={props?.fill ?? "var(--detailFont)"} fill='none' x1="32.07" y1="17.93" x2="17.93" y2="32.07" />
				</g>
			</>
		),
		//#endregion
		//#region seleccionarTodo
		seleccionarTodo: () => (
			<g >
				<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? "var(--detailFont)"} d="M30.7,41.49H10.51c-1.1,0-2-0.9-2-2V19.3c0-1.1,0.9-2,2-2H30.7c1.1,0,2,0.9,2,2v20.18
		C32.7,40.59,31.8,41.49,30.7,41.49z"/>
				<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? "var(--detailFont)"} d="M17.3,12.91v-2.4c0-1.11,0.9-2,2-2h20.19c1.11,0,2,0.89,2,2V30.7c0,1.1-0.89,2-2,2h-2.4" />
				<path strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? "var(--detailFont)"} d="M32.7,37.09h2.4c1.1,0,1.99-0.89,1.99-1.99v-2.4V14.9c0-1.1-0.89-1.99-1.99-1.99H17.3h-2.4
		c-1.1,0-1.99,0.89-1.99,1.99v2.4"/>
				<g>
					<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? "var(--detailFont)"} x1="20.6" y1="23.91" x2="20.6" y2="34.89" />
					<line strokeWidth={props?.strokeWidth ?? 2} fill='none' stroke={props?.fill ?? "var(--detailFont)"} x1="26.09" y1="29.4" x2="15.11" y2="29.4" />
				</g>
			</g>
		),
		//#endregion
		//#region ampliar
		ampliar: () => (
			<>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="7.5,17.5 7.5,7.5 17.5,7.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="17.5,42.5 7.5,42.5 7.5,32.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="42.5,17.5 42.5,7.5 32.5,7.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="32.5,42.5 42.5,42.5 42.5,32.5 " />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="42.5" y1="42.5" x2="32.5" y2="32.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.5" y1="17.5" x2="7.5" y2="7.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.5" y1="32.5" x2="7.5" y2="42.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="42.5" y1="7.5" x2="32.5" y2="17.5" />
			</>
		),
		//#endregion
		//#region arrastrar
		arrastrar: () => (
			<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M18.23,30V17.82c0-1.24-1.01-2.25-2.25-2.25h-0.01c-1.24,0-2.25,1.01-2.25,2.25v22.69
	c0,1.1,0.89,1.99,1.99,1.99h18.58c1.1,0,1.99-0.89,1.99-1.99V26.34v0v-10.3c0-1.24-1.01-2.25-2.25-2.25h-0.01
	c-1.24,0-2.25,1.01-2.25,2.25v10.3V11.86c0-1.24-1.01-2.25-2.25-2.25H29.5c-1.24,0-2.25,1.01-2.25,2.25v14.48l0.01-16.59
	c0-1.24-1.01-2.25-2.25-2.25h0c-1.24,0-2.25,1.01-2.25,2.25l-0.01,16.6V11.86c0-1.24-1.01-2.25-2.25-2.25h-0.02
	c-1.24,0-2.25,1.01-2.25,2.25V30c5.5,0,8,2.5,8,7.5"/>
		),
		//#endregion
		//#region ciudades de interes
		ciudadesInteres: () => (
			<>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="20,45 20,22.5 25,21.43 30,22.5 30,45 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="20.98,22.01 20.98,17.96 25,17 29.02,17.96 29.02,22.01 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="22.5,16.55 22.5,14 25,13.5 27.5,14 27.5,16.55 " />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="5" x2="25" y2="13.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="25" x2="25" y2="45" />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="35,45 35,36.51 41,36.51 41,31 47.44,31 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="36.85,36.51 36.85,33.01 41,33.01 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="42.96,31 42.96,27.5 47.5,27.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="15,45 15,32.5 5,32.5 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="5,27.5 12.5,27.5 12.5,32.5 " />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="40" y1="41" x2="40" y2="43.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="45" y1="41" x2="45" y2="43.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="45" y1="35" x2="45" y2="37.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="10" y1="37.5" x2="7.5" y2="37.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="10" y1="42.5" x2="7.5" y2="42.5" />
			</>
		),
		//#endregion
		//#region cliente
		cliente: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25,22.5L25,22.5c-4.14,0-7.5-3.36-7.5-7.5v0c0-4.14,3.36-7.5,7.5-7.5h0c4.14,0,7.5,3.36,7.5,7.5v0
	C32.5,19.14,29.14,22.5,25,22.5z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M26.5,42.5h-19v-7.09c0-4.37,3.54-7.91,7.91-7.91h11.08" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.25,30.16c-1.38-1.61-3.4-2.66-5.68-2.66c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5
	c2.43,0,4.56-1.17,5.93-2.96"/>
			</>
		),
		//#endregion
		//#region comentarios
		comentarios: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.5,19.48v15.99c0,1.09-0.89,1.98-1.98,1.98h-1.23v4.98l-6.43-4.98H21.98c-1.09,0-1.98-0.89-1.98-1.98v-8.02
	h8.02c1.09,0,1.98-0.88,1.98-1.97V17.5h10.52C41.61,17.5,42.5,18.39,42.5,19.48z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M30,9.48v16c0,1.09-0.89,1.97-1.98,1.97H17.14l-6.43,4.98v-4.98H9.48c-1.1,0-1.98-0.88-1.98-1.97v-16
	c0-1.1,0.88-1.98,1.98-1.98h18.54C29.11,7.5,30,8.38,30,9.48z"/>
			</>
		),
		//#endregion
		//#region costo cliente
		costoCliente: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M35.97,16.71C35.09,15.67,33.79,15,32.32,15c-2.66,0-4.82,2.16-4.82,4.82c0,2.66,2.16,4.82,4.82,4.82
	c1.56,0,2.93-0.75,3.82-1.9"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.5,42.5v-7.51c0-2.76-2.24-4.99-4.99-4.99H26.99c-2.76,0-4.99,2.24-4.99,4.99v7.51" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="37.5" x2="27.5" y2="42.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="37.5" y1="37.5" x2="37.5" y2="42.5" />
				<g>
					<path d="M15.7,8.45v2.67c0.42,0.05,0.85,0.13,1.27,0.22c0.84,0.2,1.59,0.48,2.25,0.87l-1.16,2.8c-0.63-0.34-1.26-0.6-1.88-0.77
		c-0.16-0.04-0.32-0.08-0.48-0.11c-0.46-0.1-0.89-0.15-1.33-0.15c-0.52,0-0.94,0.05-1.26,0.16c-0.32,0.11-0.54,0.25-0.69,0.43
		c-0.03,0.04-0.06,0.09-0.09,0.13c-0.08,0.14-0.12,0.3-0.12,0.48c0,0.16,0.04,0.3,0.12,0.42c0.07,0.1,0.16,0.19,0.29,0.28
		c0.27,0.17,0.63,0.31,1.08,0.42c0.45,0.11,0.95,0.22,1.49,0.34c0.17,0.03,0.34,0.07,0.5,0.12c0.38,0.09,0.75,0.19,1.12,0.3
		c0.54,0.17,1.03,0.4,1.47,0.69c0.44,0.29,0.81,0.66,1.08,1.12c0.28,0.46,0.41,1.05,0.41,1.74c0,0.78-0.22,1.49-0.66,2.14
		c-0.44,0.65-1.09,1.18-1.96,1.57c-0.43,0.2-0.92,0.34-1.46,0.44v2.74h-3.36v-2.69c-0.54-0.07-1.09-0.17-1.61-0.31
		c-1.01-0.28-1.84-0.63-2.47-1.06l1.24-2.78c0.6,0.38,1.28,0.69,2.06,0.94c0.26,0.08,0.52,0.15,0.78,0.2
		c0.52,0.11,1.04,0.17,1.55,0.17c0.52,0,0.94-0.05,1.26-0.14c0.23-0.07,0.41-0.15,0.55-0.26c0.05-0.04,0.1-0.08,0.14-0.13
		c0.15-0.15,0.22-0.34,0.22-0.56c0-0.28-0.12-0.51-0.36-0.68c-0.02-0.02-0.03-0.03-0.05-0.05c-0.28-0.17-0.65-0.32-1.09-0.44
		c-0.44-0.11-0.93-0.23-1.47-0.34c-0.25-0.05-0.5-0.11-0.75-0.18c-0.3-0.07-0.58-0.15-0.87-0.26c-0.54-0.17-1.03-0.41-1.47-0.69
		c-0.44-0.29-0.81-0.66-1.09-1.12c-0.28-0.46-0.42-1.06-0.42-1.76c0-0.8,0.22-1.53,0.66-2.17c0.44-0.65,1.09-1.17,1.97-1.56
		c0.37-0.17,0.77-0.3,1.22-0.39v-2.8H15.7 M17.7,6.45h-2h-3.36h-2v2v1.34c-0.02,0.01-0.03,0.02-0.05,0.02
		c-1.2,0.53-2.14,1.29-2.8,2.26c-0.67,0.98-1,2.09-1,3.29c0,1.07,0.23,2,0.7,2.78c0.23,0.38,0.49,0.71,0.79,1.02l-0.3,0.68
		l-1.24,2.78l-0.68,1.52l1.36,0.94c0.81,0.56,1.82,1,3.08,1.35c0.05,0.01,0.09,0.02,0.14,0.04v1.03v2h2h3.36h2v-2v-1.24
		c0.1-0.04,0.19-0.08,0.28-0.12c1.21-0.55,2.15-1.32,2.79-2.28c0.66-0.97,1-2.07,1-3.26c0-1.06-0.23-1.99-0.69-2.76
		c-0.35-0.6-0.82-1.12-1.39-1.56l0.21-0.51l1.16-2.8l0.67-1.62l-1.51-0.88c-0.75-0.44-1.6-0.78-2.53-1.02V8.45V6.45L17.7,6.45z"/>
				</g>
			</>
		),
		//#endregion
		//#region costo IMJ
		costoIMJ: () => (
			<>
				<g>
					<path d="M15.7,8.45v2.67c0.42,0.05,0.85,0.13,1.27,0.22c0.84,0.2,1.59,0.48,2.25,0.87l-1.16,2.8c-0.63-0.34-1.26-0.6-1.88-0.77
		c-0.16-0.04-0.32-0.08-0.48-0.11c-0.46-0.1-0.89-0.15-1.33-0.15c-0.52,0-0.94,0.05-1.26,0.16c-0.32,0.11-0.54,0.25-0.69,0.43
		c-0.03,0.04-0.06,0.09-0.09,0.13c-0.08,0.14-0.12,0.3-0.12,0.48c0,0.16,0.04,0.3,0.12,0.42c0.07,0.1,0.16,0.19,0.29,0.28
		c0.27,0.17,0.63,0.31,1.08,0.42c0.45,0.11,0.95,0.22,1.49,0.34c0.17,0.03,0.34,0.07,0.5,0.12c0.38,0.09,0.75,0.19,1.12,0.3
		c0.54,0.17,1.03,0.4,1.47,0.69c0.44,0.29,0.81,0.66,1.08,1.12c0.28,0.46,0.41,1.05,0.41,1.74c0,0.78-0.22,1.49-0.66,2.14
		c-0.44,0.65-1.09,1.18-1.96,1.57c-0.43,0.2-0.92,0.34-1.46,0.44v2.74h-3.36v-2.69c-0.54-0.07-1.09-0.17-1.61-0.31
		c-1.01-0.28-1.84-0.63-2.47-1.06l1.24-2.78c0.6,0.38,1.28,0.69,2.06,0.94c0.26,0.08,0.52,0.15,0.78,0.2
		c0.52,0.11,1.04,0.17,1.55,0.17c0.52,0,0.94-0.05,1.26-0.14c0.23-0.07,0.41-0.15,0.55-0.26c0.05-0.04,0.1-0.08,0.14-0.13
		c0.15-0.15,0.22-0.34,0.22-0.56c0-0.28-0.12-0.51-0.36-0.68c-0.02-0.02-0.03-0.03-0.05-0.05c-0.28-0.17-0.65-0.32-1.09-0.44
		c-0.44-0.11-0.93-0.23-1.47-0.34c-0.25-0.05-0.5-0.11-0.75-0.18c-0.3-0.07-0.58-0.15-0.87-0.26c-0.54-0.17-1.03-0.41-1.47-0.69
		c-0.44-0.29-0.81-0.66-1.09-1.12c-0.28-0.46-0.42-1.06-0.42-1.76c0-0.8,0.22-1.53,0.66-2.17c0.44-0.65,1.09-1.17,1.97-1.56
		c0.37-0.17,0.77-0.3,1.22-0.39v-2.8H15.7 M17.7,6.45h-2h-3.36h-2v2v1.34c-0.02,0.01-0.03,0.02-0.05,0.02
		c-1.2,0.53-2.14,1.29-2.8,2.26c-0.67,0.98-1,2.09-1,3.29c0,1.07,0.23,2,0.7,2.78c0.23,0.38,0.49,0.71,0.79,1.02l-0.3,0.68
		l-1.24,2.78l-0.68,1.52l1.36,0.94c0.81,0.56,1.82,1,3.08,1.35c0.05,0.01,0.09,0.02,0.14,0.04v1.03v2h2h3.36h2v-2v-1.24
		c0.1-0.04,0.19-0.08,0.28-0.12c1.21-0.55,2.15-1.32,2.79-2.28c0.66-0.97,1-2.07,1-3.26c0-1.06-0.23-1.99-0.69-2.76
		c-0.35-0.6-0.82-1.12-1.39-1.56l0.21-0.51l1.16-2.8l0.67-1.62l-1.51-0.88c-0.75-0.44-1.6-0.78-2.53-1.02V8.45V6.45L17.7,6.45z"/>
				</g>
				<g>
					<g>
						<path d="M21.01,34.47c0.02,0,0.05-0.01,0.07-0.01c1.08,0,2.16,0,3.25,0c0.02,0,0.05,0,0.08,0c0,3.01,0,6.03,0,9.05
			c-1.13,0-2.26,0-3.4,0C21.01,40.5,21.01,37.49,21.01,34.47z"/>
						<path d="M28.59,37.76c0,1.92,0,3.83,0,5.76c-0.97,0-1.92,0-2.88,0c0-3.01,0-6.02,0-9.04c0.04,0,0.07,0,0.11,0c1.65,0,3.3,0,4.95,0
			c0.09,0,0.12,0.03,0.14,0.11c0.26,0.88,0.53,1.77,0.79,2.65c0.01,0.03,0.02,0.06,0.04,0.11c0.1-0.31,0.19-0.59,0.27-0.87
			c0.2-0.64,0.4-1.27,0.6-1.91c0.02-0.07,0.05-0.09,0.13-0.09c1.72,0,3.45,0,5.17,0c0.03,0,0.06,0,0.09,0.01c0,3.02,0,6.03,0,9.04
			c-1.1,0-2.19,0-3.3,0c0-1.89,0-3.78,0-5.67c-0.01,0-0.01,0-0.02,0c-0.01,0.03-0.03,0.07-0.03,0.1c-0.53,1.82-1.06,3.64-1.58,5.46
			c-0.03,0.1-0.07,0.12-0.16,0.12c-0.8,0-1.6,0-2.4,0c-0.09,0-0.13-0.02-0.15-0.11c-0.57-1.86-1.15-3.73-1.72-5.59
			c-0.01-0.02-0.02-0.04-0.02-0.07C28.61,37.76,28.6,37.76,28.59,37.76z"/>
						<path d="M43.48,34.48c-1.12,0-2.23,0-3.35,0c0,0.05,0,0.09,0,0.13c0,1.63,0,3.26,0,4.9c0,0.1,0,0.2-0.01,0.3
			c-0.04,0.47-0.38,0.83-0.81,0.87v2.82c0.65,0.02,1.29-0.03,1.92-0.23c0.93-0.3,1.6-0.88,1.96-1.81c0.21-0.53,0.29-1.09,0.3-1.66
			c0.01-1.75,0-3.5,0-5.25C43.49,34.53,43.48,34.5,43.48,34.48z"/>
					</g>
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.36,25h-0.08c-2.64,0-4.78-2.14-4.78-4.78v-0.08c0-2.64,2.14-4.78,4.78-4.78h0.08
	c2.64,0,4.78,2.14,4.78,4.78v0.08C37.14,22.86,35,25,32.36,25z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.5,32c0-1.11-0.9-2-2-2h-16.5c-1.11,0-2,0.9-2,2" />
			</>
		),
		//#endregion
		//#region add
		add: () => (
			<g>
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="25" cy="25" r="17.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="15" x2="25" y2="34.99" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="34.99" y1="24.99" x2="15.01" y2="24.99" />
			</g>
		),
		//#endregion
		//#region datosCliente
		datosCliente: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40.47,37.59H9.53c-1.12,0-2.03-0.91-2.03-2.03V14.53c0-1.12,0.91-2.03,2.03-2.03h30.93
	c1.12,0,2.03,0.91,2.03,2.03v21.02C42.5,36.68,41.59,37.59,40.47,37.59z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M37.5,32.5v-2.44v0c0-1.51-1.22-2.73-2.73-2.73h-2.04c-1.51,0-2.73,1.22-2.73,2.73v0v2.44H37.5z" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.5" y1="20" x2="25" y2="20" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.5" y1="26.25" x2="25" y2="26.25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.5" y1="32.5" x2="25" y2="32.5" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M35.62,19.38c-0.46-0.54-1.13-0.89-1.89-0.89c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5
	c0.81,0,1.52-0.39,1.98-0.99"/>
			</>
		),
		//#endregion
		//#region datosCampania
		datosCampania: () => (
			<>
				<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="7.5" y="12.5" width="35" height="25.09" rx="2.03" ry="2.03" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.51" y1="20" x2="37.51" y2="20" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.5" y1="26.25" x2="22.5" y2="26.25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.5" y1="32.5" x2="22.5" y2="32.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="26.25" x2="37.51" y2="26.25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="32.5" x2="37.51" y2="32.5" />
				<g>
					<path fill={props?.fill ?? "var(--detailFont)"} d="M11.54,22.5l2.28-5.16h1.44l2.28,5.16h-1.52l-1.78-4.45h.58l-1.78,4.45h-1.49ZM12.78,21.5l.38-1.08h2.52l.38,1.08h-3.27Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M17.95,22.5v-5.16h2.44c.57,0,1.07.11,1.5.32.43.21.77.51,1.01.89.24.38.37.84.37,1.37s-.12.98-.37,1.37c-.24.39-.58.68-1.01.9-.43.21-.93.32-1.5.32h-2.44ZM19.41,21.33h.92c.29,0,.55-.05.77-.17.22-.11.39-.27.51-.49s.18-.47.18-.76-.06-.55-.18-.77c-.12-.21-.29-.37-.51-.48s-.48-.17-.77-.17h-.92v2.83Z" />
				</g>
			</>
		),
		//#endregion
		//#region datos facturacion
		datosFacturacion: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.53,6.01v6.59c0,.51.41.92.92.92h6.55" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M40,41.91V13.24c0-.54-.21-1.07-.6-1.46l-5.08-5.16c-.39-.4-.92-.62-1.48-.62H12.07c-1.15,0-2.07.93-2.07,2.07v33.82c0,1.15.93,2.07,2.07,2.07h25.85c1.15,0,2.07-.93,2.07-2.07Z" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="20" x2="35" y2="20" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15" y1="26.25" x2="22.5" y2="26.25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15" y1="32.5" x2="22.5" y2="32.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="26.25" x2="35" y2="26.25" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="32.5" x2="35" y2="32.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15" y1="38.75" x2="22.5" y2="38.75" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.5" y1="38.75" x2="35" y2="38.75" />
				<path fill={props?.fill ?? "var(--detailFont)"} d="M18.68,20.14c-.67,0-1.32-.09-1.93-.27-.62-.18-1.11-.41-1.49-.7l.66-1.46c.36.26.79.47,1.28.63.49.16.99.25,1.49.25.38,0,.69-.04.93-.11.24-.08.41-.18.52-.32.11-.14.17-.29.17-.47,0-.22-.09-.4-.26-.53-.18-.13-.41-.24-.7-.32s-.61-.16-.95-.24c-.35-.08-.7-.17-1.04-.28-.35-.11-.67-.26-.95-.43-.29-.18-.52-.41-.7-.7-.18-.29-.27-.66-.27-1.1,0-.48.13-.92.39-1.31.26-.4.65-.71,1.18-.95.52-.24,1.18-.35,1.97-.35.53,0,1.05.06,1.56.19.51.12.96.31,1.36.56l-.6,1.48c-.39-.22-.78-.39-1.18-.5-.39-.11-.78-.16-1.15-.16s-.68.04-.92.13c-.24.09-.41.2-.52.34-.1.14-.16.3-.16.49,0,.22.09.39.26.52s.41.24.7.32c.29.08.61.16.95.24.35.08.7.17,1.04.28.35.1.67.24.95.42s.52.41.7.7c.18.29.27.65.27,1.09,0,.47-.13.9-.4,1.3-.26.39-.66.71-1.18.95-.52.24-1.19.36-1.99.36ZM18.25,21.44v-11.28h1.2v11.28h-1.2Z" />
			</>
		),
		//#endregion
		//#region diamantes
		diamantes: () => (
			<>
				<g>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="31.99,16.01 18.01,16.01 13.55,22.33 25,36.54 36.45,22.33 	" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="13.55" y1="22.33" x2="36.45" y2="22.33" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="18.01" y1="16.01" x2="21.51" y2="22.33" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="16.01" x2="21.51" y2="22.33" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="28.49" y1="22.33" x2="25" y2="16.01" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.99" y1="16.01" x2="28.49" y2="22.33" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="21.51" y1="22.33" x2="25" y2="36.54" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="36.54" x2="28.49" y2="22.33" />
				</g>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="9.2" x2="25" y2="6.04" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.1" y1="11.32" x2="15.52" y2="8.58" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="11.32" y1="17.1" x2="8.58" y2="15.52" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="9.2" y1="25" x2="6.04" y2="25" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="11.32" y1="32.9" x2="8.58" y2="34.48" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.1" y1="38.68" x2="15.52" y2="41.42" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="40.8" x2="25" y2="43.96" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="32.9" y1="38.68" x2="34.48" y2="41.42" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="38.68" y1="32.9" x2="41.42" y2="34.48" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="40.8" y1="25" x2="43.96" y2="25" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="38.68" y1="17.1" x2="41.42" y2="15.52" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="32.9" y1="11.32" x2="34.48" y2="8.58" />
				</g>
			</>
		),
		//#endregion
		//#region herramientas
		herramientas: () => (
			<g>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M18.97,24.92H9.55c-0.57,0-1.03-0.46-1.03-1.03V9.42c0-1.1,0.89-1.99,1.99-1.99h7.49
			c1.1,0,1.99,0.89,1.99,1.99v14.47C20,24.46,19.54,24.92,18.97,24.92z"/>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="16.25,34.92 16.25,24.92 12.27,24.92 12.27,34.92 10.39,37.42 12.89,42.42 15.62,42.42 18.12,37.42 
					"/>
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M38,31.09V18.91c2.06-1.02,3.47-3.14,3.47-5.59c0-2.65-1.66-4.91-3.99-5.82v5.58H32.5V7.5
		c-2.33,0.91-3.99,3.17-3.99,5.82c0,2.45,1.42,4.57,3.47,5.59v12.17c-2.06,1.02-3.47,3.14-3.47,5.59c0,2.65,1.66,4.91,3.99,5.82
		v-5.57h4.98v5.57c2.33-0.91,3.99-3.17,3.99-5.82C41.47,34.23,40.05,32.11,38,31.09z"/>
			</g>
		),
		//#endregion
		//#region home
		home: () => (
			<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.23,25.83L25.84,8.38c-0.44-0.47-1.22-0.47-1.66,0L7.77,25.83c-0.61,0.65-0.12,1.67,0.81,1.67h1.9
	c0.6,0,1.08,0.45,1.08,1.01v12.98c0,0.56,0.48,1.01,1.08,1.01h8.58c0.6,0,1.08-0.45,1.08-1.01v-5.48c0-0.56,0.48-1.01,1.08-1.01
	h3.21c0.6,0,1.08,0.45,1.08,1.01v5.48c0,0.56,0.48,1.01,1.08,1.01h8.58c0.6,0,1.08-0.45,1.08-1.01V28.51c0-0.56,0.48-1.01,1.08-1.01
	h1.9C42.35,27.5,42.84,26.48,42.23,25.83z"/>
		),
		//#endregion
		//#region inventario
		inventario: () => (
			<g>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="6.95,13.24 13.92,15.85 18.35,25.36 21.68,32.49 	" />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="28.65,35.03 38.17,30.6 40.55,29.49 	" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M26.12,42.01c-2.63,1.22-5.75,0.09-6.98-2.54c-1.22-2.63-0.09-5.75,2.54-6.98c2.63-1.22,5.75-0.08,6.97,2.54
		v0.01C29.88,37.67,28.74,40.78,26.12,42.01z"/>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="18.35,25.36 23.11,23.14 27.87,20.92 32.62,18.7 38.17,30.6 	" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="23.11" y1="23.14" x2="24.49" y2="26.11" />
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.62,18.7l-4.66-10c-0.49-1.05-1.73-1.5-2.77-1.01L14.7,12.59c-1.05,0.49-1.5,1.73-1.01,2.77l0.23,0.49" />
				</g>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="17.56" y1="11.25" x2="18.95" y2="14.22" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.87" y1="20.92" x2="29.25" y2="23.9" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.32" y1="9.03" x2="23.71" y2="12" />
			</g>
		),
		//#endregion
		//#region caraBilletes
		caraBilletes: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.5,25c0,7.21-4.37,13.41-10.61,16.08.3-1.41.33-3,.08-4.67-.27-2.05-.94-4.23-1.98-6.41h-9.98c-1.01,2.18-1.65,4.36-1.92,6.41-.22,1.69-.18,3.29.13,4.72-6.3-2.64-10.72-8.87-10.72-16.13,0-9.66,7.84-17.5,17.5-17.5s17.5,7.84,17.5,17.5Z" />
				<g>
					<path fill={props?.fill ?? "var(--detailFont)"} d="M17.54,24.03c-.69,0-1.35-.09-1.99-.26-.64-.17-1.15-.39-1.55-.67l.78-1.75c.38.24.81.44,1.3.59.49.16.98.23,1.47.23.33,0,.59-.03.79-.09s.35-.14.44-.24.14-.22.14-.35c0-.19-.09-.34-.26-.46-.18-.11-.4-.2-.68-.28-.28-.07-.59-.14-.93-.22s-.68-.16-1.02-.28c-.34-.11-.65-.26-.93-.44-.28-.18-.51-.42-.68-.71s-.26-.66-.26-1.11c0-.5.14-.96.41-1.37.28-.41.69-.74,1.24-.98s1.24-.37,2.06-.37c.55,0,1.09.06,1.63.19s1.01.31,1.42.55l-.73,1.76c-.4-.22-.8-.38-1.19-.49-.39-.11-.77-.16-1.14-.16-.33,0-.59.03-.79.1-.2.07-.34.16-.43.27-.09.11-.13.24-.13.38,0,.18.09.33.26.44s.4.2.68.26c.28.07.6.14.94.21.34.07.68.16,1.02.27.34.11.65.25.93.43.28.18.51.42.68.71s.26.66.26,1.1c0,.49-.14.94-.41,1.35-.28.41-.69.74-1.24.99-.55.25-1.24.37-2.07.37ZM17.03,25.3v-11.28h1.44v11.28h-1.44Z" />
					<path fill={props?.fill ?? "var(--detailFont)"} d="M32.28,24.03c-.69,0-1.35-.09-1.99-.26-.64-.17-1.15-.39-1.55-.67l.78-1.75c.38.24.81.44,1.3.59.49.16.98.23,1.47.23.33,0,.59-.03.79-.09s.35-.14.44-.24.14-.22.14-.35c0-.19-.09-.34-.26-.46-.18-.11-.4-.2-.68-.28-.28-.07-.59-.14-.93-.22s-.68-.16-1.02-.28c-.34-.11-.65-.26-.93-.44-.28-.18-.51-.42-.68-.71s-.26-.66-.26-1.11c0-.5.14-.96.41-1.37.28-.41.69-.74,1.24-.98s1.24-.37,2.06-.37c.55,0,1.09.06,1.63.19s1.01.31,1.42.55l-.73,1.76c-.4-.22-.8-.38-1.19-.49-.39-.11-.77-.16-1.14-.16-.33,0-.59.03-.79.1-.2.07-.34.16-.43.27-.09.11-.13.24-.13.38,0,.18.09.33.26.44s.4.2.68.26c.28.07.6.14.94.21.34.07.68.16,1.02.27.34.11.65.25.93.43.28.18.51.42.68.71s.26.66.26,1.1c0,.49-.14.94-.41,1.35-.28.41-.69.74-1.24.99-.55.25-1.24.37-2.07.37ZM31.78,25.3v-11.28h1.44v11.28h-1.44Z" />
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M12.5,30h7.51c-1.01,2.18-1.65,4.36-1.92,6.41-.87-.56-1.5-1.1-1.87-1.41-2.07-1.79-3.17-3.79-3.72-5Z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M37.5,30c-.54,1.21-1.62,3.21-3.67,5-.35.31-.98.85-1.86,1.41-.27-2.05-.94-4.23-1.98-6.41h7.51Z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31.89,41.08c-.3,1.54-.93,2.88-1.89,3.92-.46.5-2.33,2.54-5.02,2.5-2.6-.03-4.36-1.96-4.85-2.5-.95-1.03-1.58-2.36-1.91-3.87-.31-1.43-.35-3.03-.13-4.72.27-2.05.91-4.23,1.92-6.41h9.98c1.04,2.18,1.71,4.36,1.98,6.41.25,1.67.22,3.26-.08,4.67Z" />
				<path fill={props?.fill ?? "var(--detailFont)"} d="M24.91,41.64c-.69,0-1.35-.09-1.99-.26-.64-.17-1.15-.39-1.55-.67l.78-1.75c.38.24.81.44,1.3.59.49.16.98.23,1.47.23.33,0,.59-.03.79-.09s.35-.14.44-.24.14-.22.14-.35c0-.19-.09-.34-.26-.46-.18-.11-.4-.2-.68-.28-.28-.07-.59-.14-.93-.22s-.68-.16-1.02-.28c-.34-.11-.65-.26-.93-.44-.28-.18-.51-.42-.68-.71s-.26-.66-.26-1.11c0-.5.14-.96.41-1.37.28-.41.69-.74,1.24-.98s1.24-.37,2.06-.37c.55,0,1.09.06,1.63.19s1.01.31,1.42.55l-.73,1.76c-.4-.22-.8-.38-1.19-.49-.39-.11-.77-.16-1.14-.16-.33,0-.59.03-.79.1-.2.07-.34.16-.43.27-.09.11-.13.24-.13.38,0,.18.09.33.26.44s.4.2.68.26c.28.07.6.14.94.21.34.07.68.16,1.02.27.34.11.65.25.93.43.28.18.51.42.68.71s.26.66.26,1.1c0,.49-.14.94-.41,1.35-.28.41-.69.74-1.24.99-.55.25-1.24.37-2.07.37ZM24.41,42.91v-11.28h1.44v11.28h-1.44Z" />
			</>
		),
		//#endregion
		//#region monedas
		monedas: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.98,33.59v1.8c0,3.02-5.46,5.48-12.2,5.48c-6.73,0-12.19-2.46-12.19-5.48v-5.44c0,0.85,0.43,1.65,1.2,2.37
	c0.57,0.54,1.34,1.04,2.27,1.46c0.31,0.14,0.63,0.27,0.97,0.4c0.6,0.22,1.25,0.42,1.94,0.59c1.73,0.42,3.71,0.66,5.81,0.66
	c2.11,0,4.09-0.24,5.82-0.66c0.69-0.17,1.34-0.37,1.94-0.59c0.27-0.1,0.53-0.2,0.78-0.32c0.01,0,0.01,0,0.02,0
	C30.61,33.86,31.83,33.76,32.98,33.59z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M29.32,33.86c-0.25,0.12-0.51,0.22-0.78,0.32c-0.6,0.23-1.25,0.42-1.94,0.59c-1.73,0.42-3.71,0.66-5.82,0.66
	c-2.1,0-4.08-0.24-5.81-0.66c-0.69-0.17-1.34-0.36-1.94-0.59c-0.34-0.13-0.66-0.26-0.97-0.4c-0.93-0.42-1.7-0.92-2.27-1.46
	c-0.77-0.72-1.2-1.52-1.2-2.37c0-2.44,3.55-4.51,8.45-5.21v3.64c0,3.02,5.46,5.48,12.2,5.48H29.32z"/>
				<g > {/* Signo de pesos */}
					<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="16.5,31.97 18.06,31.27 18.57,31.04 	" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M16.36,29.82c0.12,0.14,0.41,0.87,1.63,1.42c0.02,0.01,0.05,0.02,0.07,0.03c0.47,0.2,0.94,0.32,1.38,0.37" />
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.43,22.94v5.44c0,2.43-3.55,4.5-8.45,5.21c-1.15,0.17-2.37,0.27-3.64,0.27c-0.01,0-0.01,0-0.02,0h-0.08
	c-4.01,0-7.57-0.87-9.8-2.22c-0.32-0.19-0.61-0.39-0.87-0.6c-0.98-0.79-1.53-1.7-1.53-2.66v-3.77c0.12,0.03,0.24,0.06,0.37,0.08
	c0.1,0.02,0.2,0.03,0.3,0.05c0.15,0.2,0.33,0.39,0.53,0.58c0.26,0.24,0.55,0.47,0.88,0.69c0.44,0.29,0.94,0.56,1.49,0.81L21.03,27
	c0.29,0.12,0.6,0.24,0.91,0.34c0.16,0.05,0.32,0.1,0.48,0.15c0.24,0.07,0.49,0.15,0.75,0.21c0.61,0.16,1.26,0.3,1.94,0.4h0.01
	c0.16,0.03,0.33,0.06,0.49,0.08c0.57,0.08,1.17,0.14,1.77,0.18c0.61,0.05,1.23,0.07,1.86,0.07c1.08,0,2.13-0.06,3.13-0.19
	c1.33-0.15,2.57-0.41,3.68-0.75c0.16-0.05,0.32-0.1,0.48-0.15c0.31-0.1,0.62-0.22,0.91-0.34c0.14-0.06,0.28-0.12,0.42-0.18
	c0.55-0.25,1.05-0.52,1.49-0.81c0.32-0.22,0.62-0.45,0.88-0.69C41,24.6,41.43,23.8,41.43,22.94z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M34.24,14.18v5.44c0,0.95-0.54,1.84-1.49,2.62c-0.69,0.57-1.6,1.08-2.68,1.49c-0.81,0.33-1.72,0.6-2.7,0.81
	c-0.63,0.14-1.28,0.25-1.96,0.34c-0.12,0.02-0.24,0.03-0.36,0.04c-0.96,0.12-1.97,0.18-3.01,0.18c-1.52,0-2.98-0.13-4.33-0.36
	c-0.1-0.02-0.2-0.03-0.3-0.05c-0.13-0.02-0.25-0.05-0.37-0.08c-4.25-0.85-7.2-2.77-7.2-4.99v-5.44c0,0.1,0.01,0.19,0.02,0.28
	c0.03,0.3,0.12,0.6,0.26,0.89c0.04,0.08,0.08,0.16,0.13,0.24c0.04,0.08,0.09,0.15,0.14,0.22c0.09,0.13,0.19,0.26,0.3,0.38
	c0.11,0.13,0.23,0.25,0.35,0.37c0.13,0.12,0.27,0.24,0.41,0.35c0.15,0.12,0.31,0.23,0.47,0.34c0.11,0.07,0.22,0.14,0.34,0.21
	c0.11,0.07,0.23,0.14,0.35,0.2c0.46,0.25,0.96,0.48,1.5,0.69c0.13,0.05,0.28,0.1,0.42,0.15c0.22,0.09,0.45,0.16,0.69,0.23
	c0.27,0.09,0.54,0.16,0.83,0.23c0.06,0.02,0.13,0.04,0.19,0.05c0.35,0.08,0.71,0.16,1.08,0.23s0.75,0.13,1.13,0.18
	c0.19,0.04,0.39,0.06,0.59,0.07c0.19,0.04,0.39,0.06,0.59,0.07c0.78,0.07,1.58,0.11,2.41,0.11c0.63,0,1.25-0.02,1.85-0.07
	c0.02,0.01,0.04,0,0.06,0c0.29-0.02,0.57-0.05,0.85-0.08c0.59-0.05,1.17-0.13,1.72-0.24c0.27-0.05,0.55-0.1,0.81-0.16
	c0.27-0.05,0.53-0.11,0.78-0.18c0.51-0.13,0.98-0.27,1.44-0.44c0.14-0.05,0.29-0.1,0.42-0.15c0.39-0.15,0.76-0.31,1.1-0.48
	c0.19-0.1,0.38-0.2,0.56-0.3c0.01,0,0.01,0,0.01,0c0.18-0.11,0.35-0.21,0.52-0.32c0.16-0.11,0.32-0.22,0.47-0.34
	c0.14-0.11,0.28-0.23,0.41-0.35c0.12-0.12,0.24-0.24,0.35-0.37c0.11-0.12,0.21-0.25,0.3-0.38c0.05-0.07,0.1-0.14,0.14-0.22
	c0.05-0.08,0.09-0.16,0.13-0.24c0.14-0.29,0.23-0.59,0.26-0.89C34.23,14.37,34.24,14.28,34.24,14.18z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M41.43,22.94c0,0.86-0.43,1.66-1.2,2.38c-0.26,0.24-0.56,0.47-0.88,0.69c-0.44,0.29-0.94,0.56-1.49,0.81
	c-0.14,0.06-0.28,0.12-0.42,0.18c-0.29,0.12-0.6,0.23-0.91,0.34c-0.16,0.05-0.32,0.1-0.48,0.15c-1.11,0.33-2.36,0.59-3.69,0.74
	c-1,0.13-2.04,0.19-3.12,0.19c-0.63,0-1.25-0.02-1.86-0.06c-0.6-0.04-1.2-0.1-1.77-0.18c-0.86-0.12-1.68-0.28-2.44-0.48
	c-0.26-0.06-0.51-0.14-0.75-0.21c-0.16-0.05-0.32-0.1-0.48-0.15c-0.31-0.11-0.62-0.22-0.91-0.34l-0.42-0.18
	c-0.55-0.25-1.05-0.52-1.49-0.81c-0.33-0.22-0.62-0.45-0.88-0.69c-0.2-0.19-0.38-0.38-0.53-0.58c1.35,0.23,2.81,0.36,4.33,0.36
	c1.17,0,2.3-0.07,3.37-0.22c5.1-0.65,8.83-2.76,8.83-5.26v-1.67C38.48,18.8,41.43,20.71,41.43,22.94z"/>
				<g> {/* Signo de pesos */}
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25.05" y1="24.92" x2="24.95" y2="24.97" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M30.07,23.73c0.25,0.35,0,0.57-0.45,0.75c-0.51,0.21-1.35,0.27-2.25,0.06" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M33.52,22.98c-0.09-0.1-0.31-0.42-0.77-0.74" />
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M34.24,14.18c0,0.1-0.01,0.19-0.02,0.28c-0.03,0.3-0.12,0.6-0.26,0.89c-0.04,0.08-0.08,0.16-0.13,0.24
	c-0.04,0.08-0.09,0.15-0.14,0.22c-0.09,0.13-0.19,0.26-0.3,0.38c-0.11,0.13-0.23,0.25-0.35,0.37c-0.13,0.12-0.27,0.24-0.41,0.35
	c-0.15,0.12-0.31,0.23-0.47,0.34c-0.17,0.11-0.34,0.21-0.52,0.32c0,0,0,0-0.01,0c-0.18,0.1-0.37,0.2-0.56,0.3
	c-0.34,0.17-0.71,0.33-1.1,0.48c-0.13,0.05-0.28,0.1-0.42,0.15c-0.46,0.17-0.93,0.31-1.44,0.44c-0.25,0.07-0.51,0.13-0.78,0.18
	c-0.26,0.06-0.54,0.11-0.81,0.16c-0.55,0.11-1.13,0.19-1.72,0.24c-0.28,0.03-0.56,0.06-0.85,0.08c-0.02,0-0.04,0.01-0.06,0
	c-0.6,0.04-1.22,0.06-1.85,0.06c-0.82,0-1.62-0.04-2.4-0.11c-0.2-0.01-0.4-0.03-0.6-0.06c-0.2-0.01-0.4-0.03-0.59-0.07
	c-0.38-0.05-0.76-0.11-1.13-0.18s-0.73-0.15-1.08-0.23c-0.06-0.01-0.13-0.03-0.19-0.05c-0.29-0.07-0.56-0.14-0.83-0.23
	c-0.24-0.07-0.47-0.14-0.69-0.23c-0.14-0.05-0.29-0.1-0.42-0.15c-0.54-0.21-1.04-0.44-1.5-0.69c-0.12-0.06-0.24-0.13-0.35-0.2
	c-0.12-0.07-0.23-0.14-0.34-0.21c-0.16-0.11-0.32-0.22-0.47-0.34c-0.14-0.11-0.28-0.23-0.41-0.35c-0.12-0.12-0.24-0.24-0.35-0.37
	c-0.11-0.12-0.21-0.25-0.3-0.38c-0.05-0.07-0.1-0.14-0.14-0.22c-0.05-0.08-0.09-0.16-0.13-0.24c-0.14-0.29-0.23-0.59-0.26-0.89
	c-0.01-0.09-0.02-0.18-0.02-0.28c0-3.03,5.46-5.48,12.2-5.48C28.78,8.7,34.24,11.15,34.24,14.18z"/>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="26.38" y1="12.33" x2="17.75" y2="16.21" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M26.33,14.22c-0.13-0.15-0.52-0.73-1.54-1.17s-2.38-0.59-3.13-0.26c-0.75,0.34-1,0.61,0.34,1.44
		c1.33,0.84,1.13,1.21,0.43,1.49c-0.69,0.28-1.97,0.29-3.18-0.25c-1.21-0.55-1.5-1.27-1.62-1.42"/>
				</g>
			</>
		),
		//#endregion
		//#region operaciones
		operaciones: () => (
			<>
				<g>
					<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="34.45" cy="35.01" r="2.35" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M39.81,31.75c-0.72-1.42-0.46-2.75-0.37-3.12l-1.81-1.05c-0.25,0.23-1.38,1.19-3.11,1.18
		c-1.75-0.01-2.87-1.03-3.11-1.26l-1.83,1.06c0.08,0.36,0.33,1.71-0.43,3.12c-0.87,1.63-2.44,2.11-2.73,2.2l-0.01,2.14
		c0.3,0.1,1.78,0.6,2.63,2.17c0.79,1.47,0.49,2.87,0.41,3.21l1.83,1.1c0.24-0.22,1.43-1.24,3.23-1.19c1.64,0.05,2.7,0.97,2.97,1.22
		l1.85-1.02c-0.07-0.33-0.35-1.86,0.59-3.38c0.87-1.41,2.2-1.88,2.55-1.99l0.03-2.09C42.19,33.95,40.64,33.41,39.81,31.75z"/>
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.01,42.5H7.5v-7.09c0-4.37,3.54-7.91,7.91-7.91H25" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25,22.5L25,22.5c-4.14,0-7.5-3.36-7.5-7.5v0c0-4.14,3.36-7.5,7.5-7.5h0c4.14,0,7.5,3.36,7.5,7.5v0
	C32.5,19.14,29.14,22.5,25,22.5z"/>
			</>
		),
		//#endregion
		//#region oro
		oro: () => (
			<g>
				<g>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="8.64,37.72 19.13,42.23 17.39,34.24 11.04,31.62 		" />
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="22.85,31.96 17.39,34.24 11.04,31.62 16.67,29.31 		" />
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="36.79,34.42 19.13,42.23 17.39,34.24 22.85,31.96 22.86,31.96 23.7,32.33 35.19,27.25 		" />
				</g>
				<g>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="23.7,32.33 22.86,31.96 22.85,31.96 16.67,29.31 13.21,27.82 14.79,23.8 19.13,25.67 21.98,24.41 
			22.52,26.91 23.56,31.67 		"/>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25.22,22.97 36.79,17.85 36.29,15.6 39.67,16.96 		" />
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="41.36,24.52 35.19,27.25 23.7,32.33 23.56,31.67 22.52,26.91 21.98,24.41 25.22,22.97 39.67,16.96 		
			"/>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25.22,22.97 21.98,24.41 21.96,24.33 		" />
				</g>
				<g>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="19.13,25.67 14.79,23.8 8.64,21.16 11.04,15.05 17.39,17.67 18.05,20.72 18.53,22.92 		" />
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="35.1,10.3 17.39,17.67 11.04,15.05 28.8,7.77 		" />
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25.22,22.97 21.96,24.33 21.98,24.41 19.13,25.67 18.53,22.92 18.05,20.72 17.39,17.67 35.1,10.3 
			36.29,15.6 36.79,17.85 		"/>
					<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25.22,22.97 21.98,24.41 21.96,24.33 		" />
				</g>
			</g>
		),
		//#endregion
		//#region centavo
		centavo: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M28,34.8c0.45-0.05,0.88-0.1,1.32-0.17c-0.22,0.03-0.43,0.07-0.66,0.09C28.44,34.76,28.22,34.78,28,34.8z" />
				<path d="M22.23,34.78c0.12,0.02,0.25,0.03,0.37,0.04C22.48,34.81,22.36,34.8,22.23,34.78L22.23,34.78z" />
				<path d="M22.21,34.78c0.01,0.01,0.01,0.01,0.03,0v0.01C22.23,34.78,22.21,34.78,22.21,34.78z" />
				<path d="M19.89,34.42c-0.08-0.01-0.15-0.03-0.23-0.05v-0.01C19.73,34.39,19.81,34.4,19.89,34.42z" />
				<path d="M18.77,34.16c0.18,0.05,0.37,0.1,0.57,0.14C19.14,34.26,18.95,34.21,18.77,34.16L18.77,34.16z" />
				<path d="M19.66,34.37L19.66,34.37c-0.11-0.02-0.22-0.04-0.33-0.07C19.44,34.32,19.55,34.35,19.66,34.37z" />
				<path d="M18.77,34.16L18.77,34.16c-0.32-0.08-0.64-0.17-0.95-0.27v-0.01C18.12,33.98,18.44,34.07,18.77,34.16z" />
				<path d="M17.35,34.33v0.01c-0.39-0.13-0.76-0.26-1.13-0.41C16.59,34.08,16.96,34.22,17.35,34.33z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M37.21,23.9l-0.06,5.94c0,0.03,0,0.06-0.01,0.09c-0.01,0.13-0.02,0.27-0.05,0.41
	c-0.02,0.07-0.03,0.12-0.05,0.19c-0.02,0.07-0.05,0.12-0.07,0.19c-0.05,0.12-0.11,0.25-0.18,0.37c-0.07,0.12-0.15,0.24-0.24,0.36
	v0.01c-0.1,0.12-0.2,0.24-0.32,0.37c-0.07,0.08-0.15,0.15-0.23,0.22c-0.05,0.05-0.11,0.09-0.16,0.14c-0.03,0.03-0.07,0.06-0.11,0.09
	c-0.12,0.11-0.26,0.2-0.41,0.3c-0.01,0.01-0.02,0.01-0.03,0.01c-0.1,0.07-0.2,0.14-0.3,0.2c-0.12,0.07-0.24,0.14-0.36,0.21
	c-0.32,0.17-0.67,0.34-1.05,0.5c-0.03,0.01-0.05,0.01-0.07,0.03c-0.43,0.18-0.89,0.34-1.36,0.48c-0.16,0.05-0.32,0.1-0.48,0.14
	c-0.16,0.05-0.33,0.09-0.49,0.13c-0.59,0.14-1.21,0.26-1.84,0.36c-0.22,0.03-0.43,0.07-0.66,0.09c-0.22,0.03-0.44,0.05-0.66,0.08
	c-0.27,0.03-0.54,0.05-0.82,0.07h-0.05c-0.37,0.03-0.74,0.05-1.12,0.06c-0.27,0.01-0.53,0.01-0.8,0.01h-0.24
	c-0.05,0-0.11,0-0.16-0.01c-0.26,0-0.53-0.01-0.8-0.02c-0.3-0.01-0.61-0.03-0.91-0.05c-0.17-0.01-0.34-0.03-0.51-0.05
	c-0.12-0.01-0.25-0.02-0.37-0.04c-0.01,0.01-0.02,0.01-0.03,0c-0.09-0.01-0.18-0.02-0.28-0.03c-0.16-0.01-0.32-0.03-0.48-0.06
	c-0.03,0-0.05,0-0.07-0.01c-0.29-0.04-0.57-0.09-0.86-0.14c-0.21-0.03-0.42-0.07-0.63-0.12c-0.08-0.02-0.16-0.03-0.23-0.05
	c-0.11-0.02-0.22-0.05-0.33-0.07c-0.19-0.04-0.38-0.09-0.57-0.14c-0.32-0.09-0.64-0.18-0.95-0.28c-0.37-0.11-0.72-0.24-1.06-0.38
	c-0.03-0.01-0.05-0.02-0.07-0.03v-0.01c-0.07-0.03-0.13-0.05-0.2-0.08c-0.07-0.03-0.14-0.05-0.2-0.09c-2.34-1.03-3.49-2.37-3.47-3.7
	l0.05-5.92c0,1.32,1.16,2.64,3.47,3.68c0.13,0.06,0.26,0.11,0.4,0.17c0.36,0.14,0.74,0.28,1.13,0.41c0.31,0.1,0.63,0.19,0.95,0.28
	c0.29,0.08,0.59,0.14,0.89,0.21c0.07,0.02,0.14,0.03,0.22,0.05c0.16,0.03,0.32,0.07,0.49,0.1c0.05,0.01,0.1,0.02,0.15,0.03
	c0.28,0.05,0.57,0.09,0.86,0.13c0.17,0.03,0.35,0.05,0.53,0.07c0.11,0.01,0.22,0.03,0.33,0.03v0.01c0.18,0.01,0.37,0.03,0.55,0.05
	c0.11,0.01,0.22,0.02,0.32,0.03c0.09,0.01,0.18,0.01,0.28,0.02c0.16,0.01,0.32,0.02,0.48,0.03c0.05,0,0.11,0.01,0.16,0.01
	c0.32,0.01,0.64,0.03,0.95,0.03c0.35,0,0.69,0,1.04-0.01c0.15,0,0.31-0.01,0.46-0.01c0.04,0,0.09-0.01,0.12-0.01
	c0.2-0.01,0.39-0.02,0.59-0.03c0.25-0.02,0.49-0.04,0.74-0.07c0.24-0.03,0.49-0.05,0.73-0.08c0.14-0.02,0.28-0.04,0.41-0.06
	c0.18-0.03,0.36-0.05,0.53-0.09c0.7-0.12,1.39-0.26,2.04-0.45c0.16-0.04,0.32-0.09,0.48-0.14c0.48-0.14,0.93-0.3,1.37-0.48
	c0.02-0.01,0.04-0.01,0.06-0.03c0.18-0.07,0.36-0.15,0.53-0.24c0.18-0.09,0.36-0.17,0.53-0.26c0.14-0.07,0.27-0.15,0.39-0.22
	c0.11-0.07,0.2-0.13,0.3-0.2c0.09-0.06,0.18-0.12,0.26-0.19c0.09-0.06,0.17-0.12,0.25-0.19c0.14-0.12,0.28-0.24,0.4-0.37
	c0.06-0.06,0.11-0.12,0.16-0.18c0.06-0.06,0.11-0.12,0.15-0.18c0.1-0.12,0.18-0.24,0.25-0.36v-0.01c0.03-0.06,0.07-0.12,0.1-0.18
	c0.03-0.05,0.05-0.09,0.07-0.14c0.01-0.01,0.01-0.03,0.02-0.05c0.02-0.05,0.03-0.09,0.05-0.12c0.02-0.06,0.04-0.12,0.06-0.18
	c0.01-0.03,0.01-0.05,0.02-0.07c0-0.01,0-0.01,0-0.01c0.03-0.13,0.05-0.26,0.05-0.4v-0.01C37.2,23.96,37.21,23.93,37.21,23.9z"/>
				<path d="M16.15,33.9L16.15,33.9c-0.07-0.02-0.14-0.05-0.21-0.08C16.01,33.84,16.08,33.87,16.15,33.9z" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M33.73,20.2c-4.7-2.09-12.42-2.18-17.22-0.21c-4.8,1.97-4.87,5.28-0.18,7.37c4.7,2.09,12.42,2.18,17.22,0.21
	C38.35,25.6,38.43,22.29,33.73,20.2z"/>
				<g>
					<g>
						<path d="M19.9,26.43c-0.22,0-0.43-0.04-0.59-0.11c-0.3-0.14-0.34-0.33-0.34-0.43c0-0.1,0.05-0.3,0.35-0.42l1.16-0.48
			c-0.26-0.22-0.51-0.51-0.58-0.87c-0.06-0.33,0.01-0.84,0.69-1.35c0.37-0.28,0.81-0.49,1.07-0.59l0.09-0.04
			c0.31-0.11,0.77-0.27,1.43-0.4c0.73-0.15,1.48-0.23,2.22-0.23c0.29,0,0.59,0.01,0.91,0.04c0.6,0.05,1.19,0.15,1.79,0.32l1.49-0.61
			c0.15-0.06,0.35-0.1,0.55-0.1c0.21,0,0.42,0.04,0.58,0.11c0.3,0.13,0.33,0.34,0.33,0.43c0,0.11-0.05,0.3-0.35,0.43l-1,0.41
			c0.33,0.2,0.61,0.43,0.81,0.68c0.09,0.12,0.12,0.26,0.07,0.39c-0.08,0.19-0.31,0.33-0.63,0.38c-0.08,0.01-0.15,0.01-0.23,0.01
			c-0.23,0-0.44-0.04-0.59-0.12c-0.07-0.03-0.17-0.08-0.24-0.17c-0.19-0.24-0.49-0.45-0.9-0.63c-0.08-0.04-0.18-0.08-0.28-0.11
			c-0.51-0.19-1.07-0.31-1.67-0.37c-0.2-0.02-0.4-0.02-0.59-0.02c-0.52,0-1.05,0.05-1.59,0.16C23.24,22.84,22.86,23,22.86,23
			c-0.22,0.09-0.54,0.24-0.8,0.43c-0.18,0.13-0.38,0.33-0.33,0.54c0.05,0.31,0.56,0.59,0.77,0.71c0.08,0.05,0.16,0.08,0.24,0.12
			c0.72,0.31,1.5,0.44,1.72,0.47c0.1,0.01,0.21,0.04,0.32,0.09c0.22,0.09,0.3,0.23,0.33,0.33c0.03,0.12,0.01,0.24-0.07,0.34
			c-0.23,0.27-0.69,0.29-0.83,0.29c-0.08,0-0.17-0.01-0.25-0.02c-0.39-0.06-1.27-0.21-2.12-0.55l-1.4,0.58
			C20.26,26.41,20.05,26.43,19.9,26.43z"/>
						<path d="M30.16,21.38c0.17,0,0.34,0.03,0.48,0.09c0.25,0.11,0.25,0.29-0.01,0.4l-1.49,0.61c0.74,0.34,1.07,0.7,1.21,0.87
			c0.12,0.15-0.07,0.31-0.41,0.36c-0.06,0.01-0.13,0.01-0.19,0.01c-0.19,0-0.36-0.03-0.49-0.09c-0.07-0.03-0.12-0.06-0.15-0.1
			c-0.12-0.15-0.39-0.44-1-0.71c-0.09-0.04-0.19-0.08-0.3-0.12c-0.27-0.1-0.86-0.3-1.73-0.38c-0.21-0.02-0.41-0.02-0.61-0.02
			c-0.62,0-1.18,0.07-1.64,0.16c-0.6,0.13-1,0.28-1.07,0.31L22.7,22.8c-0.17,0.06-0.51,0.22-0.79,0.43
			c-0.28,0.21-0.49,0.48-0.43,0.79c0.07,0.42,0.61,0.72,0.9,0.88c0.09,0.05,0.17,0.09,0.26,0.13c0.69,0.3,1.43,0.44,1.79,0.49
			c0.1,0.01,0.19,0.04,0.26,0.07c0.17,0.07,0.24,0.18,0.16,0.29c-0.1,0.11-0.35,0.18-0.63,0.18c-0.07,0-0.14,0-0.21-0.01
			c-0.43-0.07-1.32-0.22-2.16-0.57l-1.5,0.62c-0.12,0.05-0.28,0.08-0.45,0.08c-0.18,0-0.35-0.03-0.48-0.09
			c-0.26-0.12-0.25-0.29,0.01-0.4L21,25.04c-0.34-0.22-0.76-0.55-0.84-0.98c-0.08-0.45,0.23-0.83,0.6-1.11
			c0.37-0.28,0.8-0.48,1.01-0.56l0.08-0.04c0.13-0.04,0.62-0.24,1.4-0.39c0.57-0.12,1.32-0.23,2.18-0.23c0.28,0,0.58,0.01,0.88,0.04
			c0.79,0.06,1.41,0.21,1.83,0.33l1.57-0.64C29.84,21.41,30,21.38,30.16,21.38 M30.16,20.88L30.16,20.88
			c-0.17,0-0.41,0.02-0.65,0.12l-1.41,0.57c-0.59-0.16-1.17-0.26-1.76-0.3c-0.3-0.03-0.61-0.04-0.92-0.04
			c-0.76,0-1.52,0.08-2.28,0.24c-0.67,0.13-1.14,0.29-1.36,0.37l-0.08,0.03l-0.04,0.01l-0.04,0.02l-0.06,0.03
			c-0.15,0.06-0.64,0.27-1.11,0.62c-0.78,0.59-0.86,1.19-0.79,1.6c0.05,0.29,0.21,0.54,0.38,0.75l-0.81,0.34
			c-0.45,0.19-0.51,0.52-0.51,0.65c0,0.13,0.04,0.46,0.48,0.66c0.2,0.09,0.44,0.13,0.69,0.13c0.17,0,0.41-0.02,0.64-0.12l1.31-0.54
			c0.85,0.32,1.7,0.46,2.08,0.52c0.1,0.02,0.2,0.02,0.29,0.02c0.21,0,0.73-0.04,1.01-0.36c0.14-0.2,0.18-0.4,0.13-0.59
			c-0.04-0.12-0.14-0.35-0.48-0.49c-0.13-0.06-0.27-0.09-0.4-0.11c-0.19-0.03-0.94-0.15-1.64-0.45c-0.07-0.03-0.14-0.07-0.22-0.11
			c-0.51-0.28-0.64-0.44-0.65-0.52c-0.01-0.06,0.06-0.17,0.24-0.31c0.23-0.17,0.53-0.31,0.66-0.36l0.03-0.01l0.03-0.01l0.06-0.03
			c0,0,0,0,0,0c0,0,0.36-0.14,0.95-0.27c0.51-0.1,1.03-0.15,1.53-0.15c0.18,0,0.38,0.01,0.57,0.02c0.57,0.05,1.11,0.17,1.6,0.35
			c0.1,0.04,0.19,0.07,0.27,0.11c0.37,0.16,0.64,0.35,0.81,0.57c0.1,0.13,0.24,0.2,0.34,0.25c0.23,0.11,0.5,0.13,0.69,0.13
			c0.08,0,0.17,0,0.25-0.01c0.44-0.06,0.73-0.25,0.84-0.53c0.08-0.21,0.05-0.45-0.1-0.63c-0.14-0.17-0.3-0.33-0.49-0.47l0.57-0.23
			c0.46-0.19,0.51-0.53,0.51-0.66c0-0.28-0.18-0.53-0.48-0.66C30.6,20.9,30.34,20.88,30.16,20.88L30.16,20.88z"/>
					</g>
				</g>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M26.66,28.96c0.45-0.03,0.89-0.06,1.33-0.1c-0.25,0.03-0.49,0.05-0.74,0.07
	C27.06,28.94,26.86,28.96,26.66,28.96z"/>
				<path d="M35.98,32.05c-0.05,0.05-0.11,0.1-0.16,0.14v-0.01C35.88,32.14,35.93,32.09,35.98,32.05z" />
				<path d="M35.82,32.19L35.82,32.19c-0.03,0.03-0.07,0.06-0.11,0.09C35.75,32.24,35.79,32.21,35.82,32.19z" />
				<path d="M22.85,28.89c-0.18-0.01-0.37-0.03-0.55-0.05v-0.01C22.48,28.86,22.66,28.88,22.85,28.89z" />
			</>
		),
		//#endregion
		//#region pautadoInteligente
		pautadoInteligente: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M35,13.98v14.38l-9.05,9.05c-.3.3-.49.69-.56,1.1l-.23,1.49h-15.66c-1.1,0-2-.9-2-2V9.5c0-1.1.9-2,2-2h17.79c.45,0,.88.15,1.23.43l5.71,4.48c.49.38.77.96.77,1.57Z" />
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M43.43,30.54l-10.97,10.96-1.5-1.5-3.8-3.8,10.96-10.96c.78-.78,2.05-.78,2.83,0l2.48,2.48c.78.78.78,2.04,0,2.82Z" />
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.46,41.5l-1.21,1.21c-.29.3-.68.5-1.1.56l-4.3.68c-.66.1-1.23-.47-1.13-1.13l.44-2.82.23-1.49c.07-.41.26-.8.56-1.1l1.21-1.21,3.8,3.8,1.5,1.5Z" />
				</g>
				<g>
					<g>
						<rect fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x="15.78" y="17.02" width="10.95" height="10.95" rx="2.01" ry="2.01" />
						<g>
							<path fill={props?.fill ?? "var(--detailFont)"} d="M17.46,24.68l2.05-4.64h1.29l2.06,4.64h-1.37l-1.61-4h.52l-1.61,4h-1.34ZM18.58,23.77l.34-.97h2.27l.34.97h-2.95Z" />
							<path fill={props?.fill ?? "var(--detailFont)"} d="M23.23,24.68v-4.64h1.31v4.64h-1.31Z" />
						</g>
					</g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="23.65" y1="13.74" x2="23.65" y2="17.02" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="18.85" y1="13.74" x2="18.85" y2="17.02" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="23.65" y1="27.98" x2="23.65" y2="31.26" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="18.85" y1="27.98" x2="18.85" y2="31.26" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="26.73" y1="20.1" x2="30.02" y2="20.1" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="26.73" y1="24.9" x2="30.02" y2="24.9" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.49" y1="20.1" x2="15.78" y2="20.1" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.49" y1="24.9" x2="15.78" y2="24.9" />
				</g>
			</>
		),
		//#endregion
		//#region pautadoTradicional
		pautadoTradicional: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M35,13.98v14.38l-7.84,7.84l-1.21,1.21c-0.3,0.3-0.49,0.69-0.56,1.1L25.16,40H9.5c-1.1,0-2-0.9-2-2V9.5
	c0-1.1,0.9-2,2-2h17.79c0.45,0,0.88,0.15,1.23,0.43l5.71,4.48C34.72,12.79,35,13.37,35,13.98z"/>
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="28.98" y1="16.03" x2="21.28" y2="16.03" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="28.98" y1="23.78" x2="21.28" y2="23.78" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="25" y1="31.53" x2="21.28" y2="31.53" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15.3" y1="16.03" x2="13.52" y2="16.03" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15.3" y1="23.78" x2="13.52" y2="23.78" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15.3" y1="31.53" x2="13.52" y2="31.53" />
				</g>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M43.43,30.54L32.46,41.5l-5.3-5.3L35,28.36l3.12-3.12c0.78-0.78,2.05-0.78,2.83,0l2.48,2.48
		C44.21,28.5,44.21,29.76,43.43,30.54z"/>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.46,41.5l-1.21,1.21c-0.29,0.3-0.68,0.5-1.1,0.56l-4.3,0.68c-0.66,0.1-1.23-0.47-1.13-1.13L25.16,40
		l0.23-1.49c0.07-0.41,0.26-0.8,0.56-1.1l1.21-1.21L32.46,41.5z"/>
				</g>
			</>
		),
		//#endregion
		//#region pautas
		pautas: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.5,12.05V30.2c0,0.73-0.59,1.32-1.31,1.32h-7.2V17.05c0-0.34-0.13-0.67-0.37-0.92l-3.22-3.26
	c-0.25-0.25-0.58-0.39-0.94-0.39h-5.95V8.79c0-0.73,0.58-1.31,1.31-1.31h13.15c0.35,0,0.69,0.14,0.94,0.39l3.21,3.26
	C42.36,11.38,42.5,11.71,42.5,12.05z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M33.99,17.05V35.2c0,0.73-0.58,1.32-1.31,1.32h-6.19V23.04c0-0.35-0.13-0.68-0.37-0.92l-2.61-2.65l-0.61-0.62
	c-0.25-0.25-0.58-0.39-0.94-0.39H15v-4.67c0-0.73,0.59-1.31,1.31-1.31h13.15c0.36,0,0.69,0.14,0.94,0.39l3.22,3.26
	C33.86,16.38,33.99,16.71,33.99,17.05z"/>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M26.49,23.04v18.15c0,0.72-0.58,1.31-1.31,1.31H8.81c-0.72,0-1.31-0.59-1.31-1.31V19.77
		c0-0.72,0.59-1.31,1.31-1.31h13.15c0.36,0,0.69,0.14,0.94,0.39l0.61,0.62l2.61,2.65C26.36,22.36,26.49,22.69,26.49,23.04z"/>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.64" y1="24.8" x2="17.2" y2="24.8" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.64" y1="30.48" x2="17.2" y2="30.48" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.64" y1="36.16" x2="17.2" y2="36.16" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.98" y1="24.8" x2="11.72" y2="24.8" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.98" y1="30.48" x2="11.72" y2="30.48" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="12.98" y1="36.03" x2="11.72" y2="36.03" />
				</g>
			</>
		),
		//#endregion
		//#region planning
		planning: () => (
			<>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.54" y1="10.02" x2="42.5" y2="10.02" />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="23,34.98 10.01,34.98 10.01,10.02 40.01,10.02 40.01,20 " />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="15.04" y1="42.52" x2="23" y2="35" />
				<circle fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} cx="18.51" cy="27.52" r="2.51" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31,15.09c0.02,1.67,0.03,3.33,0.05,5c0.03,0.49,0.11,3.03-1.81,5.14c-2.23,2.45-5.31,2.3-5.71,2.28
	c-0.84,0-1.68,0-2.52,0.01"/>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="28.53,17.49 31.02,15 33.5,17.49 " />
				<g>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="19.33" y1="15.73" x2="22.87" y2="19.27" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="22.84" y1="15.73" x2="19.31" y2="19.26" />
				</g>
				<g>
					<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31.72,42l-3.35,0.52c-0.52,0.08-0.96-0.36-0.88-0.88l0.52-3.35c0.05-0.32,0.2-0.62,0.44-0.86l9.47-9.47
		c0.61-0.61,1.59-0.61,2.19,0l1.93,1.93c0.61,0.61,0.61,1.59,0,2.19l-9.47,9.47C32.34,41.8,32.04,41.95,31.72,42z"/>
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="29.39" y1="36.5" x2="33.52" y2="40.62" />
					<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="36.25" y1="29.64" x2="40.37" y2="33.77" />
				</g>
			</>
		),
		//#endregion
		//#region preferencias proveedores
		preferenciasProveedores: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.01,42.5H7.5v-4.59c0-4.37,3.54-7.91,7.91-7.91H25" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.5,17.44c0,2.07-0.84,3.94-2.2,5.3c-1.36,1.36-3.23,2.2-5.3,2.2c-4.14,0-7.5-3.36-7.5-7.5
	c0-0.81,0.13-1.59,0.38-2.32c2.6,0.3,5,0.41,7.12,0.41c2.6,0,4.99-0.16,7.12-0.41C32.37,15.85,32.5,16.63,32.5,17.44z"/>
				<polygon fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="35,27.5 36.69,32.69 42.15,32.69 37.73,35.9 39.42,41.1 35,37.89 30.58,41.1 32.27,35.9 27.85,32.69 
	33.31,32.69 "/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.5,17.44c0,2.07-0.84,3.94-2.2,5.3c-1.36,1.36-3.23,2.2-5.3,2.2c-4.14,0-7.5-3.36-7.5-7.5
	c0-0.81,0.13-1.59,0.38-2.32c2.6,0.3,5,0.41,7.12,0.41c2.6,0,4.99-0.16,7.12-0.41C32.37,15.85,32.5,16.63,32.5,17.44z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.5,17.44c0,2.07-0.84,3.94-2.2,5.3c-1.36,1.36-3.23,2.2-5.3,2.2c-4.14,0-7.5-3.36-7.5-7.5
	c0-0.81,0.13-1.59,0.38-2.32c2.6,0.3,5,0.41,7.12,0.41c2.6,0,4.99-0.16,7.12-0.41C32.37,15.85,32.5,16.63,32.5,17.44z"/>
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="25.01,42.5 16.01,42.5 16.01,30 20,30 20,37.5 25.01,37.5 " />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M33.5,13.44v1.5c-0.45,0.06-0.91,0.12-1.38,0.18c-2.13,0.25-4.52,0.41-7.12,0.41c-2.12,0-4.52-0.11-7.12-0.41
	c-0.45-0.06-0.91-0.11-1.38-0.18v-1.5h0.57c0.81-2.83,3.1-5.03,5.93-5.75V6.74h4v0.95c2.83,0.72,5.12,2.92,5.93,5.75H33.5z"/>
			</>
		),
		//#endregion
		//#region preferencias ubicacion
		preferenciasUbicacion: () => (
			<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M25.01,6.03c-14.08,0-20.15,16.43-11.85,25.77l4.28,4.29l7.57,7.61l7.61-7.61l3.95-3.95
	C45.26,22.84,39.23,6.03,25.01,6.03z M25.8,14.15l1.2,3.69c0.11,0.35,0.44,0.59,0.81,0.59h3.88c0.83,0,1.17,1.06,0.5,1.54
	l-3.14,2.28c-0.3,0.22-0.42,0.6-0.31,0.95l1.2,3.69c0.26,0.78-0.64,1.44-1.31,0.95l-3.14-2.28c-0.3-0.22-0.7-0.22-1,0l-3.14,2.28
	c-0.67,0.49-1.57-0.17-1.31-0.95l1.2-3.69c0.11-0.35-0.01-0.74-0.31-0.95l-3.14-2.28c-0.67-0.49-0.32-1.54,0.5-1.54h3.88
	c0.37,0,0.7-0.24,0.81-0.59l1.2-3.69C24.44,13.36,25.55,13.36,25.8,14.15z"/>
		),
		//#endregion
		//#region regresar a vista de cards
		regresarVistaCards: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31.69,7.5c0,0.83,0,1.67,0,2.5c3.65-0.72,7.35,0.77,9.34,3.75c2.69,4.02,0.76,8.48,0.64,8.75
	c0.04-0.3,0.45-4.07-2.5-6.65c-2.04-1.78-4.9-2.23-7.48-1.32c0,0.86,0,1.63,0,2.49c0,0,0,0.01-0.01,0l-8.24-4.77c0,0,0-0.01,0-0.01
	C26.18,10.67,28.93,9.08,31.69,7.5z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M27.5,21.99v2.53H16.99c-1.1,0-1.99,0.9-1.99,2v5.98H9.49c-1.1,0-1.99-0.89-1.99-1.99v-8.52
	c0-1.1,0.89-1.99,1.99-1.99H25.5C26.61,20,27.5,20.89,27.5,21.99z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M35,26.52V30H24.49c-1.1,0-1.99,0.89-1.99,1.99v5.03h-5.51c-1.1,0-1.99-0.89-1.99-1.99v-8.51
	c0-1.1,0.89-2,1.99-2H33C34.11,24.52,35,25.42,35,26.52z"/>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M42.5,31.99v8.52c0,1.1-0.89,1.99-1.99,1.99H24.49c-1.1,0-1.99-0.89-1.99-1.99v-8.52c0-1.1,0.89-1.99,1.99-1.99
	h16.02C41.61,30,42.5,30.89,42.5,31.99z"/>
			</>
		),
		//#endregion
		//#region tareas
		tareas: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M32.87,7.5H9.56c-1.1,0-1.99,0.89-1.99,1.99v23.32c0,1.09,0.89,1.99,1.99,1.99h19l6.3-6.3V9.49
	C34.86,8.39,33.97,7.5,32.87,7.5z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="7.57" y1="12.79" x2="34.38" y2="12.79" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="29.54" y1="19.45" x2="20" y2="19.45" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="29.54" y1="26.12" x2="20" y2="26.12" />
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M43.43,30.54L31.25,42.71c-0.29,0.3-0.68,0.5-1.1,0.56l-4.3,0.68c-0.66,0.1-1.23-0.47-1.13-1.13l0.67-4.31
	c0.07-0.41,0.26-0.8,0.56-1.1l12.17-12.17c0.78-0.78,2.05-0.78,2.83,0l2.48,2.48C44.21,28.5,44.21,29.76,43.43,30.54z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="27.16" y1="36.2" x2="32.46" y2="41.5" />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="12.01,19.72 13.14,20.84 15.93,18.06 " />
				<polyline fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} points="12.01,26.39 13.14,27.51 15.93,24.73 " />
			</>
		),
		//#endregion
		//#region list
		list: () => (
			<>
				<path fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} d="M31.69,7.5c0,0.83,0,1.67,0,2.5c3.65-0.72,7.35,0.77,9.34,3.75c2.69,4.02,0.76,8.48,0.64,8.75
	c0.04-0.3,0.45-4.07-2.5-6.65c-2.04-1.78-4.9-2.23-7.48-1.32c0,0.86,0,1.63,0,2.49c0,0,0,0.01-0.01,0l-8.24-4.77c0,0,0-0.01,0-0.01
	C26.18,10.67,28.93,9.08,31.69,7.5z"/>
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.17" y1="20.5" x2="17.57" y2="20.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="31.17" y1="24.5" x2="17.57" y2="24.5" />
				<rect x="7.5" y="20" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="5" height="5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="36.83" y1="29" x2="23.22" y2="29" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="36.83" y1="33" x2="23.22" y2="33" />
				<rect x="12.53" y="28.5" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="5" height="5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="42.45" y1="37.5" x2="28.84" y2="37.5" />
				<line fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} x1="42.45" y1="41.5" x2="28.84" y2="41.5" />
				<rect x="17.52" y="37" fill='none' strokeWidth={props?.strokeWidth ?? 2} stroke={props?.fill ?? "var(--detailFont)"} width="5" height="5" />
			</>
		),
		//#endregion
	};
	if (dataToView[icon]) return dataToView[icon]();
	else return;
};
const GetIcons = ({ children, icon, ...props }: getIconsInterface) => {
	return (
		<div style={{ width: props.size ?? 50, height: props.size ?? 50 }} title={props.title}>
			<svg viewBox="0 0 50 50" width={props.size ?? 50} height={props.size ?? 50} {...props}>
				{icon ? getIcons({ icon, fill: props?.fill, strokeWidth: props?.strokeWidth }) : children}
			</svg>
		</div>
	);
};

export default GetIcons;
