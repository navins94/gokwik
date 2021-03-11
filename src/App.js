import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import ThankYouPage from './routes/ThankYouPage';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={() => <Home />} />
					<Route exact path="/thankYou" component={() => <ThankYouPage />} />
					<Route render={() => <Redirect to="/" />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
