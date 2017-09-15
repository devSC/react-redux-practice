import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer);

// Render the main component into the dom
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);