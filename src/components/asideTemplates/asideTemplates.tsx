import React, { useEffect, useState } from 'react';
// types
import { aside } from './types/types';
// componentes principales
import { ErrorNc, NoTasks } from './principalComponents';
// types que se utilizan en documentación
import { Modo, onChangeType } from '../../types';

import CardTaskReview from '../cardTaskReview/cardTaskReview';
import { useWindowSize } from '../../utils/windowSize';
import Carousel from '../carousel/carousel';
import Dropdown from '../dropdown/dropdown';
// estilos del componente
import './styles/aside.scss';

import filter from '../../img/filter.svg';
import orderIcon from '../../img/order.svg';
import { ButtonItem } from '../../utils/asideUtils';
import IconDropdown from '../iconDropdown/iconDropdown';

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
}: aside) => {
	const scrnW = useWindowSize().width;
	const scrnH = useWindowSize().height;

	const [order, setOrder] = useState(true);
	const [filterBy, setFilterBY] = useState('');

	function aspectRatio() {
		const size = scrnH / 10 > scrnW / 7 ? true : false;
		return size;
	}

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
			<div className="children">
				{!tasks && !priText && !secText ? (
					<ErrorNc />
				) : (
					<div className="ctnCards">
						<div
							className="dropdownCtn"
							style={{ width: '90%', display: 'flex', gap: '10px', height: '30px' }}
						>
							<Dropdown
								modo={visible ? 'Dark' : modo}
								onCh={onCh_dropdown as onChangeType}
								options={[
									{
										id: 'revision',
										title: 'Tareas en revisión',
									},
									{
										id: 'porRevisar',
										title: 'Tareas para revisar',
									},
								]}
								placeHolder="Selecciona tus tareas"
								initialValue={{
									id: 'revision',
									title: 'Tareas en revisión',
								}}
								style={{
									width: `calc(100% - ${!aspectRatio() ? '40px' : '0px'})`,
								}}
							/>
							{!aspectRatio() && (
								<>
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
								</>
							)}
						</div>
						{!aspectRatio() ? (
							tasks?.map((individualTask) => (
								<CardTaskReview
									key={individualTask.id}
									modo={visible ? 'Dark' : modo}
									{...individualTask}
								/>
							))
						) : (
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
						)}
					</div>
				)}
				{!tasks && (priText || secText) && (
					<NoTasks
						modo={modo}
						idSection={idSection}
						imageNoTasks={imageNoTasks}
						legendBtn={legendBtn}
						onCl_btn={onCl_btn}
						priText={priText}
						secText={secText}
					/>
				)}
			</div>
		</div>
	);
};

export default AsideTemplates;
