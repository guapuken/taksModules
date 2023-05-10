import React from 'react';
import Buttons from '../buttons';
import IconDropdown from '../iconDropdown';
import InputTask from '../inputTask';
import Modal from './modal';

describe('Modal', () => {
	test('render the Modal component', () => {
		expect(
			<Modal
				modo="Light"
				Content={() => (
					<div style={{ position: 'relative', height: '100%', width: '760px' }}>
						<InputTask
							check
							modo="Light"
							onCh_checkbox={() => {}}
							onCh_descriptionTask={() => {}}
							onCh_nameTask={() => {}}
							valueDescription=""
							valueTask=""
							idCheckbox="1"
							id="1"
						/>
						<div
							style={{
								marginLeft: '20px',
								marginTop: '10px',
								borderLeft: '2px solid #000',
								paddingLeft: '10px',
							}}
						>
							<InputTask
								check
								modo="Light"
								onCh_checkbox={() => {}}
								onCh_descriptionTask={() => {}}
								onCh_nameTask={() => {}}
								valueDescription=""
								valueTask=""
								idCheckbox="1"
								id="1"
								isSubtask
							/>
							<InputTask
								check
								modo="Light"
								onCh_checkbox={() => {}}
								onCh_descriptionTask={() => {}}
								onCh_nameTask={() => {}}
								valueDescription=""
								valueTask=""
								idCheckbox="1"
								id="1"
								isSubtask
							/>
							<InputTask
								check
								modo="Light"
								onCh_checkbox={() => {}}
								onCh_descriptionTask={() => {}}
								onCh_nameTask={() => {}}
								valueDescription=""
								valueTask=""
								idCheckbox="1"
								id="1"
								isSubtask
							/>
							<InputTask
								check
								modo="Light"
								onCh_checkbox={() => {}}
								onCh_descriptionTask={() => {}}
								onCh_nameTask={() => {}}
								valueDescription=""
								valueTask=""
								idCheckbox="1"
								id="1"
								isSubtask
							/>
							<InputTask
								check
								modo="Light"
								onCh_checkbox={() => {}}
								onCh_descriptionTask={() => {}}
								onCh_nameTask={() => {}}
								valueDescription=""
								valueTask=""
								idCheckbox="1"
								id="1"
								isSubtask
							/>
						</div>
						<div style={{ marginTop: '10px' }}>
							<InputTask
								check
								modo="Light"
								onCh_checkbox={() => {}}
								onCh_descriptionTask={() => {}}
								onCh_nameTask={() => {}}
								valueDescription=""
								valueTask=""
								idCheckbox="1"
								id="1"
							/>
							<div
								style={{
									marginLeft: '20px',
									marginTop: '10px',
									borderLeft: '2px solid #000',
									paddingLeft: '10px',
								}}
							>
								<InputTask
									check
									modo="Light"
									onCh_checkbox={() => {}}
									onCh_descriptionTask={() => {}}
									onCh_nameTask={() => {}}
									valueDescription=""
									valueTask=""
									idCheckbox="1"
									id="1"
									isSubtask
								/>
								<InputTask
									check
									modo="Light"
									onCh_checkbox={() => {}}
									onCh_descriptionTask={() => {}}
									onCh_nameTask={() => {}}
									valueDescription=""
									valueTask=""
									idCheckbox="1"
									id="1"
									isSubtask
								/>
								<InputTask
									check
									modo="Light"
									onCh_checkbox={() => {}}
									onCh_descriptionTask={() => {}}
									onCh_nameTask={() => {}}
									valueDescription=""
									valueTask=""
									idCheckbox="1"
									id="1"
									isSubtask
								/>
								<InputTask
									check
									modo="Light"
									onCh_checkbox={() => {}}
									onCh_descriptionTask={() => {}}
									onCh_nameTask={() => {}}
									valueDescription=""
									valueTask=""
									idCheckbox="1"
									id="1"
									isSubtask
								/>
								<InputTask
									check
									modo="Light"
									onCh_checkbox={() => {}}
									onCh_descriptionTask={() => {}}
									onCh_nameTask={() => {}}
									valueDescription=""
									valueTask=""
									idCheckbox="1"
									id="1"
									isSubtask
								/>
							</div>
						</div>
						<Buttons
							modo="Light"
							onCl_buttons={{} as any}
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
