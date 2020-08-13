import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen'
//
import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from '../auth/authContext';

export const AppRouter = () => {

	const { user:{logged} } = useContext(AuthContext)
	console.log(logged)
	
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoutes 
						exact
						path='/login'
						component= { LoginScreen }
						isAuthenticated= { logged }
					/>
					
					<PrivateRoutes 
						path="/" 
						component = { DashboardRoutes }
						isAuthenticated= { logged }
					/>
				</Switch>
			</div>
		</Router>
	)
}
