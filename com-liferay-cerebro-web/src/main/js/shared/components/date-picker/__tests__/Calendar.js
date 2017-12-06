import moment from 'moment';

import Calendar, {isSelected} from '../Calendar';
import dom from 'metal-dom';

describe('Calendar', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Calendar({
			currentMonth: moment(0).startOf('month'),
			date: moment(0)
		});

		expect(component).toMatchSnapshot();
	});

	it('should render days as being in a range', () => {
		component = new Calendar({
			currentMonth: moment(0).startOf('month'),
			date: {
				end: moment(0).add(7, 'days'),
				start: moment(0)
			}
		});

		expect(component).toMatchSnapshot();
	});

	it('should return a nested array representing a calendar', () => {
		component = new Calendar({
			currentMonth: moment(0).startOf('month'),
			date: moment(0)
		});

		component.getDateGrid().forEach(rowObj => {
			expect(rowObj).toMatchObject({
				key: expect.any(String),
				row: expect.any(Array)
			});

			rowObj.row.forEach(dateObj => {
				expect(dateObj).toMatchObject({
					date: expect.anything(),
					outsideMonth: expect.any(Boolean)
				});
			});
		});
	});

	it('the same day should not be selected as both the start and end', () => {
		const onSelect = jest.fn(
			date => (component.props.date = {end: null, start: date})
		);

		component = new Calendar({
			currentMonth: moment(0).startOf('month'),
			date: {
				end: null,
				start: null
			},
			onSelect
		});

		const button = component.element.querySelector('.day-root');

		dom.triggerEvent(button, 'click');

		expect(onSelect).toHaveBeenCalledTimes(1);

		jest.runAllTimers();

		dom.triggerEvent(button, 'click');

		expect(onSelect).toHaveBeenCalledTimes(1);
	});

	describe('isSelected', () => {
		it('should return true if the date is selected', () => {
			expect(isSelected(moment(0), moment(0))).toBe(true);

			expect(
				isSelected(
					{
						end: moment(0).add(3, 'days'),
						start: moment(0)
					},
					moment(0)
				)
			).toBe(true);

			expect(
				isSelected(
					{
						end: moment(0).add(3, 'days'),
						start: moment(0)
					},
					moment(0).add(3, 'days')
				)
			).toBe(true);
		});

		it('should return false if the date is not selected', () => {
			expect(isSelected(moment(), moment(50000)), moment(20000)).toBe(
				false
			);

			expect(
				isSelected(
					{
						end: moment(0).add(3, 'days'),
						start: moment(0)
					},
					moment().add(1, 'days')
				)
			).toBe(false);
		});
	});
});