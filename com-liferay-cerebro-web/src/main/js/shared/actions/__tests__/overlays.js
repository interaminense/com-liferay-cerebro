import * as actions from '../overlays';
import {isFSA} from 'flux-standard-action';

describe('Overlay Actions', () => {
	describe('hide', () => {
		it('should return an action', () => {
			const action = actions.hide();

			expect(isFSA(action)).toBe(true);
			expect(action.type).toBe(actions.actionTypes.HIDE_OVERLAY);
		});
	});

	describe('show', () => {
		it('should return an action', () => {
			const action = actions.show({});

			expect(isFSA(action)).toBe(true);
			expect(action.type).toBe(actions.actionTypes.SHOW_OVERLAY);
		});

		it('should have a payload containing overlay options', () => {
			const options = {
				alignment: 'TOP',
				containerClass: 'foo',
				context: {},
				id: 23,
				offset: 50,
				onMouseEnter: jest.fn(),
				onMouseLeave: jest.fn()
			};

			const action = actions.show(options);

			expect(action.payload).toMatchObject(options);
		});
	});
});