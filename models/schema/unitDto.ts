import { AbilitiesDto } from './abilitiesDto'
import { DamageAssignmentDto } from './damageAssignmentDto'
import { StatDto } from './statDto'

export type UnitDto = {
	name: string,
	type: "Infantry" | "Vehicle",
	points: number,
	bases: number,
	stats: StatDto[],
	abilities: AbilitiesDto[],
	damageAssignment?: DamageAssignmentDto[]

}