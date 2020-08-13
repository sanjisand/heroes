import { heroes } from '../data/heroes'

export const getHeroeById = (id) => {

	return heroes.find( item => item.id === id)

}