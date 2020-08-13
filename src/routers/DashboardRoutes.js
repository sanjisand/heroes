import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { DcScreen } from '../components/dc/DcScreen'
 
import {Switch, Route, Redirect} from 'react-router-dom'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<div className='container'>
				<Switch>
					<Route path='/marvel' exact>
						<MarvelScreen />
					</Route>

					<Route path='/heroe/:idHeroe' exact>
						<HeroeScreen />
					</Route>

					<Route path='/dc' exact>
						<DcScreen />
					</Route>
					
					<Route path='/search' exact>
						<SearchScreen />
					</Route>

					<Redirect to='/marvel' />
				</Switch>
			</div>	
		</>
	)
}
