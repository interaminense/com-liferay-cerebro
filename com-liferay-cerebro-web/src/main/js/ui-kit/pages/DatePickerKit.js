import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import moment from 'moment';

import DatePicker from 'shared/components/date-picker';
import Row from '../components/Row';

class DatePickerKit extends Component {
	@autobind
	handleSelect(date) {
		this.state.date = date;
	}

	@autobind
	handleSelectRange(range) {
		this.state.range = range;
	}

	render() {
		const {date, range} = this.state;

		return (
			<div>
				<Row>
					<DatePicker
						date={range}
						onSelect={this.handleSelectRange}
					/>
				</Row>

				<Row>
					<DatePicker date={date} onSelect={this.handleSelect} />
				</Row>

				<Row>
					<DatePicker
						date={date}
						minDate={moment()}
						onSelect={this.handleSelect}
					/>
				</Row>

				<Row>
					<DatePicker disabled />
				</Row>
			</div>
		);
	}
}

DatePickerKit.STATE = {
	date: Config.validator(moment.isMoment).valueFn(moment),
	range: Config.object().value({end: null, start: null})
};

export default DatePickerKit;