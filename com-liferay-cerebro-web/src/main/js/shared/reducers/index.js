import {combineReducers} from 'redux-immutable';

import modals from './modals';
import overlays from './overlays';

export default combineReducers({
	modals,
	overlays
});