import {createReducer} from 'redux-toolbox';
import {fromJS, List} from 'immutable';

import {actionTypes} from '../actions/modals';

export default createReducer(List(), {
	[actionTypes.CLOSE_ALL_MODALS](state) {
		return state.clear();
	},

	[actionTypes.CLOSE_MODAL](state) {
		return state.pop();
	},

	[actionTypes.OPEN_MODAL](state, action) {
		return state.push(fromJS(action.payload));
	}
});