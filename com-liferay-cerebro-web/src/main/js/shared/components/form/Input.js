import autobind from 'autobind-decorator';
import Component, {Config} from './Component';
import getCN from 'classnames';
import {isNumber, uniqueId} from 'lodash';

import Input from '../Input';
import Label from './Label';
import validate from '../../util/form-validators';

class FormInput extends Component {
	created() {
		const {initialValue} = this.props;

		if (initialValue) {
			this.state.value = initialValue;
		}

		this._id = uniqueId('FormInput');
	}

	@autobind
	handleBlur() {
		this.validateFormElement();
	}

	@autobind
	handleInput(event) {
		this.state.value = event.target.value;

		if (this.state.show) {
			this.validateFormElement();
		}
	}

	validateFormElement(showErrors = true) {
		const {validator} = this.props;

		let retVal = true;

		if (validator) {
			const result = validate(this.state.value, validator).find(
				item => !item.valid
			);

			const valid = result ? result.valid : true;

			this.setState({
				message: result ? result.message : '',
				show: showErrors,
				valid
			});

			retVal = valid;
		}

		return retVal;
	}

	syncInitialValue(newVal) {
		this.state.value = newVal;
	}

	render() {
		const {
			props: {info, inline, label, width},
			state: {message, show, valid, value}
		} = this;

		const classes = getCN({
			'form-inline-group': inline,
			'has-danger': !valid && show,
			'has-success': valid && show
		});

		const style = isNumber(width)
			? {'flex-basis': `${width}%`, 'flex-grow': 0}
			: undefined;

		return (
			<div class={classes} style={style}>
				{label && (
					<Label
						for={this._id}
						info={info}
						required={this.isRequired()}
					>
						{label}
					</Label>
				)}

				<Input
					{...this.otherProps()}
					id={this._id}
					onBlur={this.handleBlur}
					onInput={this.handleInput}
					value={value}
				/>

				{show && <div class="help-block">{message}</div>}
			</div>
		);
	}
}

FormInput.PROPS = {
	info: Config.string(),
	initialValue: Config.string().value(''),
	inline: Config.bool().value(false),
	label: Config.string(),
	validator: Config.object(),
	width: Config.number()
};

FormInput.STATE = {
	message: Config.value(''),
	show: Config.value(false),
	valid: Config.value(true),
	value: Config.value('')
};

export default FormInput;