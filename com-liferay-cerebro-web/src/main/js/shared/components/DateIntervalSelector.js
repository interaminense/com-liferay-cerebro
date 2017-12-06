import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {mapValues, noop} from 'lodash';

import Button from './Button';
import DatePicker from './date-picker';
import Icon from './Icon';
import Overlay from './Overlay';
import RadioGroup from './RadioGroup';
import SearchableSelect from './SearchableSelect';

export const RANGE = {
	CUSTOM: 'CUSTOM',
	LAST_MONTH: 'LAST_MONTH',
	LAST_THREE_MONTHS: 'LAST_THREE_MONTHS',
	LAST_WEEK: 'LAST_WEEK',
	LAST_YEAR: 'LAST_YEAR'
};

export const INTERVAL = {
	DAILY: 'DAILY',
	MONTHLY: 'MONTHLY',
	QUARTERLY: 'QUARTERLY',
	WEEKLY: 'WEEKLY',
	YEARLY: 'YEARLY'
};

const RANGE_LANG_MAP = {
	[RANGE.CUSTOM]: Liferay.Language.get('custom'),
	[RANGE.LAST_MONTH]: Liferay.Language.get('last-month'),
	[RANGE.LAST_THREE_MONTHS]: Liferay.Language.get('last-three-months'),
	[RANGE.LAST_WEEK]: Liferay.Language.get('last-week'),
	[RANGE.LAST_YEAR]: Liferay.Language.get('last-year')
};

const INTERVAL_LANG_MAP = {
	[INTERVAL.DAILY]: Liferay.Language.get('daily'),
	[INTERVAL.MONTHLY]: Liferay.Language.get('monthly'),
	[INTERVAL.QUARTERLY]: Liferay.Language.get('quarterly'),
	[INTERVAL.WEEKLY]: Liferay.Language.get('weekly'),
	[INTERVAL.YEARLY]: Liferay.Language.get('yearly')
};

const INTERVAL_OPTIONS = [
	INTERVAL.DAILY,
	INTERVAL.WEEKLY,
	INTERVAL.MONTHLY,
	INTERVAL.QUARTERLY,
	INTERVAL.YEARLY
];

const RANGE_OPTIONS = [
	RANGE.LAST_WEEK,
	RANGE.LAST_MONTH,
	RANGE.LAST_THREE_MONTHS,
	RANGE.LAST_YEAR,
	RANGE.CUSTOM
].map(value => ({
	name: RANGE_LANG_MAP[value],
	value
}));

class DateIntervalSelector extends Component {
	getIntervalLabel() {
		const {interval} = this.props;

		return INTERVAL_LANG_MAP[interval];
	}

	getRangeLabel() {
		const {buttonDateFormat, range, rangeType} = this.props;

		if (rangeType === RANGE.CUSTOM) {
			const {start, end} = mapValues(
				range,
				value => (value ? value.format(buttonDateFormat) : '****')
			);

			return `${start} - ${end}`;
		}

		return RANGE_LANG_MAP[rangeType];
	}

	@autobind
	handleRangeTypeSelect(item) {
		this.props.onRangeTypeChange(item.value);
	}

	@autobind
	handleToggleActive() {
		this.state.active = !this.state.active;
	}

	render() {
		const {
			props: {
				interval,
				onIntervalChange,
				onRangeChange,
				range,
				rangeType
			},
			state: {active}
		} = this;

		const classes = 'date-interval-selector-root';

		return (
			<Overlay
				active={active}
				containerClass={classes}
				onOutsideClick={this.handleToggleActive}
			>
				<Button
					display="unstyled"
					elementClasses={classes}
					onClick={this.handleToggleActive}
				>
					<div class="label-container">
						{this.getRangeLabel()}

						<span class="button-label-separator">{'|'}</span>

						<span class="interval-label">
							{this.getIntervalLabel()}
						</span>
					</div>

					<div class="icon-container">
						<Icon symbol="calendar" />
					</div>
				</Button>

				<div class="date-interval-selector-content">
					<div class="interval-container">
						<div class="form-group">
							<label>{Liferay.Language.get('date-range')}</label>

							<SearchableSelect
								buttonProps={{
									size: 'sm'
								}}
								items={RANGE_OPTIONS}
								onSelect={this.handleRangeTypeSelect}
								selectedItem={{
									name: RANGE_LANG_MAP[rangeType],
									value: rangeType
								}}
								showSearch={false}
							/>
						</div>

						<div class="form-group">
							<label>
								{Liferay.Language.get('time-interval')}
							</label>

							<RadioGroup
								checked={interval}
								onChange={onIntervalChange}
							>
								{INTERVAL_OPTIONS.map(value => (
									<RadioGroup.Option
										key={value}
										label={INTERVAL_LANG_MAP[value]}
										value={value}
									/>
								))}
							</RadioGroup>
						</div>
					</div>

					<div class="date-picker-container">
						<DatePicker
							date={range}
							disabled={rangeType !== RANGE.CUSTOM}
							onSelect={onRangeChange}
						/>
					</div>
				</div>
			</Overlay>
		);
	}
}

DateIntervalSelector.STATE = {
	active: Config.bool().value(false)
};

DateIntervalSelector.PROPS = {
	buttonDateFormat: Config.string().value('MMM D, YYYY'),
	interval: Config.oneOf(Object.values(INTERVAL)).value(INTERVAL.LAST_MONTH),
	onIntervalChange: Config.func().value(noop),
	onRangeChange: Config.func().value(noop),
	onRangeTypeChange: Config.func().value(noop),
	range: Config.object(),
	rangeType: Config.oneOf(Object.values(RANGE)).value(RANGE.DAILY)
};

export default DateIntervalSelector;