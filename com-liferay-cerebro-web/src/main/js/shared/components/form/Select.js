import autobind from 'autobind-decorator';
import Component, {Config} from './Component';
import getCN from 'classnames';
import {noop, uniqueId} from 'lodash';

import Label from './Label';
import Select from '../Select';
import validate, {checkRequired} from '../../util/form-validators';

class FormSelect extends Component {
	created() {
		this._id = uniqueId('FormSelect');
	}

	attached() {
		super.attached();

		this.props.children.forEach(child => {
			const {selected, value} = child.props;

			if (selected) {
				this.state.value = value;
			}
		});
	}

	@autobind
	handleChange(event) {
		this.state.value = event.target.value;

		if (this.state.show) {
			this.validateFormElement();
		}

		this.props.onChange(event.target.value);
	}

	isRequired() {
		const {validator} = this.props;

		return validator && checkRequired(validator);
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

	render() {
		const {
			props: {children, info, inline, label},
			state: {message, show, valid, value}
		} = this;

		const classes = getCN({
			'form-inline-group': inline,
			'has-danger': !valid,
			'has-success': valid && show
		});

		return (
			<div class={classes}>
				{label && (
					<Label
						for={this._id}
						info={info}
						required={this.isRequired()}
					>
						{label}
					</Label>
				)}

				<Select
					{...this.otherProps()}
					id={this._id}
					onChange={this.handleChange}
					value={value}
				>
					{children}
				</Select>

				{show && <div class="help-block">{message}</div>}
			</div>
		);
	}
}

FormSelect.PROPS = {
	info: Config.string(),
	initialValue: Config.string().value(''),
	inline: Config.bool().value(false),
	label: Config.string(),
	onChange: Config.func().value(noop),
	validator: Config.object()
};

FormSelect.STATE = {
	message: Config.value(''),
	show: Config.value(false),
	valid: Config.value(true),
	value: Config.value('')
};

FormSelect.Item = Select.Item;

export default FormSelect;