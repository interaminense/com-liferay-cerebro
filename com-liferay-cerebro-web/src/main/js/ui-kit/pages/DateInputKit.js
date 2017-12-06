import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import DateInput from 'shared/components/DateInput';
import Row from '../components/Row';

class DateInputKit extends Component {
	@autobind
	handleChange(value) {
		this.state.value = value;
	}

	render() {
		return (
			<div>
				<Row>
					<DateInput
						onChange={this.handleChange}
						placeholder="Pick a date..."
						value={this.state.value}
					/>
				</Row>
			</div>
		);
	}
}

DateInputKit.STATE = {
	value: Config.any()
};

export default DateInputKit;