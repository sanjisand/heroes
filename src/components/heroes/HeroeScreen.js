import React, { useMemo } from 'react'
import {useParams, Redirect, useHistory} from 'react-router-dom'
import {getHeroeById} from '../../selectors/getHeroeById'

export const HeroeScreen = () => {

	const {idHeroe} = useParams()
	const heroe = useMemo(() =>  getHeroeById(idHeroe), [idHeroe])
	const history = useHistory()
	
	if(!heroe){
		return <Redirect to='/' />
	}

	const {
		id,
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters
	} = heroe

	const handleReturn = () => {
		if(history.length <= 2){
			history.push('/')
		}
		else{
			history.goBack()
		}
	}

	return (
		<div className='row mt-5'>
			<div className="col-4">
				<img 
					src={`../../assets/heroes/${id}.jpg`} 
					alt={publisher}
					className='img-thumbnail animate__animated animate__fadeInLeft'
				/>
			</div>
			<div className="col-8">
				<h3> {superhero} </h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><b>Alter ego: </b> {alter_ego} </li>
					<li className="list-group-item"><b>Publisher: </b> {publisher} </li>
					<li className="list-group-item"><b>First appearance: </b> {first_appearance} </li>
					<li className="list-group-item"><b>Characters: </b> {characters} </li>
				</ul>

				<button
					className='btn btn-outline-primary'
					onClick={handleReturn}
				>
					Atras
				</button>
			</div>
		</div>
	)
}
