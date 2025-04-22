import { CharacterDto } from './characterDto'
import { SupportDto } from './supportDto'
import { UnitDto } from './unitDto'

export type FactionDto = {
	id: number,
	name: string,
	order: number,
	image: string,
	units: UnitDto[],
	characters: CharacterDto[],
	support: SupportDto[]
}

