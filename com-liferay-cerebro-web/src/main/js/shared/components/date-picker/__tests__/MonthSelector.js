import dom from 'metal-dom';
import moment from 'moment';

import MonthSelector from '../MonthSelector';

describe('MonthSelector', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new MonthSelector({
			currentMonth: moment(0).startOf('month')
		});

		expect(component).toMatchSnapshot();
	});

	it('should call onSelect when a month is selected', () => {
		const onSelect = jest.fn();

		component = new MonthSelector({
			currentMonth: moment(0).startOf('month'),
			onSelect
		});

		dom.triggerEvent(
			component.element.querySelector('.month-root button'),
			'click'
		);

		expect(onSelect).toHaveBeenCalled();
	});
});