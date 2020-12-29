import React from 'react';
import ReactDOM from 'react-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
