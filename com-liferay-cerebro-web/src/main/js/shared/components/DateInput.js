import autobind from 'autobind-decorator';
import moment from 'moment';
import {noop} from 'lodash';

import Button from './Button';
import Component, {Config} from 'metal-jsx';
import DatePicker from './date-picker';
import Icon from './Icon';
import Input from './Input';
import Overlay from './Overlay';
import {FORMAT} from 'shared/util/date';

class DateInput extends Component {
	@autobind
	handleClick(event) {
		event.preventDefault();

		this.state.active = true;
	}

	@autobind
	handleDateSelect(value) {
		const {onChange, format} = this.props;

		onChange(value.format(format));

		this.state.active = false;
	}

	@autobind
	handleOutsideClick() {
		this.state.active = false;
	}

	render() {
		const {props: {format, value}, state: {active}} = this;

		const date = moment(value, format);

		return (
			<Overlay
				active={active}
				containerClass="date-input-root"
				onOutsideClick={this.handleOutsideClick}
			>
				<Input.Group inset>
					<Input.GroupInput>
						<Input
							{...this.otherProps()}
							onClick={this.handleClick}
							value={value}
						/>
					</Input.GroupInput>

					<Input.Inset>
						<Button display="unstyled" onClick={this.handleClick}>
							<Icon symbol="calendar" />
						</Button>
					</Input.Inset>
				</Input.Group>

				<DatePicker
					date={date.isValid() ? date : null}
					onSelect={this.handleDateSelect}
				/>
			</Overlay>
		);
	}
}

DateInput.STATE = {
	active: Config.bool().value(false)
};

DateInput.PROPS = {
	format: Config.string().value(FORMAT),
	onChange: Config.func().value(noop),
	value: Config.string()
};

export default DateInput;