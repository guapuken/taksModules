import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ModalTemplates from '../../CompoundComponents/ModalTemplates/ModalTemplates';

const meta: Meta<typeof ModalTemplates> = {
	title: 'Compound/Modal templates',
	component: ModalTemplates,
};
export default meta;

type Story = StoryObj<typeof ModalTemplates>;

export const CompoundModalTemplates: Story = {
	name: 'Modal templates',
	render: () => {
		const [tasks, setTasks] = useState([
			{
				idTask: '1',
				valueTask: 'Dummies',
				valueDescription: 'Realizar adaptación de dummies',
				onCh_nameTask: () => {},
				onCh_descriptionTask: () => {},
				responsables: [],
				equipos: [],
				revision: [],
				onCl_delete: () => {},
				onCl_newTemplate: () => {},
				onCl_addTask: () => {},
				templateOptions: [],
				modo: 'Dark' as any,
				subtasks: [
					{
						idTask: '1',
						valueTask: 'Dummies',
						valueDescription: 'Realizar adaptación de dummies',
						onCh_nameTask: () => {},
						onCh_descriptionTask: () => {},
						responsables: [],
						equipos: [],
						revision: [],
						onCl_delete: () => {},
						onCl_newTemplate: () => {},
						onCl_addTask: () => {},
						templateOptions: [],
						modo: 'Dark' as any,
						valueResponsable: '',
					},
				],
			},
		]);
		const [printBF, setPrintBF] = useState(false);
		return (
			<ModalTemplates
				modo="Light"
				idTemplate="1"
				onCl_plantillaCampania={() => {}}
				onCh_checkboxMedio={() => {}}
				onCh_dropDownTipoMedio={() => {}}
				onCh_templateName={() => {}}
				onCl_addTask={() => {}}
				onCl_close={() => alert('cerrar modal')}
				isMannager
				onCl_abort={() => alert('cerrar modal')}
				onCl_confirm={() => alert('Plantilla creada')}
				edit={false}
				tasks={tasks}
				valueCheckboxPrintBF={printBF}
				onCh_checkboxPrintBF={() => setPrintBF(!printBF)}
				valueTemplateType="Postventa"
				valueTipoPlantillaVenta={null}
				valueTipoPlantillaPostventa="PlantillaReporte"
			/>
		);
	},
};
