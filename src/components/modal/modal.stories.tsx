import React from 'react';
//importación de elementos de storybook a utilizar
import { Meta, Story } from '@storybook/react';
//importación de componente principal
import Modal, { ModalProps } from './modal';
//importación de componentes auxiliares
import { Buttons, Task } from '../../components';

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	Content: () => (
		<div>
			<Task
				idCheckbox="12"
				principalTask={true}
				taskComplete={false}
				isSubtask
				valueTask="Bloqueos sitios IMJ-CDMX-ESP-O-576"
				valueDescription="Bloquear con los porveedores los sitios de la campaña de uber"
				onChangeDias={() => alert('change días')}
				plantillas={true}
				responsables={[{ title: 'Olaf' }]}
				equipos={[{ title: 'TI' }]}
				revision={[{ title: 'Jorge' }]}
				valueResponsable={'Olaf Ruvalcaba'}
				valueRevision={'Jorge Correa'}
				onClickPrioridad={() => alert('change priority')}
				onClickEliminar={() => alert('eliminando')}
				onClickRecordatorio={() => alert('Creando recordatorio')}
				onClickAddTask={() => alert('agregando Tarea')}
				Children={() => (
					<>
						<Task
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
	header: 'Tareas',
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

// exportación de valores default
export default {
	//nombre de la carpeta en la que agrupará eel componente y su nombre
	title: 'Modales/modal',
	// definición de argumentos
	component: Modal,
	argTypes: {
		title: {
			type: 'string',
		},
		Footer: {
			type: 'function',
		},
		Content: {
			type: 'function',
		},
	},
} as Meta;
