import {fromJS, List} from 'immutable';

import reducer from '../modals';
import {actionTypes} from '../../actions/modals';

describe('Modals Reducer', () => {
	it('should be a function', () => {
		expect(reducer).toBeInstanceOf(Function);
	});

	it(`should handle ${actionTypes.OPEN_MODAL}`, () => {
		const action = {
			payload: {
				name: 'MyModal',
				props: {
					foo: 'bar'
				}
			},
			type: actionTypes.OPEN_MODAL
		};

		const state = reducer(List(), action);

		expect(state).toEqual(
			fromJS([
				{
					name: 'MyModal',
					props: {
						foo: 'bar'
					}
				}
			])
		);
	});

	it(`should handle ${actionTypes.CLOSE_MODAL}`, () => {
		const intitialState = fromJS([
			{
				name: 'Foo',
				props: {}
			},
			{
				name: 'Bar',
				props: {}
			}
		]);

		const action = {
			type: actionTypes.CLOSE_MODAL
		};

		const state = reducer(intitialState, action);

		expect(state).toEqual(
			fromJS([
				{
					name: 'Foo',
					props: {}
				}
			])
		);
	});

	it(`should handle ${actionTypes.CLOSE_ALL_MODALS}`, () => {
		const intitialState = fromJS([
			{
				name: 'Foo',
				props: {}
			},
			{
				name: 'Bar',
				props: {}
			}
		]);

		const action = {
			type: actionTypes.CLOSE_ALL_MODALS
		};

		const state = reducer(intitialState, action);

		expect(state).toEqual(List());
	});
});