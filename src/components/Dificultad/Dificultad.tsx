import React, { useEffect, useState } from 'react';
import './Styles/Dificultad.scss';
import { SimpleContainer } from '../Atoms';

const InputStar = ({ value, color, onChange, checked, id }: any) => {
	return (
		<input
			id={`rating-${value}${id}`}
			className={`rating__input rating__input-${value}`}
			type="radio"
			name="rating"
			value={value}
			attr-hover={color}
			checked={checked}
			onChange={onChange}
		/>
	);
};
const LabelStar = ({ value, color, id }: any) => {
	return (
		<label className="rating__label" htmlFor={`rating-${value}${id}`}>
			<svg
				className="rating__star"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				aria-hidden="true"
			>
				<g transform="translate(16,16)">
					<circle
						className="rating__star-ring"
						fill="none"
						stroke={color}
						stroke-width="16"
						r="8"
						transform="scale(0)"
					/>
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon
							className="rating__star-stroke"
							points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
							fill="none"
						/>
						<polygon
							className="rating__star-fill"
							points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07"
							fill={color}
						/>
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline
							className="rating__star-line"
							transform="rotate(0)"
							points="0 4,0 16"
							stroke={color}
						/>
						<polyline
							className="rating__star-line"
							transform="rotate(72)"
							points="0 4,0 16"
							stroke={color}
						/>
						<polyline
							className="rating__star-line"
							transform="rotate(144)"
							points="0 4,0 16"
							stroke={color}
						/>
						<polyline
							className="rating__star-line"
							transform="rotate(216)"
							points="0 4,0 16"
							stroke={color}
						/>
						<polyline
							className="rating__star-line"
							transform="rotate(288)"
							points="0 4,0 16"
							stroke={color}
						/>
					</g>
				</g>
			</svg>

			<span className="rating__sr">1 star—Terrible</span>
		</label>
	);
};
const Dificultad = ({ onChange, initialValue, modo, id }: any) => {
	console.log('dificultad comentario:', id, initialValue);
	const [valueStar, setValueStar] = useState(initialValue);
	useEffect(() => {
		setValueStar(initialValue);
	}, [initialValue]);
	const colorStar =
		valueStar === 5
			? 'red'
			: valueStar === 4
			? 'orange'
			: valueStar === 3
			? 'yellow'
			: valueStar === 2
			? 'greenyellow'
			: 'green';

	const handleChange = (e: any) => {
		if (onChange) onChange(e);
		setValueStar(e.target.value);
	};
	return (
		<SimpleContainer className={`Dificultad_C ${modo}`}>
			<div className="rating">
				<div className="rating__stars">
					<InputStar
						checked={valueStar === 1}
						onChange={handleChange}
						color={colorStar}
						value={1}
						id={id}
					/>
					<InputStar
						checked={valueStar === 2}
						onChange={handleChange}
						color={colorStar}
						value={2}
						id={id}
					/>
					<InputStar
						checked={valueStar === 3}
						onChange={handleChange}
						color={colorStar}
						value={3}
						id={id}
					/>
					<InputStar
						checked={valueStar === 4}
						onChange={handleChange}
						color={colorStar}
						value={4}
						id={id}
					/>
					<InputStar
						checked={valueStar === 5}
						onChange={handleChange}
						color={colorStar}
						value={5}
						id={id}
					/>
					<LabelStar id={id} color={colorStar} value={1} />
					<LabelStar id={id} color={colorStar} value={2} />
					<LabelStar id={id} color={colorStar} value={3} />
					<LabelStar id={id} color={colorStar} value={4} />
					<LabelStar id={id} color={colorStar} value={5} />
					<p className="rating__display" data-rating="1" hidden>
						Muy fácil
					</p>
					<p className="rating__display" data-rating="2" hidden>
						Fácil
					</p>
					<p className="rating__display" data-rating="3" hidden>
						Normal
					</p>
					<p className="rating__display" data-rating="4" hidden>
						Dificil
					</p>
					<p className="rating__display" data-rating="5" hidden>
						Muy dificil
					</p>
				</div>
			</div>
		</SimpleContainer>
	);
};

export default Dificultad;
