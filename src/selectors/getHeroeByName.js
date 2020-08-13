import { heroes } from '../data/heroes'

export const getHeroeByName = (name = '') => {

	if(name === ''){
		return []
	}

	name = name.toLocaleLowerCase()

	return heroes.filter(item => item.superhero.toLocaleLowerCase().includes(name))
}
