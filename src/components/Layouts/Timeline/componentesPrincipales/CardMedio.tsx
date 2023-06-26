import React, { useEffect, useState } from 'react';
import { SimpleContainer, Texts, Title } from '../../../Atoms';
import CircularProgressBar from '../../../circularProgressBar';
import { SitiosIcon } from '../../../../img/sitios';

const CardMedios = ({
	selectedElement,
	modo,
	onClick,
	idValue,
	title,
	percentTask,
	statusTask,
	Icon,
}: any) => {
	const [idSelected, setIdSelected] = useState(idValue);

	useEffect(() => {
		setIdSelected(idValue);
	}, [idValue]);
	return (
		<SimpleContainer
			className={`timelineProject__contenido-medios-titles ${
				selectedElement ? 'selected' : ''
			}`}
			style={{ cursor: 'pointer', marginBottom: '10px' }}
			labels={{
				id: idSelected,
			}}
			onClick={onClick}
		>
			<SimpleContainer className="timelineProject__contenido-medios-titles-percent">
				<Title
					modo={modo}
					className="timelineProject__contenido-medios-titles-percent-text"
				>
					{`${percentTask ?? 0}%`}
				</Title>
				<CircularProgressBar
					percentTask={percentTask ?? 0}
					statusTask={statusTask === 'outOfTime' || statusTask === 3 ? 1 : statusTask}
					strokeColor={
						statusTask === 'outOfTime' || statusTask === 3 ? '#FC3D38' : undefined
					}
					size={50}
				/>
			</SimpleContainer>
			<Icon />
			{/* <img src={icon} alt="" className="timelineProject__contenido-medios-titles-icon" /> */}
			{/* <SitiosIcon
				fill={modo === 'Dark' ? '#fff' : '#343232'}
				className="timelineProject__contenido-medios-titles-icon"
			/> */}
			<Title modo={modo} className="timelineProject__contenido-medios-titles-title">
				{title}
			</Title>
		</SimpleContainer>
	);
};
export default CardMedios;
