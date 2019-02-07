import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects'
import Contact from './contact';
import Footer from './footer';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
