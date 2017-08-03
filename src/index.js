import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import AddTextBoxButton from './components/AddTextBoxButton/AddTextBoxButton';
import DropZone from './components/DropZone/DropZone';
import UndoRedo from './components/UndoRedoEditText/UndoRedoEditText';
import './index.css';

let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

class App extends React.Component {
	render() {
	    return (
	    	<div>
				<AddTextBoxButton />
				<UndoRedo />
				<DropZone />
			</div>
	    );
  	} 
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));