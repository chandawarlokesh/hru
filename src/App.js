import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from 'containers/Login'
import Home from 'containers/Home'
import Identity, { useIdentity } from 'components/Identity'
import CustomSpinner from 'components/Spinner'
import auth from './auth'

const AuthenticatedRoute = (props) => {
	const identity = useIdentity()
	if (!identity) {
		return <CustomSpinner />
	}

	return auth.isAuthenticated ? <Route {...props} /> : <Redirect to='/login' />
}

const MainApp = () => (
	<Identity>
		<Switch>
			<AuthenticatedRoute path='/' exact component={Home} />
		</Switch>
	</Identity>
)

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/login' exact component={Login} />
				<Route path='/' exact component={MainApp} />
				<Redirect to='/' />
			</Switch>
		</div>
	)
}

export default App
