import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import moment from 'moment';
import {chunk, noop, range} from 'lodash';

import Button from 'shared/components/Button';
import {isDateOrRange, isInRange} from './util';

const FIVE_ROWS = 35;
const SIX_ROWS = 42;

export function isSelected(dateOrRange, date) {
	if (moment.isMoment(dateOrRange)) {
		return dateOrRange.isSame(date);
	}

	const {start, end} = dateOrRange;

	return (start && start.isSame(date)) || (end && end.isSame(date));
}

export function isStart(dateOrRange, date) {
	if (moment.isMoment(dateOrRange)) {
		return false;
	}

	const {start, end} = dateOrRange;

	return start && end && start.isSame(date);
}

export function isEnd(dateOrRange, date) {
	if (moment.isMoment(dateOrRange)) {
		return false;
	}

	const {start, end} = dateOrRange;

	return start && end && end.isSame(date);
}

class Day extends Component {
	@autobind
	handleClick() {
		const {date, onSelect, selected} = this.props;

		if (!selected) {
			onSelect(date);
		}
	}

	render() {
		const {date, outsideMonth, selected} = this.props;

		const classes = getCN('day-root', {
			'outside-month': outsideMonth,
			selected
		});

		return (
			<Button
				display="unstyled"
				elementClasses={classes}
				onClick={this.handleClick}
				{...this.otherProps()}
			>
				{date.date()}
			</Button>
		);
	}
}

Day.PROPS = {
	date: Config.validator(moment.isMoment).required(),
	onSelect: Config.func().value(noop),
	outsideMonth: Config.bool().value(false),
	selected: Config.bool().value(false)
};

class Calendar extends Component {
	getDateGrid() {
		const {currentMonth} = this.props;

		const month = currentMonth.clone().startOf('month');

		const daysInMonth = month.daysInMonth();
		const firstDay = month.day();

		const cells = firstDay + daysInMonth > 35 ? SIX_ROWS : FIVE_ROWS;

		const dates = range(1, cells + 1).map(
			i =>
				do {
					if (i < firstDay + 1) {
						({
							date: month
								.clone()
								.subtract(firstDay + 1 - i, 'days'),
							outsideMonth: true
						});
					} else if (i - firstDay > daysInMonth) {
						({
							date: month
								.clone()
								.add(1, 'months')
								.add(i - firstDay - daysInMonth - 1, 'days'),
							outsideMonth: true
						});
					} else {
						({
							date: month.clone().add(i - firstDay - 1, 'days'),
							outsideMonth: false
						});
					}
				}
		);

		return chunk(dates, 7).map((row, i) => ({
			key: `${currentMonth.format()}_${i}`,
			row
		}));
	}

	render() {
		const {minDate, onSelect} = this.props;

		return (
			<table class="calendar-root">
				<thead>
					<tr>
						{moment
							.weekdaysShort()
							.map(day => <th key={day}>{day}</th>)}
					</tr>
				</thead>

				<tbody>
					{this.getDateGrid().map(({row, key}) => (
						<tr key={key}>
							{row.map(({date, outsideMonth}) => (
								<td
									class={getCN({
										'end-range':
											this.props.date &&
											isEnd(this.props.date, date),
										'in-range':
											this.props.date &&
											isInRange(this.props.date, date),
										'start-range':
											this.props.date &&
											isStart(this.props.date, date)
									})}
									key={date.format()}
								>
									<div class="day-container">
										<Day
											date={date}
											disabled={
												minDate &&
												date.isBefore(minDate)
											}
											onSelect={onSelect}
											outsideMonth={outsideMonth}
											selected={
												this.props.date &&
												isSelected(
													this.props.date,
													date
												)
											}
										/>
									</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

Calendar.PROPS = {
	currentMonth: Config.validator(moment.isMoment).required(),
	date: Config.validator(isDateOrRange),
	minDate: Config.validator(moment.isMoment),
	onSelect: Config.func().value(noop)
};

export default Calendar;