import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthProvider } from './auth';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		</AuthProvider>
	);
};

export default App;
