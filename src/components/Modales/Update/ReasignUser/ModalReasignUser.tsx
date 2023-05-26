import React, { useState } from 'react';
import { ImportantText, SimpleContainer, Texts, ValidationComponent } from '../../../Atoms';
import { Buttons, Dropdown, ModalConfirmation } from '../../../../components';
import { modalReasignUserProps } from './types/types';
import { CheckboxInput } from '../../../inputTask/complements/checkboxInput';

const MdlReasignUser = ({
	modo,
	onCl_confirm,
	initialValueDropdown,
	onCh_dropdown,
	isOpened,
	setData,
	isPM,
	equipos,
	responsables,
}: modalReasignUserProps) => {
	const [responsable, setRes] = useState(false);
	const [team, setTeam] = useState(false);

	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						¿Seguro que quieres reasignar la tarea?
					</ImportantText>
				}
				isActive={isOpened}
				modo={modo}
				footer={
					<Buttons
						buttons={{ primary: true, secondary: true }}
						composition="horizontal"
						modo={modo}
						onCl_buttons={{
							tertiary: {} as any,
							primary: onCl_confirm,
							secondary: () => setData(null),
						}}
						legends={{
							primary: 'Reasignar tarea',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>
					Asegurate de reasignar la tarea a quién será el nuevo encargado
				</Texts>
				<ValidationComponent validate={isPM}>
					<SimpleContainer style={{ display: 'flex', gap: '20px' }}>
						<SimpleContainer
							style={{
								display: 'flex',
								marginTop: '10px',
								alignItems: 'center',
							}}
						>
							<CheckboxInput
								idCheckbox="team"
								check={team}
								modo={modo}
								onCh_checkbox={() => {
									if (responsable) {
										setRes(false);
									}
									setTeam(!team);
								}}
							/>
							Reasignar a equipo
						</SimpleContainer>
						<SimpleContainer
							style={{
								display: 'flex',
								marginTop: '10px',
								alignItems: 'center',
							}}
						>
							<CheckboxInput
								idCheckbox="responsable"
								check={responsable}
								modo={modo}
								onCh_checkbox={() => {
									if (team) {
										setTeam(false);
									}
									setRes(!responsable);
								}}
							/>
							Reasignar a responsable
						</SimpleContainer>
					</SimpleContainer>
				</ValidationComponent>
				<ValidationComponent validate={!isPM || responsable || team}>
					<Dropdown
						modo={modo}
						onCh={onCh_dropdown}
						placeHolder={
							team ? 'Seleccione el nuevo equipo' : 'Seleccione el nuevo encargado'
						}
						options={team ? equipos : responsables}
						style={{ marginTop: '20px', minWidth: '40%' }}
						isSearchable
						initialValue={initialValueDropdown}
					/>
				</ValidationComponent>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlReasignUser;
