import Component from 'metal-jsx';

import '../css/main.scss';
import App from './App';

window.App = node => {
	Component.render(<App />, node);
};