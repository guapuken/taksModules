import React from 'react';
import Buttons from '../buttons';
import IconDropdown from '../iconDropdown';
import InputTask from '../inputTask';
import Modal from './modal';

describe('Modal', () => {
	test('render the Modal component', () => {
		expect(
			<Modal
				Content={() => (
					<div style={{ position: 'relative', height: '100%', width: '760px' }}>
						<InputTask />
						<div
							style={{
								marginLeft: '20px',
								marginTop: '10px',
								borderLeft: '2px solid #000',
								paddingLeft: '10px',
							}}
						>
							<InputTask isSubtask checked />
							<InputTask isSubtask checked />
							<InputTask isSubtask />
							<InputTask isSubtask />
							<InputTask isSubtask />
						</div>
						<div style={{ marginTop: '10px' }}>
							<InputTask />
							<div
								style={{
									marginLeft: '20px',
									marginTop: '10px',
									borderLeft: '2px solid #000',
									paddingLeft: '10px',
								}}
							>
								<InputTask isSubtask />
								<InputTask isSubtask />
								<InputTask isSubtask />
								<InputTask isSubtask />
								<InputTask isSubtask />
							</div>
						</div>
						<Buttons
							styleComposition={{
								marginTop: '20px',
								width: 'inherit',
								paddingBottom: '20px',
							}}
							buttons={{ primary: true, secondary: true }}
							legends={{
								primary: 'Finalizar creación de tarea',
								secondary: 'Cancelar creación de tarea',
							}}
							composition="vertical"
						/>
					</div>
				)}
			/>
		);
	});
});
