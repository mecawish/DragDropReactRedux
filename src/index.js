import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));