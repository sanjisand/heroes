import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

	const { dispatch } = useContext(AuthContext)

	const history = useHistory()
	const handleLogin = () => {
	
		dispatch({
			type: types.login,
			payload: { 
				name: 'Aure' 
			}
		})
		history.push('/marvel')
	}

	return (
		<div className='container mt-5'>
			<h1>Login</h1>

			<button
				className='btn btn-primary'
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	)
}
