import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Projects />, document.getElementById('projects'));

serviceWorker.unregister();
