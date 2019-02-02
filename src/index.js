import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './projects'
import Contact from './contact';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Contact />, document.getElementById('contact'));

serviceWorker.unregister();
