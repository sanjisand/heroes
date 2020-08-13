import React, { useMemo } from 'react'
import { HeroeCard } from '../heroes/HeroeCard'
import {useForm} from '../../hooks/useForm'

import  queryString from 'query-string'
import {useHistory, useLocation} from 'react-router-dom'
import { getHeroeByName } from '../../selectors/getHeroeByName'

export const SearchScreen = () => {

	const history = useHistory()
	const location = useLocation()
	const { q = '' } = queryString.parse(location.search)

	const [formValues, handleInputChange] = useForm({
		searchText:q
	})
	const {searchText} = formValues
	const heroesFiltered = useMemo( () =>  getHeroeByName(q), [q])

	const handleSubmit = e => {
		e.preventDefault()
		history.push(`?q=${searchText}`)
	}

	return (
		<div>
			<h1>Search</h1>
			<hr/>

			<div className="row">
				<div className={heroesFiltered.length===0 ? 'col-12' : 'col-5'}>
					<form onSubmit={handleSubmit}>
						<input 
							type="search"
							placeholder='Search'
							className='form-control'
							name='searchText'
							value={searchText}
							onChange={handleInputChange}
							autoComplete='off'
						/>
						<button className='btn m-1 btn-block btn-outline-primary'>Search</button>
					</form>
				</div>
				{
				    (q !== '' && heroesFiltered.length > 0) && (
						<div className="col-7">
							<h4>Results</h4>
							<hr/>
							{
								heroesFiltered.map(item => (
									<HeroeCard 
										key={item.id}
										{...item}
									/>
								))
							}
						</div>
					) 
				}
			</div>
		</div>
	)
}
