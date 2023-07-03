import React from 'react';
import { SimpleContainer, Texts, Title, ValidationComponent } from '../../Atoms';
import { CircularProgressBar } from '../../../components';

//Styles
import './styles/CardCampaigns.scss';
import { cardCampaignProps } from './types/Types';

const CardCampaign = ({
	modo,
	porcentajeFijos,
	porcentajeUrbanos,
	porcentajeIndoors,
	porcentajeVallas,
	statusFijos,
	statusUrbanos,
	statusIndoors,
	statusVallas,
	nombreProyecto = 'ProjectName',
	onCl_mostrarDetalles,
}: cardCampaignProps) => {
	function percentCampaign() {
		let total = 0;
		let dividendo = 0;
		if (porcentajeFijos && porcentajeFijos !== null) {
			total += porcentajeFijos;
			dividendo += 1;
		}
		if (porcentajeIndoors && porcentajeIndoors !== null) {
			total += porcentajeIndoors;
			dividendo += 1;
		}
		if (porcentajeUrbanos && porcentajeUrbanos !== null) {
			total += porcentajeUrbanos;
			dividendo += 1;
		}
		if (porcentajeVallas && porcentajeVallas !== null) {
			total += porcentajeVallas;
			dividendo += 1;
		}
		return dividendo === 0 || total === 0 ? 0 : total / dividendo;
	}

	console.log(percentCampaign());
	return (
		<SimpleContainer
			labels={{
				className: `cardCampaign`,
				'theme-config': modo,
				onClick: onCl_mostrarDetalles,
			}}
		>
			<SimpleContainer className="cardCampaign__header">
				<Title modo={modo}>{nombreProyecto}</Title>
				<SimpleContainer className="cardCampaign__header-percent">
					<CircularProgressBar
						// percentTask={percentCampaign()}
						percentTask={10}
						statusTask={'onTime'}
						strokeColor={
							statusFijos === 'outOfTime' ||
							statusUrbanos === 'outOfTime' ||
							statusIndoors === 'outOfTime' ||
							statusVallas === 'outOfTime'
								? 'red'
								: ''
						}
						size={50}
					/>
					<Texts modo={modo} className="cardCampaign__header-percent-text">
						{`${Math.floor(percentCampaign())}%`}
					</Texts>
				</SimpleContainer>
			</SimpleContainer>
			<SimpleContainer className="cardCampaign__contenido">
				<ValidationComponent validate={porcentajeFijos !== null}>
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeFijos as any}
								statusTask={statusFijos ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeFijos ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Fijos</Texts>
					</SimpleContainer>
				</ValidationComponent>
				<ValidationComponent validate={porcentajeUrbanos !== null}>
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeUrbanos ?? 0}
								statusTask={statusUrbanos ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeUrbanos ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Urbanos</Texts>
					</SimpleContainer>
				</ValidationComponent>
				<ValidationComponent validate={porcentajeIndoors !== null}>
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeIndoors ?? 0}
								statusTask={statusIndoors ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeIndoors ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Indoors</Texts>
					</SimpleContainer>
				</ValidationComponent>
				<ValidationComponent validate={porcentajeVallas !== null}>
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeVallas ?? 0}
								statusTask={statusVallas ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeVallas ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Vallas M.</Texts>
					</SimpleContainer>
				</ValidationComponent>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default CardCampaign;
