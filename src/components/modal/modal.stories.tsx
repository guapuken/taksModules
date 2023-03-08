import { Meta, Story } from '@storybook/react';
import React from 'react';

import Buttons from '../buttons';
import IconDropdown from '../iconDropdown';
import Task from '../task';
import Modal, { ModalProps } from './modal';

const Template: Story<ModalProps> = (args) => <Modal {...args} />;
export const Initial = Template.bind({});
Initial.args = {};

export const Tareas = Template.bind({});
const checks = {
	principal: {
		check: true,
	},
	firstChild: {
		check: false,
	},
};
Tareas.args = {
	Content: () => (
		<div>
			<Task
				//Input Task
				idCheckbox="12"
				principalTask={true}
				// taskDisabled={true}
				taskComplete={false}
				// check={checks.principal.check}
				isSubtask
				// onClickCheck={(e) => (E)}
				// onChangeNameTask= () => alert('change Task')
				// onChangeDescriptionTask= () => alert('change description task')
				valueTask="Bloqueos sitios IMJ-CDMX-ESP-O-576"
				valueDescription="Bloquear con los porveedores los sitios de la campaña de uber"
				//Icon Dates
				onChangeDias={() => alert('change días')}
				plantillas={true}
				//Icon Asign
				responsables={[{ title: 'Olaf' }]}
				equipos={[{ title: 'TI' }]}
				revision={[{ title: 'Jorge' }]}
				valueResponsable={'Olaf Ruvalcaba'}
				valueRevision={'Jorge Correa'}
				//Icon Priority
				onClickPrioridad={() => alert('change priority')}
				// prioridadInicial= 'baja'

				//Icon MoreOptions
				onClickEliminar={() => alert('eliminando')}
				onClickRecordatorio={() => alert('Creando recordatorio')}
				// moreOptions=
				// subtaskForbbiden= true
				onClickAddTask={() => alert('agregando Tarea')}
				Children={() => (
					<>
						<Task
							// isSubtask
							plantillas
							idCheckbox="13"
							Children={() => (
								<>
									<Task idCheckbox="18" />
								</>
							)}
						/>
						<Task idCheckbox="14" />
						<Task
							idCheckbox="15"
							Children={() => (
								<>
									<Task
										idCheckbox="16"
										Children={() => (
											<Task
												subtaskForbbiden
												valueResponsable={'Olaf'}
												idCheckbox="17"
											/>
										)}
									/>
								</>
							)}
						/>
					</>
				)}
				templateOptions={[
					{
						title: 'Espectaculares',
						onClick: () => alert('hola'),
					},
					{
						title: 'Muros',
						onClick: () => alert('hola'),
					},
					{
						title: 'Vallas',
						onClick: () => alert('hola'),
					},
				]}
			/>
		</div>
	),
	header: 'Creación de tareas',
	Footer: () => (
		<Buttons
			buttons={{ primary: true, secondary: true }}
			legends={{
				primary: 'Crear Tarea',
				secondary: 'Cancelar creación',
			}}
			styleComposition={{ maxWidth: '90%', margin: '0 auto 0 2rem' }}
			composition="vertical"
		/>
	),
};

export default {
	title: 'Modal',
	component: Modal,
} as Meta;
