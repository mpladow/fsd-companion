import { AbilitiesDto } from './abilitiesDto'

export type SupportDto = {
	name: string,
	points: number,
	description: string,
	abilities: AbilitiesDto[]
}