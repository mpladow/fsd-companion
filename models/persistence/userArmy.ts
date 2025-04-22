import { SupportPersistence } from './supportPersistence'
import { UnitPersistence } from './unitPersistence'

export type UserArmyPersistence = {
	id: string,
	name: string,
	units: UnitPersistence[]
	support: SupportPersistence[]
}