import {Map, OrderedMap} from 'immutable';

import reducer from '../overlays';
import {actionTypes} from '../../actions/overlays';

describe('Overlays Reducer', () => {
	it('should be a function', () => {
		expect(reducer).toBeInstanceOf(Function);
	});

	it(`should handle ${actionTypes.SHOW_OVERLAY}`, () => {
		const options = {
			alignment: 'TOP',
			containerClass: 'foo',
			context: {},
			forceAlignment: false,
			id: 23,
			offset: 50,
			onMouseEnter: jest.fn(),
			onMouseLeave: jest.fn(),
			onOutsideClick: jest.fn(),
			parentId: null
		};

		const action = {
			payload: options,
			type: actionTypes.SHOW_OVERLAY
		};

		const state = reducer(OrderedMap(), action);

		expect(state).toEqual(OrderedMap().set(23, Map(options)));
	});

	it(`should handle ${actionTypes.HIDE_OVERLAY}`, () => {
		const action = {
			payload: {
				id: 23
			},
			type: actionTypes.HIDE_OVERLAY
		};

		const initialState = OrderedMap().set(
			23,
			Map({
				id: 23
			})
		);

		const state = reducer(initialState, action);

		expect(state).toEqual(OrderedMap());
	});
});