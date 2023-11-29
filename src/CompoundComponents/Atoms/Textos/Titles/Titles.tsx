import React from 'react';

interface titles {
	tipo: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	children: any;
	[key: string]: any;
}
const Titles = ({ tipo, children, ...props }: titles) => {
	const tipos = {
		h1: () => (
			<h1
				{...props}
				style={{
					// start showing ellipsis when 3rd line is reached
					WebkitLineClamp: props.maxLines,
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					...props.style,
				}}
			>
				{children}
			</h1>
		),
		h2: () => (
			<h2
				{...props}
				style={{
					// start showing ellipsis when 3rd line is reached
					WebkitLineClamp: props.maxLines,
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					...props.style,
				}}
			>
				{children}
			</h2>
		),
		h3: () => (
			<h3
				{...props}
				style={{
					// start showing ellipsis when 3rd line is reached
					WebkitLineClamp: props.maxLines,
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					...props.style,
				}}
			>
				{children}
			</h3>
		),
		h4: () => (
			<h4
				{...props}
				style={{
					// start showing ellipsis when 3rd line is reached
					WebkitLineClamp: props.maxLines,
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					...props.style,
				}}
			>
				{children}
			</h4>
		),
		h5: () => (
			<h5
				{...props}
				style={{
					// start showing ellipsis when 3rd line is reached
					WebkitLineClamp: props.maxLines,
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					...props.style,
				}}
			>
				{children}
			</h5>
		),
	};
	const getTipoTitulo = () => {
		if (tipos[tipo]) return tipos[tipo]();
		else return <></>;
	};
	return getTipoTitulo();
};

export default Titles;
