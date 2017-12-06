import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import DateIntervalSelector, {
	RANGE,
	INTERVAL
} from 'shared/components/DateIntervalSelector';

class DateIntervalSelectorKit extends Component {
	@autobind
	handleIntervalChange(interval) {
		this.state.interval = interval;
	}

	@autobind
	handleRangeChange(range) {
		this.state.range = range;
	}

	@autobind
	handleRangeTypeChange(rangeType) {
		this.state.rangeType = rangeType;
	}

	render() {
		const {interval, range, rangeType} = this.state;

		return (
			<div>
				<DateIntervalSelector
					interval={interval}
					onIntervalChange={this.handleIntervalChange}
					onRangeChange={this.handleRangeChange}
					onRangeTypeChange={this.handleRangeTypeChange}
					range={range}
					rangeType={rangeType}
				/>
			</div>
		);
	}
}

DateIntervalSelectorKit.STATE = {
	interval: Config.string().value(INTERVAL.DAILY),
	range: Config.object().value({end: null, start: null}),
	rangeType: Config.string().value(RANGE.LAST_MONTH)
};

export default DateIntervalSelectorKit;