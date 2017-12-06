import autobind from 'autobind-decorator';
import FormComponent, {Config} from './Component';
import RadioGroup from '../RadioGroup';

class FormRadioGroup extends FormComponent {
	created() {
		this.state.value = this.props.checked;
	}

	@autobind
	handleChange(newVal) {
		const {onChange} = this.props;

		this.state.value = newVal;

		if (onChange) {
			onChange(newVal);
		}
	}

	syncChecked(newVal) {
		this.state.value = newVal;
	}

	render() {
		const {checked, children, name} = this.props;

		return (
			<RadioGroup
				{...this.otherProps()}
				checked={checked}
				name={name}
				onChange={this.handleChange}
			>
				{children}
			</RadioGroup>
		);
	}
}

FormRadioGroup.PROPS = {
	checked: Config.any(),
	name: Config.string().required(),
	onChange: Config.func()
};

FormRadioGroup.STATE = {
	value: Config.bool()
};

FormRadioGroup.Option = RadioGroup.Option;

export default FormRadioGroup;