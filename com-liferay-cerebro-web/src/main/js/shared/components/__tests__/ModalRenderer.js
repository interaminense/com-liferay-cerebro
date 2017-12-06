jest.mock('../../actions/modals');

import {fromJS} from 'immutable';
import dom from 'metal-dom';

import mockStore from 'test/mock-store';
import ModalRenderer from '../ModalRenderer';
import * as modalActions from '../../actions/modals';

const {modalTypes} = modalActions;

describe('ModalRenderer', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}

		jest.clearAllMocks();
	});

	it('should render', () => {
		const store = mockStore(
			fromJS({
				modals: []
			})
		);

		component = new ModalRenderer({store});

		expect(component).toMatchSnapshot();
	});

	it('should render test modal', () => {
		const store = mockStore(
			fromJS({
				modals: [
					{
						props: {},
						type: modalTypes.TEST
					}
				]
			})
		);

		component = new ModalRenderer({store});

		expect(component).toMatchSnapshot();
	});

	it('should add .modal-open to body', () => {
		const store = mockStore(
			fromJS({
				modals: [
					{
						props: {},
						type: modalTypes.TEST
					}
				]
			})
		);

		expect(document.body.classList.contains('modal-open')).toBe(false);

		component = new ModalRenderer({store});

		expect(document.body.classList.contains('modal-open')).toBe(true);
	});

	it('should render multiple modals', () => {
		const store = mockStore(
			fromJS({
				modals: [
					{
						props: {},
						type: modalTypes.TEST
					},
					{
						props: {},
						type: modalTypes.TEST
					}
				]
			})
		);

		component = new ModalRenderer({store});

		expect(component).toMatchSnapshot();
	});

	it('should pass props to modal', () => {
		const store = mockStore(
			fromJS({
				modals: [
					{
						props: {
							title: 'FooBar'
						},
						type: modalTypes.TEST
					}
				]
			})
		);

		component = new ModalRenderer({store});

		expect(component).toMatchSnapshot("should render with title 'FooBar'");
	});

	it('should close modal on click outside', () => {
		const store = mockStore(
			fromJS({
				modals: [
					{
						props: {
							title: 'FooBar'
						},
						type: modalTypes.TEST
					}
				]
			})
		);

		component = new ModalRenderer({store});

		const element = component.element.querySelector('.modal-container');

		expect(modalActions.close).not.toHaveBeenCalled();

		dom.triggerEvent(element, 'click');

		expect(modalActions.close).toHaveBeenCalled();
	});

	it('should not close modal if closeOnBlur is disabled', () => {
		const store = mockStore(
			fromJS({
				modals: [
					{
						closeOnBlur: false,
						props: {
							title: 'FooBar'
						},
						type: modalTypes.TEST
					}
				]
			})
		);

		component = new ModalRenderer({store});

		const element = component.element.querySelector('.modal-container');

		expect(modalActions.close).not.toHaveBeenCalled();

		dom.triggerEvent(element, 'click');

		expect(modalActions.close).not.toHaveBeenCalled();
	});
});