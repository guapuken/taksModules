import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import GeneralCard from '../../CompoundComponents/Cards/GeneralCard/GeneralCard';
import Textos from '../../CompoundComponents/Atoms/Textos/Textos';
import { GetIcons } from '../../CompoundComponents';

const meta: Meta<typeof GeneralCard> = {
	title: 'Compound/General Card',
	component: GeneralCard,
};

export default meta;

type Story = StoryObj<typeof GeneralCard>;

export const Story = {
	name: 'General Card',
	render: () => {
		const [isCollaps, setisCollapsed] = useState(true);
		return (
			<div style={{ display: 'flex', gap: '20px', width: '100%', padding: '20px' }}>
				<GeneralCard
					isCollapsable
					isCollapsed={isCollaps}
					height="auto"
					width="25%"
					style={{
						minHeight: 'calc((25vw / 16) * 9)',
						display: 'flex',
						alignItems: 'center',
					}}
					widthOpen="50%"
					heightOpen="auto"
					onClickCollapse={() => setisCollapsed(!isCollaps)}
				>
					<div
						style={{
							display: 'flex',
							padding: '15px',
							gap: '15px',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								maxWidth: isCollaps ? '25%' : '',
								minWidth: '25%',
							}}
						>
							<div style={{ borderBottom: '2px solid var(--detailFont)' }}>
								<Textos>
									<Textos.Title maxLines={1} tipo="h5">
										IMJ-CDMX-ESP-O-1523B
									</Textos.Title>
								</Textos>
								<Textos>
									<Textos.Simple>Espectaculares</Textos.Simple>
								</Textos>
							</div>
						</div>
						{isCollaps && (
							<div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
								<div style={{ display: 'flex', gap: '15px' }}>
									<Textos>
										<Textos.Simple>
											<strong>latitud: </strong> 26.025356
										</Textos.Simple>
									</Textos>
									<Textos>
										<Textos.Simple>
											<strong>Longitud: </strong> -96.025356
										</Textos.Simple>
									</Textos>
								</div>
								<Textos>
									<Textos.Simple>
										<strong>Ubicación: </strong> CDMX
									</Textos.Simple>
								</Textos>
								<Textos>
									<Textos.Simple>
										<strong>Acepta implementaciones especiales </strong>
									</Textos.Simple>
								</Textos>
								<div
									style={{ display: 'flex', gap: '15px', justifyContent: 'end' }}
								>
									<GetIcons icon="bloqueado" size={50} />
									<GetIcons icon="vistaCruzada" size={50} />
									<GetIcons icon="conIluminacion" size={50} />
								</div>
							</div>
						)}
					</div>
				</GeneralCard>
				<GeneralCard
					height="auto"
					width="25%"
					style={{
						minHeight: '15vh',
						display: 'flex',
						alignItems: 'center',
					}}
					widthOpen="50%"
					heightOpen="auto"
					isCollapsed={false}
					onClickCollapse={() => setisCollapsed(!isCollaps)}
				>
					<div style={{ padding: '15px' }}>
						<div style={{ borderBottom: '2px solid var(--detailFont)' }}>
							<Textos>
								<Textos.Title tipo="h5">IMJ-CDMX-ESP-O-1523B</Textos.Title>
							</Textos>
							<Textos>
								<Textos.Simple>Espectaculares</Textos.Simple>
							</Textos>
						</div>
					</div>
				</GeneralCard>
				<GeneralCard
					isCollapsable
					height="auto"
					width="25%"
					style={{
						minHeight: '15vh',
						display: 'flex',
						alignItems: 'center',
					}}
					widthOpen="50%"
					heightOpen="auto"
					isCollapsed={false}
					onClickCollapse={() => setisCollapsed(!isCollaps)}
				>
					<div style={{ padding: '15px' }}>
						<div style={{ borderBottom: '2px solid var(--detailFont)' }}>
							<Textos>
								<Textos.Title tipo="h5">IMJ-CDMX-ESP-O-1523B</Textos.Title>
							</Textos>
							<Textos>
								<Textos.Simple>Espectaculares</Textos.Simple>
							</Textos>
						</div>
					</div>
				</GeneralCard>
				<GeneralCard
					height="auto"
					width="25%"
					style={{
						minHeight: '15vh',
						display: 'flex',
						alignItems: 'center',
					}}
					widthOpen="50%"
					heightOpen="auto"
					isCollapsed={false}
					onClickCollapse={() => setisCollapsed(!isCollaps)}
				>
					<div style={{ padding: '15px' }}>
						<div style={{ borderBottom: '2px solid var(--detailFont)' }}>
							<Textos>
								<Textos.Title tipo="h5">IMJ-CDMX-ESP-O-1523B</Textos.Title>
							</Textos>
							<Textos>
								<Textos.Simple>Espectaculares</Textos.Simple>
							</Textos>
						</div>
					</div>
				</GeneralCard>
			</div>
		);
	},
};
