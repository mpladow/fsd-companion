import { FactionDto } from '@/models/schema/factionsDto';
import { create, createStore } from 'zustand';
import { combine } from 'zustand/middleware'

interface FactionDataState {
	allFactionDetails?: FactionDto[],
	// getFactionDetailsFromApi: () => void,
	// getFactionDetailsById: (id: number) => FactionDto | undefined
}
// export const useFactionDataStore = create<FactionDataState>()((set, get) => ({
// 	allFactionDetails: undefined,
// 	getFactionDetailsFromApi: () => {
// 		const factionDetailsList: FactionDto[] = []
// 		let enlisted: FactionDto = require('../../data/enlisted.json')
// 		factionDetailsList.push(enlisted)
// 		console.log("🚀 ~ enlisted:", enlisted)
// 		set(() => ({ allFactionDetails: factionDetailsList }))
// 	},
// 	getFactionDetailsById: (id: number) => {
// 		let data = get().allFactionDetails
// 		if (data) {
// 			return data.find(x => x.id == id)
// 		}
// 		else {
// 			return undefined
// 		}
// 	}

// }))

export const useFactionDataStore = create(combine({ allFactionDetails: [] as FactionDto[] }, (set) => {
	return {
		setFactionsFromApi: () => {
			const factionDetailsList: FactionDto[] = []
			let enlisted: FactionDto = require('../../data/enlisted.json')
			factionDetailsList.push(enlisted)
			console.log("🚀 ~ enlisted:", enlisted)
			set(() => ({ allFactionDetails: factionDetailsList }))
		},
	}
}))

const getFactionDetailsFromApi = () => {

}

