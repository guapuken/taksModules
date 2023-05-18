import React, { useEffect, useState } from 'react';

// types
import { aside } from './types/types';

// componentes principales
import { ErrorNc, NoTasks } from './principalComponents';

// componentes auxiliares
import { CardTaskReview, IconDropdown, Carousel, Dropdown } from '../../components';
import { SimpleContainer, ValidationComponent } from '../Atoms';
import { ButtonItem } from '../../utils/asideUtils';

// funciones
import { useWindowSize } from '../../utils/windowSize';
import { aspectRatio } from '../../utils/functions/functions';

// archivos multimedia
import filter from '../../img/filter.svg';
import orderIcon from '../../img/order.svg';

// styles
import './styles/aside.scss';

// types que se utilizan en documentación ----------------------------------------------------------------------
import { Modo, onChangeType, optionsDropdown } from '../../types';
//--------------------------------------------------------------------------------------------------------------

/** documentación del componente
 * @param {boolean} isWhite - define si el Aside contiene un color de fondo
 * @param {any} children - obtiene el componente o el children que será usado
 * @param {Modo} modo - define el tema en el que se encuentra el componente
 * @param {boolean} visible - define si el aside será visible o no

 * @returns - renderiza un aside que recibe elementos y los muestra con un bg dependiendo el color
 */
const AsideTemplates = ({
	modo = 'Light',
	visible,
	imageNoTasks,
	priText,
	secText,
	tasks,
	legendBtn,
	idSection,
	onCl_btn,
	onCh_dropdown,
	initialValueDropdown,
	optionsDropdown,
}: aside) => {
	const scrnW = useWindowSize().width;
	const scrnH = useWindowSize().height;

	const [order, setOrder] = useState(true);
	const [filterBy, setFilterBY] = useState('');

	function filterResult(array: any, property: any, order: any) {
		array.sort((a: any, b: any) => {
			let sortOrder = order ? -1 : 1;
			if (a[property] > b[property]) {
				return sortOrder;
			} else if (a[property] < b[property]) {
				return -1 * sortOrder;
			} else {
				return 0;
			}
		});
		return array;
	}
	useEffect(() => {
		if (tasks) {
			filterResult(tasks, filterBy, order);
		}
	}, [order, filterBy]);

	return (
		<div className={`ctn${modo}_ATC`} vs-asd={visible ? 'Visible' : 'Normal'}>
			<SimpleContainer className="children">
				<SimpleContainer
					className="dropdownCtn"
					style={{ width: '90%', display: 'flex', gap: '10px', height: '30px' }}
				>
					<Dropdown
						modo={visible ? 'Dark' : modo}
						onCh={onCh_dropdown as onChangeType}
						options={optionsDropdown as optionsDropdown[]}
						placeHolder="Selecciona las tareas"
						initialValue={initialValueDropdown}
						style={{
							width: `calc(100% - ${!aspectRatio() ? '40px' : '0px'})`,
						}}
					/>
					<ValidationComponent validate={!aspectRatio()}>
						<IconDropdown
							modo={visible ? 'Dark' : modo}
							icon={filter}
							options={[
								{
									id: 'status',
									title: 'Por estatus',
									onClick: () => setFilterBY('statusTask'),
								},
								{
									id: 'name',
									title: 'Por nombre',
									onClick: () => setFilterBY('taskName'),
								},
							]}
						/>
						<ButtonItem
							id="orderArray"
							img={orderIcon}
							onClick={() => setOrder(!order)}
						/>
					</ValidationComponent>
				</SimpleContainer>
				{(!tasks || tasks.length === 0) && !priText && !secText ? (
					<ErrorNc />
				) : (
					<SimpleContainer className="ctnCards">
						<ValidationComponent validate={!aspectRatio() && tasks.length > 0}>
							{tasks?.map((individualTask) => (
								<CardTaskReview
									key={individualTask.id}
									modo={visible ? 'Dark' : modo}
									{...individualTask}
								/>
							))}
						</ValidationComponent>
						<ValidationComponent validate={aspectRatio() && tasks.length > 0}>
							<Carousel
								data={tasks}
								Card={(e: any) => (
									<CardTaskReview
										modo={visible ? 'Dark' : modo}
										{...e.property}
									/>
								)}
								height={scrnH / 4 - 90}
							/>
						</ValidationComponent>
					</SimpleContainer>
				)}
				<ValidationComponent
					validate={(!tasks || tasks.length < 1) && (priText || secText)}
				>
					<NoTasks
						modo={modo}
						idSection={idSection}
						imageNoTasks={imageNoTasks}
						legendBtn={legendBtn}
						onCl_btn={onCl_btn}
						priText={priText}
						secText={secText}
					/>
				</ValidationComponent>
			</SimpleContainer>
		</div>
	);
};

export default AsideTemplates;
