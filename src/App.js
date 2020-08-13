import { AppRouter } from './routers/AppRouter'
//
import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'

const init = () => {
	return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const App = () => {

	const [user, dispatch] = useReducer(authReducer, {}, init)

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user))
	}, [user])

	return (
		<AuthContext.Provider value={ { user, dispatch } } > 
			<AppRouter />
		</AuthContext.Provider>
	)
}

export default App
