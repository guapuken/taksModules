import React, { Fragment } from 'react';
// import Button from '../../button/Button';
import { Button } from '../../../components';
import image from '../../../img/reloj.svg';
import { noTasksProps } from '../types/types';
import { onClickType } from '../../../types';

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
			<div className="ctnTextAndImage">
				<img className="imgAsd" src={imageNoTasks ?? image} alt="" />
				<div className="ctnTexts">
					{priText && <h2 className="ttlAsd">{priText}</h2>}
					{secText && <p className="descrAsd">{secText}</p>}
					{legendBtn && (
						<Button
							legend={legendBtn}
							id={idSection}
							onCl={onCl_btn as onClickType}
							primary
							modo={modo}
						/>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default NoTasks;
