import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import moment from 'moment';
import {noop} from 'lodash';

import {isDateOrRange, updateRange, isRange} from './util';
import Button from '../Button';
import Icon from '../Icon';
import Calendar from './Calendar';
import MonthSelector from './MonthSelector';

class DatePicker extends Component {
	created() {
		const {date} = this.props;

		if (moment.isMoment(date)) {
			this.state.currentMonth = date.clone().startOf('month');
		}
	}

	@autobind
	handleCurrentDate() {
		this.state.currentMonth = moment().startOf('month');
	}

	@autobind
	handleMonthSelect(value) {
		this.setState({
			currentMonth: moment(value),
			showMonthSelector: false
		});
	}

	@autobind
	handleNextMonth() {
		this.updateCurrentMonth(1);
	}

	@autobind
	handlePrevMonth() {
		this.updateCurrentMonth(-1);
	}

	@autobind
	handleSelect(newDate) {
		const {date, onSelect} = this.props;

		const newValue = isRange(date) ? updateRange(date, newDate) : newDate;

		onSelect(newValue);
	}

	@autobind
	handleToggleMonthSelector() {
		this.state.showMonthSelector = !this.state.showMonthSelector;
	}

	isPrevDisabled() {
		const {state: {currentMonth}, props: {minDate}} = this;

		return !!minDate && !minDate.isBefore(currentMonth);
	}

	isCurrentDisabled() {
		const {currentMonth} = this.state;

		return currentMonth.isSame(moment().startOf('month'));
	}

	syncDate(newVal, prevVal) {
		if (moment.isMoment(newVal) && !newVal.isSame(prevVal)) {
			this.state.currentMonth = newVal.clone().startOf('month');
		}
	}

	updateCurrentMonth(diff) {
		this.state.currentMonth = this.state.currentMonth
			.clone()
			.add(diff, 'months');
	}

	render() {
		const {
			props: {date, disabled, minDate},
			state: {currentMonth, showMonthSelector}
		} = this;

		const classes = getCN('date-picker-root', {
			disabled
		});

		return (
			<div aria-disabled={disabled} class={classes}>
				{isRange(date) && (
					<label>
						{date.start
							? Liferay.Language.get('end-date')
							: Liferay.Language.get('start-date')}
					</label>
				)}

				<div class="controls">
					<div class="month-toggle-wrapper">
						<Button
							elementClasses={getCN({
								active: showMonthSelector
							})}
							onClick={this.handleToggleMonthSelector}
							size="sm"
						>
							{currentMonth.format('MMMM YYYY')}
							<Icon symbol="caret-bottom" />
						</Button>
					</div>

					<Button
						disabled={this.isPrevDisabled()}
						monospaced
						onClick={this.handlePrevMonth}
						size="sm"
					>
						<Icon symbol="angle-left" />
					</Button>

					<Button
						disabled={this.isCurrentDisabled()}
						elementClasses="current-day-btn"
						monospaced
						onClick={this.handleCurrentDate}
						size="sm"
					>
						{'•'}
					</Button>

					<Button monospaced onClick={this.handleNextMonth} size="sm">
						<Icon symbol="angle-right" />
					</Button>
				</div>

				<div class="picker-body">
					{
						do {
							if (showMonthSelector) {
								<MonthSelector
									currentMonth={currentMonth}
									minDate={minDate}
									onSelect={this.handleMonthSelect}
								/>;
							} else {
								<Calendar
									currentMonth={currentMonth}
									date={date}
									minDate={minDate}
									onSelect={this.handleSelect}
								/>;
							}
						}
					}
				</div>
			</div>
		);
	}
}

DatePicker.STATE = {
	currentMonth: Config.validator(moment.isMoment).valueFn(() =>
		moment().startOf('month')
	),
	showMonthSelector: Config.bool().value(false)
};

DatePicker.PROPS = {
	date: Config.validator(isDateOrRange),
	disabled: Config.bool().value(false),
	minDate: Config.validator(moment.isMoment),
	onSelect: Config.func().value(noop)
};

export default DatePicker;