import React from 'react';
import { SimpleContainer } from '../components/Atoms';
export const DificultadIcon = ({ dificultad }: any) => {
	return (
		<SimpleContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				fill={
					dificultad.id === '1'
						? '#038f39'
						: dificultad.id === '2'
						? '#7ea03b'
						: dificultad.id === '3'
						? '#f8b03d'
						: dificultad.id === '4'
						? '#e97237'
						: dificultad.id === '5'
						? '#da3430'
						: '##54514f'
				}
				style={{ height: '30px' }}
			>
				<path d="M384 319.1C384 425.9 297.9 512 192 512s-192-86.13-192-192c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5v85.5c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2c13.5-19.72 44.15-10.77 44.15 13.03C215.1 127 384 149.7 384 319.1z" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				fill={
					dificultad.id === '1'
						? '#038f39'
						: dificultad.id === '2'
						? '#7ea03b'
						: dificultad.id === '3'
						? '#f8b03d'
						: dificultad.id === '4'
						? '#e97237'
						: dificultad.id === '5'
						? '#da3430'
						: '##54514f'
				}
				style={{
					height: '30px',
					position: 'absolute',
					left: '3px',
					opacity: 0.3,
					zIndex: -1,
				}}
			>
				<path d="M384 319.1C384 425.9 297.9 512 192 512s-192-86.13-192-192c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5v85.5c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2c13.5-19.72 44.15-10.77 44.15 13.03C215.1 127 384 149.7 384 319.1z" />
			</svg>
		</SimpleContainer>
	);
};
