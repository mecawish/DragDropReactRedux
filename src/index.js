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
		return <div>THIS IS A TEST ROUTE!</div>
	}
}

class Sample extends React.Component {
	render() {
		return <div>THIS IS A SAMPLE ROUTE!</div>
	}
}

// TO DO, other routes aside from "/" are 404

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<div>HEADER GOES HERE</div>
				<Route path="/" component={App} />
				<Route path="/test" component={Test} />
				<Route path="/sample" component={Sample} />
			</div>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);