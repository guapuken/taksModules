import React from 'react';
import { SimpleContainer, Texts } from '../../../Atoms';
import CircularProgressBar from '../../../circularProgressBar';

const Medio = ({ projectName, percentTask, statusTask, modo, onCl_medio }) => (
	<SimpleContainer className="CtnMedio_TimelineProject" onClick={onCl_medio}>
		<SimpleContainer style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
			<CircularProgressBar percentTask={percentTask} statusTask={statusTask} />
			<Texts modo={modo}>{`${percentTask}%`}</Texts>
		</SimpleContainer>
		<Texts modo={modo}>{projectName}</Texts>
	</SimpleContainer>
);

export default Medio;
