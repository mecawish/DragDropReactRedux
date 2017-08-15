import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import rootSaga from './redux/sagas'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class Test extends React.Component {
	render() {
		return <div>THIS IS A TEST ROUTE!</div>
	}
}

class Sample extends React.Component {
	render() {
		return <div>THIS IS A SAMPLE ROUTE!</div>
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<div>HEADER GOES HERE...</div>
				<div><Link to="/">Home</Link></div>
	        	<div><Link to="/test">Test</Link></div>
	        	<div><Link to="/sample">Sample</Link></div>
	        </div>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/test" component={Test} />
					<Route path="/sample" component={Sample} />
				</Switch>
			</div>
		</Router>
	</Provider>, 
	document.getElementById('root')
);