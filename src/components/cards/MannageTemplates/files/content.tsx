import React from 'react';
import { content } from '../types/types';
import { SimpleContainer, TextBoldLight, Title } from '../../../Atoms';

const Content = (props: content) => {
	const { modo = 'Light', templateName = 'Nombre de plantilla', totalTasks = 0 } = props;
	return (
		<SimpleContainer
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
				padding: '15px',
			}}
		>
			<Title modo={modo} maxLines={2}>
				{templateName}
			</Title>
			<TextBoldLight modo={modo} legend={` tareas registradas`} boldLegend={totalTasks} />
		</SimpleContainer>
	);
};
export default Content;
