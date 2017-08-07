import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import Container from './components/Container/Container';

let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

class App extends React.Component {
	render() {
		return (
			<Container />
		)
  	} 
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));