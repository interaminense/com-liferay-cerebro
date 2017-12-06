import {createReducer} from 'redux-toolbox';
import {OrderedMap, Map} from 'immutable';

import {actionTypes} from '../actions/overlays';

export default createReducer(OrderedMap(), {
	[actionTypes.HIDE_OVERLAY](state, action) {
		return state.delete(action.payload.id);
	},

	[actionTypes.SHOW_OVERLAY](state, action) {
		const {
			alignment,
			containerClass,
			context,
			forceAlignment,
			id,
			offset,
			onMouseEnter,
			onMouseLeave,
			onOutsideClick,
			parentId
		} = action.payload;

		return state.set(
			id,
			Map({
				alignment,
				containerClass,
				context,
				forceAlignment,
				id,
				offset,
				onMouseEnter,
				onMouseLeave,
				onOutsideClick,
				parentId
			})
		);
	}
});