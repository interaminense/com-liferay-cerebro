import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import moment from 'moment';
import {noop, range} from 'lodash';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

class Month extends Component {
	@autobind
	handleClick() {
		const {onClick, value} = this.props;

		onClick(value);
	}

	render() {
		const {active, label} = this.props;

		return (
			<div class="month-root">
				<Button
					display="unstyled"
					elementClasses={getCN({active})}
					onClick={this.handleClick}
				>
					{label}
				</Button>
			</div>
		);
	}
}

Month.PROPS = {
	active: Config.bool().value(false),
	label: Config.string().required(),
	onClick: Config.func().required(),
	value: Config.number().required()
};

class Year extends Component {
	@autobind
	handleClick(month) {
		const {onSelect, value} = this.props;

		onSelect({month, year: value});
	}

	@autobind
	handleToggleExpand() {
		this.state.expanded = !this.state.expanded;
	}

	render() {
		const {props: {currentMonth, value}, state: {expanded}} = this;

		const classes = getCN('year-root', {expanded});

		return (
			<div class={classes}>
				<div class="year-header" onClick={this.handleToggleExpand}>
					{value}

					<Icon symbol={expanded ? 'caret-bottom' : 'caret-top'} />
				</div>

				{expanded && (
					<div class="year-body">
						{moment
							.monthsShort()
							.map((month, i) => (
								<Month
									active={
										currentMonth.year() === value &&
										currentMonth.month() === i
									}
									key={i}
									label={month}
									onClick={this.handleClick}
									value={i}
								/>
							))}
					</div>
				)}
			</div>
		);
	}
}

Year.STATE = {
	expanded: Config.bool().value(true)
};

Year.PROPS = {
	currentMonth: Config.validator(moment.isMoment).required(),
	onSelect: Config.func().value(noop),
	value: Config.number().required()
};

class MonthSelector extends Component {
	render() {
		const {minDate, currentMonth, onSelect} = this.props;

		const currentYear = moment().year();

		const startYear = minDate.year();

		return (
			<div class="month-selector-root">
				{range(
					currentYear,
					Math.min(startYear, currentYear - 1),
					-1
				).map(year => (
					<Year
						currentMonth={currentMonth}
						key={year}
						onSelect={onSelect}
						value={year}
					/>
				))}
			</div>
		);
	}
}

MonthSelector.PROPS = {
	currentMonth: Config.validator(moment.isMoment).required(),
	minDate: Config.validator(moment.isMoment).valueFn(moment),
	onSelect: Config.func().value(noop)
};

export default MonthSelector;