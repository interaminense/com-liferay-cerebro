import dom from 'metal-dom';
import {times} from 'lodash';

import SearchableSelect from '../SearchableSelect';
import renderWithOverlay from 'test/overlay';

describe('SearchableSelect', () => {
	const items = times(5, i => ({name: `item${i}`, value: i}));

	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = renderWithOverlay(SearchableSelect, {
			buttonPlaceholder: 'Bar',
			inputPlaceholder: 'Foo',
			items
		});

		expect(component).toMatchSnapshot();
	});

	it('should render when clicked', () => {
		component = renderWithOverlay(SearchableSelect, {
			buttonPlaceholder: 'Bar',
			inputPlaceholder: 'Foo',
			items
		});

		dom.triggerEvent(
			component.element.querySelector('.dropdown-toggle'),
			'click'
		);

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should render with a subheader', () => {
		component = renderWithOverlay(SearchableSelect, {
			buttonPlaceholder: 'Bar',
			inputPlaceholder: 'Foo',
			items: [{name: 'foo bar', subheader: true}, ...items]
		});

		dom.triggerEvent(
			component.element.querySelector('.dropdown-toggle'),
			'click'
		);

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});
});