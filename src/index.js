import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import rootSaga from './redux/sagas'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Test extends React.Component {
	render() {
		return (
			<div>THIS IS A TEST ROUTE!</div>
		)
	}
}

// TO DO, 2nd route is 404

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<header>THE HEADER GOES HERE!</header>
				<div><Link to='/'>HOME</Link></div>
				<div><Link to='/test'>TEST</Link></div>
				<Route path="/" component={App} />
				<Route path="/test" component={Test} />
			</div>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);