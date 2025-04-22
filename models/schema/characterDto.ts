import { AbilitiesDto } from './abilitiesDto'

export type CharacterDto = {
	name: string,
	points: number,
	description: string,
	abilities: AbilitiesDto[]
}