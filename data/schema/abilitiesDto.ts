import { DieSlotsDto } from './dieSlotsDto'

export type AbilitiesDto = {
	name: string,
	optionalDescription?: string,
	diceRoll?: string,
	specialRules: string[],
	dieSlots: DieSlotsDto[]
	canBePrepared: boolean
}