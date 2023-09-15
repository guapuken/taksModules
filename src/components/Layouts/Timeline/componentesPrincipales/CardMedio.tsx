import React, { useEffect, useState } from 'react';
import { SimpleContainer, Title } from '../../../Atoms';
import CircularProgressBar from '../../../circularProgressBar';

const CardMedios = ({
	selectedElement,
	modo,
	onClick,
	idValue,
	title,
	percentTask,
	statusTask,
	Icon,
	IconDark,
}: any) => {
	const [idSelected, setIdSelected] = useState(idValue);
	const [Hover, setIsOver] = useState(false);

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
				onMouseEnter: () => setIsOver(true),
				onMouseLeave: () => setIsOver(false),
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
			{Hover ? IconDark && <IconDark /> : Icon && <Icon />}
			<Title modo={modo} className="timelineProject__contenido-medios-titles-title">
				{title}
			</Title>
		</SimpleContainer>
	);
};
export default CardMedios;
