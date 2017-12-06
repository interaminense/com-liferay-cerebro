import moment from 'moment';

import DateIntervalSelector, {RANGE, INTERVAL} from '../DateIntervalSelector';
import {renderWithStore} from 'test/mock-store';
import renderWithOverlay from 'test/overlay';

describe('DateIntervalSelector', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = renderWithStore(DateIntervalSelector);

		expect(component).toMatchSnapshot();
	});

	it('should render content in overlay', () => {
		component = renderWithOverlay(DateIntervalSelector);

		component.refs.child.handleToggleActive();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should render button label with custom range', () => {
		component = renderWithStore(DateIntervalSelector, {
			range: {
				end: moment(1000000000),
				start: moment(0)
			},
			rangeType: RANGE.CUSTOM
		});

		expect(component).toMatchSnapshot();
	});

	it('should render button label with different interval', () => {
		component = renderWithStore(DateIntervalSelector, {
			interval: INTERVAL.YEARLY
		});

		expect(component).toMatchSnapshot();
	});

	it('should call onRangeTypeChange', () => {
		const onRangeTypeChange = jest.fn();

		component = renderWithStore(DateIntervalSelector, {
			onRangeTypeChange
		});

		expect(onRangeTypeChange).not.toHaveBeenCalled();

		component.handleRangeTypeSelect({value: 0});

		expect(onRangeTypeChange).toHaveBeenCalledWith(0);
	});
});