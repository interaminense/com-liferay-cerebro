import moment from 'moment';

import DatePicker from '../index';

describe('DatePicker', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new DatePicker({
			date: moment(0)
		});

		component.state.currentMonth = moment(0).startOf('month');

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should render the next month', () => {
		component = new DatePicker({
			date: moment(0)
		});

		component.state.currentMonth = moment(0).startOf('month');

		jest.runAllTimers();

		component.handleNextMonth();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should show the month selector', () => {
		component = new DatePicker({
			date: moment(0)
		});

		component.state.currentMonth = moment(0).startOf('month');

		jest.runAllTimers();

		component.handleToggleMonthSelector();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should call onSelect when a date is selected', () => {
		const onSelect = jest.fn();

		component = new DatePicker({
			date: moment(0),
			onSelect
		});

		expect(onSelect).not.toHaveBeenCalled();

		component.handleSelect();

		expect(onSelect).toHaveBeenCalled();
	});

	it('should render label when a range is passed', () => {
		component = new DatePicker({
			date: {
				end: null,
				start: moment(0)
			}
		});

		component.state.currentMonth = moment(0).startOf('month');

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});
});