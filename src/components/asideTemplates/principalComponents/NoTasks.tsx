import React, { Fragment } from 'react';
// import Button from '../../button/Button';
import { Button } from '../../../components';
import image from '../../../img/reloj.svg';
import { noTasksProps } from '../types/types';
import { onClickType } from '../../../types';
import { SimpleContainer, Texts, ValidationComponent } from '../../Atoms';

const NoTasks = ({
	priText,
	secText,
	legendBtn,
	idSection,
	onCl_btn,
	imageNoTasks,
	modo,
}: noTasksProps) => {
	return (
		<Fragment>
			<SimpleContainer className="aside__children-noTareas">
				<img className="aside__children-noTareas-img" src={imageNoTasks ?? image} alt="" />
				<SimpleContainer className="aside__children-noTareas-textos">
					<ValidationComponent validate={priText}>
						<h2 className="aside__children-noTareas-textos-title">{priText}</h2>
					</ValidationComponent>
					<ValidationComponent validate={secText}>
						<Texts modo={modo} className="aside__children-noTareas-textos-description">
							{secText}
						</Texts>
					</ValidationComponent>
					<ValidationComponent validate={legendBtn}>
						<Button
							legend={legendBtn}
							id={idSection}
							onCl={onCl_btn as onClickType}
							primary
							modo={modo}
						/>
					</ValidationComponent>
				</SimpleContainer>
			</SimpleContainer>
		</Fragment>
	);
};

export default NoTasks;
