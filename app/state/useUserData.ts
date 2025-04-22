import { SupportPersistence } from '@/models/persistence/supportPersistence';
import { UnitPersistence } from '@/models/persistence/unitPersistence';
import { UserArmyPersistence } from '@/models/persistence/userArmy';
import { create } from 'zustand';

interface UserDataState {
	userArmies?: UserArmyPersistence[],

}

export const useUserDataStore = create<UserDataState>()(() => ({
	userArmies: undefined
}))