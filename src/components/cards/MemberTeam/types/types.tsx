import { Modo } from '../../../../types';

export interface cardMembersTeam {
	name: string;
	role: string;
	incompletedTasks?: number;
	modo: Modo;
	colorTeam: string;
}
